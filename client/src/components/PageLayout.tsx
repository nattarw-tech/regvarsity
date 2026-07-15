import Navigation from "./Navigation";
import { Link } from "wouter";
import { BookOpen, ExternalLink } from "lucide-react";

interface PageLayoutProps {
  children: React.ReactNode;
}

export default function PageLayout({ children }: PageLayoutProps) {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Navigation />
      <main className="flex-1">{children}</main>
      <footer className="border-t border-border mt-16 bg-muted/50">
        <div className="container py-12">
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {/* Brand */}
            <div className="md:col-span-1">
              <div className="flex items-center gap-2.5 mb-3">
                <div className="logo-icon flex h-8 w-8 items-center justify-center rounded-md font-serif text-base font-semibold">
                  §
                </div>
                <span className="font-serif text-lg font-semibold text-foreground">
                  RegVarsity
                </span>
              </div>
              <p className="text-sm leading-relaxed mb-3 text-muted-foreground">
                UK and EU financial regulation explained in plain English, for
                everyone.
              </p>
              <p className="text-xs leading-relaxed text-muted-foreground">
                Created by{" "}
                <a
                  href="https://www.linkedin.com/in/nisrin-attarwala/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="font-semibold text-foreground underline hover:text-primary"
                >
                  Nisrin S Attarwala
                </a>
                <br />
                Bayes Business School, Class of 2026
              </p>
            </div>

            {/* Modules */}
            <div>
              <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-muted-foreground">
                Modules
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  {
                    href: "/learn/prin-principles-for-business",
                    label: "PRIN. Principles",
                  },
                  {
                    href: "/learn/sysc-smcr-senior-management",
                    label: "SYSC & SMCR",
                  },
                  {
                    href: "/learn/cobs-conduct-of-business",
                    label: "COBS. Conduct",
                  },
                  {
                    href: "/learn/aml-kyc-anti-money-laundering",
                    label: "AML / KYC",
                  },
                  { href: "/learn", label: "View all 17 →" },
                ].map(l => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Learn */}
            <div>
              <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-muted-foreground">
                Learn
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "/exercises", label: "Practice Exercises" },
                  { href: "/glossary", label: "Glossary" },
                  { href: "/whats-new", label: "What's New" },
                  { href: "/ai-expert", label: "AI Expert Chat" },
                ].map(l => (
                  <li key={l.href}>
                    <Link
                      href={l.href}
                      className="text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Official Sources */}
            <div>
              <h4 className="text-sm font-semibold mb-3 uppercase tracking-wider text-muted-foreground">
                Official Sources
              </h4>
              <ul className="space-y-2 text-sm">
                {[
                  { href: "https://www.fca.org.uk", label: "FCA Website" },
                  {
                    href: "https://handbook.fca.org.uk",
                    label: "FCA Handbook",
                  },
                  {
                    href: "https://www.legislation.gov.uk",
                    label: "UK Legislation",
                  },
                  {
                    href: "https://www.gov.uk/government/organisations/hm-treasury",
                    label: "HM Treasury",
                  },
                  {
                    href: "https://eur-lex.europa.eu",
                    label: "EUR-Lex (EU Law)",
                  },
                  { href: "https://ico.org.uk", label: "ICO" },
                ].map(l => (
                  <li key={l.href}>
                    <a
                      href={l.href}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="flex items-center gap-1 text-muted-foreground hover:text-foreground transition-colors"
                    >
                      {l.label}
                      <ExternalLink size={11} />
                    </a>
                  </li>
                ))}
              </ul>
            </div>
          </div>

          <div className="mt-10 pt-6 border-t border-border flex flex-col sm:flex-row items-center justify-between gap-3">
            <p className="text-xs text-muted-foreground">
              © 2026 RegVarsity. Educational purposes only, not legal or
              financial advice. Not affiliated with or endorsed by the FCA.
            </p>
            <p className="text-xs text-center text-muted-foreground">
              Last reviewed July 2026. Verify with official sources before
              acting.
            </p>
          </div>
        </div>
      </footer>
    </div>
  );
}
