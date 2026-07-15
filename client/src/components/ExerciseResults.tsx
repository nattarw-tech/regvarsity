import { useEffect, useState } from "react";
import { Link } from "wouter";
import {
  Dialog,
  DialogContent,
  DialogDescription,
  DialogHeader,
  DialogTitle,
} from "@/components/ui/dialog";
import { exercises, topicMeta, type TopicKey } from "@/data/exercises";
import { ArrowRight, BookOpen } from "lucide-react";

type ProgressStore = Record<string, { answered: boolean; correct: boolean }>;

interface ExerciseResultsProps {
  open: boolean;
  onOpenChange: (open: boolean) => void;
  progress: ProgressStore;
}

// Where to send learners who struggled with a topic
const TOPIC_MODULE: Record<TopicKey, { slug: string; moduleName: string }> = {
  fca: { slug: "prin-principles-for-business", moduleName: "PRIN - Principles for Business" },
  aml: { slug: "aml-kyc-anti-money-laundering", moduleName: "AML / KYC - Anti-Money Laundering" },
  mifid: { slug: "mifid-ii-uk-mifir", moduleName: "MiFID II / UK MiFIR" },
  crypto: { slug: "crypto-asset-regulation", moduleName: "Crypto Asset Regulation" },
};

function headline(pct: number): string {
  if (pct === 100) return "A perfect run.";
  if (pct >= 80) return "Strong work.";
  if (pct >= 60) return "A solid base to build on.";
  return "A useful diagnostic.";
}

/** Animated score ring: sweeps from 0 to the score when shown. */
function ScoreRing({ percent }: { percent: number }) {
  const [sweep, setSweep] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setSweep(percent), 150);
    return () => clearTimeout(t);
  }, [percent]);
  const r = 52;
  const circumference = 2 * Math.PI * r;
  return (
    <svg width="140" height="140" viewBox="0 0 120 120" role="img" aria-label={`Score ${percent}%`}>
      <circle cx="60" cy="60" r={r} fill="none" stroke="var(--border)" strokeWidth="6" />
      <circle
        cx="60"
        cy="60"
        r={r}
        fill="none"
        stroke="var(--primary)"
        strokeWidth="6"
        strokeLinecap="round"
        strokeDasharray={circumference}
        strokeDashoffset={circumference * (1 - sweep / 100)}
        transform="rotate(-90 60 60)"
        style={{ transition: "stroke-dashoffset 1.1s cubic-bezier(0.22, 1, 0.36, 1)" }}
      />
      <text
        x="60"
        y="57"
        textAnchor="middle"
        dominantBaseline="central"
        fontSize="26"
        fill="var(--foreground)"
        style={{ fontFamily: "Fraunces, serif", fontWeight: 600 }}
      >
        {percent}%
      </text>
      <text
        x="60"
        y="78"
        textAnchor="middle"
        fontSize="8"
        letterSpacing="1.5"
        fill="var(--muted-foreground)"
        style={{ fontFamily: "Inter, sans-serif", fontWeight: 600 }}
      >
        SCORE
      </text>
    </svg>
  );
}

/** Per-topic bar that animates to its width when shown. */
function TopicBar({ label, colour, correct, total }: { label: string; colour: string; correct: number; total: number }) {
  const pct = total > 0 ? Math.round((correct / total) * 100) : 0;
  const [width, setWidth] = useState(0);
  useEffect(() => {
    const t = setTimeout(() => setWidth(pct), 300);
    return () => clearTimeout(t);
  }, [pct]);
  return (
    <div>
      <div className="flex items-baseline justify-between mb-1">
        <span className="text-xs font-semibold" style={{ color: colour }}>
          {label}
        </span>
        <span className="text-xs tabular-nums text-muted-foreground">
          {correct}/{total} correct
        </span>
      </div>
      <div className="h-2 bg-muted rounded-full overflow-hidden">
        <div
          className="h-full rounded-full"
          style={{
            width: `${width}%`,
            background: colour,
            transition: "width 0.9s cubic-bezier(0.22, 1, 0.36, 1)",
          }}
        />
      </div>
    </div>
  );
}

/**
 * Results pop-up shown when the learner has answered every scenario exercise.
 * Summarises the score with an animated ring, breaks it down by topic, and
 * points at the modules worth revisiting.
 */
export default function ExerciseResults({ open, onOpenChange, progress }: ExerciseResultsProps) {
  const topics = Object.keys(topicMeta) as TopicKey[];
  const byTopic = topics.map((topic) => {
    const topicExercises = exercises.filter((e) => e.topic === topic);
    const correct = topicExercises.filter((e) => progress[e.id]?.correct).length;
    return { topic, correct, total: topicExercises.length };
  });
  const totalCorrect = byTopic.reduce((s, t) => s + t.correct, 0);
  const total = exercises.length;
  const percent = total > 0 ? Math.round((totalCorrect / total) * 100) : 0;

  // weakest first, only topics with something to improve
  const improvements = byTopic
    .filter((t) => t.correct < t.total)
    .sort((a, b) => a.correct / a.total - b.correct / b.total);

  return (
    <Dialog open={open} onOpenChange={onOpenChange}>
      <DialogContent className="max-w-lg max-h-[85vh] overflow-y-auto">
        <DialogHeader>
          <p className="overline-kicker">All exercises complete</p>
          <DialogTitle className="font-serif text-2xl">{headline(percent)}</DialogTitle>
          <DialogDescription>
            You answered all {total} scenario exercises and got {totalCorrect} right.
          </DialogDescription>
        </DialogHeader>

        <div className="flex justify-center py-2">{open && <ScoreRing percent={percent} />}</div>

        <div className="space-y-3">
          {byTopic.map(({ topic, correct, total: t }) => (
            <TopicBar
              key={topic}
              label={topicMeta[topic].label}
              colour={topicMeta[topic].color}
              correct={correct}
              total={t}
            />
          ))}
        </div>

        {improvements.length > 0 ? (
          <div className="border-t border-border pt-4 mt-2">
            <p className="overline-kicker mb-3">Where to improve</p>
            <ul className="space-y-2.5">
              {improvements.map(({ topic, correct, total: t }) => {
                const target = TOPIC_MODULE[topic];
                return (
                  <li key={topic} className="flex items-start gap-2.5 text-sm leading-relaxed">
                    <BookOpen className="w-4 h-4 mt-0.5 flex-shrink-0" style={{ color: topicMeta[topic].color }} />
                    <span className="text-muted-foreground">
                      {topicMeta[topic].label}: {correct} of {t}. Revisit{" "}
                      <Link href={`/learn/${target.slug}`}>
                        <span
                          className="font-semibold underline underline-offset-2 cursor-pointer hover:text-primary"
                          style={{ color: "var(--foreground)" }}
                          onClick={() => onOpenChange(false)}
                        >
                          {target.moduleName}
                        </span>
                      </Link>
                      , then reset and try these again.
                    </span>
                  </li>
                );
              })}
            </ul>
          </div>
        ) : (
          <div className="border-t border-border pt-4 mt-2">
            <p className="text-sm text-muted-foreground leading-relaxed">
              Nothing to improve here. If you have not already, take the module tests to earn
              your badges.
            </p>
          </div>
        )}

        <div className="flex flex-wrap justify-end gap-3 pt-2">
          <button
            onClick={() => onOpenChange(false)}
            className="px-5 py-2.5 rounded-xl text-sm font-semibold bg-muted text-muted-foreground border border-border hover:border-primary hover:text-primary transition-all"
          >
            Keep practising
          </button>
          <Link href="/progress">
            <button
              onClick={() => onOpenChange(false)}
              className="inline-flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
            >
              My progress
              <ArrowRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </DialogContent>
    </Dialog>
  );
}
