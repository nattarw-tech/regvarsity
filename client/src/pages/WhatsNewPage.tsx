import PageLayout from "@/components/PageLayout";
import { Badge } from "@/components/ui/badge";
import {
  Calendar,
  ExternalLink,
  Mail,
  Share2,
  Copy,
  Twitter,
  Linkedin,
} from "lucide-react";
import { useState } from "react";
import { toast } from "sonner";

interface DigestItem {
  date: string;
  category:
    | "FCA"
    | "AML/KYC"
    | "MiFID II"
    | "Crypto"
    | "SMCR"
    | "ESG"
    | "Consumer Duty";
  title: string;
  summary: string;
  impact: "High" | "Medium" | "Low";
  sourceUrl?: string;
  sourceLabel?: string;
}

const DIGESTS: { month: string; year: number; items: DigestItem[] }[] = [
  {
    month: "July",
    year: 2026,
    items: [
      {
        date: "30 June 2026",
        category: "Crypto",
        title: "FCA publishes final crypto asset regime rules",
        summary:
          "The FCA published its final rules for the comprehensive crypto asset regime on 30 June 2026. The rules cover trading, custody, stablecoins, lending, and advice. The regime comes into force on 25 October 2027, with authorisation applications open from 30 September 2026. Firms already registered under the AML regime will have a streamlined authorisation process.",
        impact: "High",
        sourceUrl:
          "https://www.fca.org.uk/firms/new-regime-cryptoasset-regulation",
        sourceLabel: "FCA Crypto Regulation",
      },
    ],
  },
  {
    month: "March – April",
    year: 2026,
    items: [
      {
        date: "April 2026",
        category: "SMCR",
        title: "FCA and PRA finalise Phase 1 SMCR reforms",
        summary:
          "Following the July 2025 consultations (FCA CP25/21 and PRA CP18/25), the regulators published final rules on the first phase of SMCR reform, including more flexibility around senior manager approvals and streamlined certification. HM Treasury also confirmed Phase 2 legislative changes, including removing the Certification Regime from primary legislation.",
        impact: "Medium",
        sourceUrl:
          "https://www.fca.org.uk/publications/policy-statements/ps26-6-senior-managers-certification-regime-review",
        sourceLabel: "FCA PS26/6",
      },
      {
        date: "16 April 2026",
        category: "Consumer Duty",
        title: "FCA publishes observations on Consumer Duty board reports",
        summary:
          "The FCA reviewed the first two years of Consumer Duty board reports. Boards now formally review and approve reports, and most firms set out clear action plans with accountable owners. But monitoring of outcomes in distribution chains was often weak, and some reports still focus more on products and value than on customer understanding and support.",
        impact: "Medium",
        sourceUrl: "https://www.fca.org.uk/firms/consumer-duty",
        sourceLabel: "FCA Consumer Duty",
      },
      {
        date: "13 March 2026",
        category: "Consumer Duty",
        title: "FCA review of consumer understanding under the Duty",
        summary:
          "The FCA published good practice and areas for improvement on the consumer understanding outcome. Good practice included testing communications with real customers and using plain language with layered content. The FCA criticised firms that relied on sales data or the absence of complaints as evidence customers understood their products.",
        impact: "Medium",
        sourceUrl:
          "https://www.fca.org.uk/publications/good-and-poor-practice/consumer-understanding-good-practice-areas-improvement",
        sourceLabel: "FCA Good and Poor Practice",
      },
      {
        date: "March 2026",
        category: "FCA",
        title: "Motor finance consumer redress scheme confirmed",
        summary:
          "The FCA published PS26/3 confirming an industry-wide redress scheme for discretionary commission arrangements in motor finance. Around 12 million agreements are eligible, with estimated redress of £7.5 billion (around £9.1 billion including firms' costs). Parts of the scheme have since been paused pending legal challenges before the Upper Tribunal.",
        impact: "High",
        sourceUrl:
          "https://www.fca.org.uk/publications/policy-statements/ps26-3-motor-finance-consumer-redress-scheme",
        sourceLabel: "FCA PS26/3",
      },
    ],
  },
  {
    month: "Late",
    year: 2025,
    items: [
      {
        date: "1 December 2025",
        category: "FCA",
        title: "FSCS deposit protection limit rises to £120,000",
        summary:
          "The PRA raised the FSCS deposit protection limit from £85,000 to £120,000 per person per authorised institution, the first increase since 2017. The temporary high balance limit rose from £1 million to £1.4 million. The change applies to deposits only; the £85,000 limit for investment claims is unchanged.",
        impact: "High",
        sourceUrl:
          "https://www.fscs.org.uk/what-we-cover/banks-building-societies-credit-unions/deposit-limit-increase/",
        sourceLabel: "FSCS",
      },
      {
        date: "21 November 2025",
        category: "MiFID II",
        title: "FCA consults on overhaul of UK transaction reporting (CP25/32)",
        summary:
          "The FCA proposed streamlining UK MiFIR transaction reporting, cutting reporting fields from 65 to 52 and instrument reference data fields from 48 to 37, and removing FX derivatives from scope. The FCA estimates savings of around £100 million a year for firms. Comments closed 20 February 2026; a policy statement is expected in the second half of 2026.",
        impact: "High",
        sourceUrl: "https://www.fca.org.uk/markets/transaction-reporting",
        sourceLabel: "FCA Transaction Reporting",
      },
      {
        date: "24 October 2025",
        category: "AML/KYC",
        title: "FATF removes four countries from its grey list",
        summary:
          "At its October 2025 plenary, the FATF removed Burkina Faso, Mozambique, Nigeria, and South Africa from the grey list after they completed their action plans. No new jurisdictions were added. UK firms should update their risk assessments and Enhanced Due Diligence procedures to reflect the changes.",
        impact: "Medium",
        sourceUrl:
          "https://www.fatf-gafi.org/en/publications/High-risk-and-other-monitored-jurisdictions/increased-monitoring-october-2025.html",
        sourceLabel: "FATF October 2025 Statement",
      },
      {
        date: "17 July 2025",
        category: "AML/KYC",
        title: "2025 National Risk Assessment published",
        summary:
          "HM Treasury and the Home Office published the 2025 National Risk Assessment (NRA) on 17 July 2025, the first since 2020. The UK remains at high risk of money laundering. Cryptoasset risk was raised from medium to high, and key concerns include cash-based laundering, UK companies, sanctions evasion, and property.",
        impact: "High",
        sourceUrl:
          "https://www.gov.uk/government/publications/national-risk-assessment-of-money-laundering-and-terrorist-financing-2025",
        sourceLabel: "HM Treasury NRA 2025",
      },
    ],
  },
];

const categoryColours: Record<string, string> = {
  FCA: "bg-blue-100 text-blue-800 dark:bg-blue-900/30 dark:text-blue-300",
  "AML/KYC": "bg-teal-100 text-teal-800 dark:bg-teal-900/30 dark:text-teal-300",
  "MiFID II":
    "bg-emerald-100 text-emerald-800 dark:bg-emerald-900/30 dark:text-emerald-300",
  Crypto:
    "bg-violet-100 text-violet-800 dark:bg-violet-900/30 dark:text-violet-300",
  SMCR: "bg-purple-100 text-purple-800 dark:bg-purple-900/30 dark:text-purple-300",
  ESG: "bg-lime-100 text-lime-800 dark:bg-lime-900/30 dark:text-lime-300",
  "Consumer Duty":
    "bg-orange-100 text-orange-800 dark:bg-orange-900/30 dark:text-orange-300",
};

const impactColours: Record<string, string> = {
  High: "bg-red-100 text-red-700 dark:bg-red-900/30 dark:text-red-300",
  Medium:
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  Low: "bg-green-100 text-green-700 dark:bg-green-900/30 dark:text-green-300",
};

export default function WhatsNewPage() {
  const [shareOpen, setShareOpen] = useState(false);

  const handleShare = (method: "copy" | "twitter" | "linkedin") => {
    const url = window.location.href;
    const title = "What's New in UK and EU Financial Regulation | RegVarsity";
    if (method === "copy") {
      navigator.clipboard
        .writeText(url)
        .then(() => toast.success("Link copied to clipboard!"));
    } else if (method === "twitter") {
      window.open(
        `https://twitter.com/intent/tweet?text=${encodeURIComponent(title)}&url=${encodeURIComponent(url)}`,
        "_blank"
      );
    } else if (method === "linkedin") {
      window.open(
        `https://www.linkedin.com/sharing/share-offsite/?url=${encodeURIComponent(url)}`,
        "_blank"
      );
    }
    setShareOpen(false);
  };

  return (
    <PageLayout>
      {/* Header, clean white */}
      <section className="bg-background border-b border-border">
        <div className="max-w-4xl mx-auto px-4 py-12">
          <p className="text-sm font-semibold mb-2 text-primary">
            Monthly Regulatory Digest
          </p>
          <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight mb-3 text-foreground">
            What's New in UK Financial Regulation
          </h1>
          <p className="text-base max-w-2xl mb-6 text-muted-foreground">
            A plain-English summary of the most important regulatory changes,
            consultations, and enforcement actions, updated quarterly. Bookmark
            this page or share it with your team.
          </p>
          <div className="flex flex-wrap gap-3">
            <div className="relative">
              <button
                onClick={() => setShareOpen(v => !v)}
                className="flex items-center gap-2 px-4 py-2 rounded-lg text-sm font-semibold transition-all border border-border text-foreground bg-muted/50 hover:bg-muted"
              >
                <Share2 className="w-4 h-4" />
                Share this page
              </button>
              {shareOpen && (
                <div className="absolute top-full left-0 mt-2 bg-popover border border-border rounded-xl shadow-2xl p-2 min-w-[180px] z-50">
                  <button
                    onClick={() => handleShare("copy")}
                    className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-popover-foreground hover:bg-accent/30 rounded-lg transition-colors"
                  >
                    <Copy className="w-4 h-4" />
                    Copy link
                  </button>
                  <button
                    onClick={() => handleShare("twitter")}
                    className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-popover-foreground hover:bg-accent/30 rounded-lg transition-colors"
                  >
                    <Twitter className="w-4 h-4" />
                    Share on X
                  </button>
                  <button
                    onClick={() => handleShare("linkedin")}
                    className="flex items-center gap-2.5 w-full px-3 py-2 text-sm text-popover-foreground hover:bg-accent/30 rounded-lg transition-colors"
                  >
                    <Linkedin className="w-4 h-4" />
                    Share on LinkedIn
                  </button>
                </div>
              )}
            </div>
          </div>
        </div>
      </section>

      {/* Digest content */}
      <section className="max-w-4xl mx-auto px-4 py-12">
        <div className="space-y-14">
          {DIGESTS.map(digest => (
            <div key={`${digest.month}-${digest.year}`}>
              {/* Month header */}
              <div className="flex items-center gap-3 mb-6">
                <div className="flex items-center gap-2 px-4 py-1.5 rounded-full text-sm font-semibold bg-primary/10 text-primary">
                  <Calendar className="w-4 h-4" />
                  {digest.month} {digest.year}
                </div>
                <div className="flex-1 h-px bg-border" />
                <span className="text-xs text-muted-foreground">
                  {digest.items.length} update
                  {digest.items.length !== 1 ? "s" : ""}
                </span>
              </div>

              {/* Items */}
              <div className="space-y-5">
                {digest.items.map((item, idx) => (
                  <div
                    key={idx}
                    className="bg-card border border-border rounded-2xl p-6 hover:shadow-md transition-shadow"
                  >
                    <div className="flex flex-wrap items-center gap-2 mb-3">
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${categoryColours[item.category] ?? ""}`}
                      >
                        {item.category}
                      </span>
                      <span
                        className={`text-xs font-semibold px-2.5 py-0.5 rounded-full ${impactColours[item.impact]}`}
                      >
                        {item.impact} Impact
                      </span>
                      <span className="text-xs text-muted-foreground ml-auto">
                        {item.date}
                      </span>
                    </div>
                    <h3 className="text-lg font-bold text-foreground mb-2">
                      {item.title}
                    </h3>
                    <p className="text-sm text-muted-foreground leading-relaxed mb-4">
                      {item.summary}
                    </p>
                    {item.sourceUrl && (
                      <a
                        href={item.sourceUrl}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="inline-flex items-center gap-1.5 text-xs text-primary hover:underline font-medium"
                      >
                        <ExternalLink className="w-3.5 h-3.5" />
                        {item.sourceLabel ?? "Official source"}
                      </a>
                    )}
                  </div>
                ))}
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <div className="mt-12 p-5 bg-muted/50 rounded-xl border border-border text-sm text-muted-foreground">
          <strong className="text-foreground">
            How this digest is maintained:
          </strong>{" "}
          This digest is reviewed and updated regularly to reflect the latest
          regulatory developments. All summaries are written in plain English
          for educational purposes. For legal advice or compliance decisions,
          always consult the original regulatory sources and qualified legal
          counsel.
        </div>
      </section>
    </PageLayout>
  );
}
