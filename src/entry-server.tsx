import { renderToString } from 'react-dom/server'
import App from './App'

// Rendered at build time by scripts/prerender.mjs and injected into
// dist/index.html so crawlers see the full page content without running JS.
export function render(): string {
  return renderToString(<App />)
}
