import { useState, useEffect, useCallback } from "react";
import { useParams } from "wouter";
import PageLayout from "@/components/PageLayout";
import ExerciseResults from "@/components/ExerciseResults";
import { exercises, topicMeta, Exercise } from "@/data/exercises";
import { Button } from "@/components/ui/button";
import { Progress } from "@/components/ui/progress";
import {
  CheckCircle2,
  XCircle,
  ChevronRight,
  RotateCcw,
  Trophy,
  BookOpen,
  Filter,
  ArrowLeft,
} from "lucide-react";
import { Link } from "wouter";

type TopicKey = "fca" | "aml" | "mifid" | "crypto";
type ProgressStore = Record<string, { answered: boolean; correct: boolean }>;

const STORAGE_KEY = "regvarsity-progress";

function loadProgress(): ProgressStore {
  try {
    return JSON.parse(localStorage.getItem(STORAGE_KEY) || "{}");
  } catch {
    return {};
  }
}

function saveProgress(p: ProgressStore) {
  try {
    localStorage.setItem(STORAGE_KEY, JSON.stringify(p));
  } catch {}
}

const difficultyColors: Record<string, { bg: string; text: string }> = {
  beginner: { bg: "oklch(0.55 0.14 155 / 0.12)", text: "oklch(0.35 0.14 155)" },
  intermediate: {
    bg: "oklch(0.78 0.14 85 / 0.15)",
    text: "oklch(0.45 0.14 75)",
  },
  advanced: { bg: "oklch(0.65 0.18 290 / 0.1)", text: "oklch(0.4 0.18 290)" },
};

function ExerciseCard({
  exercise,
  progress,
  onAnswer,
}: {
  exercise: Exercise;
  progress: ProgressStore;
  onAnswer: (exerciseId: string, optionId: string) => void;
}) {
  const [selected, setSelected] = useState<string | null>(null);
  const [revealed, setRevealed] = useState(false);
  const stored = progress[exercise.id];
  const meta = topicMeta[exercise.topic];
  const diff = difficultyColors[exercise.difficulty];

  const handleSelect = (optionId: string) => {
    if (revealed) return;
    setSelected(optionId);
  };

  const handleReveal = () => {
    if (!selected) return;
    setRevealed(true);
    onAnswer(exercise.id, selected);
  };

  const isCorrect = selected === exercise.correctId;

  const getOptionStyle = (optionId: string) => {
    if (!revealed) {
      return {
        borderColor: selected === optionId ? meta.color : "var(--border)",
        backgroundColor:
          selected === optionId ? `${meta.color}10` : "transparent",
        cursor: "pointer",
      };
    }
    if (optionId === exercise.correctId) {
      return {
        borderColor: "oklch(0.55 0.14 155)",
        backgroundColor: "oklch(0.55 0.14 155 / 0.1)",
        cursor: "default",
      };
    }
    if (optionId === selected && selected !== exercise.correctId) {
      return {
        borderColor: "oklch(0.55 0.22 25)",
        backgroundColor: "oklch(0.55 0.22 25 / 0.08)",
        cursor: "default",
      };
    }
    return {
      borderColor: "var(--border)",
      backgroundColor: "transparent",
      cursor: "default",
      opacity: 0.5,
    };
  };

  return (
    <div className="card-base p-6 md:p-8">
      {/* Header */}
      <div className="flex flex-wrap items-center gap-2 mb-5">
        <span
          className="badge-pill"
          style={{ backgroundColor: meta.bg, color: meta.color }}
        >
          {meta.label}
        </span>
        <span
          className="badge-pill"
          style={{ backgroundColor: diff.bg, color: diff.text }}
        >
          {exercise.difficulty}
        </span>
        <div className="flex flex-wrap gap-1 ml-auto">
          {exercise.tags.slice(0, 2).map(tag => (
            <span
              key={tag}
              className="text-xs px-2 py-0.5 rounded-full"
              style={{
                backgroundColor: "var(--surface-3)",
                color: "var(--muted-foreground)",
              }}
            >
              {tag}
            </span>
          ))}
        </div>
      </div>

      {/* Scenario */}
      <div
        className="p-4 rounded-xl mb-5 border-l-4"
        style={{
          backgroundColor: "var(--surface-2)",
          borderLeftColor: meta.color,
        }}
      >
        <p
          className="text-xs font-semibold uppercase tracking-wider mb-2"
          style={{ color: meta.color }}
        >
          Scenario
        </p>
        <p
          className="text-sm leading-relaxed"
          style={{ color: "var(--foreground)" }}
        >
          {exercise.scenario}
        </p>
      </div>

      {/* Question */}
      <h3
        className="font-bold text-lg mb-4"
        style={{ color: "var(--foreground)" }}
      >
        {exercise.question}
      </h3>

      {/* Options */}
      <div className="space-y-3 mb-5">
        {exercise.options.map(option => (
          <button
            key={option.id}
            onClick={() => handleSelect(option.id)}
            className="w-full text-left p-4 rounded-xl border-2 transition-all"
            style={getOptionStyle(option.id)}
            disabled={revealed}
            aria-pressed={selected === option.id}
          >
            <div className="flex items-start gap-3">
              <span
                className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full text-xs font-bold mt-0.5"
                style={{
                  backgroundColor:
                    revealed && option.id === exercise.correctId
                      ? "oklch(0.55 0.14 155)"
                      : revealed &&
                          option.id === selected &&
                          selected !== exercise.correctId
                        ? "oklch(0.55 0.22 25)"
                        : selected === option.id
                          ? meta.color
                          : "var(--surface-3)",
                  color:
                    (revealed && option.id === exercise.correctId) ||
                    (revealed &&
                      option.id === selected &&
                      selected !== exercise.correctId) ||
                    selected === option.id
                      ? "white"
                      : "var(--muted-foreground)",
                }}
              >
                {option.id.toUpperCase()}
              </span>
              <span
                className="text-sm leading-relaxed"
                style={{ color: "var(--foreground)" }}
              >
                {option.text}
              </span>
              {revealed && option.id === exercise.correctId && (
                <CheckCircle2
                  size={18}
                  className="shrink-0 ml-auto mt-0.5"
                  style={{ color: "oklch(0.55 0.14 155)" }}
                />
              )}
              {revealed &&
                option.id === selected &&
                selected !== exercise.correctId && (
                  <XCircle
                    size={18}
                    className="shrink-0 ml-auto mt-0.5"
                    style={{ color: "oklch(0.55 0.22 25)" }}
                  />
                )}
            </div>
          </button>
        ))}
      </div>

      {/* Submit / Explanation */}
      {!revealed ? (
        <Button
          onClick={handleReveal}
          disabled={!selected}
          className="w-full gap-2"
          style={{ backgroundColor: meta.color, color: "white" }}
        >
          Submit Answer
          <ChevronRight size={16} />
        </Button>
      ) : (
        <div className="space-y-4">
          {/* Result banner */}
          <div
            className="flex items-center gap-3 p-3 rounded-xl"
            style={{
              backgroundColor: isCorrect
                ? "oklch(0.55 0.14 155 / 0.1)"
                : "oklch(0.55 0.22 25 / 0.08)",
            }}
          >
            {isCorrect ? (
              <CheckCircle2
                size={20}
                style={{ color: "oklch(0.55 0.14 155)" }}
              />
            ) : (
              <XCircle size={20} style={{ color: "oklch(0.55 0.22 25)" }} />
            )}
            <span
              className="font-semibold text-sm"
              style={{
                color: isCorrect
                  ? "oklch(0.35 0.14 155)"
                  : "oklch(0.45 0.22 25)",
              }}
            >
              {isCorrect
                ? "Correct! Well done."
                : `Incorrect, the correct answer is (${exercise.correctId.toUpperCase()}).`}
            </span>
          </div>

          {/* Explanation */}
          <div
            className="p-4 rounded-xl"
            style={{ backgroundColor: "var(--surface-2)" }}
          >
            <p
              className="text-xs font-semibold uppercase tracking-wider mb-2"
              style={{ color: "var(--muted-foreground)" }}
            >
              Explanation
            </p>
            <p
              className="text-sm leading-relaxed"
              style={{ color: "var(--foreground)" }}
            >
              {exercise.explanation}
            </p>
          </div>

          {/* Why wrong */}
          {!isCorrect && selected && exercise.wrongExplanations[selected] && (
            <div
              className="p-4 rounded-xl border-l-4"
              style={{
                backgroundColor: "oklch(0.55 0.22 25 / 0.05)",
                borderLeftColor: "oklch(0.55 0.22 25)",
              }}
            >
              <p
                className="text-xs font-semibold uppercase tracking-wider mb-1"
                style={{ color: "oklch(0.45 0.22 25)" }}
              >
                Why option ({selected?.toUpperCase()}) is wrong
              </p>
              <p
                className="text-sm leading-relaxed"
                style={{ color: "var(--foreground)" }}
              >
                {exercise.wrongExplanations[selected]}
              </p>
            </div>
          )}
        </div>
      )}
    </div>
  );
}

function ProgressSummary({ progress }: { progress: ProgressStore }) {
  const topics = Object.keys(topicMeta) as TopicKey[];

  return (
    <div className="card-base p-6 mb-8">
      <div className="flex items-center gap-2 mb-4">
        <Trophy size={20} style={{ color: "var(--brand-gold)" }} />
        <h2
          className="font-bold text-lg"
          style={{ color: "var(--foreground)" }}
        >
          Your Progress
        </h2>
      </div>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {topics.map(topic => {
          const topicExercises = exercises.filter(e => e.topic === topic);
          const answered = topicExercises.filter(
            e => progress[e.id]?.answered
          ).length;
          const correct = topicExercises.filter(
            e => progress[e.id]?.correct
          ).length;
          const meta = topicMeta[topic];
          const pct =
            topicExercises.length > 0
              ? Math.round((answered / topicExercises.length) * 100)
              : 0;
          return (
            <div key={topic} className="text-center">
              <div
                className="text-xs font-semibold mb-1"
                style={{ color: meta.color }}
              >
                {meta.label}
              </div>
              <Progress value={pct} className="h-2 mb-1" />
              <div
                className="text-xs"
                style={{ color: "var(--muted-foreground)" }}
              >
                {answered}/{topicExercises.length} done · {correct} correct
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default function ExercisesPage() {
  const params = useParams<{ topic?: string }>();
  const topicParam = params.topic as TopicKey | undefined;

  const [progress, setProgress] = useState<ProgressStore>(loadProgress);
  const [activeTopic, setActiveTopic] = useState<TopicKey | "all">(
    topicParam || "all"
  );
  const [resultsOpen, setResultsOpen] = useState(false);

  useEffect(() => {
    if (topicParam) setActiveTopic(topicParam);
  }, [topicParam]);

  const handleAnswer = useCallback((exerciseId: string, optionId: string) => {
    const ex = exercises.find(e => e.id === exerciseId);
    if (!ex) return;
    setProgress(prev => {
      const next = {
        ...prev,
        [exerciseId]: { answered: true, correct: optionId === ex.correctId },
      };
      saveProgress(next);
      // the final answer just went in: celebrate with the results pop-up
      const allDoneNow = exercises.every(e => next[e.id]?.answered);
      const allDoneBefore = exercises.every(e => prev[e.id]?.answered);
      if (allDoneNow && !allDoneBefore) setResultsOpen(true);
      return next;
    });
  }, []);

  const handleReset = () => {
    setProgress({});
    saveProgress({});
  };

  const allAnswered = exercises.every(e => progress[e.id]?.answered);

  const filteredExercises =
    activeTopic === "all"
      ? exercises
      : exercises.filter(e => e.topic === activeTopic);

  const totalAnswered = Object.values(progress).filter(v => v.answered).length;
  const totalCorrect = Object.values(progress).filter(v => v.correct).length;

  return (
    <PageLayout>
      <section className="py-12 md:py-16 bg-background border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <h1
              className="font-bold mb-3"
              style={{ color: "var(--foreground)" }}
            >
              Practice Exercises
            </h1>
            <p
              className="text-lg leading-relaxed"
              style={{ color: "var(--muted-foreground)" }}
            >
              Real-world scenarios, CFA ethics-style. Choose your answer, then
              read a detailed explanation of why it's right or wrong. No account
              needed, your progress is saved in your browser.
            </p>
            {totalAnswered > 0 && (
              <div className="flex items-center gap-3 mt-4">
                <span
                  className="text-sm font-medium"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  {totalAnswered} answered · {totalCorrect} correct (
                  {Math.round((totalCorrect / totalAnswered) * 100)}% score)
                </span>
                <button
                  onClick={handleReset}
                  className="flex items-center gap-1 text-xs font-medium hover:underline"
                  style={{ color: "var(--muted-foreground)" }}
                >
                  <RotateCcw size={12} />
                  Reset all
                </button>
                {allAnswered && (
                  <button
                    onClick={() => setResultsOpen(true)}
                    className="flex items-center gap-1 text-xs font-semibold hover:underline"
                    style={{ color: "var(--primary)" }}
                  >
                    <Trophy size={12} />
                    View results
                  </button>
                )}
              </div>
            )}
          </div>
        </div>
      </section>

      <div className="container py-8">
        {/* Progress summary */}
        <ProgressSummary progress={progress} />

        {/* Topic filter */}
        <div className="flex flex-wrap items-center gap-2 mb-8">
          <Filter size={16} style={{ color: "var(--muted-foreground)" }} />
          <span
            className="text-sm font-medium mr-1"
            style={{ color: "var(--muted-foreground)" }}
          >
            Filter:
          </span>
          {(["all", "fca", "aml", "mifid", "crypto"] as const).map(t => {
            const meta = t === "all" ? null : topicMeta[t];
            return (
              <button
                key={t}
                onClick={() => setActiveTopic(t)}
                className="px-4 py-1.5 rounded-full text-sm font-medium border-2 transition-all"
                style={{
                  borderColor:
                    activeTopic === t
                      ? meta?.color || "var(--brand-navy)"
                      : "var(--border)",
                  backgroundColor:
                    activeTopic === t
                      ? meta
                        ? `${meta.color}15`
                        : "var(--secondary)"
                      : "transparent",
                  color:
                    activeTopic === t
                      ? meta?.color || "var(--brand-navy)"
                      : "var(--muted-foreground)",
                }}
                aria-pressed={activeTopic === t}
              >
                {t === "all" ? "All Topics" : meta?.label}
              </button>
            );
          })}
        </div>

        {/* Exercise list */}
        <div className="space-y-8">
          {filteredExercises.map(exercise => (
            <ExerciseCard
              key={exercise.id}
              exercise={exercise}
              progress={progress}
              onAnswer={handleAnswer}
            />
          ))}
        </div>

        {filteredExercises.length === 0 && (
          <div className="text-center py-16">
            <BookOpen
              size={48}
              className="mx-auto mb-4"
              style={{ color: "var(--muted-foreground)" }}
            />
            <p style={{ color: "var(--muted-foreground)" }}>
              No exercises found for this topic.
            </p>
          </div>
        )}
      </div>

      {/* Results pop-up: opens automatically when the last exercise is answered */}
      <ExerciseResults
        open={resultsOpen}
        onOpenChange={setResultsOpen}
        progress={progress}
      />
    </PageLayout>
  );
}
