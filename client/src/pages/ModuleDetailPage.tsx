import { getModuleBySlug } from "@/data/modules";
import { Link, useParams } from "wouter";
import PageLayout from "@/components/PageLayout";
import ModuleBadge from "@/components/ModuleBadge";
import { ArrowLeft, BookOpen, CheckCircle, ChevronRight, Clock, GraduationCap, Users } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";

export default function ModuleDetailPage() {
  const params = useParams<{ moduleSlug: string }>();
  const mod = getModuleBySlug(params.moduleSlug ?? "");
  const progress = useProgress();

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

  const totalTime = mod.chapters.reduce((s, c) => s + c.readingTimeMinutes, 0);
  const mp = progress.getModuleProgress(mod);
  const lastVisitedSlug = progress.getLastVisited(mod.slug);
  const continueChapter =
    mod.chapters.find((c) => c.slug === lastVisitedSlug) ?? mod.chapters[0];

  return (
    <PageLayout>
      {/* Header */}
      <section className="py-12 px-4 bg-background border-b border-border">
        <div className="max-w-4xl mx-auto">
          <Link href="/learn">
            <span className="inline-flex items-center gap-1.5 text-sm text-muted-foreground hover:text-primary cursor-pointer mb-6 transition-colors">
              <ArrowLeft className="w-4 h-4" />
              All Modules
            </span>
          </Link>

          <div className="flex items-start gap-5 mb-6">
            <div
              className="flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-white font-bold text-xl shadow-md"
              style={{ background: mod.accentColour }}
            >
              {mod.number}
            </div>
            <div>
              <div className="flex flex-wrap items-center gap-2 mb-2">
                <span className="text-xs font-semibold bg-secondary text-secondary-foreground px-3 py-1 rounded-full border border-border">
                  {mod.block}
                </span>
                <span className="text-xs font-mono text-muted-foreground">{mod.sourceCode}</span>
              </div>
              <h1 className="text-3xl md:text-4xl font-bold text-foreground">
                {mod.title}
              </h1>
            </div>
            {mp.badgeEarned && (
              <div className="hidden sm:block flex-shrink-0 ml-auto" title="Module badge earned">
                <ModuleBadge module={mod} earned size={72} />
              </div>
            )}
          </div>

          <p className="text-lg text-muted-foreground leading-relaxed mb-6 max-w-3xl">
            {mod.description}
          </p>

          <div className="flex flex-wrap gap-5 text-sm text-muted-foreground mb-6">
            <span className="flex items-center gap-1.5">
              <BookOpen className="w-4 h-4" />
              {mod.chapters.length} chapters
            </span>
            <span className="flex items-center gap-1.5">
              <Clock className="w-4 h-4" />
              {totalTime} min total
            </span>
            <span className="flex items-center gap-1.5">
              <Users className="w-4 h-4" />
              {mod.whoItAppliesTo}
            </span>
          </div>

          {/* Progress bar */}
          {mp.readCount > 0 && (
            <div className="max-w-sm">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>{mp.readCount} of {mp.totalChapters} chapters read</span>
                <span>{mp.percent}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${mp.percent}%`, background: mod.accentColour }}
                />
              </div>
            </div>
          )}
        </div>
      </section>

      {/* Chapter list */}
      <section className="max-w-4xl mx-auto px-4 py-10">
        <h2 className="text-xl font-bold text-foreground mb-6">Chapters in this Module</h2>
        <div className="space-y-3">
          {mod.chapters.map((chapter, idx) => {
            const isRead = progress.isChapterRead(chapter.id);
            return (
              <Link key={chapter.id} href={`/learn/${mod.slug}/${chapter.slug}`}>
                <div className="group flex items-center gap-4 bg-card border border-border rounded-xl p-5 hover:border-primary/40 hover:shadow-md transition-all duration-200 cursor-pointer">
                  {/* Chapter number / check */}
                  <div
                    className={`flex-shrink-0 w-10 h-10 rounded-lg flex items-center justify-center text-sm font-bold ${!isRead ? "bg-muted text-muted-foreground" : ""}`}
                    style={{
                      background: isRead ? mod.accentColour + "22" : undefined,
                      color: isRead ? mod.accentColour : undefined
                    }}
                  >
                    {isRead ? <CheckCircle className="w-5 h-5" style={{ color: mod.accentColour }} /> : idx + 1}
                  </div>

                  {/* Content */}
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-foreground group-hover:text-primary transition-colors">
                      {chapter.title}
                    </h3>
                    <p className="text-sm text-muted-foreground mt-0.5 line-clamp-1">
                      {chapter.intro.slice(0, 100)}…
                    </p>
                  </div>

                  {/* Meta */}
                  <div className="flex-shrink-0 flex items-center gap-3 text-xs text-muted-foreground">
                    <span className="flex items-center gap-1">
                      <Clock className="w-3.5 h-3.5" />
                      {chapter.readingTimeMinutes} min
                    </span>
                    <ChevronRight className="w-4 h-4 group-hover:text-primary group-hover:translate-x-1 transition-all" />
                  </div>
                </div>
              </Link>
            );
          })}
        </div>

        {/* Module test card */}
        <div className="mt-8 p-6 bg-card border border-border rounded-xl">
          <div className="flex flex-col sm:flex-row sm:items-center gap-5">
            <div className="flex-shrink-0">
              {mp.badgeEarned ? (
                <ModuleBadge module={mod} earned size={80} />
              ) : (
                <div className="w-14 h-14 rounded-2xl bg-muted flex items-center justify-center">
                  <GraduationCap className="w-7 h-7 text-muted-foreground" />
                </div>
              )}
            </div>
            <div className="flex-1 min-w-0">
              <h3 className="font-semibold text-foreground mb-1">Module test</h3>
              <p className="text-sm text-muted-foreground leading-relaxed">
                {!mod.moduleTest
                  ? "The test for this module is still being written."
                  : mp.testPassed
                  ? `Passed, best score ${mp.bestScorePercent}%. You can retake it any time.`
                  : mp.readCount === mp.totalChapters
                  ? `All chapters read. ${mod.moduleTest.questions.length} questions, ${mod.moduleTest.passMarkPercent}% to pass and earn the badge.`
                  : `${mod.moduleTest.questions.length} questions covering the whole module. ${mod.moduleTest.passMarkPercent}% to pass. Best taken after reading the chapters.`}
              </p>
            </div>
            {mod.moduleTest && (
              <Link href={`/learn/${mod.slug}/test`}>
                <button
                  className="flex-shrink-0 px-6 py-2.5 rounded-xl text-sm font-semibold text-white shadow-sm hover:shadow-md hover:-translate-y-0.5 transition-all duration-200"
                  style={{ background: mod.accentColour }}
                >
                  {mp.testPassed ? "Retake test" : "Take the test"}
                </button>
              </Link>
            )}
          </div>
        </div>

        {/* Start CTA */}
        <div className="mt-8 text-center">
          <Link href={`/learn/${mod.slug}/${continueChapter?.slug}`}>
            <button
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              style={{ background: mod.accentColour }}
            >
              {mp.readCount > 0 ? "Continue Reading" : "Start Chapter 1"}
              <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
