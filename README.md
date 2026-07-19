# Telspace Africa — Website Redesign

**Live site:** [telspace-redesign](https://telspace-redesigns.netlify.app/#top)
**Company Project 1 — Melsoft Academy**

A concept redesign of [telspace.africa](https://www.telspace.africa/#portfolio), built for a Melsoft Academy Company Project 1 assignment. Telspace Systems (Africa) is a South African offensive security / penetration testing company operating since 2002. This project reimagines their public-facing site while keeping their existing brand identity (their signature blue, dark navy palette) intact.

See [`BRIEF.pdf`](./brief.pdf) for the full research brief — why this company was chosen, the specific issues identified on the live site (desktop + mobile evidence), and the reasoning behind the redesign direction.

## Why this redesign

The original site relies on a dated photo-collage hero treatment, has no clear primary call-to-action, weak trust signals above the fold, and mobile responsiveness issues (oversized headline text, poor use of screen space). Full findings with screenshots are documented in the brief.

This redesign addresses each of those directly:

- **Terminal-scan hero** — a live, self-typing terminal log simulating an authorized security scan of the site itself, replacing the collage image with something that reflects the company's actual offensive-security work
- **Clear primary CTA** — "Request an engagement" instead of a vague button
- **Trust strip** — years in operation, engagements delivered, countries served, shown above the fold
- **Responsive, mobile-first layout** — proper nav collapse and reflowed content on small screens
- **Working contact form UI** — a real, focused way to reach out, rather than a single ambiguous link

## Tech stack

- [React](https://react.dev/) (functional components + hooks)
- [Tailwind CSS v4](https://tailwindcss.com/)
- [Vite](https://vite.dev/) for build tooling
- Deployed on [Netlify](https://www.netlify.com/)

## Project structure

```
src/
├── components/
│   ├── Header.jsx          # Sticky nav with mobile menu
│   ├── Hero.jsx             # Hero section wrapper
│   ├── TerminalScan.jsx     # Animated terminal-log signature element
│   ├── TrustStrip.jsx       # Stats bar (years, engagements, countries)
│   ├── Services.jsx         # Core services grid
│   ├── TrainingResearch.jsx # Training + Research sections
│   ├── Blog.jsx             # Recent writeups teaser
│   ├── Contact.jsx          # Contact form
│   └── Footer.jsx
├── App.jsx
└── index.css                # Design tokens (colors, fonts) via Tailwind v4 @theme
```

## Running locally

```bash
npm install
npm run dev
```

Then open the local URL Vite prints (usually `http://localhost:5173`).

To build for production:

```bash
npm run build
```

## Deliverables

- [`brief.pdf`](./brief.pdf) — company research, evidence, and redesign reasoning
- `src/` — the redesigned codebase
- `outreach-proof/` — proof of outreach to Telspace Africa

## Disclaimer

This is a student project for educational purposes and is not affiliated with or endorsed by Telspace Systems (Africa).
