# Dmitriy Sannikov — CV

Personal CV and portfolio: https://sannikovmatt.github.io/CV/

Design adapted from [Jakhongir Tashpulatov’s CV](https://github.com/bczak/bczak.github.io), at Dmitriy’s request. The content describes Dmitriy’s own work and experience. English edition.

## Development

```sh
npm ci
npm run dev -- --host 0.0.0.0
npm run build
npm run preview -- --host 0.0.0.0
```

Edit `src/content.ts` for career history, projects, skills and copy. `src/main.ts` renders the site and print CV; `src/style.css` retains the reference design. Open `/CV/?print` to inspect the print layout, or use Print CV to save a PDF.

The existing static CV is retained at `src/cv.html` as an archive. The new site uses Vite with `/CV/` as its deployment base.

## Deployment

Build with `npm run build`, then publish the contents of `dist/` to the existing `gh-pages` branch. The website remains unchanged until those files are published. This checkout does not change the repository’s Pages configuration.

GitHub activity is a dated snapshot refreshed from the public GitHub contribution calendar on each build (`scripts/update-github.mjs`). A failed fetch preserves the last snapshot. The browser makes no external requests for the calendar.

The original CV is available at `/CV/classic/`, with a Print / Save as PDF button. Builds copy `src/cv.html` and its original stylesheet into that route; the toolbar is hidden when printing. The new portfolio’s Print CV option remains available.
