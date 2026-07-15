// ============================================================
// RegVarsity - Module & Chapter Data
// Varsity-style learning content for UK and EU financial regulation
// ============================================================

export type {
  KeyTakeaway,
  SubSection,
  QuizQuestion,
  ModuleTest,
  Chapter,
  Module,
} from "./types";
import type { Chapter, Module } from "./types";

import { modulePRIN } from "./prin";
import { moduleSYSC } from "./sysc";
import { moduleCOBS } from "./cobs";
import { moduleAML } from "./aml";
import { moduleMiFID } from "./mifid";
import { moduleCrypto } from "./crypto";
import { moduleDISP } from "./disp";
import { moduleMAR } from "./mar";
import { moduleESG } from "./esg";
import { moduleCASS } from "./cass";
import { moduleICOBS } from "./icobs";
import { moduleMCOB } from "./mcob";
import { moduleCONC } from "./conc";
import { moduleDTR } from "./dtr";
import { moduleFEES } from "./fees";
import { moduleMiCA } from "./mica";
import { moduleUKGDPR } from "./ukgdpr";

export const ALL_MODULES: Module[] = [
  modulePRIN,
  moduleSYSC,
  moduleCOBS,
  moduleAML,
  moduleMiFID,
  moduleCrypto,
  moduleDISP,
  moduleMAR,
  moduleESG,
  moduleCASS,
  moduleICOBS,
  moduleMCOB,
  moduleCONC,
  moduleDTR,
  moduleFEES,
  moduleMiCA,
  moduleUKGDPR,
];

export function getModuleBySlug(slug: string): Module | undefined {
  return ALL_MODULES.find(m => m.slug === slug);
}

export function getChapterBySlug(
  moduleSlug: string,
  chapterSlug: string
):
  | {
      module: Module;
      chapter: Chapter;
      prevChapter: Chapter | null;
      nextChapter: Chapter | null;
    }
  | undefined {
  const mod = getModuleBySlug(moduleSlug);
  if (!mod) return undefined;
  const idx = mod.chapters.findIndex(c => c.slug === chapterSlug);
  if (idx === -1) return undefined;
  return {
    module: mod,
    chapter: mod.chapters[idx],
    prevChapter: idx > 0 ? mod.chapters[idx - 1] : null,
    nextChapter: idx < mod.chapters.length - 1 ? mod.chapters[idx + 1] : null,
  };
}
