import { Link } from "wouter";
import { ArrowRight, ExternalLink, Clock, AlertCircle } from "lucide-react";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/contexts/ThemeContext";

export interface RegSection {
  id: string;
  title: string;
  plain: string;
  detail: string;
}

export interface RegUpdate {
  date: string;
  title: string;
  description: string;
  type: "new" | "amended" | "upcoming";
}

export interface RegPageConfig {
  topic: string;
  topicKey: string;
  icon: React.ReactNode;
  accent: string;
  darkAccent?: string;
  bg: string;
  subtitle: string;
  heroText: string;
  lastUpdated: string;
  whoItAppliesTo: string[];
  keyFacts: { label: string; value: string }[];
  sections: RegSection[];
  updates: RegUpdate[];
  exerciseHref: string;
}

export default function RegulationPageTemplate({ config }: { config: RegPageConfig }) {
  const { theme } = useTheme();
  const isDark = theme === "dark";
  const activeAccent = isDark && config.darkAccent ? config.darkAccent : config.accent;

  const updateTypeStyles: Record<string, { bg: string; text: string; label: string }> = {
    new: { bg: "oklch(0.55 0.14 155 / 0.12)", text: "oklch(0.35 0.14 155)", label: "New" },
    amended: { bg: "oklch(0.78 0.14 85 / 0.15)", text: "oklch(0.45 0.14 75)", label: "Amended" },
    upcoming: { bg: "oklch(0.65 0.18 290 / 0.1)", text: "oklch(0.4 0.18 290)", label: "Upcoming" },
  };

  return (
    <div>
      {/* ── PAGE HERO ── */}
      <section
        className="py-14 md:py-20"
        style={{ background: `linear-gradient(135deg, ${config.bg} 0%, transparent 60%)` }}
      >
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-4">
              <div
                className="flex h-12 w-12 items-center justify-center rounded-xl"
                style={{ backgroundColor: config.bg, color: config.accent }}
              >
                {config.icon}
              </div>
              <div>
                <span className="badge-pill" style={{ backgroundColor: config.bg, color: config.accent }}>
                  {config.topicKey}
                </span>
              </div>
            </div>
            <h1 className="font-bold mb-3" style={{ color: "var(--foreground)" }}>
              {config.topic}
            </h1>
            <p className="text-base font-medium mb-4" style={{ color: activeAccent }}>
              {config.subtitle}
            </p>
            <p className="text-lg leading-relaxed mb-6" style={{ color: "var(--muted-foreground)" }}>
              {config.heroText}
            </p>
            <div className="flex flex-wrap gap-3">
              <Link href={config.exerciseHref}>
                <Button
                  size="sm"
                  className="gap-2"
                  style={{ backgroundColor: config.accent, color: "white" }}
                >
                  Practice Exercises
                  <ArrowRight size={14} />
                </Button>
              </Link>
              <div
                className="flex items-center gap-1.5 text-xs px-3 py-1.5 rounded-full"
                style={{ backgroundColor: "var(--surface-2)", color: "var(--muted-foreground)" }}
              >
                <Clock size={12} />
                Last updated: {config.lastUpdated}
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="container py-10">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-10">
          {/* ── MAIN CONTENT ── */}
          <div className="lg:col-span-2 space-y-10">
            {/* Key Facts */}
            <div className="card-base p-6">
              <h2 className="font-bold text-xl mb-4" style={{ color: "var(--foreground)" }}>
                At a Glance
              </h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                {config.keyFacts.map((fact) => (
                  <div
                    key={fact.label}
                    className="p-3 rounded-lg"
                    style={{ backgroundColor: "var(--surface-2)" }}
                  >
                    <div className="text-xs font-semibold uppercase tracking-wider mb-1" style={{ color: "var(--muted-foreground)" }}>
                      {fact.label}
                    </div>
                    <div className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                      {fact.value}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Content Sections */}
            {config.sections.map((section) => (
              <div key={section.id} id={section.id} className="scroll-mt-20">
                <h2 className="font-bold text-2xl mb-4" style={{ color: "var(--foreground)" }}>
                  {section.title}
                </h2>
                {/* Plain English box */}
                <div
                  className="p-4 rounded-xl mb-4 border-l-4"
                  style={{
                    backgroundColor: `${config.accent}10`,
                    borderLeftColor: config.accent,
                  }}
                >
                  <div className="flex items-start gap-2">
                    <span className="text-xs font-bold uppercase tracking-wider shrink-0 mt-0.5" style={{ color: config.accent }}>
                      Plain English
                    </span>
                  </div>
                  <p className="text-sm leading-relaxed mt-1" style={{ color: "var(--foreground)" }}>
                    {section.plain}
                  </p>
                </div>
                {/* Detail */}
                <div className="text-sm leading-relaxed content-prose" style={{ color: "var(--muted-foreground)" }}
                  dangerouslySetInnerHTML={{ __html: section.detail }}
                />
              </div>
            ))}

            {/* Disclaimer */}
            <div
              className="flex gap-3 p-4 rounded-xl border"
              style={{ backgroundColor: "var(--surface-2)", borderColor: "var(--border)" }}
            >
              <AlertCircle size={18} className="shrink-0 mt-0.5" style={{ color: "var(--muted-foreground)" }} />
              <p className="text-xs leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                This page is for educational purposes only and does not constitute legal or compliance advice.
                Always refer to the{" "}
                <a href="https://www.fca.org.uk" target="_blank" rel="noopener noreferrer" className="underline">
                  FCA website
                </a>{" "}
                and official legislation for authoritative guidance.
              </p>
            </div>
          </div>

          {/* ── SIDEBAR ── */}
          <div className="space-y-6">
            {/* Who it applies to */}
            <div className="card-base p-5">
              <h3 className="font-bold text-lg mb-3" style={{ color: "var(--foreground)" }}>
                Who Does This Apply To?
              </h3>
              <ul className="space-y-2">
                {config.whoItAppliesTo.map((item) => (
                  <li key={item} className="flex items-start gap-2 text-sm" style={{ color: "var(--muted-foreground)" }}>
                    <span className="mt-1.5 h-1.5 w-1.5 rounded-full shrink-0" style={{ backgroundColor: config.accent }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Recent Updates */}
            <div className="card-base p-5">
              <h3 className="font-bold text-lg mb-3" style={{ color: "var(--foreground)" }}>
                Recent Updates
              </h3>
              <div className="space-y-3">
                {config.updates.map((update, i) => {
                  const style = updateTypeStyles[update.type];
                  return (
                    <div key={i} className="border-b border-border last:border-0 pb-3 last:pb-0">
                      <div className="flex items-center gap-2 mb-1">
                        <span
                          className="badge-pill text-xs"
                          style={{ backgroundColor: style.bg, color: style.text }}
                        >
                          {style.label}
                        </span>
                        <span className="text-xs" style={{ color: "var(--muted-foreground)" }}>
                          {update.date}
                        </span>
                      </div>
                      <p className="text-sm font-medium" style={{ color: "var(--foreground)" }}>
                        {update.title}
                      </p>
                      <p className="text-xs mt-0.5 leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                        {update.description}
                      </p>
                    </div>
                  );
                })}
              </div>
              <Link href="/whats-new">
                <span className="text-xs font-semibold flex items-center gap-1 mt-3" style={{ color: config.accent }}>
                  View all updates <ArrowRight size={12} />
                </span>
              </Link>
            </div>

            {/* Exercise CTA */}
            <div
              className="p-5 rounded-xl"
              style={{ backgroundColor: config.bg }}
            >
              <h3 className="font-bold text-lg mb-2" style={{ color: config.accent }}>
                Test Your Knowledge
              </h3>
              <p className="text-sm mb-4" style={{ color: "var(--muted-foreground)" }}>
                Ready to practise? Try scenario-based questions on this topic.
              </p>
              <Link href={config.exerciseHref}>
                <Button
                  size="sm"
                  className="w-full gap-2"
                  style={{ backgroundColor: config.accent, color: "white" }}
                >
                  Start Exercises
                  <ArrowRight size={14} />
                </Button>
              </Link>
            </div>

            {/* Official links */}
            <div className="card-base p-5">
              <h3 className="font-bold text-base mb-3" style={{ color: "var(--foreground)" }}>
                Official Sources
              </h3>
              <ul className="space-y-2">
                {[
                  { href: "https://www.fca.org.uk", label: "FCA Website" },
                  { href: "https://handbook.fca.org.uk", label: "FCA Handbook" },
                  { href: "https://www.legislation.gov.uk", label: "UK Legislation" },
                ].map((l) => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1.5 text-sm hover:underline"
                      style={{ color: "var(--brand-teal)" }}
                    >
                      <ExternalLink size={12} />
                      {l.label}
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
