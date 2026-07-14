import type { Module } from "./types";

// ============================================================
// MODULE 2 - SYSC / SMCR: Senior Management & Governance
// ============================================================
export const moduleSYSC: Module = {
  id: "sysc",
  number: 2,
  title: "SYSC & SMCR - Senior Management & Governance",
  slug: "sysc-smcr-senior-management",
  block: "High Level Standards",
  sourceCode: "SYSC",
  colour: "bg-purple-50",
  accentColour: "oklch(0.38 0.16 290)",
  description:
    "The Senior Managers and Certification Regime (SMCR) holds individual senior managers personally accountable for what happens in their firms. It replaced the old Approved Persons Regime in 2019 and fundamentally changed how accountability works in UK financial services.",
  whoItAppliesTo: "All FCA-authorised firms. Enhanced requirements apply to banks, building societies, and large investment firms.",
  chapters: [
    {
      id: "sysc-1",
      number: 1,
      title: "Why Personal Accountability Matters",
      slug: "why-personal-accountability-matters",
      readingTimeMinutes: 7,
      intro:
        "After the 2008 financial crisis, a common complaint was that no individual banker went to prison despite the catastrophic harm caused. The SMCR was designed to change this, to make it possible to hold specific individuals accountable when things go wrong.",
      subSections: [
        {
          id: "sysc-1-1",
          heading: "1.1 - The problem with the old regime",
          content: `Before SMCR, the UK used the **Approved Persons Regime (APR)**. Under the APR, individuals needed FCA approval to perform certain "controlled functions", but the regime had significant weaknesses.

The biggest problem was what regulators called the "responsibility gap." When something went wrong at a firm, it was often impossible to pin responsibility on any specific individual. Executives would say "I didn't know about that" or "that was someone else's area." The APR did not require firms to clearly map out who was responsible for what.

The Parliamentary Commission on Banking Standards, which investigated the LIBOR scandal and other banking failures, concluded that the APR was "not fit for purpose." It recommended a new regime that would make it much harder for senior managers to escape accountability.

SMCR was the result. It came into force for banks in 2016 and was extended to all FCA-regulated firms in December 2019.`,
        },
        {
          id: "sysc-1-2",
          heading: "1.2 - The three tiers of SMCR",
          content: `SMCR divides regulated firms into three categories, with different requirements for each:

**Enhanced firms**. The largest and most complex firms, including major banks, building societies, and large investment firms. These firms face the most extensive SMCR requirements, including detailed Statements of Responsibilities for every Senior Manager.

**Core firms**. The majority of FCA-regulated firms. They must comply with the Senior Managers Regime and the Certification Regime, but with less prescriptive requirements than Enhanced firms.

**Limited scope firms**. Smaller firms with limited regulatory permissions. They face reduced SMCR requirements.

The three components of SMCR are:

1. **The Senior Managers Regime (SMR)**, applies to the most senior individuals who hold "Senior Manager Functions" (SMFs)
2. **The Certification Regime**, applies to employees who could cause significant harm to customers or markets
3. **The Conduct Rules**, minimum standards of behaviour that apply to almost all employees`,
        },
        {
          id: "sysc-1-3",
          heading: "1.3 - The Duty of Responsibility",
          content: `The most powerful element of SMCR is the **Duty of Responsibility**. Under this duty, if a firm breaches an FCA requirement, a Senior Manager who was responsible for that area can be held personally liable, unless they can show they took "reasonable steps" to prevent the breach.

This reverses the burden of proof in a subtle but important way. Previously, the FCA had to prove that a senior manager was personally responsible for a breach. Now, if a breach occurs in a Senior Manager's area of responsibility, they must demonstrate they did everything reasonable to prevent it.

"Reasonable steps" might include:
- Implementing proper policies and procedures
- Ensuring adequate training for staff
- Monitoring compliance and escalating concerns
- Acting promptly when problems were identified

A Senior Manager who simply says "I didn't know" will not satisfy the Duty of Responsibility if they should have known, if proper oversight would have revealed the problem.`,
        },
      ],
      keyTakeaways: [
        { text: "SMCR replaced the Approved Persons Regime in 2019 to close the 'responsibility gap' that allowed senior managers to avoid accountability." },
        { text: "SMCR has three components: the Senior Managers Regime, the Certification Regime, and the Conduct Rules." },
        { text: "The Duty of Responsibility means Senior Managers must prove they took reasonable steps to prevent breaches in their area." },
        { text: "Firms are divided into Enhanced, Core, and Limited Scope categories with different requirements." },
      ],
      quizQuestions: [
        {
          id: "sysc-1-q1",
          question: "What was the 'responsibility gap' that SMCR was designed to close?",
          options: [
            "Firms did not employ enough compliance staff",
            "When things went wrong, it was often impossible to pin responsibility on any specific individual",
            "The FCA had no power to fine firms",
            "Junior staff were blamed for decisions made by boards",
          ],
          correctIndex: 1,
          explanation: "Under the old Approved Persons Regime, executives could say 'I didn't know' or 'that was someone else's area' because the regime did not require firms to map out who was responsible for what. The Parliamentary Commission on Banking Standards called the APR 'not fit for purpose', and SMCR was the response.",
        },
        {
          id: "sysc-1-q2",
          question: "A breach occurs in an area a Senior Manager is responsible for. Under the Duty of Responsibility, what must the Senior Manager show to avoid personal liability?",
          options: [
            "That they were unaware of the breach",
            "That the breach was caused by a junior employee",
            "That they took reasonable steps to prevent the breach",
            "That the firm has already paid a fine",
          ],
          correctIndex: 2,
          explanation: "The Duty of Responsibility effectively reverses the burden of proof. If a breach occurs in a Senior Manager's area, they must demonstrate they took reasonable steps to prevent it, such as proper policies, training, monitoring and prompt action. Saying 'I didn't know' does not work if proper oversight would have revealed the problem.",
        },
        {
          id: "sysc-1-q3",
          question: "When was SMCR extended to all FCA-regulated firms?",
          options: [
            "2008, straight after the financial crisis",
            "2016, at the same time as banks",
            "December 2019",
            "July 2023, alongside Consumer Duty",
          ],
          correctIndex: 2,
          explanation: "SMCR came into force for banks in 2016 and was extended to all FCA-regulated firms in December 2019. It replaced the Approved Persons Regime.",
        },
      ],
    },
    {
      id: "sysc-2",
      number: 2,
      title: "Senior Manager Functions and Responsibilities",
      slug: "senior-manager-functions",
      readingTimeMinutes: 9,
      intro:
        "A Senior Manager Function (SMF) is a specific role that requires FCA approval. Each SMF holder must have a clear Statement of Responsibilities, a document that sets out exactly what they are personally responsible for.",
      subSections: [
        {
          id: "sysc-2-1",
          heading: "2.1 - Key Senior Manager Functions",
          content: `The FCA designates specific roles as Senior Manager Functions. The most important include:

**SMF1 - Chief Executive Officer**: The CEO is responsible for the overall management of the firm. They are the most senior SMF holder and are ultimately accountable for the firm's compliance with FCA requirements.

**SMF2 - Chief Finance Officer**: Responsible for the financial management of the firm, including capital adequacy, liquidity, and financial reporting.

**SMF3 - Executive Director**: Any executive director who is not covered by another specific SMF.

**SMF4 - Chief Risk Officer**: Responsible for the firm's risk management framework and oversight of all material risks.

**SMF5 - Head of Internal Audit**: Responsible for the internal audit function and reporting to the board on the effectiveness of controls.

**SMF16 - Compliance Oversight**: Responsible for the compliance function and ensuring the firm meets its regulatory obligations. This is one of the most important SMFs for day-to-day regulatory compliance.

**SMF17 - Money Laundering Reporting Officer (MLRO)**: The individual responsible for the firm's AML/KYC compliance and for making Suspicious Activity Reports (SARs) to the National Crime Agency.`,
        },
        {
          id: "sysc-2-2",
          heading: "2.2 - Statements of Responsibilities and the Responsibilities Map",
          content: `Every Senior Manager must have a **Statement of Responsibilities (SoR)**, a document that clearly sets out what they are personally responsible for. The SoR must be:

- Specific and clear, vague statements like "responsible for compliance" are not sufficient
- Complete, it must cover all the firm's regulated activities
- Accurate, it must reflect what the Senior Manager actually does, not just their job title

For Enhanced firms, the firm must also produce a **Responsibilities Map**, a comprehensive document showing how all the firm's activities and responsibilities are allocated across its Senior Managers. The Responsibilities Map must cover every area of the firm's regulated activities, with no gaps.

The FCA uses Statements of Responsibilities and Responsibilities Maps when investigating incidents. If a problem occurs in an area that is clearly assigned to a specific Senior Manager, that person will be the FCA's first port of call.`,
        },
        {
          id: "sysc-2-3",
          heading: "2.3 - The Certification Regime",
          content: `Below the Senior Manager level, the **Certification Regime** applies to employees who could cause "significant harm" to customers, markets, or the firm. These are called **Certified Persons**.

Unlike Senior Managers, Certified Persons do not need FCA approval, but firms must certify them as fit and proper to perform their role. This certification must be renewed annually.

Roles that typically fall within the Certification Regime include:
- Investment advisers and portfolio managers
- Traders with significant market-facing responsibilities
- Mortgage advisers
- Customer-facing roles in retail banking
- Compliance staff with significant oversight responsibilities

Firms must maintain records of all Certified Persons and their certifications. If a Certified Person is found to be not fit and proper, the firm must withdraw their certification and cannot allow them to continue in their role.`,
        },
      ],
      keyTakeaways: [
        { text: "Senior Manager Functions (SMFs) are specific roles requiring FCA pre-approval. Key SMFs include CEO, CFO, CRO, Head of Compliance, and MLRO." },
        { text: "Every SMF holder must have a Statement of Responsibilities clearly setting out their personal accountability." },
        { text: "Enhanced firms must produce a Responsibilities Map covering all regulated activities with no gaps." },
        { text: "The Certification Regime covers employees below SMF level who could cause significant harm, firms must annually certify them as fit and proper." },
      ],
      quizQuestions: [
        {
          id: "sysc-2-q1",
          question: "Which SMF holder is responsible for the firm's AML compliance and for making Suspicious Activity Reports to the National Crime Agency?",
          options: [
            "SMF1 (Chief Executive Officer)",
            "SMF4 (Chief Risk Officer)",
            "SMF16 (Compliance Oversight)",
            "SMF17 (Money Laundering Reporting Officer)",
          ],
          correctIndex: 3,
          explanation: "SMF17, the Money Laundering Reporting Officer (MLRO), is responsible for the firm's AML/KYC compliance and for making Suspicious Activity Reports (SARs) to the National Crime Agency. SMF16 covers wider compliance oversight, but AML reporting sits with the MLRO.",
        },
        {
          id: "sysc-2-q2",
          question: "What makes a Statement of Responsibilities acceptable to the FCA?",
          options: [
            "It matches the Senior Manager's job title",
            "It is specific, complete and accurately reflects what the Senior Manager actually does",
            "It lists the firm's values and mission statement",
            "It is signed by the FCA before the manager starts",
          ],
          correctIndex: 1,
          explanation: "A Statement of Responsibilities must be specific and clear (vague phrases like 'responsible for compliance' are not enough), complete across the firm's regulated activities, and accurate about what the Senior Manager actually does rather than just their title. The FCA uses SoRs to identify who to hold accountable when incidents occur.",
        },
        {
          id: "sysc-2-q3",
          question: "How does the Certification Regime differ from the Senior Managers Regime?",
          options: [
            "Certified Persons need FCA approval, while Senior Managers do not",
            "Certified Persons are certified by their own firm as fit and proper, renewed annually, with no FCA approval needed",
            "The Certification Regime applies only to Enhanced firms",
            "Certification is voluntary for firms",
          ],
          correctIndex: 1,
          explanation: "Certified Persons, employees who could cause significant harm, do not need FCA approval. Instead their firm must certify them as fit and proper, and renew that certification every year. Senior Managers, by contrast, need FCA pre-approval for their function.",
        },
      ],
    },
    {
      id: "sysc-3",
      number: 3,
      title: "The Conduct Rules",
      slug: "the-conduct-rules",
      readingTimeMinutes: 6,
      intro:
        "The Conduct Rules are the minimum standards of behaviour that apply to almost everyone working in an FCA-regulated firm. They are the SMCR's equivalent of the Principles for Business, but for individuals rather than firms.",
      subSections: [
        {
          id: "sysc-3-1",
          heading: "3.1 - Individual Conduct Rules (Tier 1)",
          content: `The **Individual Conduct Rules** apply to all employees of regulated firms who are not ancillary staff (e.g. cleaners, caterers, IT contractors who do not perform regulated activities). There are five Individual Conduct Rules:

**Rule 1 - Act with integrity**: You must be honest and act in good faith in everything you do. This is the individual equivalent of Principle 1.

**Rule 2 - Act with due skill, care and diligence**: You must be competent and careful in your work. You must not take on responsibilities you are not qualified to handle.

**Rule 3 - Be open and cooperative with the FCA, PRA, and other regulators**: You must be transparent with regulators. You must not mislead them or withhold information they need.

**Rule 4 - Pay due regard to the interests of customers and treat them fairly**: You must put customers' interests first. This is the individual equivalent of Principle 6.

**Rule 5 - Observe proper standards of market conduct**: You must behave properly in financial markets. You must not engage in market abuse or manipulation.`,
        },
        {
          id: "sysc-3-2",
          heading: "3.2 - Senior Manager Conduct Rules (Tier 2)",
          content: `In addition to the Individual Conduct Rules, Senior Managers must also comply with four additional **Senior Manager Conduct Rules**:

**Rule 6 - Take reasonable steps to ensure that the business of the firm for which you are responsible is controlled effectively**: Senior Managers must actively manage and oversee their areas of responsibility. Passive oversight is not enough.

**Rule 7 - Take reasonable steps to ensure that the business of the firm for which you are responsible complies with the relevant requirements and standards of the regulatory system**: Senior Managers must ensure their areas comply with all applicable FCA rules.

**Rule 8 - Take reasonable steps to ensure that any delegation of your responsibilities is to an appropriate person and that you oversee the discharge of the delegated responsibility effectively**: If you delegate a responsibility, you remain accountable for it. You must delegate to competent people and monitor them.

**Rule 9 - Disclose appropriately any information of which the FCA or PRA would reasonably expect notice**: Senior Managers have a personal obligation to report material information to regulators, not just the firm as a whole.`,
        },
      ],
      keyTakeaways: [
        { text: "The Individual Conduct Rules apply to almost all employees of FCA-regulated firms, not just senior managers." },
        { text: "The five Individual Conduct Rules cover integrity, skill, openness with regulators, customer fairness, and market conduct." },
        { text: "Senior Managers have four additional Conduct Rules covering effective control, compliance, delegation, and disclosure." },
        { text: "Breaching the Conduct Rules can result in personal fines and bans from working in financial services." },
      ],
      quizQuestions: [
        {
          id: "sysc-3-q1",
          question: "Who do the Individual Conduct Rules apply to?",
          options: [
            "Only Senior Managers",
            "Only customer-facing staff",
            "All employees of regulated firms except ancillary staff such as cleaners and caterers",
            "Only staff who have passed a professional qualification",
          ],
          correctIndex: 2,
          explanation: "The Individual Conduct Rules apply to almost everyone working in an FCA-regulated firm. The exception is ancillary staff, such as cleaners, caterers and IT contractors who do not perform regulated activities.",
        },
        {
          id: "sysc-3-q2",
          question: "A Senior Manager delegates oversight of a business area to a deputy, who then makes serious errors. What does Senior Manager Conduct Rule 8 say about this?",
          options: [
            "Delegation transfers the accountability to the deputy",
            "The Senior Manager remains accountable and must have delegated to an appropriate person and overseen them effectively",
            "Delegation is prohibited under SMCR",
            "The Senior Manager is only liable if they chose the deputy personally",
          ],
          correctIndex: 1,
          explanation: "Rule 8 says that if you delegate a responsibility you remain accountable for it. You must delegate to a competent, appropriate person and effectively oversee how they discharge the responsibility. Delegation is allowed, but it is never a way to offload accountability.",
        },
        {
          id: "sysc-3-q3",
          question: "Which Individual Conduct Rule is the personal equivalent of Principle 6 (customers' interests)?",
          options: [
            "Rule 1 (Act with integrity)",
            "Rule 2 (Act with due skill, care and diligence)",
            "Rule 4 (Pay due regard to the interests of customers and treat them fairly)",
            "Rule 5 (Observe proper standards of market conduct)",
          ],
          correctIndex: 2,
          explanation: "Rule 4 requires individuals to pay due regard to the interests of customers and treat them fairly, mirroring Principle 6 which applies at firm level. Similarly, Rule 1 mirrors Principle 1 on integrity.",
        },
      ],
    },
  ],
  moduleTest: {
    passMarkPercent: 70,
    questions: [
      {
        id: "sysc-test-q1",
        question: "What regime did SMCR replace, and why?",
        options: [
          "The Consumer Duty, because it was too broad",
          "The Approved Persons Regime, because it allowed a 'responsibility gap' where no individual could be held accountable",
          "The Client Assets sourcebook, after the MF Global collapse",
          "The EU's MiFID regime, after Brexit",
        ],
        correctIndex: 1,
        explanation: "SMCR replaced the Approved Persons Regime (APR). The Parliamentary Commission on Banking Standards found the APR 'not fit for purpose' because it let senior managers escape accountability when things went wrong. SMCR closes that gap by mapping responsibility to named individuals.",
      },
      {
        id: "sysc-test-q2",
        question: "What are the three components of SMCR?",
        options: [
          "The Principles, the Handbook and the Conduct Rules",
          "The Senior Managers Regime, the Certification Regime and the Conduct Rules",
          "Statements of Responsibilities, Responsibilities Maps and annual reviews",
          "Authorisation, supervision and enforcement",
        ],
        correctIndex: 1,
        explanation: "SMCR has three components: the Senior Managers Regime for the most senior individuals, the Certification Regime for employees who could cause significant harm, and the Conduct Rules setting minimum standards of behaviour for nearly all staff.",
      },
      {
        id: "sysc-test-q3",
        question: "Which firms must produce a Responsibilities Map showing how all responsibilities are allocated across Senior Managers?",
        options: [
          "All FCA-regulated firms",
          "Limited scope firms",
          "Enhanced firms",
          "Only firms that have previously been fined",
        ],
        correctIndex: 2,
        explanation: "Enhanced firms, the largest and most complex such as major banks and large investment firms, must produce a Responsibilities Map covering every area of the firm's regulated activities with no gaps. Core and Limited Scope firms face lighter requirements.",
      },
      {
        id: "sysc-test-q4",
        question: "How often must a firm renew the certification of its Certified Persons?",
        options: [
          "Once, when they are hired",
          "Every year",
          "Every five years",
          "Only when they change roles",
        ],
        correctIndex: 1,
        explanation: "Firms must certify that Certified Persons are fit and proper to perform their role, and this certification must be renewed annually. If someone is found not fit and proper, the firm must withdraw certification and cannot let them continue in the role.",
      },
      {
        id: "sysc-test-q5",
        question: "Which of these is a Senior Manager Conduct Rule rather than an Individual Conduct Rule?",
        options: [
          "Act with integrity",
          "Observe proper standards of market conduct",
          "Take reasonable steps to ensure the business you are responsible for complies with regulatory requirements",
          "Pay due regard to the interests of customers",
        ],
        correctIndex: 2,
        explanation: "The four Senior Manager Conduct Rules (Rules 6 to 9) cover effective control, compliance, delegation and disclosure in the manager's area of responsibility. Integrity, market conduct and customer fairness are Individual Conduct Rules that apply to nearly all staff.",
      },
      {
        id: "sysc-test-q6",
        question: "The MLRO at a firm fails to make Suspicious Activity Reports to the National Crime Agency. Which Senior Manager Function does the MLRO hold?",
        options: [
          "SMF1",
          "SMF4",
          "SMF16",
          "SMF17",
        ],
        correctIndex: 3,
        explanation: "The Money Laundering Reporting Officer holds SMF17 and is responsible for AML/KYC compliance and for making SARs to the National Crime Agency. SMF16 is Compliance Oversight, SMF4 is the Chief Risk Officer, and SMF1 is the CEO.",
      },
      {
        id: "sysc-test-q7",
        question: "Under Senior Manager Conduct Rule 9, what personal obligation does a Senior Manager have towards regulators?",
        options: [
          "To meet the FCA at least once a year",
          "To disclose appropriately any information of which the FCA or PRA would reasonably expect notice",
          "To publish their Statement of Responsibilities on the firm's website",
          "To report only matters that the CEO approves for disclosure",
        ],
        correctIndex: 1,
        explanation: "Rule 9 places a personal duty on each Senior Manager to disclose appropriately any information the FCA or PRA would reasonably expect notice of. It is not enough that the firm as a whole reports; the obligation attaches to the individual.",
      },
      {
        id: "sysc-test-q8",
        question: "Which roles typically fall within the Certification Regime?",
        options: [
          "Cleaners, caterers and IT contractors",
          "Only board members",
          "Investment advisers, traders with market-facing responsibilities, and mortgage advisers",
          "Anyone who has contact with the FCA",
        ],
        correctIndex: 2,
        explanation: "The Certification Regime covers employees below Senior Manager level who could cause significant harm to customers, markets or the firm, such as investment advisers, portfolio managers, traders, mortgage advisers and customer-facing retail banking roles. Ancillary staff are outside the Conduct Rules and certification requirements.",
      },
    ],
  },
};
