import type { Module } from "./types";

// ============================================================
// MODULE 9 - ESG / SDR: Sustainability and Green Finance
// ============================================================
export const moduleESG: Module = {
  id: "esg",
  number: 9,
  title: "ESG & SDR - Sustainability and Green Finance",
  slug: "esg-sdr-sustainability",
  block: "Business Standards",
  sourceCode: "ESG / SDR",
  colour: "bg-lime-50",
  accentColour: "oklch(0.45 0.18 135)",
  description:
    "The UK's Sustainability Disclosure Requirements (SDR) and investment labels regime came into force in 2024. They aim to tackle greenwashing and help investors understand the sustainability credentials of financial products. This is one of the fastest-moving areas of UK financial regulation.",
  whoItAppliesTo:
    "Asset managers, investment firms, and financial advisers offering sustainability-related products to UK investors.",
  chapters: [
    {
      id: "esg-1",
      number: 1,
      title: "What Is Greenwashing and Why Does It Matter?",
      slug: "greenwashing",
      readingTimeMinutes: 7,
      intro:
        "Greenwashing is the practice of making misleading claims about the environmental or sustainability credentials of a financial product. It is one of the FCA's top enforcement priorities and a major concern for investors who want to align their money with their values.",
      subSections: [
        {
          id: "esg-1-1",
          heading: "1.1 - The scale of the problem",
          content: `The market for ESG (Environmental, Social and Governance) investments has grown enormously. Global ESG assets under management passed $30 trillion in 2022 and are forecast by Bloomberg Intelligence to exceed $40 trillion by 2030. But with this growth has come a significant problem: greenwashing.

Greenwashing takes many forms:
- **Vague claims**: Using terms like "green," "sustainable," or "responsible" without any substantive basis
- **Cherry-picking**: Highlighting positive ESG factors while ignoring negative ones
- **Misleading metrics**: Using ESG scores or ratings that do not accurately reflect a product's sustainability
- **Rebranding**: Renaming existing funds as "ESG" without changing the underlying investment approach

The FCA's research found that many investors were confused about what ESG products actually do, and that some products marketed as sustainable were investing in companies with poor environmental records.`,
        },
        {
          id: "esg-1-2",
          heading: "1.2 - The UK's SDR regime",
          content: `The UK's **Sustainability Disclosure Requirements (SDR)** regime came into force in stages from 2024. It has three main components:

**1. The Anti-Greenwashing Rule**: From May 2024, all FCA-authorised firms must ensure that any sustainability-related claims they make are fair, clear, and not misleading. This applies to all communications, not just those about SDR-labelled products.

**2. Investment Labels**: From July 2024, firms can use one of four labels for investment products that meet specific sustainability criteria:
- *Sustainability Focus*, invests in assets that are environmentally or socially sustainable
- *Sustainability Improvers*, invests in assets with the potential to improve sustainability over time
- *Sustainability Impact*, invests with the aim of achieving a positive sustainability impact
- *Sustainability Mixed Goals*, combines elements of the above

**3. Disclosure Requirements**: From December 2024, firms offering labelled products must publish detailed disclosures about their sustainability objectives, investment strategy, and metrics.

The SDR regime applies to UK-domiciled funds sold to UK retail investors. The FCA has indicated that it will extend the regime to overseas funds in due course.`,
        },
      ],
      keyTakeaways: [
        {
          text: "Greenwashing is making misleading claims about the sustainability of financial products, a top FCA enforcement priority.",
        },
        {
          text: "The Anti-Greenwashing Rule (from May 2024) requires all sustainability claims to be fair, clear, and not misleading.",
        },
        {
          text: "Four investment labels are available: Sustainability Focus, Sustainability Improvers, Sustainability Impact, and Sustainability Mixed Goals.",
        },
        {
          text: "Detailed disclosures are required for labelled products from December 2024.",
        },
      ],
      quizQuestions: [
        {
          id: "esg-1-q1",
          question:
            "A fund renames itself 'Global Sustainable Leaders' without changing its underlying investment approach at all. What form of greenwashing is this?",
          options: [
            "Cherry-picking",
            "Misleading metrics",
            "Rebranding",
            "Vague claims",
          ],
          correctIndex: 2,
          explanation:
            "Rebranding is renaming an existing fund as ESG or sustainable without changing the underlying investment approach. Other forms include vague claims ('green' with no basis), cherry-picking positive factors, and misleading ESG scores.",
        },
        {
          id: "esg-1-q2",
          question:
            "Who does the Anti-Greenwashing Rule apply to, and since when?",
          options: [
            "Only firms using SDR labels, from December 2024",
            "All FCA-authorised firms making sustainability claims, from May 2024",
            "Only asset managers with over £1 billion under management",
            "Only overseas funds sold in the UK",
          ],
          correctIndex: 1,
          explanation:
            "From May 2024, the Anti-Greenwashing Rule requires every FCA-authorised firm to ensure its sustainability-related claims are fair, clear and not misleading. It applies to all communications, not just products carrying an SDR label.",
        },
        {
          id: "esg-1-q3",
          question:
            "A fund invests in companies that are not yet sustainable but have credible potential to become so over time. Which SDR label fits?",
          options: [
            "Sustainability Focus",
            "Sustainability Improvers",
            "Sustainability Impact",
            "Sustainability Mixed Goals",
          ],
          correctIndex: 1,
          explanation:
            "Sustainability Improvers is for funds investing in assets with the potential to improve their sustainability over time. Focus is for already-sustainable assets, Impact aims to achieve positive sustainability impact, and Mixed Goals combines elements of the other three.",
        },
      ],
    },
  ],
  moduleTest: {
    passMarkPercent: 70,
    questions: [
      {
        id: "esg-test-q1",
        question:
          "How large were global ESG assets under management by 2022, and where are they forecast to go?",
        options: [
          "Passed $3 trillion, forecast to reach $4 trillion by 2030",
          "Passed $30 trillion, forecast by Bloomberg Intelligence to exceed $40 trillion by 2030",
          "Passed $40 trillion in 2022",
          "ESG assets have been shrinking since 2020",
        ],
        correctIndex: 1,
        explanation:
          "Global ESG assets under management passed $30 trillion in 2022 and are forecast by Bloomberg Intelligence to exceed $40 trillion by 2030. That growth is exactly why greenwashing became a priority for regulators.",
      },
      {
        id: "esg-test-q2",
        question: "What are the three main components of the UK's SDR regime?",
        options: [
          "Carbon taxes, emission caps and green bonds",
          "The Anti-Greenwashing Rule, investment labels and disclosure requirements",
          "Voluntary codes, industry charters and peer review",
          "EU taxonomy alignment, SFDR and CSRD",
        ],
        correctIndex: 1,
        explanation:
          "SDR has three components introduced in stages through 2024: the Anti-Greenwashing Rule (May), the four investment labels (July), and detailed disclosure requirements for labelled products (December).",
      },
      {
        id: "esg-test-q3",
        question: "Which of these is one of the four SDR investment labels?",
        options: [
          "Sustainability Guaranteed",
          "Carbon Neutral Plus",
          "Sustainability Impact",
          "Green Premium",
        ],
        correctIndex: 2,
        explanation:
          "The four labels are Sustainability Focus, Sustainability Improvers, Sustainability Impact and Sustainability Mixed Goals. Each requires the product to meet specific sustainability criteria.",
      },
      {
        id: "esg-test-q4",
        question: "Which funds does the SDR regime currently apply to?",
        options: [
          "All funds sold anywhere in the world",
          "UK-domiciled funds sold to UK retail investors",
          "Only funds domiciled in the EU",
          "Only pension funds",
        ],
        correctIndex: 1,
        explanation:
          "SDR applies to UK-domiciled funds sold to UK retail investors. The FCA has indicated it will extend the regime to overseas funds in due course, but that extension has not yet been confirmed.",
      },
      {
        id: "esg-test-q5",
        question:
          "A marketing email describes a fund as 'responsible' with no substantive basis for the claim. Which SDR component does this breach?",
        options: [
          "The labelling rules, because the fund has no label",
          "The Anti-Greenwashing Rule, because sustainability claims must be fair, clear and not misleading",
          "The disclosure requirements",
          "Nothing, because 'responsible' is not a regulated term",
        ],
        correctIndex: 1,
        explanation:
          "Vague sustainability claims without substance are exactly what the Anti-Greenwashing Rule targets. Since May 2024, any sustainability-related claim by an FCA-authorised firm must be fair, clear and not misleading, whether or not the product uses an SDR label.",
      },
      {
        id: "esg-test-q6",
        question:
          "From when must firms offering labelled products publish detailed sustainability disclosures?",
        options: ["May 2024", "July 2024", "December 2024", "January 2027"],
        correctIndex: 2,
        explanation:
          "The disclosure requirements took effect from December 2024: firms with labelled products must publish details of their sustainability objectives, investment strategy and metrics. Labels themselves became available from July 2024.",
      },
    ],
  },
};
