import { useEffect, useState } from "react";
import type { Chapter, Module, QuizQuestion } from "@/data/modules";
import { useProgress } from "@/hooks/useProgress";
import { toast } from "sonner";

interface QuickCheckProps {
  module: Module;
  chapter: Chapter;
  questions: QuizQuestion[];
}

/**
 * End-of-chapter Quick Check: 1-3 MCQs shown one at a time.
 * Each answer locks on selection and shows its explanation.
 * Finishing records the result and marks the chapter as read.
 */
export default function QuickCheck({
  module,
  chapter,
  questions,
}: QuickCheckProps) {
  const progress = useProgress();
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<(number | null)[]>(() =>
    questions.map(() => null)
  );
  const [finished, setFinished] = useState(false);

  // Reset when navigating between chapters
  useEffect(() => {
    setCurrent(0);
    setAnswers(questions.map(() => null));
    setFinished(false);
  }, [chapter.id]);

  const question = questions[current];
  const answer = answers[current];
  const answered = answer !== null;
  const correctCount = answers.filter(
    (a, i) => a === questions[i].correctIndex
  ).length;
  const isLast = current === questions.length - 1;
  const previousBest = progress.getQuickCheck(chapter.id);

  const selectAnswer = (i: number) => {
    if (answered) return;
    setAnswers(prev => {
      const next = [...prev];
      next[current] = i;
      return next;
    });
  };

  const finish = () => {
    setFinished(true);
    progress.recordQuickCheck(chapter.id, correctCount, questions.length);
    if (!progress.isChapterRead(chapter.id)) {
      progress.markChapterRead(module, chapter);
      toast.success("Quick Check done, chapter marked as read.");
    }
  };

  const retry = () => {
    setCurrent(0);
    setAnswers(questions.map(() => null));
    setFinished(false);
  };

  if (finished) {
    const allCorrect = correctCount === questions.length;
    return (
      <div className="mt-8 p-6 bg-card border border-border rounded-2xl">
        <p className="overline-kicker mb-2">Quick Check</p>
        <h3 className="font-bold text-foreground mb-2">
          You got {correctCount} of {questions.length}
        </h3>
        <p className="text-sm text-muted-foreground leading-relaxed mb-4">
          {allCorrect
            ? "All correct. You have this chapter down."
            : "Worth a second look at the sections you missed, then try again."}
        </p>
        {!allCorrect && (
          <button
            onClick={retry}
            className="px-5 py-2.5 rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
          >
            Try again
          </button>
        )}
      </div>
    );
  }

  return (
    <div className="mt-8 p-6 bg-card border border-border rounded-2xl">
      <div className="flex items-baseline justify-between mb-2">
        <h3 className="font-bold text-foreground">Quick Check</h3>
        <span className="text-xs text-muted-foreground tabular-nums">
          Question {current + 1} of {questions.length}
          {previousBest && (
            <span>
              {" "}
              · best so far {previousBest.correct}/{previousBest.total}
            </span>
          )}
        </span>
      </div>
      <p className="text-muted-foreground mb-5 leading-relaxed">
        {question.question}
      </p>
      <div className="space-y-3">
        {question.options.map((opt, i) => {
          const isCorrect = i === question.correctIndex;
          const isSelected = answer === i;
          return (
            <button
              key={i}
              onClick={() => selectAnswer(i)}
              disabled={answered}
              className={`w-full text-left px-4 py-3 rounded-xl border text-sm transition-all duration-200 ${
                answered
                  ? isCorrect
                    ? "bg-green-50 border-green-400 text-green-800 dark:bg-green-900/20 dark:border-green-600 dark:text-green-300"
                    : isSelected
                      ? "bg-red-50 border-red-400 text-red-800 dark:bg-red-900/20 dark:border-red-600 dark:text-red-300"
                      : "bg-muted border-border text-muted-foreground"
                  : "bg-muted border-border text-muted-foreground hover:border-primary hover:bg-muted/70 cursor-pointer"
              }`}
            >
              <span className="font-semibold mr-2">
                {String.fromCharCode(65 + i)}.
              </span>
              {opt}
            </button>
          );
        })}
      </div>
      {answered && (
        <>
          <div
            className={`mt-4 p-4 rounded-xl text-sm leading-relaxed ${
              answer === question.correctIndex
                ? "bg-green-50 text-green-800 dark:bg-green-900/20 dark:text-green-300"
                : "bg-amber-50 text-amber-800 dark:bg-amber-900/20 dark:text-amber-300"
            }`}
          >
            <strong>
              {answer === question.correctIndex ? "✓ Correct!" : "Not quite."}
            </strong>{" "}
            {question.explanation}
          </div>
          <div className="mt-4 flex justify-end">
            {isLast ? (
              <button
                onClick={finish}
                className="px-5 py-2.5 rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Finish Quick Check
              </button>
            ) : (
              <button
                onClick={() => setCurrent(c => c + 1)}
                className="px-5 py-2.5 rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
              >
                Next question
              </button>
            )}
          </div>
        </>
      )}
    </div>
  );
}
