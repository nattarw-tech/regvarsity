import PageLayout from "@/components/PageLayout";
import RegulationPageTemplate, { RegPageConfig } from "@/components/RegulationPageTemplate";
import { Shield } from "lucide-react";

const config: RegPageConfig = {
  topic: "AML / KYC — Anti-Money Laundering & Know Your Customer",
  topicKey: "AML / KYC",
  icon: <Shield size={24} />,
  accent: "oklch(0.35 0.12 195)",
  darkAccent: "oklch(0.72 0.14 195)",
  bg: "oklch(0.58 0.12 195 / 0.08)",
  subtitle: "Stopping dirty money from entering the financial system — and why your bank asks for your passport",
  heroText:
    "Every year, criminals try to launder hundreds of billions of pounds through the UK financial system. AML and KYC rules are the defences that stop them. They explain why banks ask for your ID, why large cash transactions get flagged, and what firms must do to stay on the right side of the law.",
  lastUpdated: "July 2026",
  exerciseHref: "/exercises/aml",
  whoItAppliesTo: [
    "Banks and building societies",
    "Credit institutions",
    "Crypto asset businesses",
    "Money service businesses",
    "Estate agents (buying/selling property)",
    "Accountants and tax advisers",
    "Solicitors and legal professionals",
    "High-value dealers (jewellers, art dealers, car dealers)",
    "Gambling businesses (casinos)",
    "Trust and company service providers",
  ],
  keyFacts: [
    { label: "Primary Legislation", value: "Money Laundering Regulations 2017 (MLRs)" },
    { label: "Supporting Law", value: "Proceeds of Crime Act 2002 (POCA)" },
    { label: "Main Regulator", value: "FCA (financial sector), HMRC (others)" },
    { label: "Record Retention", value: "5 years after business relationship ends" },
    { label: "2025 NRA Published", value: "17 July 2025" },
    { label: "MLRs Reform", value: "MLRs 2026 — amendments in progress" },
  ],
  sections: [
    {
      id: "what-is-aml",
      title: "What Is Money Laundering?",
      plain:
        "Money laundering is how criminals make 'dirty' money (from crime) look 'clean' (like legitimate income). It typically involves three steps: placing dirty money into the system, layering it through complex transactions to hide its origin, and integrating it back as seemingly legitimate funds.",
      detail: `
        <p>Money laundering is the process of making illegally obtained money appear legitimate. The UK's <strong>Proceeds of Crime Act 2002 (POCA)</strong> defines it broadly — it is a criminal offence to conceal, disguise, convert, transfer, or remove criminal property from the UK.</p>
        <p>The three classic stages are:</p>
        <ul>
          <li><strong>Placement</strong> — introducing criminal funds into the financial system (e.g. depositing cash from drug sales)</li>
          <li><strong>Layering</strong> — disguising the trail through complex transactions, shell companies, or international transfers</li>
          <li><strong>Integration</strong> — the money re-enters the economy appearing legitimate (e.g. as business income or property purchases)</li>
        </ul>
        <p>The UK's <strong>2025 National Risk Assessment (NRA)</strong>, published by HM Treasury and the Home Office on 17 July 2025, assessed the UK as remaining at <strong>high risk</strong> of money laundering due to its role as a global financial centre. The NRA highlighted growing risks from cryptoassets, AI-enabled fraud, and the overlap between money laundering, sanctions evasion, and kleptocracy.</p>
        <p>The FCA fined <strong>Metro Bank £16.7 million</strong> in November 2024 for failing to properly monitor potential money laundering between 2016 and 2020. <strong>Starling Bank was fined £29 million</strong> in October 2024 for failings in its financial crime systems and controls.</p>
      `,
    },
    {
      id: "kyc-cdd",
      title: "KYC and Customer Due Diligence (CDD)",
      plain:
        "KYC (Know Your Customer) means verifying who your customer actually is before doing business with them. CDD is the formal process of collecting and checking that information. It's why your bank asks for your passport, proof of address, and sometimes asks where your money comes from.",
      detail: `
        <p>Under the <strong>Money Laundering Regulations 2017 (MLRs)</strong>, regulated firms must apply Customer Due Diligence (CDD) when:</p>
        <ul>
          <li>Establishing a new business relationship</li>
          <li>Carrying out an occasional transaction above €15,000 (or two linked transactions totalling this)</li>
          <li>There is a suspicion of money laundering or terrorist financing</li>
          <li>There is doubt about the accuracy of previously obtained identification information</li>
        </ul>
        <p>Standard CDD requires firms to:</p>
        <ul>
          <li><strong>Identify</strong> the customer — obtain their full name, date of birth, and residential address</li>
          <li><strong>Verify</strong> the identity — using a passport, driving licence, or reliable electronic verification</li>
          <li><strong>Understand</strong> the purpose and nature of the business relationship</li>
          <li><strong>Identify beneficial owners</strong> — for companies, this means identifying who ultimately owns or controls more than 25% of the entity</li>
        </ul>
        <p>There are three tiers of due diligence:</p>
        <ul>
          <li><strong>Simplified Due Diligence (SDD)</strong> — for lower-risk customers and products (e.g. certain regulated financial products)</li>
          <li><strong>Standard CDD</strong> — the default for most customers</li>
          <li><strong>Enhanced Due Diligence (EDD)</strong> — required for higher-risk situations, including Politically Exposed Persons (PEPs), high-risk third countries, and complex or unusually large transactions</li>
        </ul>
        <p>The <strong>2025 MLR reforms</strong> clarify that EDD for complex transactions should apply only where a transaction is <em>unusually</em> complex or large relative to what is typical for that sector — pushing firms toward more targeted, risk-based controls rather than blanket EDD.</p>
      `,
    },
    {
      id: "peps-sanctions",
      title: "PEPs, Sanctions, and High-Risk Countries",
      plain:
        "A PEP (Politically Exposed Person) is someone who holds or has held a prominent public position — like a politician, judge, or senior military officer. They are considered higher risk for corruption, so firms must apply extra checks. Sanctions screening means checking customers against lists of individuals and countries that are banned from financial dealings.",
      detail: `
        <p>A <strong>Politically Exposed Person (PEP)</strong> is an individual who holds or has held a prominent public function — including heads of state, senior politicians, senior government officials, senior judicial officers, senior military officers, and senior executives of state-owned enterprises. Their immediate family members and close associates are also considered PEPs.</p>
        <p>Firms must apply <strong>Enhanced Due Diligence</strong> to PEPs, including:</p>
        <ul>
          <li>Senior management approval before establishing or continuing a business relationship</li>
          <li>Establishing the source of wealth and source of funds</li>
          <li>Enhanced ongoing monitoring</li>
        </ul>
        <p><strong>Sanctions screening</strong> involves checking customers and transactions against:</p>
        <ul>
          <li>The UK's <strong>Office of Financial Sanctions Implementation (OFSI)</strong> consolidated list</li>
          <li>The UK's trade sanctions list</li>
          <li>Relevant international lists (UN, EU, US OFAC)</li>
        </ul>
        <p><strong>High-Risk Third Countries (HRTCs)</strong> are jurisdictions identified by HM Treasury as having strategic deficiencies in their AML/CTF frameworks. Firms must apply EDD to business relationships and transactions involving HRTCs. The list is updated regularly — the most recent amendment came into force in January 2024.</p>
      `,
    },
    {
      id: "sar-reporting",
      title: "Suspicious Activity Reports (SARs)",
      plain:
        "If a firm suspects that money is linked to crime, it must file a Suspicious Activity Report (SAR) with the National Crime Agency (NCA). Failing to do so is itself a criminal offence. The firm must also not 'tip off' the customer that a SAR has been filed.",
      detail: `
        <p>Under POCA 2002, any person in the regulated sector who knows or suspects that a person is engaged in money laundering <strong>must disclose</strong> this to the National Crime Agency (NCA) via a <strong>Suspicious Activity Report (SAR)</strong>. Failure to report is a criminal offence.</p>
        <p>The <strong>tipping off offence</strong> (Section 333A POCA) means that once a SAR has been filed, the firm must not tell the customer or any third party that a disclosure has been made, as this could prejudice an investigation.</p>
        <p>Firms must appoint a <strong>Money Laundering Reporting Officer (MLRO)</strong> — a senior individual responsible for receiving internal suspicious activity reports, deciding whether to submit a SAR to the NCA, and overseeing the firm's AML compliance programme.</p>
        <p>The NCA's <strong>UK Financial Intelligence Unit (UKFIU)</strong> receives SARs and uses them to identify and disrupt criminal activity. In 2025, the FCA updated its Financial Crime Guide to include enhanced guidance on transaction monitoring and SAR quality.</p>
      `,
    },
    {
      id: "aml-governance",
      title: "AML Governance and Compliance Framework",
      plain:
        "AML compliance isn't just about checking IDs. Firms need a whole system: a written risk assessment, policies and procedures, a trained MLRO, regular staff training, and ongoing monitoring of customer transactions. The FCA can inspect all of this.",
      detail: `
        <p>The MLRs require firms to maintain a comprehensive AML compliance framework, including:</p>
        <ul>
          <li><strong>Firm-wide risk assessment</strong> (Regulation 18) — identifying and assessing money laundering and terrorist financing risks, considering customers, products, geographies, and delivery channels</li>
          <li><strong>Proliferation financing risk assessment</strong> (Regulation 18A) — a newer requirement assessing risks of financing weapons of mass destruction</li>
          <li><strong>Policies, controls and procedures</strong> — documented and approved by senior management</li>
          <li><strong>MLRO appointment</strong> (Regulation 21) — a board-level or senior management individual responsible for AML compliance</li>
          <li><strong>Staff training</strong> (Regulation 24) — regular training on AML/CTF laws and how to recognise suspicious activity</li>
          <li><strong>Record keeping</strong> (Regulation 40) — retaining CDD documents and transaction records for 5 years</li>
          <li><strong>Ongoing monitoring</strong> — transaction monitoring to identify unusual patterns and keep customer records current</li>
        </ul>
        <p>The FCA's <strong>Financial Crime Guide</strong> (updated late 2024) provides detailed guidance on what "good" looks like for each of these areas, including specific guidance on sanctions controls, cryptoasset businesses, and governance.</p>
      `,
    },
  ],
  updates: [
    {
      date: "Jul 2025",
      title: "2025 National Risk Assessment published",
      description: "UK remains at high risk of money laundering; new risks from crypto and AI highlighted.",
      type: "new",
    },
    {
      date: "Jul 2025",
      title: "HM Treasury confirms MLR reforms",
      description: "More targeted EDD triggers; complex transaction threshold clarified.",
      type: "amended",
    },
    {
      date: "Late 2024",
      title: "FCA Financial Crime Guide updated",
      description: "New guidance on sanctions controls, transaction monitoring, and crypto AML.",
      type: "amended",
    },
    {
      date: "2026",
      title: "MLRs 2026 — new statutory instrument",
      description: "Draft legislation implementing HM Treasury's 2025 consultation responses.",
      type: "upcoming",
    },
  ],
};

export default function AMLPage() {
  return (
    <PageLayout>
      <RegulationPageTemplate config={config} />
    </PageLayout>
  );
}
