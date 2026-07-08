import PageLayout from "@/components/PageLayout";
import { Clock, ExternalLink } from "lucide-react";
import { Link } from "wouter";

interface Update {
  date: string;
  quarter: string;
  title: string;
  description: string;
  type: "new" | "amended" | "upcoming" | "enforcement";
  topic: "FCA" | "AML/KYC" | "MiFID II" | "Crypto" | "Cross-cutting";
  sourceUrl?: string;
  sourceLabel?: string;
}

const updates: Update[] = [
  // 2027 Upcoming
  {
    date: "25 Oct 2027",
    quarter: "Q4 2027",
    title: "UK Crypto Asset Regime Goes Live",
    description: "All cryptoasset firms must be FCA-authorised under the FSMA-based regime to operate in or to the UK. Firms without authorisation must cease providing regulated crypto services.",
    type: "upcoming",
    topic: "Crypto",
    sourceUrl: "https://www.fca.org.uk/firms/new-regime-cryptoasset-regulation",
    sourceLabel: "FCA — Crypto Regime",
  },
  // 2026
  {
    date: "30 Jun 2026",
    quarter: "Q2 2026",
    title: "FCA Publishes Final Crypto Asset Rules",
    description: "The FCA published its final rules and guidance for the new FSMA-based cryptoasset regime, covering governance, SM&CR, Consumer Duty, prudential requirements, and market abuse prevention.",
    type: "new",
    topic: "Crypto",
    sourceUrl: "https://www.fca.org.uk/firms/new-regime-cryptoasset-regulation",
    sourceLabel: "FCA — Final Crypto Rules",
  },
  {
    date: "4 Feb 2026",
    quarter: "Q1 2026",
    title: "FSMA 2000 (Cryptoassets) Regulations 2026 Made",
    description: "Parliament passed the statutory instrument bringing cryptoassets within the FSMA 2000 framework, creating new regulated activities for crypto services.",
    type: "new",
    topic: "Crypto",
    sourceUrl: "https://www.legislation.gov.uk",
    sourceLabel: "UK Legislation",
  },
  {
    date: "30 Sep 2026",
    quarter: "Q3 2026",
    title: "Crypto Authorisation Gateway Opens",
    description: "The FCA begins accepting authorisation applications for the new cryptoasset regime. Firms that apply by 28 February 2027 benefit from a saving provision allowing them to continue operating if their application is undetermined at go-live.",
    type: "new",
    topic: "Crypto",
    sourceUrl: "https://www.fca.org.uk/firms/new-regime-cryptoasset-regulation",
    sourceLabel: "FCA Crypto Regulation",
  },
  // 2025
  {
    date: "Mar 2025",
    quarter: "Q1 2025",
    title: "FCA Publishes 2025–2030 Strategy",
    description: "The FCA's five-year strategy sets four priorities: support UK economic growth, be a smarter regulator, help consumers navigate their financial lives, and fight financial crime more effectively.",
    type: "new",
    topic: "FCA",
    sourceUrl: "https://www.fca.org.uk/publications/corporate-documents/our-strategy-2025-30",
    sourceLabel: "FCA Strategy 2025–2030",
  },
  {
    date: "Jul 2025",
    quarter: "Q3 2025",
    title: "2025 National Risk Assessment Published",
    description: "HM Treasury and the Home Office published the UK's National Risk Assessment of money laundering and terrorist financing. The UK remains at high risk, with new threats from cryptoassets and AI-enabled fraud highlighted.",
    type: "new",
    topic: "AML/KYC",
    sourceUrl: "https://www.gov.uk/government/publications/national-risk-assessment-of-money-laundering-and-terrorist-financing-2025",
    sourceLabel: "HM Treasury — NRA 2025",
  },
  {
    date: "Jul 2025",
    quarter: "Q3 2025",
    title: "NCA & FCA Publish Economic Crime System Priorities",
    description: "The NCA and FCA jointly published nine economic crime priorities for the UK's regulated sector, aligned with the 2025 National Risk Assessment. Focus areas include cash-based money laundering, money mules, and fraud linked to overseas jurisdictions.",
    type: "new",
    topic: "FCA",
    sourceUrl: "https://www.nationalcrimeagency.gov.uk/news/nca-and-fca-publish-priorities-to-combat-biggest-economic-crime-threats",
    sourceLabel: "NCA Press Release",
  },
  // 2024
  {
    date: "Nov 2024",
    quarter: "Q4 2024",
    title: "FCA Discussion Paper DP24/2 — UK Transaction Reporting",
    description: "The FCA published a discussion paper seeking industry input on a reformed UK transaction reporting regime, aiming to reduce burden while improving data quality. This led to consultation CP25/32 in November 2025, proposing a cut from 65 to 52 reporting fields.",
    type: "new",
    topic: "MiFID II",
    sourceUrl: "https://www.fca.org.uk/markets/transaction-reporting",
    sourceLabel: "FCA Transaction Reporting",
  },
  {
    date: "Oct 2024",
    quarter: "Q4 2024",
    title: "Starling Bank Fined £29 Million",
    description: "The FCA fined Starling Bank £28.96 million for financial crime failings, including inadequate sanctions screening controls. Starling had opened over 54,000 accounts for high-risk customers despite a requirement not to do so.",
    type: "enforcement",
    topic: "AML/KYC",
    sourceUrl: "https://www.fca.org.uk/news/press-releases/fca-fines-starling-bank-failings-financial-crime-systems-and-controls",
    sourceLabel: "FCA Press Release",
  },
  {
    date: "Nov 2024",
    quarter: "Q4 2024",
    title: "Metro Bank Fined £17 Million",
    description: "The FCA fined Metro Bank £16.68 million for failing to properly monitor potential money laundering between 2016 and 2020, with inadequate transaction monitoring systems.",
    type: "enforcement",
    topic: "AML/KYC",
  },
  {
    date: "Late 2024",
    quarter: "Q4 2024",
    title: "FCA Financial Crime Guide Updated",
    description: "The FCA updated its Financial Crime Guide with enhanced guidance on sanctions controls, transaction monitoring, SAR quality, and AML controls for cryptoasset businesses.",
    type: "amended",
    topic: "AML/KYC",
    sourceUrl: "https://www.handbook.fca.org.uk/handbook/FCG",
    sourceLabel: "FCA Handbook — FCG",
  },
  {
    date: "Mar 2024",
    quarter: "Q1 2024",
    title: "EU MiFIR Review Enters Into Force",
    description: "The EU's amended MiFIR (Regulation 2024/791) entered into force, introducing changes to transaction reporting, consolidated tape, and market structure. The UK is tracking but diverging from the EU approach.",
    type: "amended",
    topic: "MiFID II",
  },
  {
    date: "Jan 2024",
    quarter: "Q1 2024",
    title: "High-Risk Third Country List Updated",
    description: "HM Treasury updated the list of High-Risk Third Countries for AML/CTF purposes, requiring Enhanced Due Diligence for business relationships involving these jurisdictions.",
    type: "amended",
    topic: "AML/KYC",
  },
  // 2023
  {
    date: "31 Jul 2023",
    quarter: "Q3 2023",
    title: "Consumer Duty Comes Into Force",
    description: "The FCA's Consumer Duty (Principle 12) came into force for new products and services. It requires firms to proactively deliver good outcomes across products and services, price and value, consumer understanding, and consumer support.",
    type: "new",
    topic: "FCA",
    sourceUrl: "https://www.fca.org.uk/firms/consumer-duty",
    sourceLabel: "FCA — Consumer Duty",
  },
  {
    date: "Oct 2023",
    quarter: "Q4 2023",
    title: "Crypto Financial Promotions Rules In Force",
    description: "New FCA rules for cryptoasset financial promotions came into force, requiring mandatory risk warnings, a 24-hour cooling-off period for first-time investors, and approval by an FCA-authorised person.",
    type: "new",
    topic: "Crypto",
    sourceUrl: "https://www.fca.org.uk/consumers/cryptoassets",
    sourceLabel: "FCA — Crypto Promotions",
  },
];

const typeStyles: Record<string, { bg: string; text: string; label: string }> = {
  new: { bg: "oklch(0.55 0.14 155 / 0.12)", text: "oklch(0.35 0.14 155)", label: "New" },
  amended: { bg: "oklch(0.78 0.14 85 / 0.15)", text: "oklch(0.45 0.14 75)", label: "Amended" },
  upcoming: { bg: "oklch(0.65 0.18 290 / 0.1)", text: "oklch(0.4 0.18 290)", label: "Upcoming" },
  enforcement: { bg: "oklch(0.55 0.22 25 / 0.1)", text: "oklch(0.45 0.22 25)", label: "Enforcement" },
};

const topicColors: Record<string, string> = {
  FCA: "oklch(0.28 0.08 255)",
  "AML/KYC": "oklch(0.35 0.12 195)",
  "MiFID II": "oklch(0.35 0.14 155)",
  Crypto: "oklch(0.42 0.18 290)",
  "Cross-cutting": "oklch(0.52 0.08 240)",
};

const topicHrefs: Record<string, string> = {
  FCA: "/learn/prin-principles-for-business",
  "AML/KYC": "/learn/aml-kyc-anti-money-laundering",
  "MiFID II": "/learn/mifid-ii-uk-mifir-markets-in-financial-instruments",
  Crypto: "/learn/fca-cp24-28-crypto-asset-regulation",
};

export default function UpdatesPage() {
  // Group by quarter
  const grouped: Record<string, Update[]> = {};
  updates.forEach((u) => {
    if (!grouped[u.quarter]) grouped[u.quarter] = [];
    grouped[u.quarter].push(u);
  });
  const quarters = Object.keys(grouped);

  return (
    <PageLayout>
      <section className="py-12 md:py-16 bg-background border-b border-border">
        <div className="container">
          <div className="max-w-3xl">
            <div className="flex items-center gap-3 mb-3">
              <Clock size={28} style={{ color: "var(--brand-teal)" }} />
              <h1 className="font-bold" style={{ color: "var(--foreground)" }}>
                Regulatory Updates
              </h1>
            </div>
            <p className="text-lg leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
              A timeline of the most significant UK financial regulatory changes, enforcement actions, and upcoming reforms. Content reviewed quarterly.
            </p>
            <div className="flex flex-wrap gap-3 mt-4">
              {Object.entries(typeStyles).map(([type, style]) => (
                <span key={type} className="badge-pill" style={{ backgroundColor: style.bg, color: style.text }}>
                  {style.label}
                </span>
              ))}
            </div>
          </div>
        </div>
      </section>

      <div className="container py-10">
        <div className="max-w-3xl mx-auto">
          {quarters.map((quarter) => (
            <div key={quarter} className="mb-12">
              <h2
                className="font-bold text-xl mb-6 sticky top-20 py-2 z-10"
                style={{
                  color: "var(--foreground)",
                  backgroundColor: "var(--background)",
                  borderBottom: "2px solid var(--border)",
                }}
              >
                {quarter}
              </h2>

              <div className="relative">
                {/* Timeline line */}
                <div
                  className="absolute left-4 top-0 bottom-0 w-0.5"
                  style={{ backgroundColor: "var(--border)" }}
                />

                <div className="space-y-6 pl-12">
                  {grouped[quarter].map((update, i) => {
                    const typeStyle = typeStyles[update.type];
                    const topicColor = topicColors[update.topic];
                    const topicHref = topicHrefs[update.topic];

                    return (
                      <div key={i} className="relative">
                        {/* Timeline dot */}
                        <div
                          className="absolute -left-8 top-4 h-3 w-3 rounded-full border-2"
                          style={{
                            backgroundColor: typeStyle.bg,
                            borderColor: typeStyle.text,
                          }}
                        />

                        <div className="card-base p-5">
                          <div className="flex flex-wrap items-center gap-2 mb-2">
                            <span className="badge-pill" style={{ backgroundColor: typeStyle.bg, color: typeStyle.text }}>
                              {typeStyle.label}
                            </span>
                            {topicHref ? (
                              <Link href={topicHref}>
                                <span
                                  className="badge-pill cursor-pointer hover:opacity-80 transition-opacity"
                                  style={{ backgroundColor: `${topicColor}12`, color: topicColor }}
                                >
                                  {update.topic}
                                </span>
                              </Link>
                            ) : (
                              <span
                                className="badge-pill"
                                style={{ backgroundColor: `${topicColor}12`, color: topicColor }}
                              >
                                {update.topic}
                              </span>
                            )}
                            <span className="text-xs ml-auto" style={{ color: "var(--muted-foreground)" }}>
                              {update.date}
                            </span>
                          </div>

                          <h3 className="font-bold text-base mb-2" style={{ color: "var(--foreground)" }}>
                            {update.title}
                          </h3>
                          <p className="text-sm leading-relaxed" style={{ color: "var(--muted-foreground)" }}>
                            {update.description}
                          </p>

                          {update.sourceUrl && (
                            <a
                              href={update.sourceUrl}
                              target="_blank"
                              rel="noopener noreferrer"
                              className="flex items-center gap-1 text-xs font-medium mt-3 hover:underline"
                              style={{ color: "var(--brand-teal)" }}
                            >
                              <ExternalLink size={11} />
                              {update.sourceLabel || "Source"}
                            </a>
                          )}
                        </div>
                      </div>
                    );
                  })}
                </div>
              </div>
            </div>
          ))}

          {/* Quarterly review note */}
          <div
            className="p-5 rounded-xl border mt-8"
            style={{ backgroundColor: "var(--surface-2)", borderColor: "var(--border)" }}
          >
            <p className="text-sm" style={{ color: "var(--muted-foreground)" }}>
              <strong>Content review policy:</strong> This updates timeline is reviewed and refreshed quarterly. The next scheduled review is October 2026. For the most current regulatory information, always refer to the{" "}
              <a href="https://www.fca.org.uk" target="_blank" rel="noopener noreferrer" className="underline">
                FCA website
              </a>{" "}
              and{" "}
              <a href="https://www.legislation.gov.uk" target="_blank" rel="noopener noreferrer" className="underline">
                UK Legislation
              </a>.
            </p>
          </div>
        </div>
      </div>
    </PageLayout>
  );
}
