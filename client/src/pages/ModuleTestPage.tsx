import { ALL_MODULES, getModuleBySlug } from "@/data/modules";
import { Link, useParams } from "wouter";
import PageLayout from "@/components/PageLayout";
import ModuleBadge from "@/components/ModuleBadge";
import { useProgress } from "@/hooks/useProgress";
import { ArrowLeft, ArrowRight, CheckCircle, XCircle } from "lucide-react";
import { useEffect, useState } from "react";

type Stage = "intro" | "question" | "results";

export default function ModuleTestPage() {
  const params = useParams<{ moduleSlug: string }>();
  const mod = getModuleBySlug(params.moduleSlug ?? "");
  const progress = useProgress();

  const [stage, setStage] = useState<Stage>("intro");
  const [current, setCurrent] = useState(0);
  const [answers, setAnswers] = useState<number[]>([]);
  const [outcome, setOutcome] = useState<{ scorePercent: number; passed: boolean } | null>(null);

  useEffect(() => {
    setStage("intro");
    setCurrent(0);
    setAnswers([]);
    setOutcome(null);
    window.scrollTo(0, 0);
  }, [mod?.id]);

  if (!mod) {
    return (
      <PageLayout>
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Module not found</h1>
          <Link href="/learn">
            <span className="text-primary underline cursor-pointer">Back to all modules</span>
          </Link>
        </div>
      </PageLayout>
    );
  }

  const test = mod.moduleTest;
  const mp = progress.getModuleProgress(mod);
  const testRecord = progress.getModuleTest(mod.id);

  if (!test) {
    return (
      <PageLayout>
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <p className="overline-kicker mb-3">{mod.title}</p>
          <h1 className="text-2xl font-bold text-foreground mb-4">Test coming soon</h1>
          <p className="text-muted-foreground mb-8">
            The test for this module is still being written. The chapters are ready to read in the meantime.
          </p>
          <Link href={`/learn/${mod.slug}`}>
            <span className="text-primary underline cursor-pointer">Back to module</span>
          </Link>
        </div>
      </PageLayout>
    );
  }

  const questions = test.questions;
  const nextModule = ALL_MODULES.find((m) => m.number === mod.number + 1);

  const start = () => {
    setAnswers([]);
    setCurrent(0);
    setStage("question");
    window.scrollTo(0, 0);
  };

  const selectAnswer = (i: number) => {
    if (answers.length > current) return; // locked
    const next = [...answers, i];
    setAnswers(next);
    // brief pause so the learner sees their selection, then advance
    setTimeout(() => {
      if (next.length === questions.length) {
        const correct = next.filter((a, qi) => a === questions[qi].correctIndex).length;
        const scorePercent = Math.round((correct / questions.length) * 100);
        const { passed } = progress.recordTestAttempt(mod, scorePercent);
        setOutcome({ scorePercent, passed: scorePercent >= test.passMarkPercent });
        setStage("results");
        window.scrollTo(0, 0);
      } else {
        setCurrent((c) => c + 1);
      }
    }, 350);
  };

  return (
    <PageLayout>
      <div className="max-w-3xl mx-auto px-4 py-10">
        {/* Breadcrumb */}
        <Link href={`/learn/${mod.slug}`}>
          <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary cursor-pointer mb-8 transition-colors">
            <ArrowLeft className="w-4 h-4" />
            {mod.title}
          </span>
        </Link>

        {stage === "intro" && (
          <div>
            <p className="overline-kicker mb-3">Module test</p>
            <h1 className="mb-5">{mod.title}</h1>
            <div className="p-6 bg-card border border-border rounded-2xl mb-8">
              <ul className="space-y-3 text-sm text-foreground/85 leading-relaxed">
                <li className="grid grid-cols-[1.5rem_1fr] gap-2">
                  <span className="font-serif text-primary">01</span>
                  <span>{questions.length} multiple-choice questions, drawn from the module chapters.</span>
                </li>
                <li className="grid grid-cols-[1.5rem_1fr] gap-2">
                  <span className="font-serif text-primary">02</span>
                  <span>You need {test.passMarkPercent}% to pass and earn the module badge.</span>
                </li>
                <li className="grid grid-cols-[1.5rem_1fr] gap-2">
                  <span className="font-serif text-primary">03</span>
                  <span>Answers lock when you select them. Explanations are shown at the end, not during the test.</span>
                </li>
                <li className="grid grid-cols-[1.5rem_1fr] gap-2">
                  <span className="font-serif text-primary">04</span>
                  <span>You can retake the test as many times as you like.</span>
                </li>
              </ul>
            </div>
            {mp.readCount < mp.totalChapters && (
              <p className="text-sm text-muted-foreground mb-6">
                You have read {mp.readCount} of {mp.totalChapters} chapters so far. You can take the
                test now, but it draws on the whole module.
              </p>
            )}
            {testRecord && (
              <p className="text-sm text-muted-foreground mb-6">
                Previous attempts: {testRecord.attempts} · best score {testRecord.bestScorePercent}%
                {testRecord.passed && " · passed"}
              </p>
            )}
            <button
              onClick={start}
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              style={{ background: mod.accentColour }}
            >
              {testRecord ? "Retake the test" : "Start the test"}
              <ArrowRight className="w-4 h-4" />
            </button>
          </div>
        )}

        {stage === "question" && (
          <div>
            <div className="flex items-baseline justify-between mb-6">
              <p className="overline-kicker">Module test</p>
              <span className="text-sm text-muted-foreground tabular-nums">
                {current + 1} of {questions.length}
              </span>
            </div>
            {/* progress bar */}
            <div className="h-1.5 bg-muted rounded-full overflow-hidden mb-8">
              <div
                className="h-full rounded-full transition-all duration-300"
                style={{
                  width: `${(current / questions.length) * 100}%`,
                  background: mod.accentColour,
                }}
              />
            </div>
            <h2 className="text-lg md:text-xl font-semibold leading-relaxed mb-6">
              {questions[current].question}
            </h2>
            <div className="space-y-3">
              {questions[current].options.map((opt, i) => {
                const isSelected = answers[current] === i;
                return (
                  <button
                    key={i}
                    onClick={() => selectAnswer(i)}
                    disabled={answers.length > current}
                    className={`w-full text-left px-4 py-3.5 rounded-xl border text-sm transition-all duration-200 ${
                      isSelected
                        ? "border-primary bg-primary/10 text-foreground font-medium"
                        : "bg-muted border-border text-muted-foreground hover:border-primary hover:bg-muted/70 cursor-pointer"
                    }`}
                  >
                    <span className="font-semibold mr-2">{String.fromCharCode(65 + i)}.</span>
                    {opt}
                  </button>
                );
              })}
            </div>
          </div>
        )}

        {stage === "results" && outcome && (
          <div>
            {outcome.passed ? (
              <div className="text-center mb-12">
                <div className="flex justify-center mb-6">
                  <ModuleBadge module={mod} earned size={140} />
                </div>
                <p className="overline-kicker mb-3">Module complete</p>
                <h1 className="mb-4">Well done — you passed.</h1>
                <p className="text-muted-foreground max-w-md mx-auto leading-relaxed mb-8">
                  You scored {outcome.scorePercent}% on the {mod.title} test. The module badge is
                  yours, and it now appears on your progress page.
                </p>
                <div className="flex flex-wrap justify-center gap-3">
                  <Link href="/progress">
                    <button className="px-6 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                      View my progress
                    </button>
                  </Link>
                  {nextModule && (
                    <Link href={`/learn/${nextModule.slug}`}>
                      <button className="px-6 py-3 rounded-xl text-sm font-semibold bg-muted text-muted-foreground border border-border hover:border-primary hover:text-primary transition-all">
                        Next module: {nextModule.sourceCode}
                      </button>
                    </Link>
                  )}
                </div>
              </div>
            ) : (
              <div className="text-center mb-12">
                <p className="overline-kicker mb-3">Not this time</p>
                <h1 className="mb-4">You scored {outcome.scorePercent}%</h1>
                <p className="text-muted-foreground max-w-md mx-auto leading-relaxed mb-8">
                  You need {test.passMarkPercent}% to pass. Review the answers below, revisit the
                  chapters, and try again when you are ready.
                </p>
                <button
                  onClick={start}
                  className="px-6 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  Retake the test
                </button>
              </div>
            )}

            {/* Per-question review */}
            <div className="border-t-2 border-foreground pt-6">
              <p className="overline-kicker mb-6">Answer review</p>
              <div className="space-y-8">
                {questions.map((q, qi) => {
                  const given = answers[qi];
                  const correct = given === q.correctIndex;
                  return (
                    <div key={q.id}>
                      <div className="flex items-start gap-2.5 mb-3">
                        {correct ? (
                          <CheckCircle className="w-5 h-5 text-green-600 dark:text-green-400 flex-shrink-0 mt-0.5" />
                        ) : (
                          <XCircle className="w-5 h-5 text-red-500 dark:text-red-400 flex-shrink-0 mt-0.5" />
                        )}
                        <p className="text-sm font-semibold leading-relaxed">
                          {qi + 1}. {q.question}
                        </p>
                      </div>
                      <div className="ml-8 text-sm space-y-1.5">
                        {!correct && (
                          <p className="text-red-600 dark:text-red-400">
                            Your answer: {String.fromCharCode(65 + given)}. {q.options[given]}
                          </p>
                        )}
                        <p className="text-green-700 dark:text-green-400">
                          Correct answer: {String.fromCharCode(65 + q.correctIndex)}.{" "}
                          {q.options[q.correctIndex]}
                        </p>
                        <p className="text-muted-foreground leading-relaxed pt-1">{q.explanation}</p>
                      </div>
                    </div>
                  );
                })}
              </div>
            </div>
          </div>
        )}
      </div>
    </PageLayout>
  );
}
