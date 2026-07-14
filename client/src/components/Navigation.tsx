import { useState, useRef, useEffect } from "react";
import { Link, useLocation } from "wouter";
import { useTheme, Theme } from "@/contexts/ThemeContext";
import { Button } from "@/components/ui/button";
import {
  Sheet,
  SheetContent,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  Sun,
  Moon,
  Contrast,
  Menu,
  X,
  BookOpen,
  GraduationCap,
  BookMarked,
  ChevronDown,
  Newspaper,
  Sparkles,
  Library,
  Medal,
} from "lucide-react";
import { ALL_MODULES } from "@/data/modules";

const themeOptions: { value: Theme; label: string; icon: React.ReactNode }[] = [
  { value: "normal", label: "Light", icon: <Sun size={15} /> },
  { value: "dark", label: "Dark", icon: <Moon size={15} /> },
  { value: "high-contrast", label: "Contrast", icon: <Contrast size={15} /> },
];

export default function Navigation() {
  const [location] = useLocation();
  const { theme, setTheme } = useTheme();
  const [mobileOpen, setMobileOpen] = useState(false);
  const [learnOpen, setLearnOpen] = useState(false);
  const learnTimeoutRef = useRef<ReturnType<typeof setTimeout> | null>(null);

  const isActive = (href: string) =>
    location === href || (href !== "/" && location.startsWith(href));

  const learnActive = location.startsWith("/learn");

  // Delayed close to prevent flicker when moving between trigger and panel
  const handleLearnEnter = () => {
    if (learnTimeoutRef.current) {
      clearTimeout(learnTimeoutRef.current);
      learnTimeoutRef.current = null;
    }
    setLearnOpen(true);
  };
  const handleLearnLeave = () => {
    learnTimeoutRef.current = setTimeout(() => setLearnOpen(false), 150);
  };

  useEffect(() => {
    return () => {
      if (learnTimeoutRef.current) clearTimeout(learnTimeoutRef.current);
    };
  }, []);

  // Split modules into two columns
  const col1 = ALL_MODULES.slice(0, 8);
  const col2 = ALL_MODULES.slice(8);

  return (
    <header className="sticky top-0 z-50 w-full border-b border-border bg-background/95 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex h-16 items-center justify-between gap-4">

          {/* Logo */}
          <Link href="/" className="flex items-center gap-2.5 shrink-0 group">
            <div className="logo-icon flex h-9 w-9 items-center justify-center rounded-md font-serif text-lg font-semibold">
              §
            </div>
            <span className="font-serif text-xl font-semibold tracking-tight text-foreground">
              RegVarsity
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1" aria-label="Main navigation">

            {/* Learn mega-dropdown */}
            <div
              className="relative"
              onMouseEnter={handleLearnEnter}
              onMouseLeave={handleLearnLeave}
            >
              <button
                className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent/50 ${
                  learnActive ? "text-primary" : "text-foreground"
                }`}
                onClick={() => setLearnOpen(!learnOpen)}
                aria-expanded={learnOpen}
              >
                Learn
                <ChevronDown
                  size={13}
                  className="transition-transform duration-200"
                  style={{ transform: learnOpen ? "rotate(180deg)" : "rotate(0deg)" }}
                />
              </button>

              {/* Invisible bridge to prevent gap-based close */}
              {learnOpen && (
                <div className="absolute top-full left-0 w-full h-3" />
              )}

              {/* Mega-menu panel */}
              {learnOpen && (
                <div
                  className="absolute top-[calc(100%+0.5rem)] left-0 rounded-xl border border-border shadow-xl bg-popover z-50 overflow-hidden animate-fade-in"
                  style={{ width: "560px" }}
                >
                  {/* Header */}
                  <div className="px-4 py-3 border-b border-border flex items-center justify-between bg-muted/50">
                    <span className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                      All Learning Modules
                    </span>
                    <Link
                      href="/learn"
                      className="text-xs font-semibold text-primary hover:underline"
                      onClick={() => setLearnOpen(false)}
                    >
                      Browse all →
                    </Link>
                  </div>

                  {/* Two-column module list */}
                  <div className="grid grid-cols-2 gap-0 p-3">
                    {[col1, col2].map((col, ci) => (
                      <div key={ci} className="space-y-0.5">
                        {col.map((mod) => (
                          <Link
                            key={mod.id}
                            href={`/learn/${mod.slug}`}
                            onClick={() => setLearnOpen(false)}
                            className="flex items-center gap-2.5 px-3 py-2 rounded-lg text-sm transition-colors hover:bg-accent/30 group/item"
                          >
                            <span className="flex-shrink-0 w-6 font-serif text-base text-muted-foreground/70 text-right tabular-nums">
                              {String(mod.number).padStart(2, "0")}
                            </span>
                            <div className="min-w-0">
                              <div className="font-medium leading-snug truncate text-foreground group-hover/item:text-primary" style={{ fontSize: "0.8rem" }}>
                                {mod.title}
                              </div>
                              <div className="text-xs font-mono text-muted-foreground">
                                {mod.sourceCode}
                              </div>
                            </div>
                          </Link>
                        ))}
                      </div>
                    ))}
                  </div>
                </div>
              )}
            </div>

            {/* Exercises */}
            <Link
              href="/exercises"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent/50 ${
                isActive("/exercises") ? "text-primary" : "text-foreground"
              }`}
            >
              Exercises
            </Link>

            {/* Glossary */}
            <Link
              href="/glossary"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent/50 ${
                isActive("/glossary") ? "text-primary" : "text-foreground"
              }`}
            >
              Glossary
            </Link>

            {/* What's New */}
            <Link
              href="/whats-new"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent/50 ${
                isActive("/whats-new") ? "text-primary" : "text-foreground"
              }`}
            >
              What's New
            </Link>

            {/* My Progress */}
            <Link
              href="/progress"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent/50 ${
                isActive("/progress") ? "text-primary" : "text-foreground"
              }`}
            >
              My Progress
            </Link>

            {/* AI Expert */}
            <Link
              href="/ai-expert"
              className={`flex items-center gap-1.5 px-3 py-2 rounded-md text-sm font-medium transition-colors hover:bg-accent/50 ${
                isActive("/ai-expert") ? "text-primary" : "text-foreground"
              }`}
            >
              AI Expert
            </Link>
          </nav>

          {/* Right: theme switcher + mobile menu */}
          <div className="flex items-center gap-2">
            {/* Theme switcher, segmented control */}
            <div className="hidden md:flex items-center rounded-lg border border-border p-0.5 gap-0.5 bg-muted/50">
              {themeOptions.map((opt) => (
                <button
                  key={opt.value}
                  onClick={() => setTheme(opt.value)}
                  className={`flex items-center gap-1.5 px-2.5 py-1.5 rounded-md text-xs font-medium transition-all ${
                    theme === opt.value
                      ? "bg-background text-foreground shadow-sm"
                      : "text-muted-foreground hover:text-foreground"
                  }`}
                  aria-pressed={theme === opt.value}
                  title={opt.label}
                >
                  {opt.icon}
                  <span className="hidden xl:inline">{opt.label}</span>
                </button>
              ))}
            </div>

            {/* Mobile menu */}
            <Sheet open={mobileOpen} onOpenChange={setMobileOpen}>
              <SheetTrigger asChild>
                <Button
                  variant="ghost"
                  size="icon"
                  className="h-9 w-9 lg:hidden"
                  aria-label="Open navigation menu"
                >
                  <Menu size={18} />
                </Button>
              </SheetTrigger>
              <SheetContent side="right" className="w-80 p-0 bg-background">
                <div className="flex flex-col h-full">
                  <div className="flex items-center justify-between p-4 border-b border-border">
                    <span className="font-bold text-lg text-foreground">Menu</span>
                    <Button variant="ghost" size="icon" onClick={() => setMobileOpen(false)}>
                      <X size={18} />
                    </Button>
                  </div>
                  <nav className="flex-1 overflow-y-auto p-4 space-y-1">
                    <p className="text-xs font-semibold uppercase tracking-wider px-3 py-2 text-muted-foreground">
                      Learn
                    </p>
                    <Link
                      href="/learn"
                      onClick={() => setMobileOpen(false)}
                      className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-accent/30 ${
                        isActive("/learn") ? "text-primary" : "text-foreground"
                      }`}
                    >
                      <Library size={15} />
                      All Modules
                    </Link>
                    {ALL_MODULES.map((mod) => (
                      <Link
                        key={mod.id}
                        href={`/learn/${mod.slug}`}
                        onClick={() => setMobileOpen(false)}
                        className={`flex items-center gap-3 px-3 py-2 rounded-lg text-sm transition-colors hover:bg-accent/30 ${
                          isActive(`/learn/${mod.slug}`) ? "text-primary" : "text-muted-foreground"
                        }`}
                      >
                        <div
                          className="flex-shrink-0 w-5 h-5 rounded flex items-center justify-center text-white text-xs font-bold"
                          style={{ backgroundColor: mod.accentColour }}
                        >
                          {mod.number}
                        </div>
                        <span className="truncate">{mod.title}</span>
                      </Link>
                    ))}
                    <div className="h-px my-2 bg-border" />
                    {[
                      { href: "/exercises", label: "Exercises", icon: GraduationCap },
                      { href: "/glossary", label: "Glossary", icon: BookMarked },
                      { href: "/whats-new", label: "What's New", icon: Newspaper },
                      { href: "/progress", label: "My Progress", icon: Medal },
                      { href: "/ai-expert", label: "AI Expert", icon: Sparkles },
                    ].map((link) => {
                      const Icon = link.icon;
                      return (
                        <Link
                          key={link.href}
                          href={link.href}
                          onClick={() => setMobileOpen(false)}
                          className={`flex items-center gap-3 px-3 py-2.5 rounded-lg text-sm font-medium transition-colors hover:bg-accent/30 ${
                            isActive(link.href) ? "text-primary" : "text-foreground"
                          }`}
                        >
                          <Icon size={15} />
                          {link.label}
                        </Link>
                      );
                    })}
                  </nav>
                  <div className="p-4 border-t border-border">
                    <p className="text-xs font-semibold uppercase tracking-wider mb-2 px-1 text-muted-foreground">
                      Display Mode
                    </p>
                    <div className="flex gap-2">
                      {themeOptions.map((opt) => (
                        <button
                          key={opt.value}
                          onClick={() => setTheme(opt.value)}
                          className={`flex-1 flex flex-col items-center gap-1 py-2 px-1 rounded-lg text-xs font-medium transition-all border ${
                            theme === opt.value
                              ? "border-primary bg-primary/10 text-primary"
                              : "border-border text-muted-foreground hover:text-foreground"
                          }`}
                          aria-pressed={theme === opt.value}
                        >
                          {opt.icon}
                          {opt.label}
                        </button>
                      ))}
                    </div>
                  </div>
                </div>
              </SheetContent>
            </Sheet>
          </div>
        </div>
      </div>
    </header>
  );
}
