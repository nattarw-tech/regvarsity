import { ALL_MODULES } from "@/data/modules";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { ArrowRight, ArrowUpRight } from "lucide-react";
import { useProgress } from "@/hooks/useProgress";

export default function Home() {
  const totalChapters = ALL_MODULES.reduce((s, m) => s + m.chapters.length, 0);
  const progress = useProgress();
  const stats = progress.getOverallStats();

  // most recently visited module that still has something left to do
  const continueTarget = (() => {
    for (const mod of ALL_MODULES) {
      const lastSlug = progress.getLastVisited(mod.slug);
      if (!lastSlug) continue;
      const mp = progress.getModuleProgress(mod);
      if (!mp.complete) return { mod, chapterSlug: lastSlug };
    }
    return null;
  })();

  return (
    <PageLayout>
      {/* ── Hero ── */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 pt-20 pb-16 md:pt-28 md:pb-24">
          <p className="overline-kicker mb-6">Free · No account · Plain English</p>
          <h1 className="max-w-3xl text-balance mb-7">
            UK and EU financial regulation, explained so anyone can understand it.
          </h1>
          <p className="text-lg md:text-xl leading-relaxed max-w-2xl mb-10 text-muted-foreground">
            {ALL_MODULES.length} structured modules covering the FCA Handbook and key EU
            frameworks — from the Principles and Consumer Duty to AML, MiFID, MiCA and data
            protection. Written like a good textbook, not a legal document.
          </p>
          <div className="flex flex-wrap items-center gap-6">
            <Link href="/learn">
              <button className="inline-flex items-center gap-2 px-6 py-3 font-semibold text-sm tracking-wide bg-primary text-primary-foreground hover:opacity-90 transition-opacity rounded-md">
                Start reading
                <ArrowRight className="w-4 h-4" />
              </button>
            </Link>
            <Link href="/exercises">
              <span className="text-sm font-semibold border-b-2 border-foreground/70 pb-0.5 text-foreground hover:border-primary hover:text-primary transition-colors cursor-pointer">
                Or test yourself first
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* ── Welcome back strip ── */}
      {stats.chaptersRead > 0 && (
        <section className="border-b border-border bg-surface-2">
          <div className="max-w-5xl mx-auto px-6 py-4 flex flex-wrap items-center justify-between gap-3 text-sm">
            <span className="text-muted-foreground">
              Welcome back — {stats.chaptersRead} of {stats.totalChapters} chapters read
              {stats.badgesEarned > 0 && (
                <>
                  {" "}
                  · {stats.badgesEarned} badge{stats.badgesEarned !== 1 ? "s" : ""} earned
                </>
              )}
            </span>
            <span className="flex items-center gap-5">
              {continueTarget && (
                <Link href={`/learn/${continueTarget.mod.slug}/${continueTarget.chapterSlug}`}>
                  <span className="font-semibold text-primary hover:underline cursor-pointer">
                    Continue reading →
                  </span>
                </Link>
              )}
              <Link href="/progress">
                <span className="font-semibold text-primary hover:underline cursor-pointer">
                  My progress
                </span>
              </Link>
            </span>
          </div>
        </section>
      )}

      {/* ── Numbers strip ── */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-6 flex flex-wrap gap-x-12 gap-y-3 text-sm text-muted-foreground">
          <span>
            <strong className="text-foreground font-semibold">{ALL_MODULES.length}</strong> modules
          </span>
          <span>
            <strong className="text-foreground font-semibold">{totalChapters}</strong> chapters
          </span>
          <span>
            <strong className="text-foreground font-semibold">57</strong> glossary terms
          </span>
          <span>
            Last reviewed <strong className="text-foreground font-semibold">July 2026</strong>
          </span>
        </div>
      </section>

      {/* ── The syllabus — numbered table of contents ── */}
      <section className="max-w-5xl mx-auto px-6 py-16 md:py-20">
        <div className="flex items-baseline justify-between gap-4 mb-2">
          <h2>The syllabus</h2>
          <Link href="/learn">
            <span className="hidden md:inline text-sm font-semibold text-primary hover:underline cursor-pointer">
              Open all modules →
            </span>
          </Link>
        </div>
        <p className="text-muted-foreground mb-10 max-w-2xl">
          Each module maps to a real FCA Handbook sourcebook or EU regulation. Start anywhere —
          no prior knowledge assumed.
        </p>

        <ol className="border-t border-border">
          {ALL_MODULES.map((mod) => {
            const totalTime = mod.chapters.reduce((s, c) => s + c.readingTimeMinutes, 0);
            return (
              <li key={mod.id} className="border-b border-border">
                <Link href={`/learn/${mod.slug}`}>
                  <div className="group grid grid-cols-[3rem_1fr_auto] md:grid-cols-[4.5rem_1fr_auto] items-baseline gap-x-4 py-5 cursor-pointer">
                    <span className="font-serif text-2xl md:text-3xl text-muted-foreground/60 group-hover:text-primary transition-colors tabular-nums">
                      {String(mod.number).padStart(2, "0")}
                    </span>
                    <div className="min-w-0">
                      <h3 className="font-serif text-lg md:text-xl leading-snug group-hover:text-primary transition-colors">
                        {mod.title}
                      </h3>
                      <p className="text-sm text-muted-foreground mt-1 hidden md:block max-w-xl">
                        {mod.description.split(". ")[0]}.
                      </p>
                    </div>
                    <span className="text-xs text-muted-foreground whitespace-nowrap tabular-nums">
                      {mod.chapters.length} ch · {totalTime} min
                    </span>
                  </div>
                </Link>
              </li>
            );
          })}
        </ol>
      </section>

      {/* ── How it works ── */}
      <section className="border-y border-border bg-surface-2">
        <div className="max-w-5xl mx-auto px-6 py-16">
          <p className="overline-kicker mb-4">How it works</p>
          <div className="grid md:grid-cols-3 gap-x-10 gap-y-8">
            {[
              {
                n: "01",
                title: "Read at your own pace",
                desc: "Short chapters you can finish in 5–10 minutes. Every concept explained in plain English first, then in technical depth.",
              },
              {
                n: "02",
                title: "Test your understanding",
                desc: "Scenario questions at the end of each chapter — real situations, not abstract theory, with a full explanation for every answer.",
              },
              {
                n: "03",
                title: "Ask the AI expert",
                desc: "Stuck on a concept? Ask a question and get a clear answer grounded in UK regulation, available on every page.",
              },
            ].map((step) => (
              <div key={step.n}>
                <div className="font-serif text-3xl text-primary/50 mb-3">{step.n}</div>
                <h3 className="text-lg mb-2">{step.title}</h3>
                <p className="text-sm leading-relaxed text-muted-foreground">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ── Quick links ── */}
      <section className="max-w-5xl mx-auto px-6 py-16">
        <div className="grid md:grid-cols-3 gap-px bg-border border border-border">
          {[
            {
              href: "/whats-new",
              title: "What's new",
              desc: "A plain-English digest of the latest regulatory changes, consultations, and enforcement actions.",
            },
            {
              href: "/glossary",
              title: "Glossary",
              desc: "57 regulatory terms explained without jargon — from CDD and EDD to SMCR and Consumer Duty.",
            },
            {
              href: "/ai-expert",
              title: "AI expert",
              desc: "Ask any question about UK or EU financial regulation and get a clear answer, with the caveats that matter.",
            },
          ].map((card) => (
            <Link key={card.href} href={card.href}>
              <div className="group bg-background p-7 h-full cursor-pointer hover:bg-surface-2 transition-colors">
                <div className="flex items-baseline justify-between mb-3">
                  <h3 className="text-lg group-hover:text-primary transition-colors">{card.title}</h3>
                  <ArrowUpRight className="w-4 h-4 text-muted-foreground group-hover:text-primary transition-colors" />
                </div>
                <p className="text-sm leading-relaxed text-muted-foreground">{card.desc}</p>
              </div>
            </Link>
          ))}
        </div>
      </section>

      {/* ── Disclaimer ── */}
      <section className="max-w-5xl mx-auto px-6 pb-16">
        <p className="text-xs leading-relaxed text-muted-foreground border-t border-border pt-6">
          <strong className="text-foreground">Educational purposes only.</strong> RegVarsity
          provides general information about UK and EU financial regulation. It is not legal or
          compliance advice, and it is not affiliated with or endorsed by the FCA. For
          compliance decisions, consult the{" "}
          <a href="https://handbook.fca.org.uk" target="_blank" rel="noopener noreferrer" className="underline">
            FCA Handbook
          </a>{" "}
          and qualified counsel.
        </p>
      </section>
    </PageLayout>
  );
}
