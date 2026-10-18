import { mkdir, readFile, writeFile, copyFile } from 'node:fs/promises'
const root = new URL('../', import.meta.url)
const output = new URL('public/classic/', root)
await mkdir(new URL('assets/', output), { recursive: true })
let html = await readFile(new URL('src/cv.html', root), 'utf8')
html = html.replace('https://sannikovmatt.github.io/CV/"', 'https://sannikovmatt.github.io/CV/classic/"')
html = html.replace('</head>', `<style>
.classic-actions { max-width: 700px; margin: 24px auto 0; padding: 0 7%; display: flex; gap: 16px; align-items: center; font: 14px system-ui, sans-serif; }
.classic-actions a { color: #6d28d9; }
.classic-actions button { border: 0; border-radius: 8px; background: #6d28d9; color: white; padding: 10px 16px; font: inherit; cursor: pointer; }
@media print { .classic-actions { display: none !important; } }
</style></head>`)
html = html.replace('<body>', `<body><nav class="classic-actions" aria-label="CV actions"><a href="../">← Portfolio</a><button type="button" onclick="window.print()">Print / Save as PDF</button></nav>`)
await writeFile(new URL('index.html', output), html)
await copyFile(new URL('src/assets/cv.css', root), new URL('assets/cv.css', output))
console.log('Built classic CV at /CV/classic/')
