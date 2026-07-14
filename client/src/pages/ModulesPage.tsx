import { ALL_MODULES } from "@/data/modules";
import { Link } from "wouter";
import PageLayout from "@/components/PageLayout";
import { useProgress } from "@/hooks/useProgress";

export default function ModulesPage() {
  const totalChapters = ALL_MODULES.reduce((sum, m) => sum + m.chapters.length, 0);
  const totalReadingTime = ALL_MODULES.reduce(
    (sum, m) => sum + m.chapters.reduce((s, c) => s + c.readingTimeMinutes, 0),
    0
  );

  const progress = useProgress();
  const totalCompleted = progress.getOverallStats().chaptersRead;

  // Group modules by block, preserving order
  const blocks: { block: string; mods: typeof ALL_MODULES }[] = [];
  ALL_MODULES.forEach((mod) => {
    const last = blocks[blocks.length - 1];
    if (last && last.block === mod.block) last.mods.push(mod);
    else blocks.push({ block: mod.block, mods: [mod] });
  });

  return (
    <PageLayout>
      {/* Header */}
      <section className="border-b border-border">
        <div className="max-w-5xl mx-auto px-6 py-14">
          <p className="overline-kicker mb-4">The Library</p>
          <h1 className="mb-4">All modules</h1>
          <p className="text-lg max-w-2xl text-muted-foreground mb-6">
            Structured, plain-English guides to every major area of UK financial regulation,
            plus the EU frameworks employers expect you to know. Start anywhere, each module
            is self-contained.
          </p>
          <p className="text-sm text-muted-foreground">
            {ALL_MODULES.length} modules · {totalChapters} chapters · ~
            {Math.round(totalReadingTime / 60)} hours of reading
            {totalCompleted > 0 && (
              <span className="text-primary font-semibold"> · {totalCompleted} chapters completed</span>
            )}
          </p>
        </div>
      </section>

      {/* Modules grouped by block */}
      <section className="max-w-5xl mx-auto px-6 py-12">
        {blocks.map(({ block, mods }) => (
          <div key={block} className="mb-12">
            <p className="overline-kicker mb-4">{block}</p>
            <ol className="border-t border-border">
              {mods.map((mod) => {
                const totalTime = mod.chapters.reduce((s, c) => s + c.readingTimeMinutes, 0);
                const mp = progress.getModuleProgress(mod);
                return (
                  <li key={mod.id} className="border-b border-border">
                    <Link href={`/learn/${mod.slug}`}>
                      <div className="group grid grid-cols-[3rem_1fr] md:grid-cols-[4.5rem_1fr_auto] items-baseline gap-x-4 py-6 cursor-pointer">
                        <span className="font-serif text-2xl md:text-3xl text-muted-foreground/60 group-hover:text-primary transition-colors tabular-nums">
                          {String(mod.number).padStart(2, "0")}
                        </span>
                        <div className="min-w-0">
                          <h2 className="font-serif text-xl md:text-2xl leading-snug group-hover:text-primary transition-colors mb-1.5">
                            {mod.title}
                          </h2>
                          <p className="text-sm text-muted-foreground leading-relaxed max-w-2xl mb-2">
                            {mod.description}
                          </p>
                          <p className="text-xs text-muted-foreground tabular-nums">
                            {mod.chapters.length} chapter{mod.chapters.length !== 1 ? "s" : ""} ·{" "}
                            {totalTime} min
                            {mp.readCount > 0 && (
                              <span className="text-primary font-semibold">
                                {" "}
                                · {mp.readCount}/{mp.totalChapters} read
                              </span>
                            )}
                            {mp.badgeEarned && (
                              <span className="text-primary font-semibold"> · badge earned ✓</span>
                            )}
                          </p>
                        </div>
                        <span className="hidden md:inline text-sm text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all">
                          →
                        </span>
                      </div>
                    </Link>
                  </li>
                );
              })}
            </ol>
          </div>
        ))}

        {/* Footer note */}
        <p className="text-sm text-muted-foreground border-t border-border pt-6">
          <strong className="text-foreground">Content is reviewed regularly.</strong> Everything
          here reflects the regulatory position as of July 2026. Regulations change, always
          verify with the{" "}
          <a
            href="https://handbook.fca.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            FCA Handbook
          </a>
          ,{" "}
          <a
            href="https://eur-lex.europa.eu"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            EUR-Lex
          </a>{" "}
          or the{" "}
          <a
            href="https://ico.org.uk"
            target="_blank"
            rel="noopener noreferrer"
            className="underline underline-offset-2"
          >
            ICO
          </a>{" "}
          for the latest position.
        </p>
      </section>
    </PageLayout>
  );
}
