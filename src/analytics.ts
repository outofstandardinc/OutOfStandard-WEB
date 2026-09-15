const PING_URL = 'https://muddy-bar-abd3.outofstandardinc.workers.dev/'

function isLocalhost() {
  return ['localhost', '127.0.0.1'].includes(window.location.hostname)
}

function isMuted() {
  return !!localStorage.getItem('notify-muted')
}

function deviceLabel() {
  return /Mobi|Android|iPhone|iPad/i.test(navigator.userAgent) ? 'Mobile' : 'Desktop'
}

export function initNotifyOptOut() {
  const params = new URLSearchParams(window.location.search)
  if (params.get('notify') === 'off') localStorage.setItem('notify-muted', '1')
  else if (params.get('notify') === 'on') localStorage.removeItem('notify-muted')
}

let lastTracked: { label: string; t: number } | null = null

export function trackView(label: string) {
  if (isLocalhost() || isMuted()) return
  const now = Date.now()
  // Absorb a same-tick double-fire (e.g. React re-invoking an effect) without
  // suppressing a genuine later revisit to the same tab.
  if (lastTracked && lastTracked.label === label && now - lastTracked.t < 500) return
  lastTracked = { label, t: now }

  const url = `${PING_URL}?event=tab&device=${deviceLabel()}&tab=${encodeURIComponent(label)}`
  fetch(url, { mode: 'no-cors' }).catch(() => {})
}
