import PageLayout from "@/components/PageLayout";
import RegulationPageTemplate, { RegPageConfig } from "@/components/RegulationPageTemplate";
import { Bitcoin } from "lucide-react";

const config: RegPageConfig = {
  topic: "Crypto Asset Regulation",
  topicKey: "Crypto",
  icon: <Bitcoin size={24} />,
  accent: "oklch(0.42 0.18 290)",
  darkAccent: "oklch(0.78 0.18 290)",
  bg: "oklch(0.65 0.18 290 / 0.08)",
  subtitle: "The UK's new regulatory framework for digital assets — coming into force October 2027",
  heroText:
    "The UK is building a comprehensive regulatory framework for crypto assets. On 30 June 2026, the FCA published its final rules. The new regime comes into force on 25 October 2027. If you own, trade, or work with crypto assets, here's what you need to know.",
  lastUpdated: "July 2026",
  exerciseHref: "/exercises/crypto",
  whoItAppliesTo: [
    "Crypto asset exchanges and trading platforms",
    "Crypto asset custodians and wallet providers",
    "Crypto asset brokers and intermediaries",
    "Stablecoin issuers",
    "Crypto lending and borrowing platforms",
    "Crypto staking service providers",
    "Firms issuing crypto assets to the public",
    "Any firm providing crypto services to UK customers",
  ],
  keyFacts: [
    { label: "Primary Legislation", value: "FSMA 2000 (Cryptoassets) Regulations 2026" },
    { label: "Final Rules Published", value: "30 June 2026 (FCA)" },
    { label: "Regime Goes Live", value: "25 October 2027" },
    { label: "Current Requirement", value: "MLR Registration with FCA" },
    { label: "Financial Promotions", value: "In force since October 2023" },
    { label: "EU Equivalent", value: "MiCA (in force Dec 2024)" },
  ],
  sections: [
    {
      id: "crypto-overview",
      title: "The UK's Approach to Crypto Regulation",
      plain:
        "The UK is creating a brand new set of rules specifically for crypto assets — treating them like other financial instruments, but with rules designed for how crypto actually works. The goal is to protect consumers and market integrity while allowing innovation to flourish.",
      detail: `
        <p>The UK government's approach to crypto regulation has been to bring cryptoassets within the existing <strong>Financial Services and Markets Act 2000 (FSMA)</strong> framework, rather than creating a completely separate regime. This means crypto firms will be regulated by the FCA in a similar way to traditional investment firms.</p>
        <p>The legal foundation is the <strong>Financial Services and Markets Act 2000 (Cryptoassets) Regulations 2026</strong>, made by Parliament on 4 February 2026. These regulations create new <strong>regulated activities</strong> for cryptoassets, meaning firms wishing to provide these services in or to the UK must be authorised by the FCA.</p>
        <p>On <strong>30 June 2026</strong>, the FCA published its final rules and guidance for the new regime. These rules will apply to all cryptoasset firms granted permission to operate under FSMA on or after <strong>25 October 2027</strong>.</p>
        <p>The UK's approach contrasts with the EU's <strong>Markets in Crypto-Assets Regulation (MiCA)</strong>, which came into force in December 2024. While broadly similar in intent, the UK regime is designed to fit within the existing FSMA framework and reflects UK-specific market conditions.</p>
      `,
    },
    {
      id: "current-requirements",
      title: "Current Requirements (Before October 2027)",
      plain:
        "Right now, crypto firms operating in the UK must register with the FCA under the Money Laundering Regulations. They must also comply with the FCA's financial promotions rules if they advertise crypto to UK consumers. The full FSMA-based regime doesn't start until October 2027.",
      detail: `
        <p>Until the new FSMA-based regime comes into force in October 2027, crypto firms operating in the UK must comply with two existing requirements:</p>
        <p><strong>1. MLR Registration</strong></p>
        <p>Since January 2020, crypto asset exchange providers and custodian wallet providers have been required to register with the FCA under the <strong>Money Laundering Regulations 2017</strong>. This registration requires firms to demonstrate adequate AML/KYC controls. Firms that are not registered are operating illegally.</p>
        <p><strong>2. Financial Promotions Regime</strong></p>
        <p>Since October 2023, all financial promotions for cryptoassets directed at UK consumers must be approved by an FCA-authorised person or issued by a registered crypto firm. Promotions must be fair, clear, and not misleading, and must include risk warnings. The FCA has taken enforcement action against several firms for non-compliant promotions.</p>
        <p>The FCA maintains a list of registered crypto firms. Consumers should always check whether a crypto firm is on the FCA register before using its services. Unregistered firms operating in the UK are illegal.</p>
      `,
    },
    {
      id: "new-regulated-activities",
      title: "New Regulated Activities from October 2027",
      plain:
        "From October 2027, a wide range of crypto services will require FCA authorisation. This includes running a crypto exchange, holding crypto on behalf of customers, lending crypto, and issuing stablecoins. Firms that don't get authorised will have to stop operating in the UK.",
      detail: `
        <p>The new regime creates the following <strong>regulated activities</strong> for cryptoassets, all requiring FCA authorisation from October 2027:</p>
        <ul>
          <li><strong>Operating a cryptoasset trading platform</strong> — running an exchange or marketplace where crypto is bought and sold</li>
          <li><strong>Cryptoasset custody</strong> — holding, storing, or safeguarding cryptoassets on behalf of clients</li>
          <li><strong>Dealing in cryptoassets as principal</strong> — buying and selling crypto for your own account</li>
          <li><strong>Arranging deals in cryptoassets</strong> — acting as an intermediary or broker</li>
          <li><strong>Cryptoasset lending and borrowing</strong> — providing or facilitating crypto lending services</li>
          <li><strong>Cryptoasset staking</strong> — providing staking services on behalf of clients</li>
          <li><strong>Issuing stablecoins</strong> — creating and issuing asset-referenced tokens or e-money tokens</li>
          <li><strong>Admissions and disclosures</strong> — admitting cryptoassets to trading platforms</li>
        </ul>
        <p>The FCA has published detailed rules covering: governance and Senior Managers & Certification Regime (SM&CR); operational resilience; consumer duty; complaints handling; financial crime controls; prudential requirements (capital and liquidity); and market abuse prevention.</p>
      `,
    },
    {
      id: "stablecoins",
      title: "Stablecoins",
      plain:
        "A stablecoin is a crypto asset designed to maintain a stable value, usually pegged to a currency like the pound or dollar. The UK is bringing stablecoins into regulation at the same time as other crypto assets, requiring issuers to hold backing assets and meet redemption requirements.",
      detail: `
        <p>Stablecoins are cryptoassets designed to maintain a stable value relative to a reference asset (usually a fiat currency like GBP or USD). They are used for payments, trading, and as a store of value within the crypto ecosystem.</p>
        <p>Under the new UK regime, stablecoin issuers will be subject to specific rules covering:</p>
        <ul>
          <li><strong>Backing assets</strong> — issuers must hold sufficient, high-quality assets to back all outstanding tokens at a 1:1 ratio</li>
          <li><strong>Redemption</strong> — holders must be able to redeem stablecoins for the underlying fiat currency at par, promptly and without excessive fees</li>
          <li><strong>Segregation</strong> — backing assets must be segregated from the issuer's own assets</li>
          <li><strong>Disclosure</strong> — issuers must publish a whitepaper with key information about the token</li>
        </ul>
        <p>The government decided to implement stablecoin regulation at the same time as the broader crypto regime (October 2027), rather than in a separate earlier phase as originally planned. It also confirmed that stablecoin staking services do not constitute a collective investment scheme.</p>
      `,
    },
    {
      id: "consumer-protection-crypto",
      title: "Consumer Protection in Crypto",
      plain:
        "Crypto is high risk. The FCA requires firms to make this very clear to consumers. There are rules about what crypto firms can advertise, how they must handle complaints, and what information they must give you before you invest. The key message: only invest what you can afford to lose.",
      detail: `
        <p>The FCA's approach to consumer protection in crypto reflects the high-risk nature of the asset class. Key consumer protection measures include:</p>
        <p><strong>Financial Promotions</strong> (already in force):</p>
        <ul>
          <li>All crypto promotions must be fair, clear, and not misleading</li>
          <li>Mandatory risk warnings: "Cryptoassets are high risk. Don't invest unless you're prepared to lose all the money you invest."</li>
          <li>A 24-hour cooling-off period for first-time investors</li>
          <li>Personalised risk warnings for investors who have previously lost money</li>
        </ul>
        <p><strong>From October 2027</strong>:</p>
        <ul>
          <li>Consumer Duty will apply — firms must deliver good outcomes for retail customers</li>
          <li>Suitability and appropriateness assessments for certain services</li>
          <li>Clear disclosure of fees, risks, and conflicts of interest</li>
          <li>Robust complaints handling with access to the Financial Ombudsman Service (FOS)</li>
        </ul>
        <p>The FCA's 2024 consumer research (conducted by YouGov) found that crypto ownership in the UK continues to grow. Around 12% of UK adults now own crypto assets, up from 4% in 2021. However, many investors still have limited understanding of the risks involved.</p>
      `,
    },
  ],
  updates: [
    {
      date: "30 Jun 2026",
      title: "FCA publishes final crypto rules",
      description: "Final rules and guidance for the new FSMA-based crypto regime published.",
      type: "new",
    },
    {
      date: "4 Feb 2026",
      title: "FSMA 2000 (Cryptoassets) Regulations 2026 made",
      description: "Parliament passes the statutory instrument bringing crypto within FSMA.",
      type: "new",
    },
    {
      date: "Jan 2026",
      title: "FCA authorisation webinars launched",
      description: "FCA begins webinar series to help crypto firms prepare for the new regime.",
      type: "new",
    },
    {
      date: "25 Oct 2027",
      title: "New crypto regime goes live",
      description: "All cryptoasset firms must be FCA-authorised to operate in or to the UK.",
      type: "upcoming",
    },
  ],
};

export default function CryptoPage() {
  return (
    <PageLayout>
      <RegulationPageTemplate config={config} />
    </PageLayout>
  );
}
