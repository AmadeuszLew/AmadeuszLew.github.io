# StartWithHabit — brief for the portfolio entry

Source of truth for describing this project on amadeuszlewandowski.pl
(repo `~/workspace/portfolio/AmadeuszLew.github.io`: one `Project` card + one `ProjectDetail`
with features = screenshot + title + description, texts in `src/assets/i18n/{en,pl,de,es}.json`).
Facts below are checked against the code on 2026-10-09; do not add claims that are not here.

- Live: https://startwithhabit.com (published 2026-10-09)
- Repo: https://github.com/AmadeuszLew/sports_page (private at the time of writing — confirm
  with the owner before linking)
- Built solo (with AI-assisted development, see "How it was built"), first commit 2026-10-03.

## Card

- **Title:** StartWithHabit
- **Logo:** `public/og-image.png` (1200×630) or `public/favicon.svg` (pulse mark) from this repo.
- **Technologies:** Angular 22, TypeScript, SSG (prerendering), ngx-translate, SCSS + design
  tokens, Vitest, Playwright, Docker, Nginx, Caddy, GitHub Actions.
- **Short description (draft):** Free, account-free training plans for complete beginners —
  running, cycling, swimming and triathlon — in 8 languages. Progress is stored only in the
  browser; the site is fully prerendered static HTML on a self-managed VPS.

## What it is

A website that helps beginners start regular exercise without pressure and without an account.
Each program has an entry test that picks the right starting week, weekly sessions, and progress
tracking that lives only on the user's device.

| Program | Goal | Length |
|---|---|---|
| Running | 40 min of continuous running (run/walk method) | 14 weeks |
| Running 5 km | 5 km, follow-up after the 40-min plan | 6 weeks |
| Cycling | 120 min ride, heart-rate/effort zones Z1–Z3 | 15 weeks |
| Swimming | 40 min continuous swimming (incl. preparation stage) | 19 weeks |
| Triathlon 1/8 Ironman | first sprint-like triathlon | 14 weeks |
| Triathlon olympic | olympic distance | 18 weeks |

Supporting pages: running warm-up and heart-rate guides, cycling zones, swimming levels, triathlon
open-water guide, about page with the scientific sources behind each plan, privacy policy, terms.

Languages: Polish, English, German, Czech, Slovak, French, Dutch, Spanish (`/pl/`, `/en/`, …);
`/` redirects by the browser's preferred language.

## Technical highlights

- **Fully prerendered:** 864 static HTML pages (all programs × weeks × 8 languages), no backend,
  no database. Each page has its own translated title/description, canonical URL, hreflang links
  to all language versions, BreadcrumbList JSON-LD, Open Graph image; generated sitemap.
- **Local-first data:** entry-test result and progress in `localStorage`, with export/import;
  repeating a week keeps the history; versioned storage migrations.
- **Domain logic covered by unit tests:** entry-test thresholds, progression, week repeats,
  completion counting, migrations (322 Vitest tests).
- **E2E:** 230 Playwright tests incl. progress surviving reload, repeating a week without losing
  history, and layout-shift (CLS < 0.1) checks at 320/375/430/1280 px.
- **Security & privacy:** strict CSP with per-page script hashes (no `unsafe-inline` scripts),
  security headers, no cookies, no analytics; server logs deliberately contain no IP addresses.
- **SEO per language:** titles and H1s localised from keyword research (DataForSEO), not just
  translated.
- **Accessibility/mobile:** mobile-first, tap targets, metric-matched font fallbacks to avoid
  layout shift.
- **Deployment:** hardened container (unprivileged Nginx, read-only filesystem, all capabilities
  dropped, healthcheck, log rotation) bound to localhost; Caddy on the host for automatic HTTPS
  and www → apex redirect; one-command deploy script that ships the image over SSH and rolls back
  automatically if the new version is not healthy. CI: typecheck, format, unit, build, E2E,
  Docker image smoke test.

## How it was built

- Plans are based on deep-research reports (ChatGPT / Gemini), whose cited studies were checked
  against Europe PMC before use; weak or unverifiable recommendations were removed (e.g. hard
  intervals for cycling beginners). Sources are listed on the about page.
- Development with Claude Code as the main coding agent and OpenAI Codex CLI as an independent
  reviewer of each larger change.
- (Whether to emphasise the AI workflow is the owner's choice — the portfolio has an AI section.)

## Suggested screenshots (features)

Use the English version; desktop 1440 px wide unless noted. Suggested asset folder:
`src/assets/projects/startwithhabit/`.

| # | URL | Feature title (draft) | What it shows |
|---|---|---|---|
| 1 | `/en/` | Home | All programs, value proposition, language menu |
| 2 | `/en/running` | Program overview | Stages, weeks, progress summary |
| 3 | `/en/running/test` | Entry test | Test that picks the starting week |
| 4 | `/en/running/week-3` (with some sessions ticked) | Week & sessions | Session details, marking done, repeat week |
| 5 | `/en/running-5k` | Plan switch | 40 min ↔ 5 km variants of one discipline |
| 6 | `/en/cycling/zones` | Training zones | Educational guide pages |
| 7 | `/en/triathlon` | Triathlon | 1/8 IM ↔ olympic switch, three-discipline weeks |
| 8 | `/en/about` | Sources | Scientific sources behind each plan |
| 9 | any page, language menu open | 8 languages | Localised URLs and content |
| 10 | `/en/running` at 390 px | Mobile | Mobile-first layout |
| 11 | link preview in Messenger | Sharing | Open Graph image |
| 12 | (optional) PageSpeed Insights mobile result | Performance | Lighthouse scores |
