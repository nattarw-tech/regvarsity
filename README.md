# RegVarsity

[![Visit the website](https://img.shields.io/badge/%C2%A7%20Visit%20the%20website-regvarsity.vercel.app-1f4d3d?style=for-the-badge)](https://regvarsity.vercel.app)

UK and EU financial regulation, explained in plain English. Seventeen structured modules
covering the FCA Handbook. PRIN, SYSC/SMCR, COBS, AML, MiFID, DISP, MAR, ESG/SDR, CASS,
ICOBS, MCOB, CONC, DTR, FEES, plus the EU's MiCA and UK GDPR/DPA 2018. Every chapter has
a Quick Check quiz, every module has a pass-marked test with a completion badge, chapters
can be listened to as audio, and there is a progress dashboard, scenario exercises, a
glossary, a regulatory updates digest, and an AI expert chat.

Created by Nisrin S Attarwala · Bayes Business School, Class of 2026.

## Stack

- React 19 + Vite + Tailwind CSS 4 (static build, no backend)
- One Vercel serverless function (`api/chat.ts`) powering the AI Expert via Groq
- Progress tracking in localStorage, no accounts, no database

## Local development

```bash
pnpm install
pnpm dev          # runs the site at localhost:3000
pnpm check        # typecheck
pnpm build        # production build into dist/
```

The AI chat needs `GROQ_API_KEY` and only works when deployed (or via `vercel dev`).

## Deployment

See DEPLOYMENT.md.

## Content policy

Educational purposes only, not legal or financial advice. Not affiliated with or endorsed
by the FCA. Every figure in the written course content is checked against primary sources
(FCA, FSCS, FOS, HM Treasury, FATF, EUR-Lex, ESMA/EBA, ICO). Last full review: July 2026.

The AI Expert chat is the exception: its answers are generated live by a language model and
are **not** reviewed against primary sources. Language models state regulatory detail
confidently even when wrong, and are especially prone to answering a UK question with a US
rule. The system prompt in `api/chat.ts` pins answers to UK and EU law and forbids the model
from quoting specific rule numbers or numeric deadlines, since a wrong citation is worse than
none. Those guardrails reduce the risk but do not eliminate it. Treat chat answers as a
starting point for your own reading, never as a source to rely on.
