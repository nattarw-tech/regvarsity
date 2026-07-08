import { ALL_MODULES, getModuleBySlug } from "@/data/modules";
import { Link, useParams } from "wouter";
import PageLayout from "@/components/PageLayout";
import { ArrowLeft, BookOpen, CheckCircle, ChevronRight, Clock, Users } from "lucide-react";
import { useEffect, useState } from "react";

function getProgress(moduleId: string, totalChapters: number) {
  try {
    const raw = localStorage.getItem(`regvarsity_progress_${moduleId}`);
    if (!raw) return { completed: [], count: 0 };
    const completed: string[] = JSON.parse(raw);
    return { completed, count: completed.length };
  } catch {
    return { completed: [], count: 0 };
  }
}

export default function ModuleDetailPage() {
  const params = useParams<{ moduleSlug: string }>();
  const mod = getModuleBySlug(params.moduleSlug ?? "");
  const [progress, setProgress] = useState<{ completed: string[]; count: number }>({ completed: [], count: 0 });

  useEffect(() => {
    if (mod) {
      setProgress(getProgress(mod.id, mod.chapters.length));
    }
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

  const totalTime = mod.chapters.reduce((s, c) => s + c.readingTimeMinutes, 0);
  const pct = mod.chapters.length > 0 ? Math.round((progress.count / mod.chapters.length) * 100) : 0;

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
          {progress.count > 0 && (
            <div className="max-w-sm">
              <div className="flex justify-between text-xs text-muted-foreground mb-1">
                <span>{progress.count} of {mod.chapters.length} chapters read</span>
                <span>{pct}%</span>
              </div>
              <div className="h-2 bg-muted rounded-full overflow-hidden">
                <div
                  className="h-full rounded-full transition-all duration-500"
                  style={{ width: `${pct}%`, background: mod.accentColour }}
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
            const isRead = progress.completed.includes(chapter.id);
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

        {/* Start CTA */}
        <div className="mt-8 text-center">
          <Link href={`/learn/${mod.slug}/${mod.chapters[0]?.slug}`}>
            <button
              className="inline-flex items-center gap-2 px-8 py-3 rounded-xl text-white font-semibold shadow-md hover:shadow-lg hover:-translate-y-0.5 transition-all duration-200"
              style={{ background: mod.accentColour }}
            >
              {progress.count > 0 ? "Continue Reading" : "Start Chapter 1"}
              <ChevronRight className="w-4 h-4" />
            </button>
          </Link>
        </div>
      </section>
    </PageLayout>
  );
}
