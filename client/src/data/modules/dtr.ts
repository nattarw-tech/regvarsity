import type { Module } from "./types";

// ============================================================
// MODULE 14 — DTR: Disclosure and Transparency Rules
// ============================================================
export const moduleDTR: Module = {
  id: "dtr",
  number: 14,
  title: "DTR — Disclosure and Transparency Rules",
  slug: "dtr-disclosure-transparency",
  block: "Listing Rules",
  sourceCode: "DTR",
  colour: "bg-green-50",
  accentColour: "oklch(0.48 0.17 150)",
  description:
    "The DTR govern what listed companies must disclose to the market and when. They are fundamental to maintaining fair, orderly, and transparent capital markets. Anyone working in corporate finance, investor relations, or compliance at a listed company needs to understand them.",
  whoItAppliesTo: "Companies listed on UK regulated markets, including the London Stock Exchange Main Market.",
  chapters: [
    {
      id: "dtr-1",
      number: 1,
      title: "Inside Information and Timely Disclosure",
      slug: "inside-information-disclosure",
      readingTimeMinutes: 9,
      intro:
        "The most important DTR obligation is the duty to disclose inside information to the market as soon as possible. Getting this wrong can result in market abuse liability as well as DTR breaches.",
      subSections: [
        {
          id: "dtr-1-1",
          heading: "1.1 — What is inside information?",
          content: `**Inside information** is information that is: (1) precise, (2) non-public, (3) relating to an issuer or financial instrument, and (4) price sensitive — if made public, it would likely have a significant effect on the price.\n\nExamples include: a profit warning before announcement, a major acquisition, a regulatory investigation, a significant contract win or loss, or a change in key management.\n\n**The disclosure obligation:** Under DTR 2, issuers must disclose inside information to the market **as soon as possible** via a Regulatory Information Service (RIS) — typically the London Stock Exchange's Regulatory News Service (RNS).`,
        },
        {
          id: "dtr-1-2",
          heading: "1.2 — Delaying disclosure and insider lists",
          content: `There is a limited right to **delay disclosure** if: immediate disclosure would prejudice the issuer's legitimate interests (e.g. ongoing negotiations), the delay would not mislead the public, and the issuer can ensure confidentiality.\n\n**Insider lists:** Whenever a company delays disclosure, it must maintain an **insider list** — a record of everyone who has access to the inside information. This must be provided to the FCA on request. Insider lists must include the identity of each person with access, the reason they have access, and the date they were given access.`,
        },
      ],
      keyTakeaways: [
        { text: "Inside information must be disclosed to the market as soon as possible via a Regulatory Information Service." },
        { text: "Disclosure can be delayed only if it would prejudice legitimate interests and confidentiality can be maintained." },
        { text: "Insider lists must be maintained whenever disclosure is delayed and provided to the FCA on request." },
      ],
      quizQuestions: [
        {
          id: "dtr-1-q1",
          question: "How quickly must a listed company disclose inside information under DTR 2?",
          options: [
            "Within 30 days",
            "At the next annual general meeting",
            "As soon as possible, via a Regulatory Information Service",
            "Within two trading days",
          ],
          correctIndex: 2,
          explanation: "DTR 2 requires issuers to disclose inside information to the market as soon as possible through a Regulatory Information Service, typically the London Stock Exchange's RNS. Two trading days is the deadline for major shareholding notifications, a different obligation.",
        },
        {
          id: "dtr-1-q2",
          question: "A company is in confidential merger negotiations. When may it delay disclosing this inside information?",
          options: [
            "Never, disclosure is always immediate",
            "If immediate disclosure would prejudice its legitimate interests, the delay would not mislead the public, and confidentiality can be maintained",
            "Whenever the board votes to delay",
            "Only with written FCA permission in advance",
          ],
          correctIndex: 1,
          explanation: "The right to delay is limited and conditional: legitimate interests (such as ongoing negotiations) would be prejudiced, the public would not be misled, and confidentiality is assured. If any condition fails, disclosure must be made.",
        },
        {
          id: "dtr-1-q3",
          question: "What must an insider list record?",
          options: [
            "Only the names of board members",
            "The identity of each person with access to the inside information, why they have access, and when they got it",
            "The company's share price history",
            "The FCA case officer assigned to the company",
          ],
          correctIndex: 1,
          explanation: "Whenever disclosure is delayed, the company must keep an insider list recording who has access to the information, the reason for their access, and the date access was given. It must be provided to the FCA on request.",
        },
      ],
    },
    {
      id: "dtr-2",
      number: 2,
      title: "Major Shareholding Notifications",
      slug: "major-shareholding-notifications",
      readingTimeMinutes: 6,
      intro:
        "When investors acquire or dispose of significant stakes in listed companies, they must notify both the company and the FCA. This transparency is essential for market integrity.",
      subSections: [
        {
          id: "dtr-2-1",
          heading: "2.1 — The notification thresholds",
          content: `DTR 5 requires investors to notify a listed company (and the FCA) when their voting rights cross certain **thresholds**: 3% (the initial threshold), then every 1% above 3%, and when falling back through these thresholds.\n\nNotification must be made **within two trading days** of the threshold being crossed. The notification must include the identity of the shareholder, the date the threshold was crossed, and the total number of voting rights held.\n\nMajor shareholding notifications give the market visibility of who owns significant stakes — important for detecting potential takeover activity, understanding the shareholder base, and identifying activist investors.`,
        },
      ],
      keyTakeaways: [
        { text: "Investors must notify when their voting rights cross 3% and every 1% above that." },
        { text: "Notification must be made within two trading days of the threshold being crossed." },
        { text: "The notification must identify the shareholder and the total voting rights held." },
      ],
      quizQuestions: [
        {
          id: "dtr-2-q1",
          question: "At what initial shareholding threshold must an investor notify a listed company and the FCA?",
          options: [
            "1% of voting rights",
            "3% of voting rights, then every 1% above that",
            "5% of voting rights, then every 5%",
            "10% of voting rights",
          ],
          correctIndex: 1,
          explanation: "DTR 5 sets the initial threshold at 3% of voting rights, with further notifications at every 1% above 3%, and again when holdings fall back through these thresholds.",
        },
        {
          id: "dtr-2-q2",
          question: "An investor crosses the 3% threshold on Monday. By when must they notify?",
          options: [
            "By the end of Monday",
            "Within two trading days",
            "Within two calendar weeks",
            "At the company's next results announcement",
          ],
          correctIndex: 1,
          explanation: "Notification must be made within two trading days of crossing the threshold, identifying the shareholder, the date the threshold was crossed, and the total voting rights held.",
        },
        {
          id: "dtr-2-q3",
          question: "Why do major shareholding notifications matter to the market?",
          options: [
            "They set the company's dividend policy",
            "They give visibility of who owns significant stakes, helping detect takeover activity and activist investors",
            "They determine board appointments",
            "They fix the share price for the next quarter",
          ],
          correctIndex: 1,
          explanation: "Transparency about significant stakes helps the market detect potential takeover activity, understand the shareholder base, and identify activist investors building positions.",
        },
      ],
    },
  ],
  moduleTest: {
    passMarkPercent: 70,
    questions: [
      {
        id: "dtr-test-q1",
        question: "What four features make information 'inside information'?",
        options: [
          "Confidential, internal, financial and recent",
          "Precise, non-public, relating to an issuer or instrument, and price sensitive",
          "Written, verified, board-approved and material",
          "Secret, valuable, tradable and corporate",
        ],
        correctIndex: 1,
        explanation: "Inside information is precise, has not been made public, relates to an issuer or financial instrument, and would likely have a significant effect on the price if made public.",
      },
      {
        id: "dtr-test-q2",
        question: "Which of these is an example of inside information for a listed company?",
        options: [
          "Its published annual report",
          "A profit warning that has not yet been announced",
          "General economic forecasts",
          "A competitor's press release",
        ],
        correctIndex: 1,
        explanation: "A profit warning before announcement is precise, non-public, relates to the issuer and is clearly price sensitive. Published or third-party information is not inside information.",
      },
      {
        id: "dtr-test-q3",
        question: "Through what channel must inside information be disclosed?",
        options: [
          "The company's social media accounts",
          "A Regulatory Information Service, such as the London Stock Exchange's RNS",
          "A letter to the largest shareholders",
          "The company's annual report only",
        ],
        correctIndex: 1,
        explanation: "Disclosure must go through a Regulatory Information Service, typically the LSE's Regulatory News Service, so the whole market receives the information at the same time.",
      },
      {
        id: "dtr-test-q4",
        question: "Which condition is NOT required for delaying disclosure of inside information?",
        options: [
          "Immediate disclosure would prejudice the issuer's legitimate interests",
          "The delay would not mislead the public",
          "The issuer can ensure confidentiality",
          "The FCA has given written pre-approval for the delay",
        ],
        correctIndex: 3,
        explanation: "The three conditions are legitimate interests, no misleading of the public, and assured confidentiality. FCA pre-approval is not part of the test, although insider lists must be kept and provided to the FCA on request.",
      },
      {
        id: "dtr-test-q5",
        question: "A fund's holding in a listed company falls from 4.2% to 2.8%. Must it notify?",
        options: [
          "No, notifications only apply when buying",
          "Yes, notifications are required when falling back through the thresholds too",
          "Only if the company asks",
          "Only if the fund is UK-based",
        ],
        correctIndex: 1,
        explanation: "DTR 5 requires notification when voting rights cross thresholds in either direction, so falling from above 3% to below it triggers a notification within two trading days.",
      },
      {
        id: "dtr-test-q6",
        question: "Who do the DTR primarily apply to?",
        options: [
          "All UK companies of any size",
          "Companies listed on UK regulated markets, such as the London Stock Exchange Main Market",
          "Only banks",
          "Private companies with over 250 employees",
        ],
        correctIndex: 1,
        explanation: "The Disclosure and Transparency Rules govern companies listed on UK regulated markets, including the LSE Main Market, plus investors holding significant stakes in them.",
      },
    ],
  },
};
