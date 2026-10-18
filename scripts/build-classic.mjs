import { rm, mkdir, copyFile } from 'node:fs/promises'
const root = new URL('../', import.meta.url)
const output = new URL('dist/', root)
await rm(output, { recursive: true, force: true })
await mkdir(new URL('assets/', output), { recursive: true })
await copyFile(new URL('src/cv.html', root), new URL('index.html', output))
await copyFile(new URL('src/assets/cv.css', root), new URL('assets/cv.css', output))
await copyFile(new URL('src/assets/og-image.png', root), new URL('assets/og-image.png', output))
console.log('Copied original CV unchanged to /CV/')
