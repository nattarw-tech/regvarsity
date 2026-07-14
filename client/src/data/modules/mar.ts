import type { Module } from "./types";

// ============================================================
// MODULE 8 - MAR: Market Abuse
// ============================================================
export const moduleMAR: Module = {
  id: "mar",
  number: 8,
  title: "MAR - Market Abuse and Insider Dealing",
  slug: "mar-market-abuse",
  block: "Business Standards",
  sourceCode: "MAR / UK MAR",
  colour: "bg-red-50",
  accentColour: "oklch(0.45 0.2 25)",
  description:
    "Market abuse undermines the integrity of financial markets and harms investors. The UK Market Abuse Regulation (UK MAR) prohibits insider dealing, market manipulation, and unlawful disclosure of inside information. Understanding these rules is essential for anyone working in or around financial markets.",
  whoItAppliesTo: "Anyone who trades in financial instruments admitted to trading on a UK trading venue: including individuals, firms, and issuers.",
  chapters: [
    {
      id: "mar-1",
      number: 1,
      title: "Insider Dealing and Inside Information",
      slug: "insider-dealing",
      readingTimeMinutes: 8,
      intro:
        "Insider dealing is one of the oldest and most serious financial crimes. It involves trading on information that is not publicly available, giving the trader an unfair advantage over other market participants. Understanding what constitutes 'inside information' is the starting point.",
      subSections: [
        {
          id: "mar-1-1",
          heading: "1.1 - What is inside information?",
          content: `**Inside information** is information that:

1. Is of a **precise nature**, it is specific enough to draw a conclusion about the likely effect on prices
2. Has **not been made public**, it is not generally available to the market
3. Relates **directly or indirectly** to one or more issuers or financial instruments
4. Would, if made public, be **likely to have a significant effect on prices**, a reasonable investor would use it in making investment decisions

The "reasonable investor" test is key. Information that a reasonable investor would consider important in making an investment decision is likely to be inside information.

**Examples of inside information**:
- Advance knowledge of a company's earnings announcement before it is published
- Knowledge that a company is about to be acquired (before the announcement)
- Knowledge of a regulatory investigation into a company
- Knowledge of a significant contract win or loss

**Examples that are NOT inside information**:
- Publicly available information (e.g. published accounts, press releases)
- General market rumours without a specific factual basis
- Analyst research based on publicly available information`,
        },
        {
          id: "mar-1-2",
          heading: "1.2 - The three forms of market abuse",
          content: `UK MAR prohibits three forms of market abuse:

**1. Insider dealing**: Using inside information to trade in financial instruments, either for yourself or on behalf of others. It is also insider dealing to recommend or induce someone else to trade on the basis of inside information (even if you do not tell them the information itself).

**2. Unlawful disclosure**: Disclosing inside information to another person outside the normal exercise of your employment, profession, or duties. If you tell a friend that your company is about to announce a major acquisition, that is unlawful disclosure, even if you do not trade yourself.

**3. Market manipulation**: Engaging in transactions or orders that give false or misleading signals about the supply, demand, or price of a financial instrument. This includes:
- **Wash trading**, buying and selling the same instrument to create artificial volume
- **Spoofing**, placing large orders with no intention of executing them, to move prices
- **Pump and dump**, artificially inflating a price through misleading information, then selling
- **Layering**, placing multiple orders at different prices to create a false impression of market depth`,
        },
        {
          id: "mar-1-3",
          heading: "1.3 - Insider lists and market soundings",
          content: `**Insider lists**: Issuers (companies with shares listed on a trading venue) must maintain a list of all persons who have access to inside information. This list must be provided to the FCA on request. Maintaining accurate insider lists is a key compliance obligation.

**Market soundings**: Before announcing a significant transaction (e.g. a capital raising), an issuer or its advisers may need to "sound out" potential investors, i.e. share inside information with them to gauge interest. UK MAR provides a safe harbour for legitimate market soundings, but strict procedures must be followed:
- The person conducting the sounding must assess whether it involves disclosing inside information
- The recipient must be informed that they may receive inside information and that they will be restricted from trading
- Records must be kept of all soundings

**Wall-crossing**: This is the informal term for the process of bringing a potential investor "over the wall", i.e. sharing inside information with them. Once crossed, the investor is restricted from trading in the relevant instrument until the information is made public.`,
        },
      ],
      keyTakeaways: [
        { text: "Inside information is precise, non-public information that a reasonable investor would use in making investment decisions." },
        { text: "UK MAR prohibits three forms of market abuse: insider dealing, unlawful disclosure, and market manipulation." },
        { text: "Market manipulation includes wash trading, spoofing, pump and dump, and layering." },
        { text: "Issuers must maintain insider lists of all persons with access to inside information." },
        { text: "Market soundings (sharing inside information before a transaction) are permitted under strict conditions." },
      ],
      quizQuestions: [
        {
          id: "mar-1-q1",
          question: "Which of the following would count as inside information?",
          options: [
            "A company's published annual accounts",
            "A general market rumour with no factual basis",
            "Advance knowledge that a company is about to be acquired, before any announcement",
            "An analyst note based entirely on public data",
          ],
          correctIndex: 2,
          explanation: "Inside information is precise, non-public information relating to an issuer or instrument that would likely have a significant effect on prices if made public. Advance knowledge of an acquisition ticks every box. Published accounts, vague rumours and research built on public data do not.",
        },
        {
          id: "mar-1-q2",
          question: "An employee learns their company will announce a major acquisition and tells a friend at the pub, but neither of them trades. Has an offence been committed?",
          options: [
            "No, because nobody traded",
            "Yes, unlawful disclosure of inside information outside the normal exercise of employment",
            "Only if the friend later trades",
            "Only if the information turns out to be true",
          ],
          correctIndex: 1,
          explanation: "Unlawful disclosure is one of the three forms of market abuse under UK MAR. Sharing inside information outside the normal exercise of your employment, profession or duties is an offence in itself, even if no one trades on it.",
        },
        {
          id: "mar-1-q3",
          question: "A trader places large orders they never intend to execute, purely to move the price, then cancels them. What is this practice called?",
          options: [
            "Wash trading",
            "Spoofing",
            "Pump and dump",
            "Wall-crossing",
          ],
          correctIndex: 1,
          explanation: "Spoofing is placing large orders with no intention of executing them in order to move prices. Wash trading creates artificial volume by trading with yourself, pump and dump inflates a price through misleading information before selling, and wall-crossing is the legitimate process of sharing inside information under market sounding rules.",
        },
      ],
    },
  ],
  moduleTest: {
    passMarkPercent: 70,
    questions: [
      {
        id: "mar-test-q1",
        question: "What are the four elements of inside information under UK MAR?",
        options: [
          "Secret, valuable, foreign and financial",
          "Precise, not public, relating to issuers or instruments, and likely to significantly affect prices",
          "Written, confidential, internal and price-sensitive",
          "Recent, exclusive, corporate and material",
        ],
        correctIndex: 1,
        explanation: "Inside information must be of a precise nature, not have been made public, relate directly or indirectly to one or more issuers or financial instruments, and be likely to have a significant effect on prices if made public. The 'reasonable investor' test guides the last element.",
      },
      {
        id: "mar-test-q2",
        question: "What are the three forms of market abuse prohibited by UK MAR?",
        options: [
          "Fraud, theft and forgery",
          "Insider dealing, unlawful disclosure and market manipulation",
          "Spoofing, layering and wash trading",
          "Mis-selling, churning and front running",
        ],
        correctIndex: 1,
        explanation: "UK MAR prohibits insider dealing, unlawful disclosure of inside information, and market manipulation. Spoofing, layering and wash trading are all specific techniques within the market manipulation category.",
      },
      {
        id: "mar-test-q3",
        question: "You hold inside information about a company. Without revealing the information, you tell your brother to buy the shares. Is this insider dealing?",
        options: [
          "No, because you did not disclose the information itself",
          "No, because you did not trade personally",
          "Yes, recommending or inducing another person to trade on the basis of inside information is insider dealing",
          "Only if your brother makes a profit",
        ],
        correctIndex: 2,
        explanation: "Insider dealing includes recommending or inducing someone else to trade on the basis of inside information, even if you never reveal the information itself and never trade yourself.",
      },
      {
        id: "mar-test-q4",
        question: "What is wash trading?",
        options: [
          "Buying and selling the same instrument to create artificial volume",
          "Trading only in the closing auction",
          "Cleaning criminal money through share purchases",
          "Selling shares to pay a tax bill",
        ],
        correctIndex: 0,
        explanation: "Wash trading means buying and selling the same instrument to create the false appearance of trading volume. It gives misleading signals about supply and demand, which is market manipulation under UK MAR.",
      },
      {
        id: "mar-test-q5",
        question: "What must an issuer do with its insider list?",
        options: [
          "Publish it on its website",
          "Maintain it accurately and provide it to the FCA on request",
          "Send it to all shareholders annually",
          "Delete it after each announcement",
        ],
        correctIndex: 1,
        explanation: "Issuers must maintain a list of all persons with access to inside information and provide it to the FCA on request. Accurate insider lists are a core compliance obligation for listed companies.",
      },
      {
        id: "mar-test-q6",
        question: "An investment bank wants to gauge investor appetite for a capital raising before announcing it. How can it legally share inside information with potential investors?",
        options: [
          "It cannot, under any circumstances",
          "Through the market soundings safe harbour, following strict procedures including warnings and record-keeping",
          "By asking investors to sign a simple NDA",
          "By publishing the information on social media first",
        ],
        correctIndex: 1,
        explanation: "UK MAR provides a safe harbour for legitimate market soundings. The sounding firm must assess whether inside information is involved, warn recipients they may receive it and will be restricted from trading, and keep records. Once 'wall-crossed', investors cannot trade until the information is public.",
      },
      {
        id: "mar-test-q7",
        question: "Who does UK MAR apply to?",
        options: [
          "Only FCA-authorised firms",
          "Only company directors",
          "Anyone trading in financial instruments admitted to trading on a UK trading venue",
          "Only professional traders",
        ],
        correctIndex: 2,
        explanation: "UK MAR applies to anyone who trades in financial instruments admitted to trading on a UK venue, including private individuals, firms and issuers. You do not need to work in finance to commit market abuse.",
      },
    ],
  },
};
