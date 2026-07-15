import type { Module } from "./types";

// ============================================================
// MODULE 5 - MiFID II / UK MiFIR
// ============================================================
export const moduleMiFID: Module = {
  id: "mifid",
  number: 5,
  title: "MiFID II / UK MiFIR - Markets in Financial Instruments",
  slug: "mifid-ii-uk-mifir",
  block: "UK Financial Markets",
  sourceCode: "UK MiFIR / MAR",
  colour: "bg-emerald-50",
  accentColour: "oklch(0.38 0.16 145)",
  description:
    "MiFID II and UK MiFIR are the rulebooks for financial markets, covering how shares, bonds, and derivatives are traded, how trades must be reported to regulators, and how investment firms must treat their clients. After Brexit, the UK has its own version and is actively reforming it.",
  whoItAppliesTo:
    "Investment firms, trading venues, data reporting service providers, and systematic internalisers.",
  chapters: [
    {
      id: "mifid-1",
      number: 1,
      title: "What Is MiFID II and Why Does It Exist?",
      slug: "what-is-mifid-ii",
      readingTimeMinutes: 7,
      intro:
        "MiFID II is one of the most comprehensive pieces of financial market regulation ever created. It came into force in January 2018 and fundamentally changed how financial markets operate across Europe, and, after Brexit, in the UK through its own version.",
      subSections: [
        {
          id: "mifid-1-1",
          heading: "1.1 - The origins of MiFID",
          content: `The original **Markets in Financial Instruments Directive (MiFID I)** came into force in 2007. Its primary goal was to create a single European market for financial services, allowing investment firms to operate across EU member states with a single "passport."

However, MiFID I had significant weaknesses. The 2008 financial crisis exposed gaps in market transparency, investor protection, and the oversight of complex financial instruments. The EU's response was **MiFID II**, a much more comprehensive framework that came into force on 3 January 2018.

MiFID II was accompanied by **MiFIR** (the Markets in Financial Instruments Regulation), a directly applicable regulation (as opposed to a directive, which requires national implementation). Together, MiFID II and MiFIR created the most detailed financial markets rulebook ever written.

After Brexit, the UK retained MiFID II and MiFIR in UK law through the **European Union (Withdrawal) Act 2018**. The UK version is now called **UK MiFIR** and is being actively reformed through the **Wholesale Markets Review (WMR)**, which began in 2021 and is ongoing.`,
        },
        {
          id: "mifid-1-2",
          heading: "1.2 - The key objectives of MiFID II",
          content: `MiFID II has four main objectives:

**1. Market transparency**: Requiring trading venues and firms to publish information about trades, both before (pre-trade transparency) and after (post-trade transparency) they occur. This allows market participants to see where prices are and how much is being traded.

**2. Investor protection**: Strengthening the rules on how investment firms treat their clients: including suitability, best execution, and inducements (payments from product providers to advisers).

**3. Market structure**: Regulating the different types of trading venues. Regulated Markets (RMs), Multilateral Trading Facilities (MTFs), and Organised Trading Facilities (OTFs), and ensuring they operate fairly and transparently.

**4. Supervisory convergence**: Ensuring that regulators across different jurisdictions apply the rules consistently and share information effectively.`,
        },
        {
          id: "mifid-1-3",
          heading: "1.3 - The UK's post-Brexit reforms",
          content: `Since Brexit, the UK has been reviewing and reforming its inherited MiFID II framework. The key reforms include:

**The Wholesale Markets Review (WMR)**: Launched in 2021, the WMR is a comprehensive review of the UK's wholesale markets framework. Key changes include:
- Removing the share trading obligation (which required UK firms to trade EU shares on EU venues)
- Reforming the transparency regime to make it more proportionate
- Streamlining transaction reporting requirements

**The Investment Research Review (IRR)**: The UK has reformed the rules on investment research, allowing bundling of research and execution costs in certain circumstances, a departure from the strict MiFID II unbundling requirement.

**UK MiFIR Review**: The FCA published CP24/2 in 2024 proposing significant changes to the UK's consolidated tape, transparency regime, and transaction reporting framework, and has been finalising these reforms in stages since.

The UK's approach reflects a broader post-Brexit strategy of maintaining high standards while adapting the rules to the specific needs of UK markets, rather than simply copying EU rules.`,
        },
      ],
      keyTakeaways: [
        {
          text: "MiFID II came into force in January 2018, replacing the original MiFID I and significantly strengthening market regulation.",
        },
        {
          text: "The four objectives are: market transparency, investor protection, market structure regulation, and supervisory convergence.",
        },
        {
          text: "After Brexit, the UK retained MiFID II/MiFIR in UK law and is actively reforming it through the Wholesale Markets Review.",
        },
        {
          text: "Key UK reforms include removing the share trading obligation, reforming investment research rules, and streamlining transaction reporting.",
        },
      ],
      quizQuestions: [
        {
          id: "mifid-1-q1",
          question: "What is the difference between MiFID II and MiFIR?",
          options: [
            "They are two names for the same document",
            "MiFID II is a directive requiring national implementation, while MiFIR is a directly applicable regulation",
            "MiFID II covers the UK and MiFIR covers the EU",
            "MiFIR replaced MiFID II in 2018",
          ],
          correctIndex: 1,
          explanation:
            "MiFID II is a directive, which member states had to implement through national law. MiFIR is a regulation, which applied directly without national implementation. They came into force together on 3 January 2018 and jointly form the markets rulebook.",
        },
        {
          id: "mifid-1-q2",
          question:
            "Which of these was one of the UK's post-Brexit reforms under the Wholesale Markets Review?",
          options: [
            "Introducing a share trading obligation for the first time",
            "Removing the share trading obligation that required UK firms to trade EU shares on EU venues",
            "Banning investment research entirely",
            "Adopting all new EU rules automatically",
          ],
          correctIndex: 1,
          explanation:
            "The Wholesale Markets Review, launched in 2021, removed the share trading obligation, reformed the transparency regime to be more proportionate, and streamlined transaction reporting. The UK also relaxed the strict research unbundling rule through the Investment Research Review.",
        },
        {
          id: "mifid-1-q3",
          question:
            "Which of the following is NOT one of MiFID II's four main objectives?",
          options: [
            "Market transparency",
            "Investor protection",
            "Guaranteeing profits for market participants",
            "Supervisory convergence",
          ],
          correctIndex: 2,
          explanation:
            "MiFID II's four objectives are market transparency (pre-trade and post-trade), investor protection, market structure regulation of venues such as RMs, MTFs and OTFs, and supervisory convergence. No regulation guarantees profits.",
        },
      ],
    },
    {
      id: "mifid-2",
      number: 2,
      title: "Transaction Reporting and Market Transparency",
      slug: "transaction-reporting",
      readingTimeMinutes: 8,
      intro:
        "Transaction reporting is one of the most operationally demanding aspects of MiFID II. Firms must report details of every transaction in financial instruments to their national regulator, in the UK, to the FCA. Getting this right requires sophisticated systems and processes.",
      subSections: [
        {
          id: "mifid-2-1",
          heading: "2.1 - What must be reported?",
          content: `Under UK MiFIR Article 26, investment firms must report transactions in financial instruments to the FCA. The reporting obligation applies to:

- **Shares** admitted to trading on a UK trading venue
- **Bonds** admitted to trading on a UK trading venue
- **Derivatives** (including OTC derivatives) where the underlying is admitted to trading on a UK trading venue
- **Exchange-traded funds (ETFs)**
- **Emission allowances**

Reports must be submitted by the end of the working day following the transaction (T+1). They must contain up to **65 data fields** covering:
- The identity of the buyer and seller (including LEI. Legal Entity Identifier)
- The financial instrument traded (ISIN)
- The quantity and price
- The trading venue
- The date and time of the transaction

The FCA uses transaction reports to detect market abuse, monitor systemic risk, and ensure market integrity. Failures in transaction reporting are taken very seriously, the FCA has issued significant fines for reporting failures.`,
        },
        {
          id: "mifid-2-2",
          heading: "2.2 - Best Execution",
          content: `**Best execution** requires investment firms to take all sufficient steps to obtain the best possible result for their clients when executing orders. This is not just about getting the best price, it includes:

- **Price**, the most obvious factor
- **Costs**: including commissions, fees, and other charges
- **Speed**, how quickly the order is executed
- **Likelihood of execution**, will the order actually be filled?
- **Size**, can the full order be executed at the desired price?
- **Market impact**, will a large order move the market?

Firms must have a **Best Execution Policy** that explains how they achieve best execution for different types of orders and clients. This policy must be reviewed at least annually and whenever there is a material change in circumstances.

For retail clients, price is generally the most important factor. For professional clients, other factors may be more relevant: for example, a large institutional investor may prioritise market impact over price.`,
        },
      ],
      keyTakeaways: [
        {
          text: "Investment firms must report all transactions in financial instruments to the FCA by T+1, with up to 65 data fields.",
        },
        {
          text: "Best execution requires firms to obtain the best possible result for clients, considering price, costs, speed, and likelihood of execution.",
        },
        {
          text: "Firms must have a Best Execution Policy reviewed at least annually.",
        },
        {
          text: "For retail clients, price is generally the most important best execution factor.",
        },
      ],
      quizQuestions: [
        {
          id: "mifid-2-q1",
          question:
            "By when must an investment firm submit a transaction report to the FCA?",
          options: [
            "Within one hour of the trade",
            "By the end of the working day following the transaction (T+1)",
            "Within one week",
            "By the end of the calendar month",
          ],
          correctIndex: 1,
          explanation:
            "Under UK MiFIR Article 26, transaction reports must be submitted by the end of the working day following the transaction, known as T+1. Reports can contain up to 65 data fields, including LEIs, ISINs, quantity, price, venue and timing.",
        },
        {
          id: "mifid-2-q2",
          question: "Why does the FCA collect transaction reports?",
          options: [
            "To calculate stamp duty",
            "To detect market abuse, monitor systemic risk and protect market integrity",
            "To publish league tables of the busiest brokers",
            "To set interest rates",
          ],
          correctIndex: 1,
          explanation:
            "Transaction reports give the FCA a detailed picture of market activity, which it uses to detect market abuse, monitor systemic risk and ensure market integrity. Reporting failures attract significant fines.",
        },
        {
          id: "mifid-2-q3",
          question: "Which statement about best execution is correct?",
          options: [
            "Best execution means always achieving the lowest price",
            "Best execution considers price, costs, speed, likelihood of execution, size and market impact",
            "Best execution only applies to retail clients",
            "Best execution policies never need reviewing once written",
          ],
          correctIndex: 1,
          explanation:
            "Best execution is about the best possible overall result, weighing price, costs, speed, likelihood of execution, size and market impact. For retail clients price generally matters most, but a large institution might prioritise market impact. The policy must be reviewed at least annually.",
        },
      ],
    },
  ],
  moduleTest: {
    passMarkPercent: 70,
    questions: [
      {
        id: "mifid-test-q1",
        question: "When did MiFID II come into force?",
        options: [
          "2007",
          "3 January 2018",
          "31 July 2023",
          "After the 2016 Brexit referendum",
        ],
        correctIndex: 1,
        explanation:
          "MiFID II and MiFIR came into force on 3 January 2018, replacing the original MiFID I of 2007, whose weaknesses had been exposed by the 2008 financial crisis.",
      },
      {
        id: "mifid-test-q2",
        question: "What was the primary goal of the original MiFID I?",
        options: [
          "To regulate crypto assets",
          "To create a single European market for financial services with a single passport",
          "To break up large investment banks",
          "To abolish stock exchanges",
        ],
        correctIndex: 1,
        explanation:
          "MiFID I, in force from 2007, aimed to create a single European market for financial services, letting investment firms operate across EU member states under a single passport.",
      },
      {
        id: "mifid-test-q3",
        question: "How did MiFID II and MiFIR survive Brexit in the UK?",
        options: [
          "They were repealed entirely",
          "They were retained in UK law through the European Union (Withdrawal) Act 2018, and the UK is now reforming its own version",
          "The UK never applied them",
          "They apply in the UK only until 2030",
        ],
        correctIndex: 1,
        explanation:
          "The UK retained MiFID II and MiFIR through the EU (Withdrawal) Act 2018. The retained version, UK MiFIR, is being actively reformed through the Wholesale Markets Review and the FCA's UK MiFIR review.",
      },
      {
        id: "mifid-test-q4",
        question: "Which trading venue types does MiFID II regulate?",
        options: [
          "Only the London Stock Exchange",
          "Regulated Markets, Multilateral Trading Facilities and Organised Trading Facilities",
          "Only crypto exchanges",
          "Retail bank branches",
        ],
        correctIndex: 1,
        explanation:
          "MiFID II's market structure rules cover Regulated Markets (RMs), Multilateral Trading Facilities (MTFs) and Organised Trading Facilities (OTFs), ensuring they operate fairly and transparently.",
      },
      {
        id: "mifid-test-q5",
        question: "Which identifiers must appear in a transaction report?",
        options: [
          "The client's passport number and the broker's phone number",
          "The Legal Entity Identifier (LEI) of buyer and seller and the instrument's ISIN",
          "Only the firm's FCA registration number",
          "The trader's National Insurance number",
        ],
        correctIndex: 1,
        explanation:
          "Transaction reports identify the buyer and seller using LEIs and the financial instrument using its ISIN, along with quantity, price, venue and the date and time of the transaction.",
      },
      {
        id: "mifid-test-q6",
        question: "What does pre-trade and post-trade transparency mean?",
        options: [
          "Firms must publish information about trades both before and after they occur",
          "Traders must announce their intentions to the press",
          "All trades must be approved by the FCA in advance",
          "Prices may only change twice a day",
        ],
        correctIndex: 0,
        explanation:
          "Transparency under MiFID II means trading venues and firms publish price and volume information before trades happen (pre-trade) and details after they occur (post-trade), so participants can see where prices are and how much is being traded.",
      },
      {
        id: "mifid-test-q7",
        question:
          "A large pension fund executing a very large order cares most about not moving the market. Is prioritising market impact over headline price consistent with best execution?",
        options: [
          "No, price always comes first for every client",
          "Yes, for professional clients other execution factors can outweigh price",
          "No, best execution ignores market impact",
          "Yes, but only with FCA permission for each order",
        ],
        correctIndex: 1,
        explanation:
          "Best execution weighs several factors: price, costs, speed, likelihood of execution, size and market impact. For retail clients price is generally most important, but a professional client such as a large institution can legitimately prioritise market impact.",
      },
      {
        id: "mifid-test-q8",
        question: "How often must a firm review its Best Execution Policy?",
        options: [
          "Only when clients complain",
          "At least annually, and whenever there is a material change in circumstances",
          "Every five years",
          "Never, once the FCA has approved it",
        ],
        correctIndex: 1,
        explanation:
          "The Best Execution Policy must be reviewed at least once a year, and additionally whenever a material change affects the firm's ability to obtain the best result for clients.",
      },
    ],
  },
};
