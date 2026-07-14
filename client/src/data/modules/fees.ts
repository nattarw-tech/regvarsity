import type { Module } from "./types";

// ============================================================
// MODULE 15 — FEES & FSCS: Fees and Compensation
// ============================================================
export const moduleFEES: Module = {
  id: "fees",
  number: 15,
  title: "FEES & FSCS — Fees, Levies, and Compensation",
  slug: "fees-fscs-compensation",
  block: "Regulatory Infrastructure",
  sourceCode: "FEES",
  colour: "bg-yellow-50",
  accentColour: "oklch(0.50 0.14 60)",
  description:
    "Every FCA-authorised firm pays fees to fund the FCA, the Financial Ombudsman Service (FOS), and the Financial Services Compensation Scheme (FSCS). Understanding how these work — and what the FSCS covers — is essential for both firms and consumers.",
  whoItAppliesTo: "All FCA-authorised firms. FSCS protection applies to eligible claimants dealing with authorised firms.",
  chapters: [
    {
      id: "fees-1",
      number: 1,
      title: "How FCA Fees Work",
      slug: "how-fca-fees-work",
      readingTimeMinutes: 6,
      intro:
        "The FCA is funded entirely by the firms it regulates. Understanding the fee structure helps firms budget for regulatory costs and understand what they are paying for.",
      subSections: [
        {
          id: "fees-1-1",
          heading: "1.1 — The fee structure",
          content: `The FCA charges fees to fund three separate bodies: (1) the FCA itself, (2) the Financial Ombudsman Service (FOS), and (3) the Financial Services Compensation Scheme (FSCS).\n\nFCA fees are calculated based on a firm's **fee-block** (the category of regulated activity) and its **tariff data** (a measure of size, such as income, assets under management, or number of mortgages).\n\nFirms pay an **application fee** when seeking authorisation and then **annual fees** thereafter. Even the smallest authorised firms pay a minimum annual fee (currently around £1,000–£2,000), ensuring all firms contribute to the cost of regulation.`,
        },
      ],
      keyTakeaways: [
        { text: "The FCA is funded entirely by the firms it regulates through annual fees." },
        { text: "Fees fund three bodies: the FCA, the Financial Ombudsman Service, and the FSCS." },
        { text: "Fees are calculated based on the firm's fee-block and tariff data (size measure)." },
      ],
      quizQuestions: [
        {
          id: "fees-1-q1",
          question: "How is the FCA funded?",
          options: [
            "By general taxation",
            "Entirely by fees from the firms it regulates",
            "By fines collected from enforcement",
            "By the Bank of England",
          ],
          correctIndex: 1,
          explanation: "The FCA is funded entirely by the firms it regulates. Fees also fund the Financial Ombudsman Service and the FSCS. Fines, by contrast, mostly go to the Treasury, not the FCA's budget.",
        },
        {
          id: "fees-1-q2",
          question: "What determines how much an individual firm pays in FCA fees?",
          options: [
            "Its fee-block (category of activity) and tariff data such as income or assets under management",
            "The number of complaints it received",
            "A flat rate identical for every firm",
            "Its share price performance",
          ],
          correctIndex: 0,
          explanation: "Fees are calculated from the firm's fee-block, the category of regulated activity, and its tariff data, a size measure such as income, assets under management or number of mortgages. Even the smallest firms pay a minimum annual fee of roughly £1,000 to £2,000.",
        },
        {
          id: "fees-1-q3",
          question: "Which three bodies do regulatory fees fund?",
          options: [
            "The FCA, HM Treasury and the Bank of England",
            "The FCA, the Financial Ombudsman Service and the FSCS",
            "The FCA, Companies House and the NCA",
            "The FOS, the FSCS and the Pension Protection Fund",
          ],
          correctIndex: 1,
          explanation: "Fees charged to authorised firms fund the FCA itself, the Financial Ombudsman Service, and the Financial Services Compensation Scheme.",
        },
      ],
    },
    {
      id: "fees-2",
      number: 2,
      title: "The Financial Services Compensation Scheme (FSCS)",
      slug: "fscs-protection",
      readingTimeMinutes: 8,
      intro:
        "The FSCS is the UK's statutory compensation scheme for customers of failed financial firms. Understanding what it covers — and what it does not — is essential knowledge for anyone in financial services.",
      subSections: [
        {
          id: "fees-2-1",
          heading: "2.1 — What the FSCS covers",
          content: `The FSCS provides compensation to eligible claimants when an FCA-authorised firm is unable to pay claims against it — typically because it has gone insolvent.\n\n| Category | Compensation Limit |\n|---|---|\n| Deposits (bank accounts) | £120,000 per person per institution (since 1 December 2025) |\n| Investments | £85,000 per person per firm |\n| Home finance (mortgages) | £85,000 per person per firm |\n| Insurance policies | 90% of the claim (no upper limit for compulsory insurance) |\n| Long-term insurance (life) | 100% of the claim |\n\n**Important:** The FSCS only covers customers of **FCA-authorised firms**. Always check a firm is authorised on the FCA Register before giving it your money.`,
        },
        {
          id: "fees-2-2",
          heading: "2.2 — What the FSCS does not cover",
          content: `The FSCS does **not** cover:\n\n- **Investment losses** — if an investment falls in value, the FSCS cannot compensate you. It only pays out when a firm has failed.\n- **Unauthorised firms** — if you deal with a firm that is not FCA-authorised, you have no FSCS protection.\n- **Overseas firms** — firms based outside the UK and not authorised by the FCA are not covered.\n\n**Temporary high balances:** If you have more than £120,000 in a bank account due to a specific life event (house sale, inheritance, redundancy), the FSCS provides temporary protection of up to £1.4 million for six months.`,
        },
      ],
      keyTakeaways: [
        { text: "The FSCS compensates customers of failed FCA-authorised firms — not investment losses." },
        { text: "Deposit protection is £120,000 per person per institution (since 1 December 2025)." },
        { text: "Investment protection is £85,000 per person per firm." },
        { text: "The FSCS does not cover unauthorised firms — always check the FCA Register." },
      ],
      quizQuestions: [
        {
          id: "fees-2-q1",
          question: "When does the FSCS pay compensation?",
          options: [
            "Whenever an investment loses value",
            "When an FCA-authorised firm is unable to pay claims against it, typically because it is insolvent",
            "Whenever a customer complains to the FOS",
            "When interest rates fall",
          ],
          correctIndex: 1,
          explanation: "The FSCS compensates eligible claimants when an authorised firm cannot pay claims against it, usually on insolvency. Investment losses from market movements are not covered.",
        },
        {
          id: "fees-2-q2",
          question: "What is the FSCS compensation limit for long-term (life) insurance claims?",
          options: [
            "90% of the claim",
            "£85,000",
            "100% of the claim",
            "£120,000",
          ],
          correctIndex: 2,
          explanation: "Long-term insurance such as life policies is protected at 100% of the claim. Most general insurance is covered at 90%, with no upper limit for compulsory insurance. Deposits are covered to £120,000 and investments to £85,000.",
        },
        {
          id: "fees-2-q3",
          question: "A saver inherits £500,000 and deposits it while deciding what to do. Their bank fails four months later. What protection applies?",
          options: [
            "Only the standard £120,000",
            "Temporary high balance protection of up to £1.4 million, because the deposit came from a specific life event within six months",
            "Nothing above £85,000",
            "The full amount indefinitely",
          ],
          correctIndex: 1,
          explanation: "Balances from specific life events such as inheritance, a house sale or redundancy get temporary protection of up to £1.4 million for six months. After six months, the standard £120,000 limit applies.",
        },
      ],
    },
  ],
  moduleTest: {
    passMarkPercent: 70,
    questions: [
      {
        id: "fees-test-q1",
        question: "Which statement about FCA funding is correct?",
        options: [
          "The FCA is funded by taxpayers",
          "The FCA is funded entirely by fees on the firms it regulates",
          "The FCA is funded by keeping enforcement fines",
          "The FCA is funded by the London Stock Exchange",
        ],
        correctIndex: 1,
        explanation: "The FCA is funded entirely by the firms it regulates through application fees and annual fees. Those fees also fund the FOS and the FSCS.",
      },
      {
        id: "fees-test-q2",
        question: "What two inputs set a firm's annual FCA fee?",
        options: [
          "Its fee-block and its tariff data",
          "Its headcount and its office location",
          "Its complaint volume and its FOS record",
          "Its age and its legal form",
        ],
        correctIndex: 0,
        explanation: "Fees are based on the firm's fee-block (the category of regulated activity) and its tariff data (a size measure such as income, assets under management or number of mortgages).",
      },
      {
        id: "fees-test-q3",
        question: "Since 1 December 2025, what is the FSCS deposit protection limit?",
        options: [
          "£85,000 per person per institution",
          "£100,000 per person per institution",
          "£120,000 per person per institution",
          "£1.4 million per person per institution",
        ],
        correctIndex: 2,
        explanation: "The deposit limit rose to £120,000 per person per authorised institution on 1 December 2025. The £1.4 million figure is the separate temporary high balance protection for life events, lasting six months.",
      },
      {
        id: "fees-test-q4",
        question: "What is the FSCS limit for investment claims against a failed firm?",
        options: [
          "£55,000 per person per firm",
          "£85,000 per person per firm",
          "£120,000 per person per firm",
          "Unlimited",
        ],
        correctIndex: 1,
        explanation: "Investment claims are protected up to £85,000 per person per firm. The December 2025 increase to £120,000 applied to deposits only.",
      },
      {
        id: "fees-test-q5",
        question: "An investor puts money into a scheme run by a firm that is not FCA-authorised. The scheme collapses. What FSCS protection do they have?",
        options: [
          "The full £85,000",
          "None, because the FSCS only covers customers of FCA-authorised firms",
          "50% of their loss",
          "£120,000",
        ],
        correctIndex: 1,
        explanation: "The FSCS only covers customers of FCA-authorised firms. Dealing with an unauthorised firm means no FSCS protection, which is why checking the FCA Register before investing matters so much.",
      },
      {
        id: "fees-test-q6",
        question: "A customer's fund drops 30% in a market crash, but the firm remains solvent. Can the FSCS help?",
        options: [
          "Yes, up to £85,000",
          "No, the FSCS covers firm failure, not investment losses",
          "Yes, but only for pension funds",
          "Only if the crash lasted more than a year",
        ],
        correctIndex: 1,
        explanation: "Investment losses from market movements are investment risk, not an FSCS claim. The scheme pays out when an authorised firm has failed and cannot meet claims against it.",
      },
    ],
  },
};
