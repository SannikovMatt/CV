import { readFile, writeFile } from 'node:fs/promises'
const destination = new URL('../src/github-activity.json', import.meta.url)
try {
  const response = await fetch('https://github.com/users/SannikovMatt/contributions', { signal: AbortSignal.timeout(15000) })
  if (!response.ok) throw new Error(`GitHub returned ${response.status}`)
  const html = await response.text()
  const heading = html.match(/id="js-contribution-activity-description"[^>]*>\s*([\d,]+)\s+contributions/)
  const days = [...html.matchAll(/<td\b[^>]*data-date="(\d{4}-\d{2}-\d{2})"[^>]*data-level="([0-4])"[^>]*><\/td>\s*<tool-tip\b[^>]*>([^<]+)<\/tool-tip>/g)].map(([, date, level, label]) => ({date, level: Number(level), count: Number(label.match(/^[\d,]+/)?.[0].replaceAll(',', '') ?? 0)})).sort((a,b)=>a.date.localeCompare(b.date))
  if (!heading || days.length < 350) throw new Error('Unexpected contribution calendar markup')
  const total = Number(heading[1].replaceAll(',', ''))
  await writeFile(destination, JSON.stringify({total, updated: new Date().toISOString().slice(0,10), days}) + '\n')
  console.log(`Updated GitHub activity: ${total} contributions, ${days.length} days`)
} catch (error) {
  const cached = JSON.parse(await readFile(destination, 'utf8'))
  console.warn(`Using GitHub snapshot from ${cached.updated}: ${error.message}`)
}
