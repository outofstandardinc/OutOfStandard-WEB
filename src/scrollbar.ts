// Auto-hiding scrollbar: reveal the thumb while the user is scrolling, then
// fade it back out shortly after scrolling stops. Hovering the scrollbar
// itself keeps it visible via the `:hover` rule in index.css.
const root = document.documentElement
let hideTimer: number | undefined

function onScroll() {
  root.classList.add('is-scrolling')
  window.clearTimeout(hideTimer)
  hideTimer = window.setTimeout(() => {
    root.classList.remove('is-scrolling')
  }, 700)
}

window.addEventListener('scroll', onScroll, { passive: true })
