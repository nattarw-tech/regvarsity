import type { Module } from "./types";

// ============================================================
// MODULE 10 — CASS: Client Assets
// ============================================================
export const moduleCASS: Module = {
  id: "cass",
  number: 10,
  title: "CASS — Client Assets and Client Money",
  slug: "cass-client-assets",
  block: "Business Standards",
  sourceCode: "CASS",
  colour: "bg-cyan-50",
  accentColour: "oklch(0.42 0.14 210)",
  description:
    "When you invest through a broker or platform, your money and assets are held by that firm on your behalf. CASS sets out the rules for how firms must protect client assets — keeping them separate from the firm's own assets so that, if the firm fails, your assets can be returned to you.",
  whoItAppliesTo: "Investment firms, stockbrokers, and platforms that hold client money or assets.",
  chapters: [
    {
      id: "cass-1",
      number: 1,
      title: "Why Client Asset Protection Matters",
      slug: "why-client-asset-protection-matters",
      readingTimeMinutes: 7,
      intro:
        "The collapse of Lehman Brothers in 2008 and MF Global in 2011 demonstrated what can happen when client assets are not properly protected. Thousands of clients found their assets frozen or lost because they had been mixed with the firm's own assets. CASS was designed to prevent this.",
      subSections: [
        {
          id: "cass-1-1",
          heading: "1.1 — The segregation principle",
          content: `The fundamental principle of CASS is **segregation** — client assets must be kept separate from the firm's own assets. This means:

**Client money**: Money belonging to clients must be held in a **client money bank account** — a separate bank account that is clearly identified as holding client money and not the firm's own money. The account must be with an approved bank and must be designated as a client account.

**Client assets (custody assets)**: Financial instruments (shares, bonds, etc.) held on behalf of clients must be held in a **client custody account** — separate from the firm's own proprietary holdings. The firm must be able to identify which assets belong to which client at all times.

The purpose of segregation is to ensure that, if the firm becomes insolvent, client assets can be identified and returned to clients — they do not form part of the firm's estate available to general creditors.`,
        },
        {
          id: "cass-1-2",
          heading: "1.2 — The trust mechanism",
          content: `CASS uses a **statutory trust** mechanism to protect client money. When a firm receives client money, it holds it on trust for the client. This means:

- The money legally belongs to the client, not the firm
- If the firm becomes insolvent, the client money is not available to the firm's creditors
- Clients are entitled to have their money returned from the client money pool

The trust mechanism was tested in the Lehman Brothers insolvency. The UK Supreme Court confirmed in 2012 that client money held in properly segregated accounts was protected and could be returned to clients.

However, the Lehman case also revealed weaknesses — some client money had not been properly segregated, leading to significant losses for some clients. CASS has been significantly strengthened since then.`,
        },
      ],
      keyTakeaways: [
        { text: "CASS requires firms to segregate client money and assets from the firm's own assets." },
        { text: "Client money is held on statutory trust — it legally belongs to the client, not the firm." },
        { text: "Proper segregation means client assets can be returned if the firm becomes insolvent." },
        { text: "CASS was significantly strengthened after the Lehman Brothers and MF Global insolvencies." },
      ],
      quizQuestions: [
        {
          id: "cass-1-q1",
          question: "What is the fundamental principle of CASS?",
          options: [
            "Client assets must earn interest",
            "Client assets must be kept separate from the firm's own assets",
            "Client assets must be insured privately",
            "Client assets must be held in cash only",
          ],
          correctIndex: 1,
          explanation: "Segregation is the core of CASS: client money goes into designated client money bank accounts and custody assets into client custody accounts, separate from the firm's own holdings, so they can be identified and returned if the firm fails.",
        },
        {
          id: "cass-1-q2",
          question: "A broker holding client money becomes insolvent. Why can't the firm's general creditors claim that money?",
          options: [
            "Because the FSCS pays the creditors instead",
            "Because client money is held on statutory trust and legally belongs to the clients",
            "Because the FCA takes ownership of it",
            "They can claim it, client money has no special status",
          ],
          correctIndex: 1,
          explanation: "CASS uses a statutory trust: client money legally belongs to the client, not the firm. On insolvency it does not form part of the firm's estate, so clients are entitled to have their money returned from the client money pool ahead of general creditors.",
        },
        {
          id: "cass-1-q3",
          question: "Which insolvency confirmed in the UK Supreme Court that properly segregated client money was protected?",
          options: [
            "Northern Rock (2007)",
            "Lehman Brothers (ruling in 2012)",
            "Barings Bank (1995)",
            "FTX (2022)",
          ],
          correctIndex: 1,
          explanation: "The Lehman Brothers insolvency tested the trust mechanism, and in 2012 the UK Supreme Court confirmed that client money in properly segregated accounts was protected. The case also exposed weaknesses where money had not been properly segregated, which led to CASS being strengthened.",
        },
      ],
    },
  ],
  moduleTest: {
    passMarkPercent: 70,
    questions: [
      {
        id: "cass-test-q1",
        question: "Which firms do the CASS rules apply to?",
        options: [
          "Every UK company",
          "Investment firms, stockbrokers and platforms that hold client money or assets",
          "Only high street banks",
          "Only insurance companies",
        ],
        correctIndex: 1,
        explanation: "CASS applies to firms that hold client money or custody assets on behalf of clients, such as investment firms, stockbrokers and investment platforms.",
      },
      {
        id: "cass-test-q2",
        question: "What must a client money bank account look like under CASS?",
        options: [
          "Any account in the firm's name",
          "A separate account with an approved bank, clearly designated as holding client money",
          "An offshore account for tax efficiency",
          "The firm's main operating account with an internal ledger note",
        ],
        correctIndex: 1,
        explanation: "Client money must sit in a separate bank account with an approved bank, clearly identified and designated as a client account, never mixed with the firm's own money.",
      },
      {
        id: "cass-test-q3",
        question: "What must a firm be able to do with custody assets at all times?",
        options: [
          "Lend them to other clients freely",
          "Identify which assets belong to which client",
          "Convert them to cash within 24 hours",
          "Report them to Companies House",
        ],
        correctIndex: 1,
        explanation: "Custody assets must be held in client custody accounts separate from the firm's proprietary holdings, and the firm must be able to identify which assets belong to which client at all times.",
      },
      {
        id: "cass-test-q4",
        question: "Which two firm collapses drove the strengthening of client asset rules?",
        options: [
          "Northern Rock and RBS",
          "Lehman Brothers (2008) and MF Global (2011)",
          "Barings and BCCI",
          "FTX and Celsius",
        ],
        correctIndex: 1,
        explanation: "The Lehman Brothers collapse in 2008 and MF Global in 2011 left thousands of clients with frozen or lost assets where segregation had failed. Both led to significant strengthening of CASS.",
      },
      {
        id: "cass-test-q5",
        question: "Which Principle for Business does CASS give detailed effect to?",
        options: [
          "Principle 4 (Financial prudence)",
          "Principle 10 (Clients' assets)",
          "Principle 7 (Communications with clients)",
          "Principle 12 (Consumer Duty)",
        ],
        correctIndex: 1,
        explanation: "Principle 10 requires firms to arrange adequate protection for clients' assets. CASS is the sourcebook that turns that high-level principle into detailed segregation, trust and record-keeping rules.",
      },
      {
        id: "cass-test-q6",
        question: "What was the key lesson from the parts of the Lehman estate where client money had NOT been properly segregated?",
        options: [
          "Clients were fully protected anyway",
          "Clients suffered significant losses, showing that segregation only protects when done properly",
          "The Bank of England covered all losses",
          "Segregation was found to be unnecessary",
        ],
        correctIndex: 1,
        explanation: "Where money had not been properly segregated, clients suffered significant losses. The trust protection only works when firms actually follow the segregation rules, which is why CASS compliance and record-keeping are taken so seriously.",
      },
    ],
  },
};
