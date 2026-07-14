import { ALL_MODULES } from "@/data/modules";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import ModuleBadge from "@/components/ModuleBadge";
import { useProgress } from "@/hooks/useProgress";
import { ArrowRight, BookOpen, GraduationCap, ListChecks, Medal } from "lucide-react";
import {
  AlertDialog,
  AlertDialogAction,
  AlertDialogCancel,
  AlertDialogContent,
  AlertDialogDescription,
  AlertDialogFooter,
  AlertDialogHeader,
  AlertDialogTitle,
  AlertDialogTrigger,
} from "@/components/ui/alert-dialog";

export default function ProgressPage() {
  const progress = useProgress();
  const stats = progress.getOverallStats();

  // "Continue where you left off": most recently visited module with unread chapters
  const continueTarget = (() => {
    for (const mod of ALL_MODULES) {
      const lastSlug = progress.getLastVisited(mod.slug);
      if (!lastSlug) continue;
      const mp = progress.getModuleProgress(mod);
      if (mp.readCount < mp.totalChapters || !mp.testPassed) {
        return { mod, chapterSlug: lastSlug };
      }
    }
    return null;
  })();

  const hasAnyProgress =
    stats.chaptersRead > 0 || stats.quickChecksDone > 0 || stats.testsPassed > 0;

  return (
    <PageLayout>
      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <p className="overline-kicker mb-4">Your record</p>
          <h1 className="mb-4">My progress</h1>
          <p className="text-lg max-w-2xl text-muted-foreground mb-8">
            Everything is stored in your browser. No account, no tracking, clear your browser data
            and it resets.
          </p>

          {/* Stats row */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4 max-w-3xl">
            <div className="p-4 bg-card border border-border rounded-xl">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                <BookOpen className="w-3.5 h-3.5" />
                Chapters read
              </div>
              <p className="font-serif text-3xl tabular-nums">
                {stats.chaptersRead}
                <span className="text-base text-muted-foreground">/{stats.totalChapters}</span>
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-xl">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                <ListChecks className="w-3.5 h-3.5" />
                Quick Checks
              </div>
              <p className="font-serif text-3xl tabular-nums">{stats.quickChecksDone}</p>
            </div>
            <div className="p-4 bg-card border border-border rounded-xl">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                <GraduationCap className="w-3.5 h-3.5" />
                Tests passed
              </div>
              <p className="font-serif text-3xl tabular-nums">
                {stats.testsPassed}
                <span className="text-base text-muted-foreground">/{ALL_MODULES.length}</span>
              </p>
            </div>
            <div className="p-4 bg-card border border-border rounded-xl">
              <div className="flex items-center gap-2 text-xs text-muted-foreground mb-1">
                <Medal className="w-3.5 h-3.5" />
                Badges earned
              </div>
              <p className="font-serif text-3xl tabular-nums">{stats.badgesEarned}</p>
            </div>
          </div>

          {continueTarget && (
            <Link href={`/learn/${continueTarget.mod.slug}/${continueTarget.chapterSlug}`}>
              <button className="mt-8 inline-flex items-center gap-2 px-6 py-3 rounded-xl text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity">
                Continue where you left off
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
          )}
        </div>
      </section>

      {/* Per-module progress */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        <p className="overline-kicker mb-4">Module by module</p>
        <ol className="border-t border-border">
          {ALL_MODULES.map((mod) => {
            const mp = progress.getModuleProgress(mod);
            const test = progress.getModuleTest(mod.id);
            return (
              <li key={mod.id} className="border-b border-border">
                <div className="grid grid-cols-[1fr_auto] items-center gap-4 py-5">
                  <div className="min-w-0">
                    <Link href={`/learn/${mod.slug}`}>
                      <h2 className="font-serif text-lg md:text-xl leading-snug hover:text-primary transition-colors cursor-pointer mb-2">
                        {mod.title}
                      </h2>
                    </Link>
                    <div className="max-w-md h-1.5 bg-muted rounded-full overflow-hidden mb-2">
                      <div
                        className="h-full rounded-full transition-all duration-500"
                        style={{ width: `${mp.percent}%`, background: mod.accentColour }}
                      />
                    </div>
                    <p className="text-xs text-muted-foreground tabular-nums">
                      {mp.readCount}/{mp.totalChapters} chapters read
                      {mp.quickChecksDone > 0 && <> · {mp.quickChecksDone} Quick Check{mp.quickChecksDone !== 1 ? "s" : ""} done</>}
                      {test
                        ? test.passed
                          ? <> · test passed ({test.bestScorePercent}%)</>
                          : <> · test best {test.bestScorePercent}% (not yet passed)</>
                        : mod.moduleTest
                        ? <> · test not attempted</>
                        : <> · test coming soon</>}
                    </p>
                  </div>
                  <div className="flex-shrink-0">
                    <ModuleBadge module={mod} earned={mp.badgeEarned} size={64} />
                  </div>
                </div>
              </li>
            );
          })}
        </ol>

        {/* Reset */}
        {hasAnyProgress && (
          <div className="mt-10 border-t border-border pt-6">
            <AlertDialog>
              <AlertDialogTrigger asChild>
                <button className="text-sm text-muted-foreground underline underline-offset-2 hover:text-destructive transition-colors">
                  Reset all progress
                </button>
              </AlertDialogTrigger>
              <AlertDialogContent>
                <AlertDialogHeader>
                  <AlertDialogTitle>Reset all progress?</AlertDialogTitle>
                  <AlertDialogDescription>
                    This clears every chapter tick, Quick Check result, test score and badge from
                    this browser. It cannot be undone.
                  </AlertDialogDescription>
                </AlertDialogHeader>
                <AlertDialogFooter>
                  <AlertDialogCancel>Keep my progress</AlertDialogCancel>
                  <AlertDialogAction onClick={() => progress.resetProgress()}>
                    Reset everything
                  </AlertDialogAction>
                </AlertDialogFooter>
              </AlertDialogContent>
            </AlertDialog>
          </div>
        )}
      </section>
    </PageLayout>
  );
}
