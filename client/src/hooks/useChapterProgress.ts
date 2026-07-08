// useChapterProgress.ts
// Tracks which chapters a user has completed, stored in localStorage.
// No login required — purely client-side.

import { useCallback, useEffect, useState } from "react";

const STORAGE_KEY = "regvarsity_chapter_progress";

interface ProgressState {
  completedChapters: string[]; // e.g. ["prin-1", "prin-2", "aml-1"]
  lastVisited: Record<string, string>; // moduleSlug -> chapterSlug
}

function loadProgress(): ProgressState {
  try {
    const raw = localStorage.getItem(STORAGE_KEY);
    if (!raw) return { completedChapters: [], lastVisited: {} };
    return JSON.parse(raw) as ProgressState;
  } catch {
    return { completedChapters: [], lastVisited: {} };
  }
}

function saveProgress(state: ProgressState): void {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(state));
  } catch {
    // Silently fail if localStorage is unavailable
  }
}

export function useChapterProgress() {
  const [progress, setProgress] = useState<ProgressState>(() => loadProgress());

  // Sync to localStorage whenever progress changes
  useEffect(() => {
    saveProgress(progress);
  }, [progress]);

  const markChapterComplete = useCallback((chapterId: string, moduleSlug: string, chapterSlug: string) => {
    setProgress((prev) => {
      const alreadyDone = prev.completedChapters.includes(chapterId);
      return {
        completedChapters: alreadyDone ? prev.completedChapters : [...prev.completedChapters, chapterId],
        lastVisited: { ...prev.lastVisited, [moduleSlug]: chapterSlug },
      };
    });
  }, []);

  const isChapterComplete = useCallback(
    (chapterId: string) => progress.completedChapters.includes(chapterId),
    [progress.completedChapters]
  );

  const getModuleProgress = useCallback(
    (moduleId: string, totalChapters: number) => {
      const completed = progress.completedChapters.filter((id) => id.startsWith(moduleId + "-")).length;
      return { completed, total: totalChapters, percent: totalChapters > 0 ? Math.round((completed / totalChapters) * 100) : 0 };
    },
    [progress.completedChapters]
  );

  const getLastVisited = useCallback(
    (moduleSlug: string) => progress.lastVisited[moduleSlug] ?? null,
    [progress.lastVisited]
  );

  const getTotalProgress = useCallback(() => {
    return progress.completedChapters.length;
  }, [progress.completedChapters]);

  const resetProgress = useCallback(() => {
    setProgress({ completedChapters: [], lastVisited: {} });
  }, []);

  return {
    progress,
    markChapterComplete,
    isChapterComplete,
    getModuleProgress,
    getLastVisited,
    getTotalProgress,
    resetProgress,
  };
}
