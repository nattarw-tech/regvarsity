# Deploying RegVarsity to Vercel

Total time: about 30 minutes. Everything is free tier.

## 1. Push the code to GitHub
1. Create a new repository on github.com (e.g. `regvarsity`). Keep it public — it doubles as portfolio code.
2. In this folder run:
   ```bash
   git init
   git add .
   git commit -m "RegVarsity v1"
   git remote add origin https://github.com/YOUR_USERNAME/regvarsity.git
   git push -u origin main
   ```

## 2. Get a Groq API key (free)
1. Sign up at console.groq.com.
2. Create an API key and copy it. This powers the AI Expert chat on the free tier.

## 3. Deploy on Vercel
1. Sign up at vercel.com with your GitHub account.
2. "Add New Project" -> import the `regvarsity` repo.
3. Vercel reads `vercel.json` automatically (build: `pnpm build`, output: `dist`).
4. Under Environment Variables add: `GROQ_API_KEY` = your key from step 2.
5. Click Deploy. You get a live URL like `regvarsity.vercel.app`.

## 4. Custom domain (optional but recommended)
1. Buy `regvarsity.com` or `regvarsity.co.uk` (Cloudflare or Namecheap, ~£10/yr).
2. In Vercel: Project -> Settings -> Domains -> add the domain and follow the DNS instructions.

## 5. Analytics
Two easy options once the site is live:
- Vercel Analytics: Project -> Analytics -> Enable (free tier, zero code changes).
- Plausible or GA4: paste their script tag into `client/index.html` before `</head>`.

## 6. Check the launch basics
- Visit the live site, click through 3-4 modules, run an exercise, ask the AI chat a question.
- Paste your URL into a LinkedIn post draft to confirm the preview card (og-image) renders.
- Verify the footer disclaimer and your name/LinkedIn link show correctly.

## Ongoing
- Content review rhythm: monthly What's New pass, quarterly full review (next: October 2026).
- Every push to `main` auto-deploys on Vercel.
