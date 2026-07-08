import PageLayout from "@/components/PageLayout";
import RegulationPageTemplate, { RegPageConfig } from "@/components/RegulationPageTemplate";
import { TrendingUp } from "lucide-react";

const config: RegPageConfig = {
  topic: "MiFID II / UK MiFIR",
  topicKey: "MiFID II / MiFIR",
  icon: <TrendingUp size={24} />,
  accent: "oklch(0.35 0.14 155)",
  darkAccent: "oklch(0.72 0.16 155)",
  bg: "oklch(0.55 0.14 155 / 0.08)",
  subtitle: "Rules governing how financial instruments are traded, reported, and sold in UK markets",
  heroText:
    "MiFID II and UK MiFIR are the rulebooks for financial markets — covering how shares, bonds, and derivatives are traded, how trades must be reported to regulators, and how investment firms must treat their clients. After Brexit, the UK has its own version and is actively reforming it.",
  lastUpdated: "July 2026",
  exerciseHref: "/exercises/mifid",
  whoItAppliesTo: [
    "Investment firms (banks, brokers, dealers)",
    "Trading venues (stock exchanges, MTFs, OTFs)",
    "Systematic internalisers",
    "Portfolio managers",
    "Financial advisers",
    "Market makers",
    "Firms executing client orders",
    "Firms providing investment research",
  ],
  keyFacts: [
    { label: "UK Legislation", value: "UK MiFIR (retained EU law, being reformed)" },
    { label: "Governing Body", value: "FCA (post-Brexit)" },
    { label: "HM Treasury Policy Paper", value: "November 2024 — UK MiFID reform" },
    { label: "FCA Discussion Paper", value: "DP24/2 — Transaction Reporting (Nov 2024)" },
    { label: "EU MiFIR Review", value: "In force 28 March 2024" },
    { label: "UK Reform Timeline", value: "FCA rules expected 2025–2026" },
  ],
  sections: [
    {
      id: "what-is-mifid",
      title: "What Is MiFID II / UK MiFIR?",
      plain:
        "MiFID II is a set of European rules that the UK adopted before Brexit. It governs how financial markets work — making sure trades are transparent, reported to regulators, and that investment firms treat their clients fairly. After Brexit, the UK kept these rules but is now redesigning them to suit the UK specifically.",
      detail: `
        <p><strong>MiFID II</strong> (Markets in Financial Instruments Directive II) and <strong>MiFIR</strong> (Markets in Financial Instruments Regulation) are the EU's framework for regulating financial markets. They came into force across the EU in January 2018.</p>
        <p>When the UK left the EU, it retained these rules as <strong>UK MiFID II</strong> and <strong>UK MiFIR</strong> through the EU Withdrawal Act 2018. The FCA became the sole regulator responsible for enforcing them in the UK.</p>
        <p>The framework covers three main areas:</p>
        <ul>
          <li><strong>Market structure</strong> — rules about where financial instruments can be traded (regulated markets, MTFs, OTFs, systematic internalisers)</li>
          <li><strong>Transparency</strong> — pre-trade and post-trade transparency requirements so markets are fair and prices are visible</li>
          <li><strong>Investor protection</strong> — conduct of business rules for how firms treat their clients</li>
        </ul>
        <p>Post-Brexit, the EU updated its own MiFIR in March 2024 (the "MiFIR Review"), introducing changes to transaction reporting, consolidated tape, and market structure. The UK is charting its own course — diverging from the EU in some areas while maintaining broadly equivalent standards.</p>
      `,
    },
    {
      id: "transaction-reporting",
      title: "Transaction Reporting",
      plain:
        "Transaction reporting means that every time an investment firm executes a trade in a financial instrument, it must send a detailed report to the FCA. This lets the regulator spot market abuse, insider trading, and other misconduct. The UK is currently redesigning its reporting requirements.",
      detail: `
        <p>Under <strong>Article 26 of UK MiFIR</strong>, investment firms must report details of every transaction in financial instruments to the FCA (or an Approved Reporting Mechanism, ARM, on their behalf). Reports must be submitted by the close of the following working day.</p>
        <p>Each transaction report contains up to 65 data fields, including:</p>
        <ul>
          <li>Instrument identification (ISIN)</li>
          <li>Buyer and seller identities (using LEIs for legal entities)</li>
          <li>Price and quantity</li>
          <li>Trading venue</li>
          <li>Execution timestamp</li>
          <li>Nature of the transaction (buy/sell, own account/client)</li>
        </ul>
        <p>In November 2024, <strong>HM Treasury published a policy paper</strong> announcing its intention to revoke the UK's retained EU MiFIR transaction reporting provisions and hand rulemaking authority to the FCA. The FCA simultaneously published <strong>Discussion Paper DP24/2</strong> seeking industry input on a reformed UK transaction reporting regime.</p>
        <p>The FCA's goals for the new regime are to <strong>enhance data quality</strong> for market oversight while <strong>reducing unnecessary burdens</strong> on firms — potentially eliminating duplicative fields and simplifying reporting for certain instruments. A formal consultation is expected in 2025, with final rules in 2026.</p>
      `,
    },
    {
      id: "best-execution",
      title: "Best Execution",
      plain:
        "Best execution means that when an investment firm executes a trade on your behalf, it must take all reasonable steps to get you the best possible result — not just the best price, but also considering speed, likelihood of execution, and other factors.",
      detail: `
        <p>Under <strong>MiFID II Article 27</strong> (UK equivalent), investment firms must take all sufficient steps to obtain the best possible result for their clients when executing orders. This applies to price, costs, speed, likelihood of execution and settlement, size, nature, and any other relevant consideration.</p>
        <p>Firms must:</p>
        <ul>
          <li>Establish and implement an <strong>order execution policy</strong> setting out how they achieve best execution</li>
          <li>Provide clients with a summary of the execution policy</li>
          <li>Monitor the effectiveness of their execution arrangements</li>
          <li>Publish annual reports on the top five execution venues used and the quality of execution obtained</li>
        </ul>
        <p>For retail clients, the best possible result is generally determined primarily by the <strong>total consideration</strong> (price plus all costs). For professional clients, other factors may be weighted more heavily depending on the nature of the order.</p>
      `,
    },
    {
      id: "client-classification",
      title: "Client Classification",
      plain:
        "MiFID II divides clients into three categories: retail clients (who get the most protection), professional clients (who are assumed to have more knowledge and get less protection), and eligible counterparties (sophisticated institutions who get the least protection). The category you fall into determines what rules apply to your relationship with the firm.",
      detail: `
        <p>Investment firms must classify their clients into one of three categories:</p>
        <ul>
          <li><strong>Retail clients</strong> — individuals and small businesses. They receive the highest level of protection, including suitability and appropriateness assessments, best execution, and detailed disclosure requirements.</li>
          <li><strong>Professional clients</strong> — entities and individuals with sufficient experience, knowledge, and expertise to make their own investment decisions. They receive a lower level of protection. Professional clients can be either "per se" (automatically professional, e.g. banks, investment firms) or "elective" (retail clients who opt up after meeting certain criteria).</li>
          <li><strong>Eligible counterparties (ECPs)</strong> — the most sophisticated market participants (e.g. banks, investment firms, insurance companies). They receive the least protection and many conduct of business rules do not apply to transactions with ECPs.</li>
        </ul>
        <p>Clients can request to be treated as a different category — retail clients can request professional status ("opting up") if they meet two of three criteria: (1) significant portfolio size; (2) substantial financial sector experience; (3) professional financial sector experience.</p>
      `,
    },
    {
      id: "uk-wholesale-markets",
      title: "UK Wholesale Markets Review",
      plain:
        "After Brexit, the UK government reviewed all the MiFID II rules to see which ones to keep, change, or scrap. The result is a major reform programme that will reshape how UK financial markets are regulated — making rules more tailored to the UK rather than just copying EU rules.",
      detail: `
        <p>The <strong>UK Wholesale Markets Review (UKWMR)</strong> was launched in 2021 to assess whether the UK's retained MiFID II/MiFIR rules were appropriate for UK markets post-Brexit. The review resulted in the <strong>Financial Services and Markets Act 2023 (FSMA 2023)</strong>, which gave HM Treasury and the FCA broad powers to reform the retained EU law framework.</p>
        <p>Key reforms underway include:</p>
        <ul>
          <li><strong>Transaction reporting reform</strong> — FCA to design a UK-specific regime (DP24/2, November 2024)</li>
          <li><strong>Consolidated tape</strong> — a single source of post-trade data for UK markets (FCA procurement underway)</li>
          <li><strong>Research unbundling</strong> — the FCA has already relaxed the strict MiFID II rules on separating investment research payments from execution commissions</li>
          <li><strong>Transparency regime</strong> — the FCA is reviewing pre- and post-trade transparency requirements for equity and non-equity instruments</li>
        </ul>
        <p>The UK's approach is to maintain broadly equivalent standards to the EU (to support cross-border business) while tailoring rules to UK market structure and removing unnecessary complexity. The FCA expects to publish most of its new rules by 2026.</p>
      `,
    },
  ],
  updates: [
    {
      date: "Nov 2024",
      title: "HM Treasury MiFID reform policy paper",
      description: "Plans to hand transaction reporting rulemaking to FCA; UK to diverge from EU MiFIR.",
      type: "new",
    },
    {
      date: "Nov 2024",
      title: "FCA DP24/2: UK Transaction Reporting",
      description: "Discussion paper on redesigning UK transaction reporting to reduce burden and improve quality.",
      type: "new",
    },
    {
      date: "Mar 2024",
      title: "EU MiFIR Review enters into force",
      description: "EU's amended MiFIR (Regulation 2024/791) in force; UK tracking but diverging.",
      type: "amended",
    },
    {
      date: "2025–2026",
      title: "FCA consultation on new UK MiFIR rules",
      description: "Formal consultation on UK transaction reporting and market structure reforms expected.",
      type: "upcoming",
    },
  ],
};

export default function MiFIDPage() {
  return (
    <PageLayout>
      <RegulationPageTemplate config={config} />
    </PageLayout>
  );
}
