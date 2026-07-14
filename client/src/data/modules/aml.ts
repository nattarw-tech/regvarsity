import type { Module } from "./types";

// ============================================================
// MODULE 4 - AML/KYC: Anti-Money Laundering
// ============================================================
export const moduleAML: Module = {
  id: "aml",
  number: 4,
  title: "AML / KYC - Anti-Money Laundering",
  slug: "aml-kyc-anti-money-laundering",
  block: "Financial Crime",
  sourceCode: "MLRs / POCA",
  colour: "bg-teal-50",
  accentColour: "oklch(0.38 0.14 195)",
  description:
    "Every year, criminals try to launder hundreds of billions of pounds through the UK financial system. AML and KYC rules are the defences that stop them. They explain why your bank asks for your passport, why large cash transactions get flagged, and what firms must do to stay on the right side of the law.",
  whoItAppliesTo: "Banks, investment firms, crypto businesses, estate agents, accountants, solicitors, and many other sectors.",
  chapters: [
    {
      id: "aml-1",
      number: 1,
      title: "What Is Money Laundering?",
      slug: "what-is-money-laundering",
      readingTimeMinutes: 7,
      intro:
        "Money laundering is the process of making illegally obtained money look legitimate. Understanding how it works, and why it matters, is the foundation of everything else in AML compliance.",
      subSections: [
        {
          id: "aml-1-1",
          heading: "1.1 - The three stages of money laundering",
          content: `Money laundering typically occurs in three stages:

**Stage 1 - Placement**: This is where criminal funds first enter the financial system. It is the riskiest stage for the criminal because the money is most obviously connected to its illegal source. Examples include depositing large amounts of cash from drug sales, using cash to buy assets, or smuggling cash across borders.

**Stage 2 - Layering**: Once in the system, the criminal tries to disguise the trail. This involves multiple transactions designed to put distance between the money and its source. Examples include transferring money between multiple accounts in different countries, converting cash into financial instruments, and using shell companies.

**Stage 3 - Integration**: The money re-enters the legitimate economy, appearing to be from a lawful source. Examples include investing in property, buying luxury goods, or investing in legitimate businesses.

The UK's **Proceeds of Crime Act 2002 (POCA)** makes it a criminal offence to:
- Conceal, disguise, convert, transfer, or remove criminal property
- Arrange or facilitate the acquisition, retention, use, or control of criminal property
- Acquire, use, or possess criminal property

Crucially, you can commit a money laundering offence without knowing the money is criminal, if you had "reasonable grounds to suspect" it was criminal, that may be sufficient.`,
        },
        {
          id: "aml-1-2",
          heading: "1.2 - The scale of the problem",
          content: `The UK's **2025 National Risk Assessment (NRA)**, published by HM Treasury and the Home Office on 17 July 2025, assessed the UK as remaining at **high risk** of money laundering.

Key findings from the 2025 NRA:
- The UK processes trillions of pounds in transactions every year, making it an attractive target
- Professional services (law firms, accountants, estate agents) remain a significant vulnerability
- Crypto assets are an increasing concern, with criminals using decentralised exchanges to layer funds
- AI-enabled fraud is growing rapidly, with criminals using deepfakes and synthetic identities to defeat KYC checks
- Kleptocracy, the laundering of funds stolen by corrupt foreign officials, remains a significant threat

The NRA also highlighted the growing overlap between money laundering, sanctions evasion, and fraud. These are no longer separate problems, they are increasingly interconnected.

**Recent enforcement actions** illustrate the scale of the problem:
- Metro Bank was fined £16.7 million in November 2024 for failing to properly monitor potential money laundering between 2016 and 2020
- Starling Bank was fined £29 million in October 2024 for failings in its financial crime systems and controls
- HSBC has paid billions in fines globally for AML failures over the past decade`,
        },
      ],
      keyTakeaways: [
        { text: "Money laundering occurs in three stages: Placement (entering the system), Layering (disguising the trail), and Integration (re-entering the economy)." },
        { text: "POCA 2002 makes it a criminal offence to deal with criminal property, even if you only had reasonable grounds to suspect it was criminal." },
        { text: "The 2025 NRA assessed the UK as high risk, with growing threats from crypto, AI-enabled fraud, and kleptocracy." },
        { text: "Recent fines include Metro Bank (£16.7m) and Starling Bank (£29m) for financial crime control failures." },
      ],
      quizQuestions: [
        {
          id: "aml-1-q1",
          question: "A criminal transfers drug money between accounts in several countries and through shell companies to disguise where it came from. Which stage of money laundering is this?",
          options: [
            "Placement",
            "Layering",
            "Integration",
            "Structuring",
          ],
          correctIndex: 1,
          explanation: "Layering is the second stage, where multiple transactions are used to put distance between the money and its criminal source, for example transfers across borders and through shell companies. Placement is when the money first enters the system, and integration is when it re-enters the legitimate economy.",
        },
        {
          id: "aml-1-q2",
          question: "Under POCA 2002, can you commit a money laundering offence without actually knowing the money was criminal?",
          options: [
            "No, the prosecution must prove actual knowledge",
            "Yes, having reasonable grounds to suspect can be sufficient",
            "Only if the amount exceeds £1 million",
            "Only for employees of banks",
          ],
          correctIndex: 1,
          explanation: "POCA does not require proof that you knew the property was criminal. If you had reasonable grounds to suspect it was, that may be enough. This is why wilful blindness offers no protection in AML.",
        },
        {
          id: "aml-1-q3",
          question: "Which stage of money laundering is riskiest for the criminal, and why?",
          options: [
            "Integration, because the sums are largest",
            "Layering, because so many transactions are involved",
            "Placement, because the money is most obviously connected to its illegal source",
            "All stages carry identical risk",
          ],
          correctIndex: 2,
          explanation: "Placement is the riskiest stage for the criminal because the funds are still closest to their illegal origin, for example large cash deposits from drug sales. Once the money is inside the financial system, layering and integration make it progressively harder to trace.",
        },
      ],
    },
    {
      id: "aml-2",
      number: 2,
      title: "Customer Due Diligence (CDD) and KYC",
      slug: "customer-due-diligence",
      readingTimeMinutes: 10,
      intro:
        "Customer Due Diligence (CDD) is the process of verifying who your customer is and understanding the nature of your business relationship with them. It is the foundation of AML compliance, and the reason your bank asks for your passport.",
      subSections: [
        {
          id: "aml-2-1",
          heading: "2.1 - When must CDD be applied?",
          content: `Under the **Money Laundering Regulations 2017 (MLRs)**, regulated firms must apply CDD when:

1. **Establishing a new business relationship**, before you start doing business with a new customer
2. **Carrying out an occasional transaction** above €15,000 (or two linked transactions totalling this amount)
3. **There is a suspicion of money laundering or terrorist financing**, regardless of the amount or the type of customer
4. **There is doubt about the accuracy of previously obtained identification information**, if you think a customer has given you false information, you must re-verify

The MLRs also require firms to apply CDD on an **ongoing basis**, not just at the start of a relationship. Firms must monitor transactions and update customer information as circumstances change.`,
        },
        {
          id: "aml-2-2",
          heading: "2.2 - The three tiers of due diligence",
          content: `The MLRs provide for three tiers of due diligence, depending on the risk level:

**Simplified Due Diligence (SDD)**: For lower-risk customers and products. Firms can apply reduced measures: for example, they may not need to verify the customer's identity in the same depth. SDD can only be applied where the firm has assessed the risk as genuinely low, it is not a shortcut.

**Standard CDD**: The default for most customers. Standard CDD requires:
- Identifying the customer (name, date of birth, address)
- Verifying their identity using reliable, independent source documents (passport, driving licence, or electronic verification)
- Understanding the purpose and nature of the business relationship
- For companies: identifying the beneficial owners (those who own or control more than 25%)

**Enhanced Due Diligence (EDD)**: Required for higher-risk situations. EDD means doing more, gathering more information, verifying it more rigorously, and monitoring the relationship more closely. EDD is mandatory for:
- Politically Exposed Persons (PEPs) and their associates
- Customers from high-risk third countries (as designated by HM Treasury)
- Complex or unusually large transactions
- Non-face-to-face business relationships`,
        },
        {
          id: "aml-2-3",
          heading: "2.3 - Beneficial Ownership",
          content: `One of the most important aspects of CDD is identifying **beneficial owners**, the real people who ultimately own or control a business.

Criminals often use complex corporate structures, chains of companies in multiple jurisdictions, to hide who actually owns an asset. The beneficial ownership rules are designed to cut through this complexity.

Under the MLRs, firms must identify any person who:
- Owns or controls more than **25%** of the shares or voting rights in a company
- Otherwise exercises control over the management of the company

For trusts, firms must identify the settlor, trustees, protectors, beneficiaries, and any other person who exercises effective control.

The **Companies House register** is a key tool for beneficial ownership verification. Under the Economic Crime and Corporate Transparency Act 2023, Companies House has significantly strengthened its powers. Identity verification became available voluntarily from April 2025 and mandatory for new directors and persons with significant control (PSCs) from 18 November 2025, with existing directors required to verify by November 2026.

However, beneficial ownership verification is not always straightforward. Criminals deliberately structure their affairs to avoid the 25% threshold. Firms must look beyond the formal structure and consider who actually exercises control, even if they do not formally own more than 25%.`,
        },
      ],
      keyTakeaways: [
        { text: "CDD must be applied when establishing a new business relationship, for transactions over €15,000, on suspicion of money laundering, or when existing information is doubted." },
        { text: "There are three tiers: Simplified (low risk), Standard (default), and Enhanced (high risk including PEPs and high-risk countries)." },
        { text: "Standard CDD requires identifying and verifying the customer and identifying beneficial owners (>25% ownership/control)." },
        { text: "Beneficial ownership verification must look beyond formal structures to identify who actually exercises control." },
      ],
      quizQuestions: [
        {
          id: "aml-2-q1",
          question: "A customer with no existing relationship asks a firm to process a one-off transaction of €16,000. What must the firm do?",
          options: [
            "Nothing special, because there is no ongoing relationship",
            "Apply Customer Due Diligence, because occasional transactions above €15,000 trigger CDD",
            "Refuse the transaction outright",
            "Report the customer to the NCA automatically",
          ],
          correctIndex: 1,
          explanation: "Under the Money Laundering Regulations 2017, CDD is required for occasional transactions above €15,000, including linked transactions that together exceed the threshold. Nothing here automatically requires a SAR; a report is only needed if there is suspicion.",
        },
        {
          id: "aml-2-q2",
          question: "At what ownership level must a firm identify a company's beneficial owners under the MLRs?",
          options: [
            "More than 10% of shares or voting rights",
            "More than 25% of shares or voting rights, or otherwise exercising control",
            "More than 50% of shares or voting rights",
            "100% ownership only",
          ],
          correctIndex: 1,
          explanation: "The MLRs set the beneficial ownership threshold at more than 25% of shares or voting rights, or otherwise exercising control over management. Criminals deliberately structure holdings below 25%, so firms must also consider who actually exercises control regardless of formal percentages.",
        },
        {
          id: "aml-2-q3",
          question: "Which of these situations makes Enhanced Due Diligence mandatory?",
          options: [
            "A longstanding customer opens a second current account",
            "A new customer is a Politically Exposed Person",
            "A customer's balance falls below £100",
            "A customer changes their registered address within the UK",
          ],
          correctIndex: 1,
          explanation: "EDD is mandatory for PEPs and their associates, customers from high-risk third countries, complex or unusually large transactions, and non-face-to-face relationships. Routine account activity does not trigger EDD.",
        },
      ],
    },
    {
      id: "aml-3",
      number: 3,
      title: "PEPs, Sanctions, and Suspicious Activity Reports",
      slug: "peps-sanctions-sars",
      readingTimeMinutes: 9,
      intro:
        "Three of the most operationally important areas of AML compliance are Politically Exposed Persons (PEPs), sanctions screening, and Suspicious Activity Reports (SARs). Together, they form the core of a firm's day-to-day financial crime controls.",
      subSections: [
        {
          id: "aml-3-1",
          heading: "3.1 - Politically Exposed Persons (PEPs)",
          content: `A **Politically Exposed Person (PEP)** is an individual who holds or has held a prominent public function. The concern is that such individuals may be in a position to abuse their public office for personal gain, and that their financial transactions may involve the proceeds of corruption.

PEPs include:
- Heads of state and government ministers
- Senior politicians and members of parliament
- Senior judicial officials
- Senior military officers
- Senior executives of state-owned enterprises
- Senior officials of international organisations

**Family members and close associates** of PEPs are also treated as PEPs for AML purposes.

Under the MLRs, firms must apply **Enhanced Due Diligence (EDD)** to all PEP relationships. This includes:
- Senior management approval before establishing the relationship
- Establishing the source of wealth and source of funds
- Enhanced ongoing monitoring of the relationship

An important distinction: the FCA's guidance distinguishes between **foreign PEPs** (higher risk) and **domestic PEPs** (UK politicians and officials). Domestic PEPs should be treated as lower risk than foreign PEPs unless there are specific risk factors. This was clarified in the 2023 MLR amendments following complaints that UK politicians were being treated the same as corrupt foreign officials.`,
        },
        {
          id: "aml-3-2",
          heading: "3.2 - Sanctions Screening",
          content: `**Financial sanctions** are restrictions imposed by governments or international bodies that prohibit or limit financial dealings with specific individuals, entities, or countries. Breaching sanctions is a criminal offence.

The UK's sanctions regime is administered by the **Office of Financial Sanctions Implementation (OFSI)**, part of HM Treasury. Since Brexit, the UK operates its own independent sanctions regime, it no longer automatically follows EU sanctions.

Key UK sanctions regimes include:
- **Russia sanctions**, significantly expanded since the 2022 invasion of Ukraine
- **Iran sanctions**, relating to nuclear proliferation
- **North Korea sanctions**, relating to weapons of mass destruction
- **Global human rights sanctions**, targeting individuals responsible for serious human rights violations

Firms must screen all customers and transactions against the **OFSI consolidated list**, a regularly updated list of all sanctioned individuals and entities. This screening must be:
- Conducted at the start of a relationship
- Repeated whenever the sanctions list is updated
- Applied to all transactions, not just new relationships

The consequences of breaching sanctions are severe. OFSI can impose civil monetary penalties of up to £1 million or 50% of the value of the breach (whichever is higher). Criminal prosecution can result in up to 7 years' imprisonment.`,
        },
        {
          id: "aml-3-3",
          heading: "3.3 - Suspicious Activity Reports (SARs)",
          content: `A **Suspicious Activity Report (SAR)** is a report made to the **National Crime Agency (NCA)** when a firm suspects that a customer or transaction is connected to money laundering or terrorist financing.

The obligation to report is set out in POCA 2002. It is a criminal offence to fail to report when you know or suspect (or have reasonable grounds to suspect) that a person is engaged in money laundering.

**The tipping-off offence**: Once a SAR has been submitted, firms must not "tip off" the customer, i.e. tell them that a report has been made or that they are under investigation. Doing so is a criminal offence. This creates a practical challenge: firms must continue to deal with the customer normally while the NCA considers the report.

**The consent SAR**: If a firm wants to proceed with a transaction that it suspects may involve criminal property, it can submit a "consent SAR" to the NCA and wait for consent before proceeding. The NCA has 7 days to refuse consent (or 31 days if it gives notice of investigation). If the NCA does not respond within the relevant period, the firm can proceed.

The UK receives around **900,000 SARs per year**, one of the highest rates in the world. The NCA uses SARs to identify money laundering networks, recover criminal assets, and support law enforcement investigations.`,
        },
      ],
      keyTakeaways: [
        { text: "PEPs are individuals who hold or have held prominent public functions. EDD is mandatory for all PEP relationships." },
        { text: "Domestic UK PEPs should be treated as lower risk than foreign PEPs unless specific risk factors are present." },
        { text: "Firms must screen all customers and transactions against the OFSI consolidated list. Breaching sanctions is a criminal offence." },
        { text: "SARs must be submitted to the NCA when a firm suspects money laundering. Failing to report is a criminal offence." },
        { text: "The tipping-off offence prohibits firms from telling customers that a SAR has been submitted." },
      ],
      quizQuestions: [
        {
          id: "aml-3-q1",
          question: "How should a firm treat a UK Member of Parliament opening an account, compared with a foreign government minister?",
          options: [
            "Identically, since both are PEPs",
            "The MP is not a PEP at all",
            "Both need EDD, but the domestic PEP should be treated as lower risk unless specific risk factors exist",
            "The foreign minister must be refused as a customer",
          ],
          correctIndex: 2,
          explanation: "Both are PEPs and both require Enhanced Due Diligence, including senior management approval and source of wealth checks. But FCA guidance, clarified in the 2023 MLR amendments, says domestic PEPs should be treated as lower risk than foreign PEPs unless specific risk factors are present.",
        },
        {
          id: "aml-3-q2",
          question: "What is the maximum civil penalty OFSI can impose for a sanctions breach?",
          options: [
            "£100,000 flat",
            "£1 million or 50% of the value of the breach, whichever is higher",
            "10% of the firm's annual turnover",
            "OFSI has no civil penalty powers",
          ],
          correctIndex: 1,
          explanation: "OFSI can impose civil monetary penalties of up to £1 million or 50% of the value of the breach, whichever is higher. Criminal prosecution for sanctions breaches can also result in up to 7 years' imprisonment.",
        },
        {
          id: "aml-3-q3",
          question: "A bank submits a SAR about a customer. The customer then asks their relationship manager why their payment is delayed. What must the relationship manager NOT do?",
          options: [
            "Continue dealing with the customer normally",
            "Tell the customer a report has been made about them",
            "Escalate the question to the MLRO",
            "Record the customer's enquiry",
          ],
          correctIndex: 1,
          explanation: "Telling the customer that a SAR has been made, or that they are under investigation, is the criminal offence of tipping off. The firm must continue dealing with the customer normally while the NCA considers the report.",
        },
      ],
    },
  ],
  moduleTest: {
    passMarkPercent: 70,
    questions: [
      {
        id: "aml-test-q1",
        question: "Put the three stages of money laundering in the correct order.",
        options: [
          "Layering, placement, integration",
          "Placement, layering, integration",
          "Integration, layering, placement",
          "Placement, integration, layering",
        ],
        correctIndex: 1,
        explanation: "Money is first placed into the financial system (placement), then moved through transactions designed to disguise its source (layering), and finally re-enters the legitimate economy appearing lawful (integration).",
      },
      {
        id: "aml-test-q2",
        question: "Which Act makes it a criminal offence to conceal, convert or transfer criminal property in the UK?",
        options: [
          "The Financial Services and Markets Act 2000",
          "The Proceeds of Crime Act 2002",
          "The Companies Act 2006",
          "The Bribery Act 2010",
        ],
        correctIndex: 1,
        explanation: "The Proceeds of Crime Act 2002 (POCA) contains the principal money laundering offences: concealing or transferring criminal property, arranging or facilitating its use, and acquiring, using or possessing it.",
      },
      {
        id: "aml-test-q3",
        question: "When is Simplified Due Diligence permitted?",
        options: [
          "Whenever the customer is in a hurry",
          "Where the firm has genuinely assessed the risk as low",
          "For all customers under 25 years old",
          "For any transaction under €15,000",
        ],
        correctIndex: 1,
        explanation: "SDD can only be applied where the firm has assessed the risk as genuinely low. It is a risk-based reduction in measures, not a shortcut, and it never applies automatically.",
      },
      {
        id: "aml-test-q4",
        question: "Standard CDD on a corporate customer requires which of the following?",
        options: [
          "Verifying the identity of every employee",
          "Identifying beneficial owners who own or control more than 25%",
          "Obtaining the company's business plan",
          "A site visit to the company's head office",
        ],
        correctIndex: 1,
        explanation: "For companies, standard CDD includes identifying the customer, verifying identity from reliable independent sources, understanding the purpose of the relationship, and identifying beneficial owners, meaning those who own or control more than 25% of shares or voting rights.",
      },
      {
        id: "aml-test-q5",
        question: "What extra steps does EDD for a PEP relationship require?",
        options: [
          "Nothing beyond standard CDD, just more paperwork",
          "Senior management approval, establishing source of wealth and funds, and enhanced ongoing monitoring",
          "Referring the customer to the FCA for pre-approval",
          "Freezing the customer's assets during onboarding",
        ],
        correctIndex: 1,
        explanation: "For PEPs, firms must obtain senior management approval before establishing the relationship, establish the source of wealth and source of funds, and apply enhanced ongoing monitoring throughout the relationship.",
      },
      {
        id: "aml-test-q6",
        question: "Which body administers the UK's financial sanctions regime?",
        options: [
          "The National Crime Agency",
          "The Office of Financial Sanctions Implementation, part of HM Treasury",
          "The Bank of England",
          "Companies House",
        ],
        correctIndex: 1,
        explanation: "OFSI, part of HM Treasury, administers UK financial sanctions and maintains the consolidated list that firms must screen customers and transactions against. Since Brexit the UK runs its own independent sanctions regime.",
      },
      {
        id: "aml-test-q7",
        question: "A firm wants to proceed with a transaction it suspects involves criminal property. What is the correct procedure?",
        options: [
          "Proceed and keep detailed records",
          "Submit a consent SAR to the NCA and wait for consent, or for the notice period to expire",
          "Ask the customer to confirm in writing that the funds are clean",
          "Split the transaction into smaller amounts",
        ],
        correctIndex: 1,
        explanation: "The firm should submit a consent SAR (also called a defence against money laundering request) to the NCA. The NCA has 7 days to refuse consent, extendable to 31 days with notice of investigation. If no response arrives within the relevant period, the firm can proceed.",
      },
      {
        id: "aml-test-q8",
        question: "Roughly how many SARs does the UK receive each year?",
        options: [
          "Around 9,000",
          "Around 90,000",
          "Around 900,000",
          "Around 9 million",
        ],
        correctIndex: 2,
        explanation: "The UK receives around 900,000 SARs a year, one of the highest rates in the world. The NCA uses them to identify laundering networks, recover criminal assets and support investigations.",
      },
    ],
  },
};
