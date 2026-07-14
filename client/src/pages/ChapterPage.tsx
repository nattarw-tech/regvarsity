import { getChapterBySlug } from "@/data/modules";
import { Link, useParams } from "wouter";
import PageLayout from "@/components/PageLayout";
import {
  ArrowLeft,
  ArrowRight,
  BookOpen,
  CheckCircle,
  ChevronRight,
  Clock,
  Copy,
  ExternalLink,
  Share2,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useEffect, useMemo, useRef, useState } from "react";
import { Streamdown } from "streamdown";
import { toast } from "sonner";
import { useProgress, recordVisit } from "@/hooks/useProgress";
import QuickCheck from "@/components/QuickCheck";
import ListenPlayer from "@/components/ListenPlayer";
import { useTTS, type TTSChunk } from "@/hooks/useTTS";
import { stripMarkdown } from "@/lib/stripMarkdown";

export default function ChapterPage() {
  const params = useParams<{ moduleSlug: string; chapterSlug: string }>();
  const result = getChapterBySlug(params.moduleSlug ?? "", params.chapterSlug ?? "");
  const progress = useProgress();
  const [activeSection, setActiveSection] = useState<string>("");
  const [shareOpen, setShareOpen] = useState(false);
  const contentRef = useRef<HTMLDivElement>(null);

  // Audio: title + intro, then each subsection, as ordered speech chunks
  const ttsChunks = useMemo<TTSChunk[]>(() => {
    if (!result) return [];
    const { chapter } = result;
    return [
      { sectionId: "", text: `${chapter.title}. ${chapter.intro}` },
      ...chapter.subSections.map((s) => ({
        sectionId: s.id,
        text: `${s.heading.replace(/^[\d.\s, -]+/, "")}. ${stripMarkdown(s.content)}`,
      })),
    ];
  }, [result?.chapter.id]);
  const tts = useTTS(ttsChunks);

  useEffect(() => {
    if (result) {
      recordVisit(result.module, result.chapter);
      setActiveSection(result.chapter.subSections[0]?.id ?? "");
      window.scrollTo(0, 0);
    }
  }, [result?.chapter.id]);

  // Intersection observer for sidebar highlighting
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0px -70% 0px" }
    );
    const headings = document.querySelectorAll("[data-section-id]");
    headings.forEach((el) => observer.observe(el));
    return () => observer.disconnect();
  }, [result?.chapter.id]);

  const handleMarkRead = () => {
    if (result) {
      progress.markChapterRead(result.module, result.chapter);
      toast.success("Chapter marked as read!");
    }
  };

  const handleShare = (method: "copy" | "twitter" | "linkedin") => {
    const url = window.location.href;
    const title = result ? `${result.chapter.title} - RegVarsity` : "RegVarsity";
    if (method === "copy") {
      navigator.clipboard.writeText(url).then(() => toast.success("Link copied to clipboard!"));
    } else if (method === "twitter") {
      window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`, "_blank");
    } else if (method === "linkedin") {
      window.open(`https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`, "_blank");
    }
    setShareOpen(false);
  };

  if (!result) {
    return (
      <PageLayout>
        <div className="max-w-3xl mx-auto px-4 py-20 text-center">
          <h1 className="text-2xl font-bold text-foreground mb-4">Chapter not found</h1>
          <Link href="/learn">
            <span className="text-primary underline cursor-pointer">Back to all modules</span>
          </Link>
        </div>
      </PageLayout>
    );
  }

  const { module: mod, chapter, prevChapter, nextChapter } = result;
  const isRead = progress.isChapterRead(chapter.id);

  return (
    <PageLayout>
      <div className="max-w-7xl mx-auto px-4 py-8">
        {/* Breadcrumb */}
        <nav className="flex items-center gap-2 text-sm text-muted-foreground mb-8 flex-wrap">
          <Link href="/learn">
            <span className="hover:text-primary cursor-pointer transition-colors">Modules</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <Link href={`/learn/${mod.slug}`}>
            <span className="hover:text-primary cursor-pointer transition-colors">{mod.title}</span>
          </Link>
          <ChevronRight className="w-3.5 h-3.5" />
          <span className="text-foreground font-medium">{chapter.title}</span>
        </nav>

        <div className="flex gap-10">
          {/* ── Left sidebar: chapter list ── */}
          <aside className="hidden lg:block w-64 flex-shrink-0">
            <div className="sticky top-24">
              <Link href={`/learn/${mod.slug}`}>
                <div className="flex items-center gap-2 mb-4 text-sm text-muted-foreground hover:text-primary cursor-pointer transition-colors">
                  <ArrowLeft className="w-4 h-4" />
                  Back to module
                </div>
              </Link>
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                {mod.title}
              </div>
              <nav className="space-y-1">
                {mod.chapters.map((ch, idx) => {
                  const read = progress.isChapterRead(ch.id);
                  const isCurrent = ch.id === chapter.id;
                  return (
                    <Link key={ch.id} href={`/learn/${mod.slug}/${ch.slug}`}>
                      <div
                        className={`flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm cursor-pointer transition-all ${
                          isCurrent
                            ? "bg-primary/10 text-primary font-semibold"
                            : "text-muted-foreground hover:bg-muted hover:text-foreground"
                        }`}
                      >
                        <span
                          className={`flex-shrink-0 w-5 h-5 rounded-full flex items-center justify-center text-xs font-bold ${
                            read
                              ? "text-primary"
                              : isCurrent
                              ? "bg-primary text-white"
                              : "bg-muted/70 text-muted-foreground"
                          }`}
                        >
                          {read ? <CheckCircle className="w-4 h-4" /> : idx + 1}
                        </span>
                        <span className="line-clamp-2">{ch.title}</span>
                      </div>
                    </Link>
                  );
                })}
              </nav>
            </div>
          </aside>

          {/* ── Main content ── */}
          <main className="flex-1 min-w-0" ref={contentRef}>
            {/* Chapter header */}
            <div className="mb-10 max-w-[72ch]">
              <p className="overline-kicker mb-3">
                Chapter {chapter.number} · {chapter.readingTimeMinutes} min read
                {isRead && <span className="text-brand-sage"> · ✓ Read</span>}
              </p>
              <h1 className="mb-5">{chapter.title}</h1>
              <p className="font-serif text-lg md:text-xl text-muted-foreground leading-relaxed italic">
                {chapter.intro}
              </p>
              {tts.supported && (
                <ListenPlayer
                  status={tts.status}
                  rate={tts.rate}
                  onPlay={tts.play}
                  onPause={tts.pause}
                  onStop={tts.stop}
                  onRateChange={tts.changeRate}
                />
              )}
            </div>

            {/* Sub-sections */}
            <div className="space-y-12 max-w-[72ch]">
              {chapter.subSections.map((section) => (
                <div
                  key={section.id}
                  id={section.id}
                  data-section-id={section.id}
                  className={`scroll-mt-24 transition-all ${
                    tts.currentSectionId === section.id
                      ? "border-l-2 border-primary/60 pl-4 -ml-4"
                      : ""
                  }`}
                >
                  <h2 className="text-xl md:text-2xl mb-4 pb-3 border-b border-border">
                    {section.heading}
                  </h2>
                  <div className="prose prose-slate dark:prose-invert max-w-none text-foreground/85 leading-relaxed">
                    <Streamdown>{section.content}</Streamdown>
                  </div>
                </div>
              ))}
            </div>

            {/* Key Takeaways */}
            <div className="mt-14 max-w-[72ch] border-t-2 border-foreground pt-6">
              <p className="overline-kicker mb-5">Key takeaways</p>
              <ul className="space-y-3">
                {chapter.keyTakeaways.map((kt, i) => (
                  <li key={i} className="grid grid-cols-[2rem_1fr] gap-3 text-sm leading-relaxed text-foreground/85">
                    <span className="font-serif text-lg text-primary tabular-nums">
                      {String(i + 1).padStart(2, "0")}
                    </span>
                    <span className="pt-0.5">{kt.text}</span>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Check quiz */}
            {chapter.quizQuestions && chapter.quizQuestions.length > 0 && (
              <QuickCheck module={mod} chapter={chapter} questions={chapter.quizQuestions} />
            )}

            {/* Source line */}
            <p className="mt-8 max-w-[72ch] text-xs text-muted-foreground border-t border-border pt-4">
              Source:{" "}
              {mod.sourceUrl ? (
                <a
                  href={mod.sourceUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  {mod.sourceLabel ?? mod.sourceCode}
                </a>
              ) : /^[A-Z]+$/.test(mod.sourceCode) ? (
                <a
                  href={`https://handbook.fca.org.uk/handbook/${mod.sourceCode}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="underline underline-offset-2"
                >
                  FCA Handbook - {mod.sourceCode}
                </a>
              ) : (
                <span>{mod.sourceCode}</span>
              )}{" "}
              · Last reviewed {mod.lastReviewed ?? "July 2026"} · Educational purposes only, not legal advice.
            </p>

            {/* Actions row */}
            <div className="mt-6 flex flex-wrap items-center gap-3">
              {!isRead && (
                <button
                  onClick={handleMarkRead}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-md text-sm font-semibold bg-primary text-primary-foreground hover:opacity-90 transition-opacity"
                >
                  <CheckCircle className="w-4 h-4" />
                  Mark as Read
                </button>
              )}

              {/* Share button */}
              <div className="relative">
                <button
                  onClick={() => setShareOpen((v) => !v)}
                  className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-muted text-muted-foreground border border-border hover:border-primary hover:text-primary transition-all"
                >
                  <Share2 className="w-4 h-4" />
                  Share
                </button>
                {shareOpen && (
                  <div className="absolute bottom-full left-0 mb-2 bg-card border border-border rounded-xl shadow-xl p-2 min-w-[180px] z-50">
                    <button
                      onClick={() => handleShare("copy")}
                      className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-lg transition-colors"
                    >
                      <Copy className="w-4 h-4" />
                      Copy link
                    </button>
                    <button
                      onClick={() => handleShare("twitter")}
                      className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-lg transition-colors"
                    >
                      <Twitter className="w-4 h-4" />
                      Share on X
                    </button>
                    <button
                      onClick={() => handleShare("linkedin")}
                      className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-muted-foreground hover:bg-muted rounded-lg transition-colors"
                    >
                      <Linkedin className="w-4 h-4" />
                      Share on LinkedIn
                    </button>
                  </div>
                )}
              </div>

              <a
                href="https://handbook.fca.org.uk"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center gap-2 px-5 py-2.5 rounded-xl text-sm font-semibold bg-muted text-muted-foreground border border-border hover:border-primary hover:text-primary transition-all"
              >
                <ExternalLink className="w-4 h-4" />
                FCA Handbook
              </a>
            </div>

            {/* Prev / Next navigation */}
            <div className="mt-10 grid grid-cols-1 sm:grid-cols-2 gap-4">
              {prevChapter ? (
                <Link href={`/learn/${mod.slug}/${prevChapter.slug}`}>
                  <div className="group flex items-center gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary hover:shadow-md transition-all cursor-pointer">
                    <ArrowLeft className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:-translate-x-1 transition-all flex-shrink-0" />
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">Previous</div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {prevChapter.title}
                      </div>
                    </div>
                  </div>
                </Link>
              ) : (
                <div />
              )}
              {nextChapter ? (
                <Link href={`/learn/${mod.slug}/${nextChapter.slug}`}>
                  <div className="group flex items-center justify-end gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary hover:shadow-md transition-all cursor-pointer text-right">
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">Next</div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors line-clamp-1">
                        {nextChapter.title}
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Link>
              ) : (
                <Link href={`/learn/${mod.slug}`}>
                  <div className="group flex items-center justify-end gap-3 p-4 bg-card border border-border rounded-xl hover:border-primary hover:shadow-md transition-all cursor-pointer text-right">
                    <div>
                      <div className="text-xs text-muted-foreground mb-0.5">Module complete</div>
                      <div className="text-sm font-semibold text-foreground group-hover:text-primary transition-colors">
                        Back to module overview
                      </div>
                    </div>
                    <ArrowRight className="w-5 h-5 text-muted-foreground group-hover:text-primary group-hover:translate-x-1 transition-all flex-shrink-0" />
                  </div>
                </Link>
              )}
            </div>
          </main>

          {/* ── Right sidebar: section nav ── */}
          <aside className="hidden xl:block w-52 flex-shrink-0">
            <div className="sticky top-24">
              <div className="text-xs font-semibold uppercase tracking-wider text-muted-foreground mb-3">
                On this page
              </div>
              <nav className="space-y-1">
                {chapter.subSections.map((section) => {
                  const isSpoken = tts.currentSectionId === section.id;
                  return (
                    <a
                      key={section.id}
                      href={`#${section.id}`}
                      className={`block text-xs py-1.5 px-2 rounded-lg transition-all ${
                        isSpoken || activeSection === section.id
                          ? "text-primary font-semibold bg-primary/10"
                          : "text-muted-foreground hover:text-foreground"
                      }`}
                    >
                      {isSpoken && <span aria-hidden="true">♪ </span>}
                      {section.heading}
                    </a>
                  );
                })}
              </nav>
            </div>
          </aside>
        </div>
      </div>
    </PageLayout>
  );
}
