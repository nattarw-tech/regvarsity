// ============================================================
// useProgress - single source of truth for learner progress.
// One localStorage key, shared live across all pages (and tabs)
// via useSyncExternalStore. Replaces the old per-module keys
// (regvarsity_progress_<moduleId>), which are migrated on first load.
// ============================================================

import { useSyncExternalStore } from "react";
import { ALL_MODULES, type Chapter, type Module } from "@/data/modules";

const STORAGE_KEY = "regvarsity_progress_v2";

export interface QuickCheckResult {
  correct: number;
  total: number;
  completedAt: string;
}

export interface ModuleTestResult {
  bestScorePercent: number;
  attempts: number;
  passed: boolean;
  passedAt?: string;
}

export interface ProgressState {
  version: 2;
  /** chapterId -> ISO date first marked read */
  chaptersRead: Record<string, string>;
  /** chapterId -> best Quick Check result */
  quickChecks: Record<string, QuickCheckResult>;
  /** moduleId -> test attempts summary */
  moduleTests: Record<string, ModuleTestResult>;
  /** moduleId -> badge earned */
  badges: Record<string, { earnedAt: string }>;
  /** moduleSlug -> chapterSlug of the most recently visited chapter */
  lastVisited: Record<string, string>;
}

export interface ModuleProgress {
  readCount: number;
  totalChapters: number;
  percent: number;
  quickChecksDone: number;
  testPassed: boolean;
  bestScorePercent: number | null;
  badgeEarned: boolean;
  /** all chapters read AND module test passed */
  complete: boolean;
}

function emptyState(): ProgressState {
  return {
    version: 2,
    chaptersRead: {},
    quickChecks: {},
    moduleTests: {},
    badges: {},
    lastVisited: {},
  };
}

/** Pull chapter ids out of the old regvarsity_progress_<moduleId> keys. */
function migrateLegacy(): ProgressState {
  const state = emptyState();
  const now = new Date().toISOString();
  for (const mod of ALL_MODULES) {
    try {
      const raw = localStorage.getItem(`regvarsity_progress_${mod.id}`);
      if (!raw) continue;
      const ids: unknown = JSON.parse(raw);
      if (Array.isArray(ids)) {
        for (const id of ids) {
          if (typeof id === "string") state.chaptersRead[id] = now;
        }
      }
    } catch {
      // ignore unreadable legacy keys
    }
  }
  return state;
}

let state: ProgressState | null = null;
const listeners = new Set<() => void>();

function persist(next: ProgressState) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(next));
  } catch {
    // storage full or unavailable - keep going with in-memory state
  }
}

function load(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (raw) {
      const parsed = JSON.parse(raw);
      if (parsed && parsed.version === 2) {
        return { ...emptyState(), ...parsed };
      }
    }
  } catch {
    // fall through to migration
  }
  const migrated = migrateLegacy();
  persist(migrated); // one-time: write v2 so migration never runs again
  return migrated;
}

function getSnapshot(): ProgressState {
  if (state === null) state = load();
  return state;
}

function setState(next: ProgressState) {
  state = next;
  persist(next);
  listeners.forEach((l) => l());
}

function subscribe(listener: () => void): () => void {
  listeners.add(listener);
  return () => listeners.delete(listener);
}

// Keep tabs in sync: another tab writing the key reloads our snapshot.
if (typeof window !== "undefined") {
  window.addEventListener("storage", (e) => {
    if (e.key === STORAGE_KEY) {
      state = load();
      listeners.forEach((l) => l());
    }
  });
}

// ── Mutations (usable inside and outside React) ──────────────

export function markChapterRead(module: Module, chapter: Chapter) {
  const s = getSnapshot();
  if (s.chaptersRead[chapter.id]) return;
  setState({
    ...s,
    chaptersRead: { ...s.chaptersRead, [chapter.id]: new Date().toISOString() },
  });
}

export function recordVisit(module: Module, chapter: Chapter) {
  const s = getSnapshot();
  if (s.lastVisited[module.slug] === chapter.slug) return;
  setState({
    ...s,
    lastVisited: { ...s.lastVisited, [module.slug]: chapter.slug },
  });
}

export function recordQuickCheck(chapterId: string, correct: number, total: number) {
  const s = getSnapshot();
  const prev = s.quickChecks[chapterId];
  // keep the best attempt
  if (prev && prev.correct >= correct && prev.total === total) return;
  setState({
    ...s,
    quickChecks: {
      ...s.quickChecks,
      [chapterId]: { correct, total, completedAt: new Date().toISOString() },
    },
  });
}

export function recordTestAttempt(
  module: Module,
  scorePercent: number,
): { passed: boolean; newlyPassed: boolean } {
  const s = getSnapshot();
  const passMark = module.moduleTest?.passMarkPercent ?? 70;
  const prev = s.moduleTests[module.id];
  const passedNow = scorePercent >= passMark;
  const passed = (prev?.passed ?? false) || passedNow;
  const newlyPassed = passedNow && !(prev?.passed ?? false);
  const now = new Date().toISOString();
  const next: ProgressState = {
    ...s,
    moduleTests: {
      ...s.moduleTests,
      [module.id]: {
        bestScorePercent: Math.max(prev?.bestScorePercent ?? 0, scorePercent),
        attempts: (prev?.attempts ?? 0) + 1,
        passed,
        passedAt: prev?.passedAt ?? (passedNow ? now : undefined),
      },
    },
    badges: newlyPassed ? { ...s.badges, [module.id]: { earnedAt: now } } : s.badges,
  };
  setState(next);
  return { passed, newlyPassed };
}

export function resetProgress() {
  setState(emptyState());
  // clear legacy keys too so migration cannot resurrect old ticks
  for (const mod of ALL_MODULES) {
    try {
      localStorage.removeItem(`regvarsity_progress_${mod.id}`);
    } catch {}
  }
}

// ── Derived reads ─────────────────────────────────────────────

export function computeModuleProgress(s: ProgressState, module: Module): ModuleProgress {
  const totalChapters = module.chapters.length;
  const readCount = module.chapters.filter((c) => s.chaptersRead[c.id]).length;
  const quickChecksDone = module.chapters.filter((c) => s.quickChecks[c.id]).length;
  const test = s.moduleTests[module.id];
  const testPassed = test?.passed ?? false;
  return {
    readCount,
    totalChapters,
    percent: totalChapters > 0 ? Math.round((readCount / totalChapters) * 100) : 0,
    quickChecksDone,
    testPassed,
    bestScorePercent: test ? test.bestScorePercent : null,
    badgeEarned: Boolean(s.badges[module.id]),
    complete: totalChapters > 0 && readCount === totalChapters && testPassed,
  };
}

export function computeOverallStats(s: ProgressState) {
  const totalChapters = ALL_MODULES.reduce((sum, m) => sum + m.chapters.length, 0);
  const chaptersRead = ALL_MODULES.reduce(
    (sum, m) => sum + m.chapters.filter((c) => s.chaptersRead[c.id]).length,
    0,
  );
  const quickChecksDone = Object.keys(s.quickChecks).length;
  const testsPassed = ALL_MODULES.filter((m) => s.moduleTests[m.id]?.passed).length;
  const badgesEarned = ALL_MODULES.filter((m) => s.badges[m.id]).length;
  return { totalChapters, chaptersRead, quickChecksDone, testsPassed, badgesEarned };
}

// ── Hook ──────────────────────────────────────────────────────

export function useProgress() {
  const s = useSyncExternalStore(subscribe, getSnapshot);
  return {
    state: s,
    isChapterRead: (chapterId: string) => Boolean(s.chaptersRead[chapterId]),
    getQuickCheck: (chapterId: string) => s.quickChecks[chapterId],
    getModuleProgress: (module: Module) => computeModuleProgress(s, module),
    getModuleTest: (moduleId: string) => s.moduleTests[moduleId],
    getLastVisited: (moduleSlug: string) => s.lastVisited[moduleSlug],
    getOverallStats: () => computeOverallStats(s),
    markChapterRead,
    recordVisit,
    recordQuickCheck,
    recordTestAttempt,
    resetProgress,
  };
}
