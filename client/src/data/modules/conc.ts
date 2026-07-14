import type { Module } from "./types";

// ============================================================
// MODULE 13 - CONC: Consumer Credit
// ============================================================
export const moduleCONC: Module = {
  id: "conc",
  number: 13,
  title: "CONC - Consumer Credit",
  slug: "conc-consumer-credit",
  block: "Business Standards",
  sourceCode: "CONC",
  colour: "bg-purple-50",
  accentColour: "oklch(0.52 0.19 280)",
  description:
    "CONC covers the regulation of consumer credit products including personal loans, credit cards, overdrafts, buy-now-pay-later, and payday loans. It is one of the most important areas of retail financial regulation given the scale of consumer debt in the UK.",
  whoItAppliesTo: "Banks, credit card providers, payday lenders, BNPL firms, debt collectors, and credit brokers.",
  chapters: [
    {
      id: "conc-1",
      number: 1,
      title: "Consumer Credit Regulation and Responsible Lending",
      slug: "consumer-credit-basics",
      readingTimeMinutes: 9,
      intro:
        "Consumer credit regulation in the UK is built on the Consumer Credit Act 1974 and the FCA's CONC sourcebook. The FCA took over regulation of consumer credit from the Office of Fair Trading in 2014 and has been significantly more interventionist.",
      subSections: [
        {
          id: "conc-1-1",
          heading: "1.1 - The regulatory framework",
          content: `The **Consumer Credit Act 1974 (CCA)** created the basic framework - licensing requirements, the right to cancel, the right to early repayment, and the concept of the **Annual Percentage Rate (APR)** as a standardised measure of credit cost.\n\nThe FCA's **Consumer Credit sourcebook (CONC)** applies to all firms that lend money to consumers, arrange credit, or collect debts. This includes personal loans, credit cards, overdrafts, hire purchase, payday loans, and buy-now-pay-later (BNPL) products.`,
        },
        {
          id: "conc-1-2",
          heading: "1.2 - Responsible lending and the payday loan cap",
          content: `The centrepiece of CONC is the **responsible lending** obligation. Before granting credit, lenders must carry out a **creditworthiness assessment** considering the borrower's income, expenditure, existing credit commitments, and credit history.\n\n**The payday lending price cap (2015):** The FCA introduced a cap on high-cost short-term credit limiting interest and fees to 0.8% per day, default fees to £15, and total cost to 100% of the original loan. This halved the cost of payday loans and drove many irresponsible lenders out of the market.`,
        },
      ],
      keyTakeaways: [
        { text: "The Consumer Credit Act 1974 created the basic framework; the FCA's CONC sourcebook provides detailed rules." },
        { text: "Lenders must carry out a creditworthiness assessment before granting credit." },
        { text: "The FCA introduced a price cap on payday loans in 2015: max 0.8% per day, total cost capped at 100% of the loan." },
      ],
      quizQuestions: [
        {
          id: "conc-1-q1",
          question: "Which Act created the basic framework of UK consumer credit regulation, including the standardised APR?",
          options: [
            "The Financial Services and Markets Act 2000",
            "The Consumer Credit Act 1974",
            "The Consumer Rights Act 2015",
            "The Banking Act 2009",
          ],
          correctIndex: 1,
          explanation: "The Consumer Credit Act 1974 created licensing requirements, the right to cancel, the right to early repayment, and the Annual Percentage Rate as a standardised measure of credit cost. The FCA's CONC sourcebook provides the detailed rules on top.",
        },
        {
          id: "conc-1-q2",
          question: "What must a lender assess before granting consumer credit?",
          options: [
            "Only the borrower's age and address",
            "The borrower's income, expenditure, existing credit commitments and credit history",
            "The borrower's employer's credit rating",
            "Nothing, provided the APR is disclosed",
          ],
          correctIndex: 1,
          explanation: "The centrepiece of CONC is responsible lending: before granting credit, lenders must carry out a creditworthiness assessment covering income, expenditure, existing commitments and credit history.",
        },
        {
          id: "conc-1-q3",
          question: "Under the 2015 payday lending cap, what is the maximum total cost of a high-cost short-term loan?",
          options: [
            "There is no cap on total cost",
            "50% of the original loan",
            "100% of the original loan, with daily interest and fees capped at 0.8% and default fees at £15",
            "200% of the original loan",
          ],
          correctIndex: 2,
          explanation: "The FCA's 2015 cap limits interest and fees to 0.8% per day, default fees to £15, and the total cost to 100% of the original loan, so a borrower can never repay more than double what they borrowed. It halved payday loan costs and drove many irresponsible lenders out of the market.",
        },
      ],
    },
    {
      id: "conc-2",
      number: 2,
      title: "Buy-Now-Pay-Later and Emerging Credit Products",
      slug: "buy-now-pay-later",
      readingTimeMinutes: 7,
      intro:
        "BNPL products exploded in popularity during the 2020s. Their regulation has been a major policy debate, with the FCA and HM Treasury working to bring them within the consumer credit framework.",
      subSections: [
        {
          id: "conc-2-1",
          heading: "2.1 - The BNPL regulatory gap and its closure",
          content: `**Buy-now-pay-later (BNPL)** products like Klarna, Clearpay, and Laybuy were structured to fall outside the Consumer Credit Act 1974 through an exemption for interest-free credit repayable within 12 months. This meant BNPL providers were not regulated by the FCA and did not have to carry out affordability checks.\n\nThe **Woolard Review (2021)** identified BNPL as a significant consumer harm risk. The **Financial Services and Markets Act 2023** included powers to regulate BNPL. As of 2026, the FCA is finalising its BNPL rules, which will require FCA authorisation, affordability assessments, clear cost information, and access to the Financial Ombudsman Service.`,
        },
      ],
      keyTakeaways: [
        { text: "Most BNPL products were previously unregulated due to a CCA exemption, this is being closed." },
        { text: "The Woolard Review (2021) recommended bringing BNPL within the regulatory perimeter." },
        { text: "The Financial Services and Markets Act 2023 gives the FCA powers to regulate BNPL." },
        { text: "New BNPL rules will require FCA authorisation and affordability assessments." },
      ],
      quizQuestions: [
        {
          id: "conc-2-q1",
          question: "How did BNPL products originally avoid FCA regulation?",
          options: [
            "They were licensed in other countries",
            "They used a Consumer Credit Act exemption for interest-free credit repayable within 12 months",
            "They were classified as gambling products",
            "They operated only in cash",
          ],
          correctIndex: 1,
          explanation: "BNPL providers structured their products to fit the CCA exemption for interest-free credit repayable within 12 months, which kept them outside FCA regulation and meant no mandatory affordability checks.",
        },
        {
          id: "conc-2-q2",
          question: "Which review identified BNPL as a significant consumer harm risk?",
          options: [
            "The Mortgage Market Review (2014)",
            "The Woolard Review (2021)",
            "The Wholesale Markets Review (2021)",
            "The Parliamentary Commission on Banking Standards",
          ],
          correctIndex: 1,
          explanation: "The Woolard Review in 2021 flagged BNPL as a significant consumer harm risk and recommended bringing it inside the regulatory perimeter. FSMA 2023 then provided the powers to do so.",
        },
        {
          id: "conc-2-q3",
          question: "What will the new BNPL rules require of providers?",
          options: [
            "Nothing beyond a voluntary code",
            "FCA authorisation, affordability assessments, clear cost information and access to the Financial Ombudsman Service",
            "A ban on all BNPL lending",
            "Interest rate caps of 0.8% per day only",
          ],
          correctIndex: 1,
          explanation: "As of 2026 the FCA is finalising rules that will require BNPL providers to be FCA-authorised, run affordability assessments, give clear cost information, and give customers access to the FOS.",
        },
      ],
    },
  ],
  moduleTest: {
    passMarkPercent: 70,
    questions: [
      {
        id: "conc-test-q1",
        question: "Who regulated consumer credit before the FCA took over in 2014?",
        options: [
          "The Bank of England",
          "The Office of Fair Trading",
          "HM Treasury",
          "Trading Standards",
        ],
        correctIndex: 1,
        explanation: "The FCA took over consumer credit regulation from the Office of Fair Trading in 2014 and has been significantly more interventionist, including the payday loan price cap of 2015.",
      },
      {
        id: "conc-test-q2",
        question: "Which of these products falls under CONC?",
        options: [
          "Home insurance",
          "Credit cards, overdrafts, payday loans and hire purchase",
          "Stocks and shares ISAs",
          "Defined benefit pensions",
        ],
        correctIndex: 1,
        explanation: "CONC applies to firms that lend to consumers, arrange credit or collect debts, covering personal loans, credit cards, overdrafts, hire purchase, payday loans and BNPL products.",
      },
      {
        id: "conc-test-q3",
        question: "What is the APR?",
        options: [
          "The maximum interest rate a lender may charge",
          "A standardised measure of the annual cost of credit, created by the Consumer Credit Act 1974",
          "The FCA's approval reference number",
          "The lender's profit margin",
        ],
        correctIndex: 1,
        explanation: "The Annual Percentage Rate is a standardised measure of the cost of credit, introduced through the CCA 1974 framework so consumers can compare products on a like-for-like basis.",
      },
      {
        id: "conc-test-q4",
        question: "Under the payday loan price cap, what is the maximum default fee?",
        options: [
          "£5",
          "£15",
          "£50",
          "There is no cap on default fees",
        ],
        correctIndex: 1,
        explanation: "The 2015 cap on high-cost short-term credit limits default fees to £15, daily interest and fees to 0.8%, and the total cost to 100% of the amount borrowed.",
      },
      {
        id: "conc-test-q5",
        question: "Which Act gave the government powers to bring BNPL into regulation?",
        options: [
          "The Consumer Credit Act 1974",
          "The Financial Services and Markets Act 2023",
          "The Economic Crime and Corporate Transparency Act 2023",
          "The Consumer Rights Act 2015",
        ],
        correctIndex: 1,
        explanation: "FSMA 2023 included powers to regulate BNPL. As of 2026 the FCA is finalising the rules, which will require authorisation, affordability checks, clear cost information and FOS access.",
      },
      {
        id: "conc-test-q6",
        question: "Why did the unregulated status of BNPL concern regulators?",
        options: [
          "BNPL firms paid no UK tax",
          "Providers did not have to carry out affordability checks, so consumers could build up unaffordable debt",
          "BNPL products charged the highest interest rates in the market",
          "BNPL was only available to wealthy customers",
        ],
        correctIndex: 1,
        explanation: "Because BNPL sat outside the CCA, providers were not required to check affordability, and consumers could stack multiple interest-free commitments they could not afford. The Woolard Review identified this as a significant consumer harm risk.",
      },
    ],
  },
};
