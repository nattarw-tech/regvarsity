import type { Module } from "./types";

// ============================================================
// MODULE 12 - MCOB: Mortgage Conduct of Business
// ============================================================
export const moduleMCOB: Module = {
  id: "mcob",
  number: 12,
  title: "MCOB - Mortgage Conduct of Business",
  slug: "mcob-mortgage-conduct",
  block: "Business Standards",
  sourceCode: "MCOB",
  colour: "bg-cyan-50",
  accentColour: "oklch(0.50 0.16 200)",
  description:
    "MCOB regulates the sale and administration of mortgages and home finance products in the UK. It covers everything from initial advertising through to arrears handling, and is particularly important given the significance of mortgage debt in most people's lives.",
  whoItAppliesTo: "Mortgage lenders, mortgage brokers, and firms providing home finance products.",
  chapters: [
    {
      id: "mcob-1",
      number: 1,
      title: "The Mortgage Market Review and Responsible Lending",
      slug: "mortgage-market-review",
      readingTimeMinutes: 8,
      intro:
        "The UK mortgage market was significantly reformed following the Mortgage Market Review (MMR) in 2014. The MMR was a direct response to the irresponsible lending that contributed to the 2008 financial crisis.",
      subSections: [
        {
          id: "mcob-1-1",
          heading: "1.1 - What the MMR changed",
          content: `Before the MMR, many mortgages were sold on a **self-certified** basis - borrowers simply stated their income without providing evidence. The MMR introduced three key changes:\n\n1. **Affordability assessment:** Lenders must assess whether the borrower can afford the mortgage at the initial rate and if interest rates rise (stress testing).\n2. **Income verification:** Self-certification mortgages were banned. All income must be verified.\n3. **Advised sales:** Most mortgage sales must now be advised, the broker must make a personal recommendation and explain why the product is suitable.`,
        },
        {
          id: "mcob-1-2",
          heading: "1.2 - The ESIS and the 7-day reflection period",
          content: `The **European Standardised Information Sheet (ESIS)** is a mandatory document provided before a customer commits to a mortgage. It includes the Annual Percentage Rate of Charge (APRC), the total amount payable over the life of the mortgage, and a **7-day reflection period**, the customer cannot be pressured to commit immediately.\n\nThe ESIS replaced the previous Key Facts Illustration (KFI) for most mortgages. Although the UK has left the EU, these rules remain in UK law under the retained Mortgage Credit Directive.`,
        },
      ],
      keyTakeaways: [
        { text: "The Mortgage Market Review (2014) banned self-certified mortgages and introduced mandatory affordability assessments." },
        { text: "Lenders must stress-test affordability against potential interest rate rises, not just the initial rate." },
        { text: "Most mortgage sales must be advised, the broker must make a personal recommendation." },
        { text: "The ESIS provides standardised pre-contractual information and includes a 7-day reflection period." },
      ],
      quizQuestions: [
        {
          id: "mcob-1-q1",
          question: "What was a self-certified mortgage, and what happened to it?",
          options: [
            "A mortgage where the lender certified the property value; still available today",
            "A mortgage where borrowers stated their income without evidence; banned by the Mortgage Market Review",
            "A mortgage for self-employed people; renamed in 2014",
            "A mortgage requiring a solicitor's certificate; abolished in 2008",
          ],
          correctIndex: 1,
          explanation: "Before the MMR, borrowers could simply state their income without providing evidence. This irresponsible lending contributed to the 2008 crisis, and the 2014 Mortgage Market Review banned self-certification: all income must now be verified.",
        },
        {
          id: "mcob-1-q2",
          question: "What does mortgage affordability stress testing involve?",
          options: [
            "Checking the borrower can afford the mortgage only at today's rate",
            "Assessing affordability at the initial rate and if interest rates rise",
            "Testing the property's structural condition",
            "Requiring a 25% deposit",
          ],
          correctIndex: 1,
          explanation: "Lenders must assess whether the borrower can afford the mortgage both at the initial rate and if interest rates rise. This stress testing was one of the MMR's three key changes, alongside income verification and mostly advised sales.",
        },
        {
          id: "mcob-1-q3",
          question: "What does the ESIS give a mortgage customer?",
          options: [
            "A guaranteed interest rate for life",
            "Standardised pre-contract information including the APRC and a 7-day reflection period",
            "A government subsidy",
            "Proof of home insurance",
          ],
          correctIndex: 1,
          explanation: "The European Standardised Information Sheet includes the Annual Percentage Rate of Charge, the total amount payable over the life of the mortgage, and a 7-day reflection period so the customer cannot be pressured into committing immediately. It remains in UK law post-Brexit.",
        },
      ],
    },
    {
      id: "mcob-2",
      number: 2,
      title: "Mortgage Arrears and Forbearance",
      slug: "mortgage-arrears-forbearance",
      readingTimeMinutes: 7,
      intro:
        "When borrowers fall behind on mortgage payments, MCOB requires lenders to treat them fairly and explore all reasonable options before taking possession of the property.",
      subSections: [
        {
          id: "mcob-2-1",
          heading: "2.1 - The arrears handling rules",
          content: `MCOB 13 requires that **repossession must be a last resort**. When a borrower falls into arrears, the lender must contact them promptly, explore all reasonable options, consider any proposals the borrower makes, not charge excessive fees, and refer the borrower to free debt advice services.\n\n**Forbearance options** include: extending the mortgage term, switching to interest-only temporarily, payment holidays, capitalising the arrears, and accepting reduced payments for a period.\n\nThe courts also apply the **Pre-Action Protocol for Possession Claims** which requires evidence that the lender has genuinely explored alternatives before a possession order will be granted.`,
        },
      ],
      keyTakeaways: [
        { text: "Repossession must always be a last resort under MCOB 13." },
        { text: "Lenders must actively explore forbearance options before pursuing possession." },
        { text: "Free debt advice referrals are mandatory when a borrower is in financial difficulty." },
      ],
      quizQuestions: [
        {
          id: "mcob-2-q1",
          question: "Under MCOB 13, when may a lender repossess a property?",
          options: [
            "As soon as one payment is missed",
            "After three missed payments, automatically",
            "Only as a last resort, after all reasonable alternatives have been explored",
            "Whenever the property's value falls below the loan",
          ],
          correctIndex: 2,
          explanation: "Repossession must be a last resort. The lender must contact the borrower promptly, consider their proposals, explore all reasonable options, avoid excessive fees, and refer the borrower to free debt advice before pursuing possession.",
        },
        {
          id: "mcob-2-q2",
          question: "Which of these is a forbearance option for a borrower in arrears?",
          options: [
            "Extending the mortgage term or switching temporarily to interest-only",
            "Doubling the interest rate to recover arrears faster",
            "Transferring the debt to a family member without consent",
            "Cancelling the borrower's home insurance",
          ],
          correctIndex: 0,
          explanation: "Forbearance options include term extensions, temporary interest-only periods, payment holidays, capitalising arrears and accepting reduced payments for a period. The point is to give the borrower a realistic path back to sustainable payments.",
        },
        {
          id: "mcob-2-q3",
          question: "What must a lender show a court before obtaining a possession order?",
          options: [
            "That the borrower has other assets",
            "Evidence under the Pre-Action Protocol that it genuinely explored alternatives to possession",
            "That the property is unoccupied",
            "That the mortgage was advised at sale",
          ],
          correctIndex: 1,
          explanation: "The Pre-Action Protocol for Possession Claims requires the lender to show it genuinely explored alternatives before a possession order will be granted. This backs up the MCOB 13 requirement that repossession is a last resort.",
        },
      ],
    },
  ],
  moduleTest: {
    passMarkPercent: 70,
    questions: [
      {
        id: "mcob-test-q1",
        question: "What prompted the Mortgage Market Review?",
        options: [
          "Brexit",
          "The irresponsible lending that contributed to the 2008 financial crisis",
          "A rise in buy-to-let landlords",
          "EU harmonisation requirements",
        ],
        correctIndex: 1,
        explanation: "The MMR, implemented in 2014, was a direct response to the irresponsible lending, including self-certified mortgages, that contributed to the 2008 financial crisis.",
      },
      {
        id: "mcob-test-q2",
        question: "Which three changes did the MMR introduce?",
        options: [
          "Rate caps, deposit minimums and regional quotas",
          "Affordability assessments with stress testing, mandatory income verification, and mostly advised sales",
          "Bank levies, windfall taxes and bonus caps",
          "Help to Buy, Right to Buy and shared ownership",
        ],
        correctIndex: 1,
        explanation: "The MMR required lenders to assess affordability including stress testing against rate rises, banned self-certification so all income is verified, and made most mortgage sales advised, requiring a personal recommendation.",
      },
      {
        id: "mcob-test-q3",
        question: "What key figures must the ESIS include?",
        options: [
          "The lender's share price and dividend",
          "The APRC and the total amount payable over the life of the mortgage",
          "The borrower's credit score",
          "The property's energy rating",
        ],
        correctIndex: 1,
        explanation: "The ESIS includes the Annual Percentage Rate of Charge (APRC) and the total amount payable over the life of the mortgage, plus the 7-day reflection period. It replaced the Key Facts Illustration for most mortgages.",
      },
      {
        id: "mcob-test-q4",
        question: "A borrower in arrears proposes a temporary reduced payment plan. What must the lender do?",
        options: [
          "Reject it, arrears plans are not allowed",
          "Genuinely consider the proposal as part of exploring all reasonable options",
          "Accept it automatically without assessment",
          "Refer the borrower to the FCA",
        ],
        correctIndex: 1,
        explanation: "MCOB 13 requires lenders to consider any proposals the borrower makes and explore all reasonable options, which can include accepting reduced payments for a period. Repossession remains a last resort.",
      },
      {
        id: "mcob-test-q5",
        question: "What must a lender do about debt advice when a borrower is in financial difficulty?",
        options: [
          "Sell the borrower a debt consolidation loan",
          "Refer the borrower to free debt advice services",
          "Nothing, debt advice is the borrower's responsibility",
          "Appoint a solicitor for the borrower",
        ],
        correctIndex: 1,
        explanation: "Referring borrowers in difficulty to free debt advice services is a mandatory part of fair arrears handling under MCOB 13.",
      },
      {
        id: "mcob-test-q6",
        question: "Did the ESIS rules disappear when the UK left the EU?",
        options: [
          "Yes, they were repealed on exit day",
          "No, they remain in UK law under the retained Mortgage Credit Directive",
          "They apply only to EU citizens buying UK property",
          "They were replaced by a voluntary industry code",
        ],
        correctIndex: 1,
        explanation: "Although the ESIS originates from EU law, the rules were retained in UK law under the retained Mortgage Credit Directive and continue to apply to UK mortgage sales.",
      },
    ],
  },
};
