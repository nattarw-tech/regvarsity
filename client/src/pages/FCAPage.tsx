import PageLayout from "@/components/PageLayout";
import RegulationPageTemplate, { RegPageConfig } from "@/components/RegulationPageTemplate";
import { Scale } from "lucide-react";

const config: RegPageConfig = {
  topic: "FCA — Financial Conduct Authority",
  topicKey: "FCA",
  icon: <Scale size={24} />,
  accent: "oklch(0.28 0.08 255)",
  darkAccent: "oklch(0.72 0.1 255)",
  bg: "oklch(0.28 0.08 255 / 0.08)",
  subtitle: "The UK's main financial watchdog — protecting consumers and keeping markets honest",
  heroText:
    "The Financial Conduct Authority regulates over 50,000 financial services firms and markets in the UK. Its job is to make sure financial markets work well — for individuals, businesses, and the wider economy. Think of it as the referee that keeps the game fair.",
  lastUpdated: "July 2026",
  exerciseHref: "/exercises/fca",
  whoItAppliesTo: [
    "Banks and building societies",
    "Insurance companies and brokers",
    "Investment firms and advisers",
    "Mortgage lenders and brokers",
    "Payment service providers",
    "Crowdfunding platforms",
    "Crypto asset firms (from Oct 2027)",
    "Anyone providing regulated financial services in the UK",
  ],
  keyFacts: [
    { label: "Established", value: "April 2013 (replaced FSA)" },
    { label: "Firms Regulated", value: "50,000+" },
    { label: "Governing Legislation", value: "Financial Services and Markets Act 2000 (FSMA)" },
    { label: "Consumer Duty Live", value: "31 July 2023" },
    { label: "FCA Strategy Period", value: "2025–2030" },
    { label: "Key Principle", value: "Principle 12 — Consumer Duty" },
  ],
  sections: [
    {
      id: "what-is-fca",
      title: "What Is the FCA?",
      plain:
        "The FCA is the government body that makes sure financial companies treat you fairly, don't mislead you, and don't go bust in a way that harms you. If a bank or investment firm breaks the rules, the FCA can fine them, ban them, or shut them down.",
      detail: `
        <p>The Financial Conduct Authority (FCA) was created by the <strong>Financial Services Act 2012</strong> and began operating on 1 April 2013, replacing the Financial Services Authority (FSA). It is an independent public body funded entirely by the firms it regulates — not by taxpayers.</p>
        <p>The FCA has three statutory objectives:</p>
        <ul>
          <li><strong>Consumer protection</strong> — securing an appropriate degree of protection for consumers</li>
          <li><strong>Market integrity</strong> — protecting and enhancing the integrity of the UK financial system</li>
          <li><strong>Competition</strong> — promoting effective competition in the interests of consumers</li>
        </ul>
        <p>Since 2024, the FCA has also been given a secondary objective to <strong>facilitate the international competitiveness</strong> of the UK economy and its long-term growth. This reflects the government's post-Brexit ambition to make the UK a leading global financial centre.</p>
        <p>The FCA works alongside the <strong>Prudential Regulation Authority (PRA)</strong>, which is part of the Bank of England and focuses on the financial stability of individual firms (especially banks and insurers). While the PRA asks "will this firm survive?", the FCA asks "is this firm treating customers fairly?"</p>
      `,
    },
    {
      id: "consumer-duty",
      title: "Consumer Duty — The Game Changer",
      plain:
        "Consumer Duty is the FCA's most important recent rule. It says firms must not just avoid doing harm — they must actively work to deliver good outcomes for customers. It came into force in July 2023 and applies to all firms that deal with retail customers.",
      detail: `
        <p>The <strong>Consumer Duty</strong> (FCA Principle 12) came into force on 31 July 2023 for new products and services, and on 31 July 2024 for closed products (those no longer sold to new customers). It represents the biggest shift in UK retail financial regulation in a generation.</p>
        <p>Under the Consumer Duty, firms must deliver good outcomes across four areas:</p>
        <ul>
          <li><strong>Products and services</strong> — designed to meet the needs of the target market</li>
          <li><strong>Price and value</strong> — customers receive fair value for what they pay</li>
          <li><strong>Consumer understanding</strong> — communications are clear, not misleading, and help customers make informed decisions</li>
          <li><strong>Consumer support</strong> — customers can get the help they need, when they need it</li>
        </ul>
        <p>The Duty goes beyond the previous "Treating Customers Fairly" (TCF) regime. Under TCF, firms had to avoid harm. Under Consumer Duty, firms must <em>proactively</em> deliver good outcomes. The FCA can now ask a firm: "Show me the evidence that your customers are getting good outcomes" — and firms must be able to answer.</p>
        <p>In 2025, the FCA clarified that Consumer Duty applies differently to wholesale firms (those that don't deal directly with retail customers). The FCA is consulting on whether the Duty applies too broadly to wholesale markets and may narrow its scope in 2026.</p>
      `,
    },
    {
      id: "smcr",
      title: "Senior Managers & Certification Regime (SM&CR)",
      plain:
        "The SM&CR makes sure that when a financial firm does something wrong, there is a named, accountable individual responsible — not just a faceless company. Senior managers must be approved by the FCA and can be held personally liable.",
      detail: `
        <p>The <strong>Senior Managers and Certification Regime (SM&CR)</strong> was introduced in 2016 for banks and extended to all FCA-regulated firms in December 2019. It replaced the Approved Persons Regime.</p>
        <p>The SM&CR has three tiers:</p>
        <ul>
          <li><strong>Senior Managers</strong> — individuals who hold significant influence functions (e.g. CEO, CFO, Chief Risk Officer). They must be pre-approved by the FCA and are subject to a "duty of responsibility" — they can be held personally accountable if something goes wrong in their area.</li>
          <li><strong>Certified Persons</strong> — employees who could cause significant harm to the firm or its customers (e.g. traders, financial advisers). Firms must certify these individuals as fit and proper annually.</li>
          <li><strong>Conduct Rules</strong> — basic standards of behaviour that apply to almost all employees in regulated firms.</li>
        </ul>
        <p>The FCA's 5 Individual Conduct Rules are: (1) act with integrity; (2) act with due skill, care and diligence; (3) be open and cooperative with regulators; (4) pay due regard to the interests of customers; (5) observe proper standards of market conduct.</p>
      `,
    },
    {
      id: "authorisation",
      title: "Authorisation — Getting Permission to Operate",
      plain:
        "You cannot legally provide financial services in the UK without FCA authorisation (or registration). If a firm is not on the FCA register, it is operating illegally and you should not deal with it.",
      detail: `
        <p>Under FSMA 2000, it is a criminal offence to carry on a <strong>regulated activity</strong> in the UK without authorisation from the FCA (or PRA). Regulated activities include accepting deposits, dealing in investments, arranging deals, managing investments, and providing financial advice.</p>
        <p>Firms can check their authorisation status on the <strong>FCA Register</strong> (register.fca.org.uk). The FCA also maintains a <strong>Warning List</strong> of firms operating without authorisation — consumers should always check this before dealing with a financial firm.</p>
        <p>From October 2027, <strong>crypto asset firms</strong> will also need FCA authorisation under the new FSMA-based crypto regime (see the Crypto Assets page for details). Currently, crypto firms must register with the FCA under the Money Laundering Regulations.</p>
        <p>The FCA's 2025–2030 strategy emphasises being a <strong>"smarter regulator"</strong> — more proportionate, more engaged with industry, and faster at processing authorisation applications. The FCA is also developing a pre-application support service for firms wanting to provide targeted financial support services.</p>
      `,
    },
    {
      id: "fca-strategy-2025",
      title: "FCA Strategy 2025–2030",
      plain:
        "The FCA has set four big goals for the next five years: help the UK economy grow, be a smarter and fairer regulator, help consumers make better financial decisions, and fight financial crime more effectively.",
      detail: `
        <p>In September 2025, the FCA published its five-year strategy with four strategic priorities:</p>
        <ul>
          <li><strong>Support growth</strong> — enabling investment, innovation, and UK financial services competitiveness. This includes the Mansion House/Leeds reforms and targeted support proposals.</li>
          <li><strong>Be a smarter regulator</strong> — predictable, purposeful, and proportionate. The FCA is embracing technology (including an AI Lab) and simplifying its rulebook.</li>
          <li><strong>Help consumers navigate their financial lives</strong> — closing the "advice gap" through targeted support and simplified advice proposals. Currently only 9% of UK consumers take financial advice.</li>
          <li><strong>Fight crime</strong> — focusing on those who misuse their regulated status to commit harm. The FCA and NCA published nine economic crime priorities in July 2025.</li>
        </ul>
        <p>A key initiative is <strong>targeted support</strong> — a new regulatory category between generic information and full financial advice. It would allow firms to give personalised suggestions to groups of customers (e.g. "people like you tend to benefit from investing rather than holding cash") without the full liability of bespoke advice. Rules are expected in 2026.</p>
      `,
    },
  ],
  updates: [
    {
      date: "Sep 2025",
      title: "FCA publishes 2025–2030 Strategy",
      description: "Four priorities: growth, smarter regulation, consumer navigation, and fighting crime.",
      type: "new",
    },
    {
      date: "Jul 2025",
      title: "Consumer Duty clarifications issued",
      description: "FCA clarifies how Consumer Duty applies to wholesale firms following Mansion House feedback.",
      type: "amended",
    },
    {
      date: "Jul 2025",
      title: "FCA & NCA publish economic crime priorities",
      description: "Nine joint priorities for tackling financial crime through 2025–2030.",
      type: "new",
    },
    {
      date: "2026 (expected)",
      title: "Targeted Support rules",
      description: "FCA expected to publish final rules for a new 'targeted support' regulated activity.",
      type: "upcoming",
    },
  ],
};

export default function FCAPage() {
  return (
    <PageLayout>
      <RegulationPageTemplate config={config} />
    </PageLayout>
  );
}
