<p align="center">
  <a href="https://sannikovmatt.github.io/CV/">
    <img src="src/assets/og-image.png" alt="Dmitriy Sannikov — Senior Software Engineer" width="720">
  </a>
</p>

<p align="center">
  <a href="https://sannikovmatt.github.io/CV/"><strong>sannikovmatt.github.io/CV</strong></a>
</p>

---

One HTML file and one stylesheet. No framework, no bundler, no dependencies —
and it prints to exactly one A4 page.

    src/cv.html          the CV
    src/assets/cv.css    styles, screen and print
    src/assets/*.png     icons and the link-preview card

## Run it

Open `src/cv.html` in a browser, or:

    python3 -m http.server 8000 --directory src

## PDF

Print the page and save as PDF. Turn **off** "Headers and footers" in the print
dialog, or the browser stamps the date and URL onto it. The print stylesheet is
tuned so the whole CV lands on a single A4 page.

## Deploy

GitHub Pages serves the `gh-pages` branch:

    git worktree add /tmp/ghp gh-pages
    cp src/cv.html /tmp/ghp/index.html
    cp -r src/assets /tmp/ghp/
    cd /tmp/ghp && git add -A && git commit -m "Deploy updated CV" && git push origin gh-pages
    cd - && git worktree remove /tmp/ghp
