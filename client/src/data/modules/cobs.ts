import type { Module } from "./types";

// ============================================================
// MODULE 3 - COBS: Conduct of Business
// ============================================================
export const moduleCOBS: Module = {
  id: "cobs",
  number: 3,
  title: "COBS - Conduct of Business",
  slug: "cobs-conduct-of-business",
  block: "Business Standards",
  sourceCode: "COBS",
  colour: "bg-green-50",
  accentColour: "oklch(0.38 0.16 155)",
  description:
    "COBS is the rulebook for firms conducting investment business with clients. It covers everything from how you classify clients, to how you give advice, to what information you must provide before and after a transaction. If you work in investment management, stockbroking, or financial advice, COBS governs your daily work.",
  whoItAppliesTo: "Firms conducting designated investment business, accepting deposits, or carrying on long-term insurance business in relation to life policies.",
  chapters: [
    {
      id: "cobs-1",
      number: 1,
      title: "Client Classification - Who Is Your Client?",
      slug: "client-classification",
      readingTimeMinutes: 8,
      intro:
        "One of the most important decisions a firm makes is how to classify its clients. The level of protection a client receives, and the obligations a firm has, depends entirely on which category the client falls into. Getting this wrong can have serious consequences for both the firm and the client.",
      subSections: [
        {
          id: "cobs-1-1",
          heading: "1.1 - The three client categories",
          content: `COBS divides clients into three categories, each with different levels of regulatory protection:

**Retail Clients**. The highest level of protection. A retail client is essentially anyone who is not a professional client or eligible counterparty. Most individual investors, including high-net-worth individuals who have not been reclassified, are retail clients. Retail clients receive the full suite of COBS protections.

**Professional Clients**. A reduced level of protection. Professional clients are presumed to have the knowledge and experience to make their own investment decisions and understand the risks involved. There are two types:
- *Per se professional clients*, automatically classified as professional (e.g. investment firms, credit institutions, insurance companies, pension funds, large corporates)
- *Elective professional clients*, retail clients who have asked to be reclassified as professional and meet certain criteria

**Eligible Counterparties (ECPs)**. The lowest level of protection. ECPs are the most sophisticated market participants, typically other financial institutions. Firms dealing with ECPs have very limited COBS obligations.`,
        },
        {
          id: "cobs-1-2",
          heading: "1.2 - Elective professional client reclassification",
          content: `A retail client can request to be reclassified as an elective professional client. This gives them access to products and services not available to retail clients, but at the cost of reduced regulatory protection.

To be reclassified, a client must meet at least two of three quantitative criteria:
1. They have carried out transactions of a significant size (at least €10,000 per transaction) on the relevant market at an average frequency of 10 per quarter over the previous four quarters
2. Their financial instrument portfolio (including cash deposits) exceeds €500,000
3. They work or have worked in the financial sector for at least one year in a professional position requiring knowledge of the relevant transactions or services

Even if a client meets these criteria, the firm must:
- Warn the client in writing that they will lose certain protections
- Obtain the client's written consent to the reclassification
- Assess whether the client has the necessary expertise and experience

Reclassification is not a one-way door, a client can request to be reclassified back to retail at any time.`,
        },
        {
          id: "cobs-1-3",
          heading: "1.3 - Why classification matters in practice",
          content: `Client classification has real consequences for both firms and clients. Here are the key differences:

**Suitability assessments**: Firms must conduct a suitability assessment before giving investment advice or managing a portfolio for retail and professional clients. For ECPs, no suitability assessment is required.

**Appropriateness assessments**: For non-advised services (execution-only), firms must assess whether a product is appropriate for a retail client. No appropriateness assessment is needed for professional clients or ECPs.

**Product restrictions**: Certain high-risk products (e.g. speculative mini-bonds, certain CFDs) are restricted to professional clients or ECPs only. Retail clients cannot access them.

**Best execution**: The best execution obligation applies to all client categories, but the factors considered may differ.

**Information requirements**: Retail clients must receive more detailed pre-sale information (e.g. Key Information Documents for PRIIPs) than professional clients.

A firm that misclassifies a client, treating a retail client as a professional, for example, faces significant regulatory risk. The FCA has taken enforcement action against firms that used reclassification to avoid their retail client obligations.`,
        },
      ],
      keyTakeaways: [
        { text: "COBS divides clients into three categories: Retail (most protection), Professional, and Eligible Counterparty (least protection)." },
        { text: "Retail clients receive the full suite of COBS protections. Professional clients and ECPs have reduced protections." },
        { text: "A retail client can be reclassified as an elective professional if they meet two of three quantitative criteria and provide written consent." },
        { text: "Client classification affects suitability, appropriateness, product access, and information requirements." },
        { text: "Misclassifying clients, especially treating retail clients as professional, is a serious regulatory breach." },
      ],
      quizQuestions: [
        {
          id: "cobs-1-q1",
          question: "Which client category receives the highest level of COBS protection?",
          options: [
            "Eligible counterparties",
            "Per se professional clients",
            "Retail clients",
            "Elective professional clients",
          ],
          correctIndex: 2,
          explanation: "Retail clients receive the full suite of COBS protections. Professional clients get reduced protection because they are presumed to understand the risks, and eligible counterparties, the most sophisticated market participants, get the least.",
        },
        {
          id: "cobs-1-q2",
          question: "A retail client with a €600,000 portfolio who worked in finance for three years asks to become an elective professional client. What else must the firm do before reclassifying them?",
          options: [
            "Nothing, because the client meets two of the three quantitative criteria",
            "Warn them in writing about lost protections, get written consent, and assess their expertise",
            "Get approval from the FCA for the reclassification",
            "Charge a reclassification fee",
          ],
          correctIndex: 1,
          explanation: "Meeting two of the three quantitative criteria is necessary but not sufficient. The firm must also warn the client in writing that they will lose protections, obtain their written consent, and assess whether they genuinely have the expertise and experience. Reclassification is reversible at the client's request.",
        },
        {
          id: "cobs-1-q3",
          question: "For which client category is no suitability assessment required before providing investment services?",
          options: [
            "Retail clients",
            "Elective professional clients",
            "Per se professional clients",
            "Eligible counterparties",
          ],
          correctIndex: 3,
          explanation: "Suitability assessments are required before advising or managing portfolios for retail and professional clients. For eligible counterparties, no suitability assessment is required because firms dealing with ECPs have very limited COBS obligations.",
        },
      ],
    },
    {
      id: "cobs-2",
      number: 2,
      title: "Suitability - The Right Advice for the Right Person",
      slug: "suitability",
      readingTimeMinutes: 9,
      intro:
        "The suitability requirement is one of the most important obligations in COBS. It requires firms to ensure that any investment advice or discretionary management decision is suitable for the specific client, not just generically reasonable. Getting suitability wrong is one of the most common causes of FCA enforcement action.",
      subSections: [
        {
          id: "cobs-2-1",
          heading: "2.1 - When does the suitability requirement apply?",
          content: `The suitability requirement applies whenever a firm:

1. **Provides personal investment recommendations**, advice that is personalised to a specific client and recommends a specific course of action (e.g. "you should invest in this fund")
2. **Manages a portfolio on a discretionary basis**, where the firm has authority to make investment decisions on behalf of the client without seeking approval for each transaction

The suitability requirement does **not** apply to:
- Generic financial information (e.g. explaining how bonds work)
- Execution-only services (where the client makes their own decision and the firm just executes it)
- Non-personal recommendations (e.g. research reports not directed at a specific client)

Note: For execution-only services with retail clients, a separate **appropriateness** assessment is required for complex products.`,
        },
        {
          id: "cobs-2-2",
          heading: "2.2 - The three pillars of suitability",
          content: `To assess suitability, a firm must gather information about three things:

**Pillar 1 - Knowledge and Experience**: Does the client understand the type of product being recommended? Do they have experience with similar investments? A client who has never invested before should not be recommended a complex structured product without extensive explanation.

**Pillar 2 - Financial Situation**: Can the client afford the investment? What are their income, assets, liabilities, and financial commitments? Can they afford to lose the money invested? A client who needs their savings for a house purchase in six months should not be recommended a long-term illiquid investment.

**Pillar 3 - Investment Objectives**: What is the client trying to achieve? What is their risk tolerance? What is their investment time horizon? A client saving for retirement in 30 years has very different needs from one saving for a child's education in five years.

The firm must document all of this information and be able to demonstrate that the recommendation was suitable given what it knew about the client.`,
        },
        {
          id: "cobs-2-3",
          heading: "2.3 - The Suitability Report",
          content: `When a firm provides a personal recommendation to a retail client, it must provide a **Suitability Report**, a written document that explains:

1. Why the recommendation is suitable for the specific client
2. How the recommendation meets the client's investment objectives
3. How the recommendation is consistent with the client's risk tolerance
4. Any disadvantages of the recommendation

The Suitability Report must be provided before the client acts on the recommendation (or at the latest, immediately after, if the client requests immediate execution).

The FCA has been critical of Suitability Reports that are generic, formulaic, or that simply repeat information provided by the client without explaining why the recommendation is suitable. A good Suitability Report tells a story, it connects the client's specific circumstances to the specific recommendation.

**Common suitability failures** identified by the FCA include:
- Recommending products without adequately assessing the client's risk tolerance
- Recommending illiquid products to clients who need access to their money
- Recommending complex products to clients who do not understand them
- Failing to consider the client's existing portfolio when making new recommendations`,
        },
      ],
      keyTakeaways: [
        { text: "Suitability applies to personal investment recommendations and discretionary portfolio management, not to generic advice or execution-only services." },
        { text: "Suitability must be assessed across three pillars: knowledge/experience, financial situation, and investment objectives." },
        { text: "A Suitability Report must be provided to retail clients explaining why the recommendation is suitable for them specifically." },
        { text: "Common failures include not assessing risk tolerance properly, recommending illiquid products to clients who need liquidity, and generic reports." },
      ],
      quizQuestions: [
        {
          id: "cobs-2-q1",
          question: "In which situation does the suitability requirement apply?",
          options: [
            "A firm publishes a research report not directed at any specific client",
            "A client places an execution-only order for shares",
            "A firm manages a client's portfolio on a discretionary basis",
            "A website explains in general terms how bonds work",
          ],
          correctIndex: 2,
          explanation: "Suitability applies to personal investment recommendations and discretionary portfolio management. Generic information, research not aimed at a specific client, and execution-only orders fall outside it, although execution-only sales of complex products to retail clients need a separate appropriateness assessment.",
        },
        {
          id: "cobs-2-q2",
          question: "What are the three pillars a firm must assess for suitability?",
          options: [
            "Age, occupation and nationality",
            "Knowledge and experience, financial situation, and investment objectives",
            "Income, credit score and existing debts",
            "Risk appetite, product cost and market conditions",
          ],
          correctIndex: 1,
          explanation: "Suitability rests on three pillars: the client's knowledge and experience with the type of product, their financial situation including whether they can afford losses, and their investment objectives including risk tolerance and time horizon.",
        },
        {
          id: "cobs-2-q3",
          question: "A client needs their savings for a house deposit in six months. An adviser recommends a long-term illiquid investment. Which pillar of suitability has been ignored?",
          options: [
            "Knowledge and experience",
            "Financial situation",
            "Investment objectives",
            "Both financial situation and investment objectives",
          ],
          correctIndex: 3,
          explanation: "This recommendation fails on the client's financial situation (they need the money soon and cannot afford it to be locked away) and their investment objectives (their time horizon is six months, not the long term). Recommending illiquid products to clients who need access to their money is one of the FCA's most commonly identified suitability failures.",
        },
      ],
    },
    {
      id: "cobs-3",
      number: 3,
      title: "Financial Promotions - Communicating with Clients",
      slug: "financial-promotions",
      readingTimeMinutes: 8,
      intro:
        "Every communication a firm makes that is designed to promote a financial product or service is a 'financial promotion.' The rules governing financial promotions are strict, and the FCA has been increasingly active in enforcing them, particularly online and on social media.",
      subSections: [
        {
          id: "cobs-3-1",
          heading: "3.1 - What is a financial promotion?",
          content: `A **financial promotion** is any communication that invites or induces a person to engage in investment activity. This is an extremely broad definition that covers:

- Advertisements in newspapers, on television, or on billboards
- Website content and landing pages
- Social media posts (including posts by 'finfluencers')
- Email marketing campaigns
- Telephone scripts used by sales teams
- Brochures and product literature

The key test is whether the communication is designed to promote a financial product or service. A factual news article about a company is not a financial promotion. An advertisement for that company's investment product is.

**The approval requirement**: Under Section 21 of FSMA, a financial promotion can only be communicated by an authorised firm, or if it has been approved by an authorised firm. This is why you often see "This communication has been approved by [firm name]" at the bottom of financial advertisements.`,
        },
        {
          id: "cobs-3-2",
          heading: "3.2 - The clear, fair and not misleading standard",
          content: `All financial promotions must be **clear, fair and not misleading**. This is the fundamental standard that applies to every communication with a client.

**Clear** means the promotion is easy to understand. Technical jargon, small print, and complex structures that obscure the key information all fail this standard.

**Fair** means the promotion presents a balanced picture. It must not cherry-pick only the positive aspects of a product while burying the risks. If a product has a 5% chance of total loss, that must be prominently disclosed.

**Not misleading** means the promotion must not create a false impression, even if every individual statement is technically accurate. A promotion that says "our fund has returned 20% per year" without mentioning that this was a single exceptional year, and that the fund has lost money in four of the last five years, is misleading even if the 20% figure is accurate.

The FCA's **Financial Promotions Regime** has been significantly strengthened in recent years, particularly for high-risk investments and crypto assets. From October 2023, crypto promotions must be approved by an FCA-authorised firm and must include prominent risk warnings.`,
        },
        {
          id: "cobs-3-3",
          heading: "3.3 - Social media and finfluencers",
          content: `The rise of social media has created significant challenges for the financial promotions regime. The FCA has been increasingly active in pursuing individuals who promote financial products on social media without proper authorisation.

**Finfluencers**, social media influencers who promote financial products, are subject to the same rules as traditional financial promoters. If an influencer promotes an investment product to their followers, that is a financial promotion and must comply with the rules.

In 2024, the FCA took action against a number of finfluencers who had been promoting high-risk investments (including forex trading schemes and crypto products) without proper authorisation. Several were referred to the police for potential criminal prosecution.

Key points for social media:
- Promoting an unauthorised financial product is a criminal offence under Section 25 of FSMA
- The fact that a promotion is on social media does not exempt it from the rules
- Paid promotions (where an influencer receives payment to promote a product) are particularly scrutinised
- Risk warnings must be prominent, not buried in small print or at the end of a long video`,
        },
      ],
      keyTakeaways: [
        { text: "A financial promotion is any communication designed to promote a financial product: including social media posts and influencer content." },
        { text: "All promotions must be clear, fair, and not misleading, presenting a balanced picture including risks." },
        { text: "Financial promotions must be communicated by or approved by an FCA-authorised firm." },
        { text: "From October 2023, crypto promotions must be approved by an FCA-authorised firm and include prominent risk warnings." },
        { text: "Promoting unauthorised financial products is a criminal offence under Section 25 of FSMA." },
      ],
      quizQuestions: [
        {
          id: "cobs-3-q1",
          question: "Under Section 21 of FSMA, who may communicate a financial promotion?",
          options: [
            "Anyone, provided the content is accurate",
            "An authorised firm, or anyone whose promotion has been approved by an authorised firm",
            "Only the FCA itself",
            "Any firm with more than 10,000 customers",
          ],
          correctIndex: 1,
          explanation: "Section 21 of FSMA restricts financial promotions to authorised firms, or to communications approved by an authorised firm. That is why financial advertisements often carry an approval statement from a named firm.",
        },
        {
          id: "cobs-3-q2",
          question: "A fund advert says 'our fund returned 20% last year'. The figure is accurate, but the fund lost money in four of the previous five years and the advert does not mention this. Is the advert compliant?",
          options: [
            "Yes, because the 20% figure is factually correct",
            "Yes, provided the small print contains a general risk warning",
            "No, because it creates a misleading impression even though the statement is accurate",
            "No, because past performance can never be mentioned",
          ],
          correctIndex: 2,
          explanation: "A promotion must be clear, fair and not misleading. It fails the 'not misleading' test if it creates a false impression, even where every individual statement is technically accurate. Cherry-picking one exceptional year while hiding four years of losses is a classic example.",
        },
        {
          id: "cobs-3-q3",
          question: "A social media influencer is paid to promote a forex trading scheme run by an unauthorised firm. What is their legal position?",
          options: [
            "Social media promotions are outside the financial promotions regime",
            "They may be committing a criminal offence under Section 25 of FSMA",
            "They only need to add a #ad hashtag",
            "They are safe as long as the scheme's returns are real",
          ],
          correctIndex: 1,
          explanation: "Finfluencers are subject to the same rules as any other financial promoter. Promoting an unauthorised financial product is a criminal offence under Section 25 of FSMA, and in 2024 the FCA took action against several finfluencers, referring some to the police.",
        },
      ],
    },
  ],
  moduleTest: {
    passMarkPercent: 70,
    questions: [
      {
        id: "cobs-test-q1",
        question: "Which of the following would automatically be a per se professional client?",
        options: [
          "A retired doctor with a £2 million portfolio",
          "A pension fund",
          "A first-time investor who requests professional status",
          "Any client who signs a waiver",
        ],
        correctIndex: 1,
        explanation: "Per se professional clients are automatically professional by their nature: investment firms, credit institutions, insurance companies, pension funds and large corporates. A wealthy individual is still a retail client unless they go through the elective professional reclassification process.",
      },
      {
        id: "cobs-test-q2",
        question: "How many of the three quantitative criteria must a retail client meet to be reclassified as an elective professional client?",
        options: [
          "All three",
          "At least two",
          "At least one",
          "None, if they sign a consent form",
        ],
        correctIndex: 1,
        explanation: "The client must meet at least two of the three criteria: significant transaction frequency (10 per quarter averaged over four quarters), a portfolio over €500,000, or at least a year of relevant professional work in the financial sector. The firm must also warn them, get written consent, and assess their expertise.",
      },
      {
        id: "cobs-test-q3",
        question: "When must a firm carry out an appropriateness assessment?",
        options: [
          "Before giving any client investment advice",
          "For execution-only sales of complex products to retail clients",
          "Whenever a professional client places an order",
          "Only for eligible counterparties",
        ],
        correctIndex: 1,
        explanation: "Appropriateness assessments apply to non-advised (execution-only) services when retail clients buy complex products. Suitability, a stronger test, applies when advice is given or portfolios are managed. Professional clients and ECPs do not need appropriateness assessments.",
      },
      {
        id: "cobs-test-q4",
        question: "What must a Suitability Report do?",
        options: [
          "Repeat the information the client provided on the fact-find form",
          "Explain why the recommendation suits the specific client, how it meets their objectives and risk tolerance, and any disadvantages",
          "Confirm that the product is authorised by the FCA",
          "Set out the firm's commission arrangements only",
        ],
        correctIndex: 1,
        explanation: "A Suitability Report must connect the client's specific circumstances to the specific recommendation: why it is suitable, how it meets their objectives, how it fits their risk tolerance, and any disadvantages. The FCA criticises generic, formulaic reports that simply repeat client information.",
      },
      {
        id: "cobs-test-q5",
        question: "When must the Suitability Report be provided to a retail client?",
        options: [
          "Within 30 days of the transaction",
          "Before the client acts on the recommendation, or immediately after if the client requests immediate execution",
          "Only if the client asks for one",
          "At the end of the tax year",
        ],
        correctIndex: 1,
        explanation: "The report must reach the client before they act on the recommendation. The only exception is where the client asks for immediate execution, in which case it must follow immediately after.",
      },
      {
        id: "cobs-test-q6",
        question: "Which of these is a financial promotion?",
        options: [
          "A factual news article about a company's results",
          "An academic paper on portfolio theory",
          "An Instagram post by a paid influencer encouraging followers to join a trading platform",
          "A firm's internal staff newsletter",
        ],
        correctIndex: 2,
        explanation: "A financial promotion is any communication that invites or induces a person to engage in investment activity, which squarely covers paid influencer posts promoting a trading platform. Factual news and academic material are not promotions because they are not designed to promote a product or service.",
      },
      {
        id: "cobs-test-q7",
        question: "What changed for crypto promotions from October 2023?",
        options: [
          "They were banned entirely",
          "They must be approved by an FCA-authorised firm and carry prominent risk warnings",
          "They no longer count as financial promotions",
          "They may only appear in print media",
        ],
        correctIndex: 1,
        explanation: "From October 2023, crypto promotions fall within the financial promotions regime: they must be communicated or approved by an FCA-authorised firm and must include prominent risk warnings.",
      },
      {
        id: "cobs-test-q8",
        question: "A firm systematically encourages ordinary retail customers to opt up to professional status so it can sell them restricted high-risk products. How would the FCA view this?",
        options: [
          "As acceptable commercial practice, since clients consented",
          "As a serious breach, because reclassification must not be used to avoid retail client obligations",
          "As acceptable if the products perform well",
          "As a matter for the Financial Ombudsman only",
        ],
        correctIndex: 1,
        explanation: "The FCA has taken enforcement action against firms that used elective professional reclassification to strip retail clients of protections and sell them restricted products. Reclassification requires genuine expertise and informed consent, not a box-ticking exercise to dodge COBS obligations.",
      },
    ],
  },
};
