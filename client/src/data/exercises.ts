// ============================================================
// RegVarsity - Scenario Exercises
// CFA-ethics-style scenario MCQs across four topics.
// All regulatory substance verified against primary sources, July 2026.
// ============================================================

export type TopicKey = "fca" | "aml" | "mifid" | "crypto";

export interface ExerciseOption {
  id: string;
  text: string;
}

export interface Exercise {
  id: string;
  topic: TopicKey;
  difficulty: "beginner" | "intermediate" | "advanced";
  tags: string[];
  scenario: string;
  question: string;
  options: ExerciseOption[];
  correctId: string;
  explanation: string;
  wrongExplanations: Record<string, string>;
}

export const topicMeta: Record<TopicKey, { label: string; color: string; bg: string }> = {
  fca: { label: "FCA Rules", color: "oklch(0.37 0.075 165)", bg: "oklch(0.37 0.075 165 / 0.1)" },
  aml: { label: "AML / KYC", color: "oklch(0.42 0.08 190)", bg: "oklch(0.42 0.08 190 / 0.1)" },
  mifid: { label: "MiFID II", color: "oklch(0.45 0.1 130)", bg: "oklch(0.45 0.1 130 / 0.1)" },
  crypto: { label: "Crypto", color: "oklch(0.45 0.12 300)", bg: "oklch(0.45 0.12 300 / 0.1)" },
};

export const exercises: Exercise[] = [
  // ── FCA ──────────────────────────────────────────────
  {
    id: "fca-1",
    topic: "fca",
    difficulty: "beginner",
    tags: ["Consumer Duty", "PRIN"],
    scenario:
      "A bank launches a savings account with a headline rate of 5%. Buried in the terms, the rate only applies to the first £1,000 of savings and drops to 0.5% above that. Most customers who open the account earn far less than they expected. The product complies with every specific product rule.",
    question: "Under the Consumer Duty (Principle 12), what is the bank's position?",
    options: [
      { id: "a", text: "The bank is safe because the product complies with all specific FCA product rules." },
      { id: "b", text: "The bank is likely in breach, because the Duty requires good customer outcomes, not just technical rule compliance." },
      { id: "c", text: "The bank is safe as long as the full terms were disclosed before the customer signed up." },
      { id: "d", text: "The Duty does not apply because savings accounts are not investment products." },
    ],
    correctId: "b",
    explanation:
      "The Consumer Duty is outcome-based. Firms must deliver good outcomes for retail customers across products and services, price and value, consumer understanding, and consumer support. A product that is technically compliant but leaves most customers earning far less than they reasonably expected fails the consumer understanding outcome, and possibly price and value too.",
    wrongExplanations: {
      a: "Technical compliance with specific rules does not satisfy the Duty. Principle 12 asks whether customers actually got good outcomes.",
      c: "Disclosure alone is not enough. Under the consumer understanding outcome, firms must communicate in a way that equips customers to make informed decisions, burying key terms fails that test.",
      d: "The Duty applies to all retail products and services offered by FCA-authorised firms, very much including savings accounts.",
    },
  },
  {
    id: "fca-2",
    topic: "fca",
    difficulty: "intermediate",
    tags: ["Principle 11", "Notifications"],
    scenario:
      "A payments firm discovers a serious IT failure that has delayed thousands of customer transactions for three days. The operations director suggests fixing the issue quietly first and only telling the FCA if the regulator asks about it.",
    question: "What does Principle 11 require the firm to do?",
    options: [
      { id: "a", text: "Nothing, provided the issue is fixed and customers are compensated." },
      { id: "b", text: "Disclose the incident to the FCA promptly, because the regulator would reasonably expect notice of it." },
      { id: "c", text: "Notify the FCA only if more than 10% of customers were affected." },
      { id: "d", text: "Wait until the annual compliance report to mention the incident." },
    ],
    correctId: "b",
    explanation:
      "Principle 11 requires firms to deal with regulators in an open and cooperative way and to disclose anything relating to the firm of which the FCA would reasonably expect notice. A serious operational incident affecting thousands of customers clearly meets that threshold, waiting to be asked, or concealing it, is itself a serious breach.",
    wrongExplanations: {
      a: "Fixing the problem does not remove the duty to notify. Concealment aggravates the breach.",
      c: "There is no fixed percentage threshold in Principle 11, the test is whether the FCA would reasonably expect notice.",
      d: "Prompt disclosure is required. An annual report months later is not prompt.",
    },
  },
  {
    id: "fca-3",
    topic: "fca",
    difficulty: "advanced",
    tags: ["SMCR", "Accountability"],
    scenario:
      "A wealth management firm is fined after its advice arm recommended unsuitable products for two years. The Senior Manager responsible for advice says she cannot be personally liable because she never knew about the failings, she delegated supervision to a head of department and received no escalations.",
    question: "Under the SMCR Duty of Responsibility, is her defence likely to succeed?",
    options: [
      { id: "a", text: "Yes, personal liability requires proof that she knew about the breaches." },
      { id: "b", text: "Yes, delegation transfers responsibility to the head of department." },
      { id: "c", text: "No, she must show she took reasonable steps to prevent the breach, and not knowing may itself show inadequate oversight." },
      { id: "d", text: "No. Senior Managers are automatically liable for any breach in their area." },
    ],
    correctId: "c",
    explanation:
      "The Duty of Responsibility means that when a breach occurs in a Senior Manager's area, the FCA can take action unless the manager took reasonable steps to prevent it. Reasonable steps include proper oversight, management information, and acting on warning signs. 'I didn't know' fails if proper oversight would have revealed the problem. Delegation of tasks does not delegate accountability.",
    wrongExplanations: {
      a: "The burden works the other way: she must demonstrate reasonable steps. Actual knowledge is not required for liability.",
      b: "A Senior Manager can delegate tasks but remains accountable for the delegated area and must supervise it properly.",
      d: "Liability is not automatic, the reasonable steps defence exists. But it must actually be made out.",
    },
  },
  {
    id: "fca-4",
    topic: "fca",
    difficulty: "intermediate",
    tags: ["Financial Promotions", "Section 21"],
    scenario:
      "A fintech startup that is not FCA-authorised wants to promote its new investment app on social media. A marketing agency suggests using a popular finfluencer to post about guaranteed 12% returns.",
    question: "What does the financial promotions regime require?",
    options: [
      { id: "a", text: "Nothing, social media posts are not financial promotions." },
      { id: "b", text: "The promotion must be communicated or approved by an FCA-authorised person, and 'guaranteed returns' claims would be misleading." },
      { id: "c", text: "The startup only needs to add a #ad hashtag to comply." },
      { id: "d", text: "The finfluencer's personal account makes the promotion exempt." },
    ],
    correctId: "b",
    explanation:
      "Under section 21 FSMA, an unauthorised firm cannot communicate a financial promotion unless it is approved by an FCA-authorised person or an exemption applies. This covers social media. Promotions must also be clear, fair and not misleading, describing investment returns as 'guaranteed' when they are not is a textbook breach. The FCA has taken action against finfluencers promoting investments without approval.",
    wrongExplanations: {
      a: "The regime is media-neutral: a social media post inviting investment activity is a financial promotion.",
      c: "Advertising disclosure hashtags address consumer protection law, not the section 21 restriction.",
      d: "There is no exemption for influencer accounts. The finfluencer could be committing a criminal offence.",
    },
  },

  // ── AML / KYC ────────────────────────────────────────
  {
    id: "aml-1",
    topic: "aml",
    difficulty: "beginner",
    tags: ["CDD", "MLRs"],
    scenario:
      "A customer with no existing relationship walks into a currency exchange and asks to convert €16,000 into pounds in a single transaction.",
    question: "Under the Money Laundering Regulations 2017, what must the firm do?",
    options: [
      { id: "a", text: "Nothing special, one-off transactions do not require checks." },
      { id: "b", text: "Apply customer due diligence, because this is an occasional transaction above the €15,000 threshold." },
      { id: "c", text: "Refuse the transaction, cash transactions above €10,000 are illegal in the UK." },
      { id: "d", text: "Only record the customer's name for its files." },
    ],
    correctId: "b",
    explanation:
      "The MLRs require CDD for occasional transactions of €15,000 or more (or linked transactions totalling that amount), as well as when establishing a business relationship, when money laundering is suspected, or when existing information is in doubt. The firm must identify and verify the customer before proceeding.",
    wrongExplanations: {
      a: "Occasional transactions at or above €15,000 trigger full CDD even with no ongoing relationship.",
      c: "Large cash transactions are not automatically illegal in the UK, they trigger due diligence, not prohibition.",
      d: "Recording a name is not CDD. The firm must verify identity using reliable, independent sources.",
    },
  },
  {
    id: "aml-2",
    topic: "aml",
    difficulty: "intermediate",
    tags: ["SARs", "Tipping Off"],
    scenario:
      "A bank's MLRO submits a Suspicious Activity Report to the NCA about a business customer's unusual transactions. The next day, the customer's relationship manager, who knows about the SAR, receives an angry call from the customer asking why a payment is delayed.",
    question: "What must the relationship manager avoid doing?",
    options: [
      { id: "a", text: "Speaking to the customer at all, which would be tipping off." },
      { id: "b", text: "Telling the customer a SAR has been made or that they are under investigation, the tipping-off offence." },
      { id: "c", text: "Processing any future transactions for this customer." },
      { id: "d", text: "Escalating the call to the MLRO, which would breach confidentiality." },
    ],
    correctId: "b",
    explanation:
      "Once a SAR has been submitted, disclosing that fact (or that an investigation is contemplated) in a way likely to prejudice it is the criminal offence of tipping off under POCA 2002. The practical challenge is exactly this: staff must continue dealing with the customer normally without revealing the report.",
    wrongExplanations: {
      a: "Normal contact is expected, refusing to speak to the customer could itself arouse suspicion. Only disclosure of the SAR is prohibited.",
      c: "A SAR does not automatically freeze the relationship. Where consent is needed, the firm follows the consent SAR process.",
      d: "Escalating internally to the MLRO is appropriate and expected, not a breach.",
    },
  },
  {
    id: "aml-3",
    topic: "aml",
    difficulty: "intermediate",
    tags: ["PEPs", "EDD"],
    scenario:
      "An onboarding analyst discovers a new private banking client is a serving member of a foreign country's parliament. A colleague argues no extra work is needed because the client passed standard identity checks.",
    question: "How should the client be treated under the MLRs?",
    options: [
      { id: "a", text: "As a standard customer, passing identity checks is sufficient." },
      { id: "b", text: "As a politically exposed person requiring enhanced due diligence, including senior management approval and source-of-wealth checks." },
      { id: "c", text: "The firm must decline the relationship. PEPs cannot be banked in the UK." },
      { id: "d", text: "As high risk only if the client appears on a sanctions list." },
    ],
    correctId: "b",
    explanation:
      "A foreign legislator is a PEP. The MLRs require enhanced due diligence for PEPs: senior management approval for the relationship, measures to establish source of wealth and source of funds, and enhanced ongoing monitoring. FCA guidance treats foreign PEPs as inherently higher risk than domestic PEPs.",
    wrongExplanations: {
      a: "Standard CDD is not enough. PEP status triggers mandatory EDD regardless of clean identity checks.",
      c: "Being a PEP is not a bar to banking. It requires enhanced controls, not refusal.",
      d: "PEP risk and sanctions risk are separate regimes. A PEP requires EDD even with no sanctions exposure.",
    },
  },
  {
    id: "aml-4",
    topic: "aml",
    difficulty: "advanced",
    tags: ["Sanctions", "OFSI"],
    scenario:
      "A payments firm screens customers against the OFSI consolidated list at onboarding only. A customer onboarded two years ago was added to the UK sanctions list last month, and the firm has continued processing their payments.",
    question: "What is the firm's exposure?",
    options: [
      { id: "a", text: "None, screening at onboarding satisfies UK sanctions obligations." },
      { id: "b", text: "It may have breached sanctions by making funds available to a designated person. OFSI can impose penalties up to £1 million or 50% of the breach value, whichever is higher." },
      { id: "c", text: "Only a reporting failure, processing the payments itself was lawful." },
      { id: "d", text: "None, provided the customer is not a PEP." },
    ],
    correctId: "b",
    explanation:
      "Sanctions compliance is continuous. Firms must rescreen their book whenever the consolidated list is updated. Dealing with the funds of a designated person is a breach of financial sanctions. OFSI can impose civil monetary penalties of up to £1 million or 50% of the value of the breach (whichever is higher), and criminal prosecution can lead to up to 7 years' imprisonment.",
    wrongExplanations: {
      a: "Point-in-time screening is inadequate, lists change constantly and firms must rescreen on updates.",
      c: "Processing payments for a designated person is the substantive breach, not merely a reporting failure.",
      d: "PEP status is irrelevant to sanctions obligations, they are separate regimes.",
    },
  },

  // ── MiFID II ─────────────────────────────────────────
  {
    id: "mifid-1",
    topic: "mifid",
    difficulty: "beginner",
    tags: ["Client Categorisation"],
    scenario:
      "A retired teacher with £40,000 in savings opens an account with an investment firm. The firm's sales team suggests classifying her as a professional client so fewer protections and disclosures apply.",
    question: "Is this classification appropriate under UK MiFID rules?",
    options: [
      { id: "a", text: "Yes, any client can be classified as professional if they agree in writing." },
      { id: "b", text: "No, she is a retail client, and opting up to professional status requires meeting strict quantitative and qualitative tests she is unlikely to satisfy." },
      { id: "c", text: "Yes, professional status is the default for advised clients." },
      { id: "d", text: "No, individuals can never be professional clients under any circumstances." },
    ],
    correctId: "b",
    explanation:
      "Client categorisation determines the level of protection. Retail clients get the most protection. An individual can only 'opt up' to elective professional status if they pass demanding tests: such as significant trading frequency, a large financial instrument portfolio, or relevant professional experience, and the firm assesses their expertise. Misclassifying clients to strip protections is a serious breach.",
    wrongExplanations: {
      a: "Written agreement alone is not enough, the quantitative and qualitative criteria must genuinely be met.",
      c: "Retail is the default for individuals. Professional status is the exception, not the rule.",
      d: "Individuals can become elective professional clients, but only if they satisfy the strict tests.",
    },
  },
  {
    id: "mifid-2",
    topic: "mifid",
    difficulty: "intermediate",
    tags: ["Best Execution"],
    scenario:
      "An execution desk routinely routes all retail client orders to a single venue because it pays the firm for order flow, even though another accessible venue consistently offers better prices after costs.",
    question: "How does this sit with the best execution obligation?",
    options: [
      { id: "a", text: "It is acceptable, firms may choose any execution venue." },
      { id: "b", text: "It likely breaches best execution: for retail clients the key test is total consideration, price plus costs, and conflicts must not drive routing." },
      { id: "c", text: "It is acceptable if the venue choice is disclosed in the order execution policy." },
      { id: "d", text: "Best execution only applies to institutional clients." },
    ],
    correctId: "b",
    explanation:
      "Firms must take all sufficient steps to obtain the best possible result for clients. For retail clients this is judged primarily by total consideration: the price of the instrument plus all execution costs. Routing driven by payments to the firm rather than client outcomes is a conflict of interest and undermines best execution.",
    wrongExplanations: {
      a: "Venue choice must be justified by execution quality for the client, not by benefits to the firm.",
      c: "Disclosure does not cure consistently worse outcomes, the obligation is to actually achieve the best possible result.",
      d: "Best execution applies to retail and professional clients alike, with the strictest test for retail.",
    },
  },
  {
    id: "mifid-3",
    topic: "mifid",
    difficulty: "advanced",
    tags: ["Transaction Reporting", "UK MiFIR"],
    scenario:
      "A UK investment firm executes trades in shares admitted to trading on a UK venue. Its compliance officer discovers that a system error meant thousands of transaction reports over several months were never submitted to the FCA.",
    question: "What is the position under UK MiFIR?",
    options: [
      { id: "a", text: "Reports were optional because the trades all settled correctly." },
      { id: "b", text: "The firm has breached its obligation to report complete and accurate transaction details to the FCA by the close of the following working day, and should notify the FCA and remediate." },
      { id: "c", text: "No issue arises if the counterparties reported their side of each trade." },
      { id: "d", text: "The firm can simply delete the failed reports and move on." },
    ],
    correctId: "b",
    explanation:
      "UK MiFIR requires firms to report complete and accurate details of reportable transactions to the FCA no later than the close of the following working day (T+1). Systematic reporting failures are a serious breach, the FCA has fined several firms millions of pounds for them. The right response is prompt notification (Principle 11), back-reporting, and fixing the root cause.",
    wrongExplanations: {
      a: "Settlement and transaction reporting are unrelated, reporting supports the FCA's market abuse surveillance.",
      c: "Each firm subject to the obligation must submit its own reports; a counterparty's report does not discharge it.",
      d: "Concealing the failure would compound the breach and violate Principle 11.",
    },
  },
  {
    id: "mifid-4",
    topic: "mifid",
    difficulty: "intermediate",
    tags: ["Inducements", "Conflicts"],
    scenario:
      "A product provider offers an advisory firm generous hospitality and a 'marketing allowance' in exchange for featuring its funds prominently in client recommendations.",
    question: "How do the UK MiFID inducement rules treat this arrangement?",
    options: [
      { id: "a", text: "It is a normal commercial arrangement and needs no analysis." },
      { id: "b", text: "It is likely a prohibited inducement: benefits must not impair the duty to act in clients' best interests, and firms giving independent advice face the strictest limits." },
      { id: "c", text: "It is fine as long as clients are told about the marketing allowance." },
      { id: "d", text: "Only cash payments count as inducements, hospitality is always exempt." },
    ],
    correctId: "b",
    explanation:
      "The inducement rules restrict fees, commissions and non-monetary benefits paid or received in connection with services to clients. A benefit is only permissible if it enhances the quality of service to the client and does not impair the firm's duty to act honestly, fairly and professionally in the client's best interests. Payments that skew recommendations towards a provider fail that test.",
    wrongExplanations: {
      a: "Arrangements that influence recommendations engage the inducement rules directly.",
      c: "Disclosure alone does not legitimise a benefit that distorts advice.",
      d: "Non-monetary benefits, including hospitality beyond minor acceptable benefits, are squarely within scope.",
    },
  },

  // ── Crypto ───────────────────────────────────────────
  {
    id: "crypto-1",
    topic: "crypto",
    difficulty: "beginner",
    tags: ["Registration", "MLRs"],
    scenario:
      "A startup wants to launch a crypto exchange for UK customers today, before the new FSMA-based regime goes live in October 2027. The founder believes crypto is currently unregulated in the UK.",
    question: "Is the founder right?",
    options: [
      { id: "a", text: "Yes, crypto is entirely unregulated in the UK until October 2027." },
      { id: "b", text: "No, the exchange must register with the FCA under the Money Laundering Regulations and comply with the financial promotions regime for cryptoassets." },
      { id: "c", text: "No, crypto exchanges have needed full FCA authorisation since 2020." },
      { id: "d", text: "Yes, provided the exchange only lists Bitcoin." },
    ],
    correctId: "b",
    explanation:
      "Crypto is not unregulated in the UK today. Since 2020, cryptoasset businesses have had to register with the FCA under the MLRs and demonstrate adequate financial crime controls. Since October 2023, crypto promotions to UK consumers must be approved by an FCA-authorised person and carry prominent risk warnings. Full authorisation under the new FSMA-based regime becomes required when it goes live on 25 October 2027.",
    wrongExplanations: {
      a: "AML registration and the promotions regime already apply, operating without registration is a criminal offence.",
      c: "Full authorisation is the future state (from October 2027). The current requirement is MLR registration, not full FSMA authorisation.",
      d: "The rules apply regardless of which cryptoassets are listed.",
    },
  },
  {
    id: "crypto-2",
    topic: "crypto",
    difficulty: "intermediate",
    tags: ["Financial Promotions"],
    scenario:
      "A crypto platform plans a UK advertising campaign: 'Earn while you sleep, join 2 million users!' with a sign-up link that lets new customers buy crypto within minutes.",
    question: "What do the FCA's crypto promotion rules (in force since October 2023) require?",
    options: [
      { id: "a", text: "Nothing, crypto adverts are outside the FCA's remit." },
      { id: "b", text: "Approval by an FCA-authorised person, prominent risk warnings, and a 24-hour cooling-off period for first-time investors, and no misleading earnings claims." },
      { id: "c", text: "Only a small-print disclaimer that crypto is risky." },
      { id: "d", text: "A ban on all crypto advertising in the UK." },
    ],
    correctId: "b",
    explanation:
      "Since 8 October 2023, cryptoasset promotions to UK consumers fall within the financial promotions regime. They must be communicated or approved by an FCA-authorised person, carry prescribed risk warnings, and include positive frictions such as a 24-hour cooling-off period for first-time investors with a firm. Promotions must also be clear, fair and not misleading, 'earn while you sleep' framing invites scrutiny.",
    wrongExplanations: {
      a: "Crypto promotions were brought squarely into the FCA's remit in October 2023.",
      c: "The rules prescribe prominent risk warnings and cooling-off frictions, not just small print.",
      d: "Crypto advertising is not banned, it is regulated.",
    },
  },
  {
    id: "crypto-3",
    topic: "crypto",
    difficulty: "advanced",
    tags: ["New Regime", "Authorisation"],
    scenario:
      "In August 2026, a crypto custodian registered with the FCA under the MLRs is planning for the new regime. The CEO asks compliance what the timeline looks like.",
    question: "Which summary of the FCA's crypto regime timeline is correct?",
    options: [
      { id: "a", text: "Final rules were published on 30 June 2026; applications open 30 September 2026; the regime comes into force on 25 October 2027, with a streamlined route for MLR-registered firms." },
      { id: "b", text: "The regime already came into force in 2025 and the firm is operating illegally." },
      { id: "c", text: "The rules are still only proposals with no confirmed dates." },
      { id: "d", text: "Only stablecoin issuers will need authorisation; custodians are out of scope." },
    ],
    correctId: "a",
    explanation:
      "The FCA published its final rules for the cryptoasset regime on 30 June 2026. The authorisation gateway opens on 30 September 2026, and the regime comes into force on 25 October 2027, covering activities including operating a trading platform, dealing, arranging, custody (safeguarding), stablecoin issuance and staking. Firms already registered under the MLRs benefit from a streamlined authorisation process, and firms applying by 28 February 2027 can rely on a saving provision if their application is still pending at go-live.",
    wrongExplanations: {
      b: "The regime does not come into force until 25 October 2027. MLR registration remains the current requirement.",
      c: "The rules were finalised on 30 June 2026 with confirmed dates.",
      d: "Custody (safeguarding) of qualifying cryptoassets is one of the new regulated activities.",
    },
  },
  {
    id: "crypto-4",
    topic: "crypto",
    difficulty: "beginner",
    tags: ["FSCS", "Consumer Protection"],
    scenario:
      "A first-time investor keeps £30,000 of savings in a bank account and is considering moving it all into crypto on a registered exchange. She assumes that because the exchange is 'FCA-registered', her money is protected like a bank deposit.",
    question: "Is her assumption correct?",
    options: [
      { id: "a", text: "Yes. FCA registration brings FSCS protection up to £120,000." },
      { id: "b", text: "No, crypto assets are not covered by the FSCS, and MLR registration is an anti-money-laundering check, not a soundness or protection guarantee." },
      { id: "c", text: "Yes, but only up to £85,000." },
      { id: "d", text: "No, but the Financial Ombudsman will refund any crypto losses." },
    ],
    correctId: "b",
    explanation:
      "Crypto assets are not covered by the FSCS. MLR registration means the firm passed financial-crime checks, it says nothing about the firm's financial soundness or the riskiness of crypto itself. Bank deposits are protected up to £120,000 per person per authorised institution (since 1 December 2025); crypto holdings have no equivalent safety net. The standard risk warning applies: be prepared to lose all the money you put into crypto.",
    wrongExplanations: {
      a: "The £120,000 FSCS limit applies to bank deposits, not crypto holdings.",
      c: "There is no FSCS protection for crypto at any amount.",
      d: "Investment losses are not refundable by the FOS, it resolves disputes about firm conduct, not market losses.",
    },
  },
];
