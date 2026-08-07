import { readFileSync, writeFileSync, rmSync } from 'node:fs'
import { fileURLToPath, pathToFileURL } from 'node:url'
import { dirname, resolve } from 'node:path'

const scriptDir = dirname(fileURLToPath(import.meta.url))
const root = resolve(scriptDir, '..')

const PLACEHOLDER = '<div id="root"></div>'

// Load the SSR bundle built by `vite build --ssr` (ESM; use a file:// URL so
// Windows absolute paths import correctly).
const serverEntry = pathToFileURL(resolve(root, 'dist-ssr/entry-server.js')).href
const mod = await import(serverEntry)
const render = mod.render ?? mod.default?.render ?? mod.default

if (typeof render !== 'function') {
  throw new Error('SSR bundle does not export a render() function')
}

const indexPath = resolve(root, 'dist/index.html')
const template = readFileSync(indexPath, 'utf-8')

if (!template.includes(PLACEHOLDER)) {
  throw new Error(`Could not find ${PLACEHOLDER} in dist/index.html`)
}

const appHtml = render()
const html = template.replace(PLACEHOLDER, `<div id="root">${appHtml}</div>`)
writeFileSync(indexPath, html)

// The SSR bundle is a build artifact only; drop it from the output.
rmSync(resolve(root, 'dist-ssr'), { recursive: true, force: true })

console.log(`Prerendered dist/index.html (${appHtml.length} chars injected)`)
