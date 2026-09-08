# CV

Single-page CV, served at <https://sannikovmatt.github.io/CV/>.

## Files

    src/cv.html          the CV itself
    src/assets/cv.css    styles, including the print/PDF rules
    src/assets/*.png     phone and envelope icons

No build step. Open `src/cv.html` in a browser, or serve the folder:

    python3 -m http.server 8000 --directory src

## PDF

Open the page and print to PDF. Turn **off** "Headers and footers" in the
print dialog, otherwise the browser stamps the date and URL on the page.
The print stylesheet is tuned to fit one A4 page.

## Deploy

GitHub Pages serves the `gh-pages` branch. To publish a change:

    git worktree add /tmp/ghp gh-pages
    cp src/cv.html /tmp/ghp/index.html
    cp -r src/assets /tmp/ghp/
    cd /tmp/ghp && git add -A && git commit -m "Deploy updated CV" && git push origin gh-pages
    cd - && git worktree remove /tmp/ghp
