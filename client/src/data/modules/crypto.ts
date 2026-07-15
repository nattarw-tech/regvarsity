import type { Module } from "./types";

// ============================================================
// MODULE 6 - Crypto Asset Regulation
// ============================================================
export const moduleCrypto: Module = {
  id: "crypto",
  number: 6,
  title: "Crypto Asset Regulation",
  slug: "crypto-asset-regulation",
  block: "Emerging Frameworks",
  sourceCode: "Crypto Regime (FSMA 2023)",
  colour: "bg-violet-50",
  accentColour: "oklch(0.42 0.18 290)",
  description:
    "The UK is building a comprehensive regulatory framework for crypto assets. On 30 June 2026, the FCA published its final rules. The new regime comes into force on 25 October 2027. If you own, trade, or work with crypto assets, here is what you need to know.",
  whoItAppliesTo:
    "Crypto asset businesses, exchanges, custodians, issuers of stablecoins, and DeFi platforms serving UK customers.",
  chapters: [
    {
      id: "crypto-1",
      number: 1,
      title: "The UK Crypto Regulatory Journey",
      slug: "uk-crypto-regulatory-journey",
      readingTimeMinutes: 8,
      intro:
        "The UK's approach to crypto regulation has evolved significantly over the past five years: from a light-touch registration regime focused on AML, to a comprehensive framework covering trading, custody, stablecoins, and market abuse. Understanding this journey helps explain where we are today.",
      subSections: [
        {
          id: "crypto-1-1",
          heading: "1.1 - From registration to full regulation",
          content: `The UK's crypto regulatory journey has three distinct phases:

**Phase 1 - AML Registration (2020-2023)**: The UK first regulated crypto asset businesses under the Money Laundering Regulations 2017 (as amended). Firms had to register with the FCA and demonstrate compliance with AML/KYC requirements. This was a relatively light-touch regime focused on financial crime rather than investor protection.

**Phase 2 - Financial Promotions (2023-2024)**: From October 2023, the UK extended its financial promotions regime to crypto assets. Crypto promotions must now be approved by an FCA-authorised firm and include prominent risk warnings. This was a significant step, it brought crypto marketing under the same rules as traditional financial promotions.

**Phase 3 - Comprehensive Regulation (2024-2027)**: The Financial Services and Markets Act 2023 (FSMA 2023) gave HM Treasury powers to bring crypto assets within the full scope of financial regulation. HM Treasury designated crypto activities as regulated activities in 2024. The FCA published its final rules on 30 June 2026, with the new regime coming into force on 25 October 2027.`,
        },
        {
          id: "crypto-1-2",
          heading: "1.2 - What activities will be regulated?",
          content: `Under the new regime, the following activities will require FCA authorisation:

**Crypto asset trading**: Operating a crypto exchange or trading platform that allows customers to buy and sell crypto assets.

**Crypto asset custody**: Holding crypto assets on behalf of customers: including private keys and wallet services.

**Stablecoin issuance**: Issuing fiat-referenced stablecoins (e.g. a stablecoin pegged to GBP or USD). Stablecoin issuers will face requirements similar to those for e-money institutions.

**Crypto lending and staking**: Lending crypto assets to customers or facilitating staking services.

**Crypto asset advice**: Providing advice on whether to buy, sell, or hold specific crypto assets.

**DeFi**: The regulation of decentralised finance (DeFi) protocols is the most complex area. The FCA has indicated that DeFi platforms that have a sufficient degree of centralisation (e.g. a governance token that controls the protocol) may be caught by the new regime.`,
        },
        {
          id: "crypto-1-3",
          heading: "1.3 - The FCA's final rules (June 2026)",
          content: `On 30 June 2026, the FCA published its final rules for the crypto asset regime. Key requirements include:

**Consumer protection**: Crypto firms must apply the same consumer protection standards as traditional investment firms: including suitability assessments for advised services, clear and fair communications, and complaints handling.

**Market integrity**: Crypto exchanges must implement market abuse detection systems and report suspicious transactions. The UK's Market Abuse Regulation (MAR) will be extended to crypto assets.

**Prudential requirements**: Crypto firms must hold minimum capital requirements, the specific amounts depend on the type and scale of activities.

**Operational resilience**: Firms must demonstrate they can continue to operate during disruptions and recover from failures. This includes requirements for business continuity planning and cyber security.

**Stablecoin requirements**: Stablecoin issuers must hold 100% reserves in high-quality liquid assets, provide redemption rights to holders, and meet strict governance requirements.

The transition period runs from the publication of final rules (30 June 2026) to the go-live date (25 October 2027). Firms that are already registered under the AML regime will have a streamlined authorisation process.`,
        },
      ],
      keyTakeaways: [
        {
          text: "The UK's crypto regulation has evolved from AML registration (2020) to financial promotions (2023) to comprehensive regulation (2027).",
        },
        {
          text: "The new regime comes into force on 25 October 2027 and covers trading, custody, stablecoins, lending, and advice.",
        },
        { text: "The FCA published its final rules on 30 June 2026." },
        {
          text: "Stablecoin issuers must hold 100% reserves in high-quality liquid assets and provide redemption rights.",
        },
        {
          text: "DeFi regulation remains complex, protocols with sufficient centralisation may be caught by the new regime.",
        },
      ],
      quizQuestions: [
        {
          id: "crypto-1-q1",
          question:
            "What was the focus of the UK's first phase of crypto regulation, from 2020 to 2023?",
          options: [
            "Consumer protection and suitability",
            "AML registration with the FCA under the Money Laundering Regulations",
            "Stablecoin reserve requirements",
            "Market abuse surveillance",
          ],
          correctIndex: 1,
          explanation:
            "Phase 1 was a light-touch regime under the Money Laundering Regulations 2017: crypto businesses had to register with the FCA and show AML/KYC compliance. Investor protection came later, with financial promotions rules from October 2023 and the comprehensive regime going live in October 2027.",
        },
        {
          id: "crypto-1-q2",
          question:
            "When does the UK's comprehensive crypto regime come into force?",
          options: [
            "It is already fully in force",
            "30 June 2026",
            "25 October 2027",
            "1 January 2030",
          ],
          correctIndex: 2,
          explanation:
            "The FCA published its final rules on 30 June 2026, and the new regime comes into force on 25 October 2027. The period in between is the transition window, with a streamlined authorisation route for firms already registered under the AML regime.",
        },
        {
          id: "crypto-1-q3",
          question:
            "What reserve requirement will apply to fiat-referenced stablecoin issuers under the new UK regime?",
          options: [
            "50% reserves in any assets",
            "100% reserves in high-quality liquid assets, with redemption rights for holders",
            "No reserves, provided the issuer is insured",
            "Reserves held in the same cryptocurrency being issued",
          ],
          correctIndex: 1,
          explanation:
            "Stablecoin issuers must hold 100% reserves in high-quality liquid assets, give holders redemption rights, and meet strict governance requirements. The framework treats them similarly to e-money institutions.",
        },
      ],
    },
  ],
  moduleTest: {
    passMarkPercent: 70,
    questions: [
      {
        id: "crypto-test-q1",
        question:
          "Which Act gave HM Treasury the powers to bring crypto assets within full financial regulation?",
        options: [
          "The Proceeds of Crime Act 2002",
          "The Financial Services and Markets Act 2023",
          "The Economic Crime and Corporate Transparency Act 2023",
          "The Companies Act 2006",
        ],
        correctIndex: 1,
        explanation:
          "FSMA 2023 gave HM Treasury the power to designate crypto activities as regulated activities, which it did in 2024. The FCA then wrote the detailed rules, published in final form on 30 June 2026.",
      },
      {
        id: "crypto-test-q2",
        question: "What changed for crypto marketing in October 2023?",
        options: [
          "Crypto advertising was banned in the UK",
          "Crypto promotions came under the financial promotions regime, needing FCA-authorised approval and prominent risk warnings",
          "Only banks could advertise crypto",
          "Nothing, marketing rules arrive in 2027",
        ],
        correctIndex: 1,
        explanation:
          "From October 2023 the financial promotions regime was extended to crypto assets. Promotions must be approved by an FCA-authorised firm and carry prominent risk warnings, the same discipline applied to traditional financial promotions.",
      },
      {
        id: "crypto-test-q3",
        question:
          "Which of these activities will require FCA authorisation under the new regime?",
        options: [
          "Simply owning bitcoin as an individual",
          "Writing a blog about cryptocurrency prices",
          "Holding crypto assets and private keys in custody for customers",
          "Mining crypto for your own account",
        ],
        correctIndex: 2,
        explanation:
          "The regulated activities include operating trading platforms, custody of crypto assets (including private keys and wallet services), stablecoin issuance, crypto lending and staking, and crypto advice. Personal ownership and general commentary are not regulated activities.",
      },
      {
        id: "crypto-test-q4",
        question:
          "How will the FCA decide whether a DeFi protocol falls within the new regime?",
        options: [
          "All DeFi is automatically exempt",
          "By whether the protocol has a sufficient degree of centralisation, such as a controlling governance token",
          "By the protocol's total value locked",
          "By a public vote of token holders",
        ],
        correctIndex: 1,
        explanation:
          "DeFi is the most complex area. The FCA has indicated that protocols with a sufficient degree of centralisation, for example where a governance token controls the protocol, may be caught by the regime. Truly decentralised protocols are harder to bring within scope.",
      },
      {
        id: "crypto-test-q5",
        question:
          "What market integrity obligations will crypto exchanges face?",
        options: [
          "None, market abuse rules do not apply to crypto",
          "They must implement market abuse detection systems and report suspicious transactions, with MAR extended to crypto assets",
          "They only need to publish daily prices",
          "They must close during periods of high volatility",
        ],
        correctIndex: 1,
        explanation:
          "Under the final rules, crypto exchanges must run market abuse detection systems and report suspicious transactions. The UK's Market Abuse Regulation will be extended to crypto assets.",
      },
      {
        id: "crypto-test-q6",
        question:
          "A crypto firm is already registered with the FCA under the AML regime. What does the transition to the new regime look like for it?",
        options: [
          "It must cease trading until 2028",
          "It benefits from a streamlined authorisation process during the transition period",
          "It is automatically authorised with no application",
          "It must re-register with HM Treasury instead",
        ],
        correctIndex: 1,
        explanation:
          "The transition period runs from the final rules (30 June 2026) to go-live (25 October 2027). Firms already registered under the AML regime get a streamlined authorisation process rather than automatic authorisation.",
      },
    ],
  },
};
