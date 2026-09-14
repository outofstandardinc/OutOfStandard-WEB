const PING_URL = 'https://muddy-bar-abd3.outofstandardinc.workers.dev/'
const SESSION_KEY = 'visit-pinged'
const START_KEY = 'visit-start'
const VIEWS_KEY = 'visit-views'

function isLocalhost() {
  return ['localhost', '127.0.0.1'].includes(window.location.hostname)
}

function isMuted() {
  return !!localStorage.getItem('notify-muted')
}

function deviceLabel() {
  return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
}

type ViewEntry = { view: string; t: number }

// Views recorded within this window of an identical, already-logged view are
// treated as the same visit rather than a genuine revisit. This absorbs
// React StrictMode's remount check (which can re-fire a freshly mounted
// subtree's effects a few milliseconds apart) without needing a much longer,
// more fragile window — real tab switches take far longer than this.
const DEDUPE_WINDOW_MS = 500

function getViews(): ViewEntry[] {
  const raw = sessionStorage.getItem(VIEWS_KEY)
  return raw ? JSON.parse(raw) : []
}

export function trackView(view: string) {
  if (isLocalhost() || isMuted()) return
  const views = getViews()
  const now = Date.now()
  for (let i = views.length - 1; i >= 0 && now - views[i].t < DEDUPE_WINDOW_MS; i--) {
    if (views[i].view === view) return
  }
  views.push({ view, t: now })
  sessionStorage.setItem(VIEWS_KEY, JSON.stringify(views))
}

let trackingInitialized = false

export function initVisitTracking() {
  // Guards against React re-invoking this mount effect (e.g. StrictMode's
  // remount check), which would otherwise register the exit listeners below
  // twice and send every ping twice.
  if (trackingInitialized) return
  trackingInitialized = true

  if (isLocalhost()) return

  const params = new URLSearchParams(window.location.search)
  if (params.get('notify') === 'off') localStorage.setItem('notify-muted', '1')
  else if (params.get('notify') === 'on') localStorage.removeItem('notify-muted')

  if (isMuted()) return

  if (!sessionStorage.getItem(START_KEY)) {
    sessionStorage.setItem(START_KEY, String(Date.now()))
  }

  if (!sessionStorage.getItem(SESSION_KEY)) {
    sessionStorage.setItem(SESSION_KEY, '1')
    const url = `${PING_URL}?event=start&device=${deviceLabel()}`
    fetch(url, { mode: 'no-cors' }).catch(() => {})
  }

  let sent = false
  const sendSummary = () => {
    if (sent || isMuted()) return
    sent = true
    const start = Number(sessionStorage.getItem(START_KEY) || Date.now())
    const duration = Math.round((Date.now() - start) / 1000)
    const views = getViews()
    const summaryParams = new URLSearchParams({
      event: 'summary',
      device: deviceLabel(),
      duration: String(duration),
      tabs: views.map((v) => v.view).join(','),
    })
    const url = `${PING_URL}?${summaryParams.toString()}`
    fetch(url, { mode: 'no-cors', keepalive: true }).catch(() => {})
  }

  document.addEventListener('visibilitychange', () => {
    if (document.visibilityState === 'hidden') sendSummary()
  })
  window.addEventListener('pagehide', sendSummary)
}
