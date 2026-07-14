// ============================================================
// RegVarsity — Shared content types
// ============================================================

export interface KeyTakeaway {
  text: string;
}

export interface SubSection {
  id: string;
  heading: string;
  content: string; // markdown-compatible plain text
}

export interface QuizQuestion {
  id: string; // e.g. "prin-1-q1" (chapter Quick Check) or "prin-test-q1" (module test)
  question: string;
  options: string[];
  correctIndex: number;
  explanation: string;
}

export interface ModuleTest {
  passMarkPercent: number; // pass threshold; 70 across the site
  questions: QuizQuestion[]; // 6-8 questions drawn from the whole module
}

export interface Chapter {
  id: string;
  number: number;
  title: string;
  // "test" is reserved for the module test route — never use it as a chapter slug
  slug: string;
  readingTimeMinutes: number;
  intro: string;
  subSections: SubSection[];
  keyTakeaways: KeyTakeaway[];
  quizQuestions?: QuizQuestion[]; // 2-3 question Quick Check at the end of the chapter
}

export interface Module {
  id: string;
  number: number;
  title: string;
  slug: string;
  block: string;
  sourceCode: string; // e.g. "PRIN", "COBS"
  colour: string; // tailwind bg colour token
  accentColour: string; // hex/oklch
  description: string;
  whoItAppliesTo: string;
  chapters: Chapter[];
  moduleTest?: ModuleTest;
  sourceUrl?: string; // overrides the FCA Handbook link for non-Handbook sources (EUR-Lex, ICO)
  sourceLabel?: string; // display label for sourceUrl
  lastReviewed?: string; // e.g. "July 2026"
}
