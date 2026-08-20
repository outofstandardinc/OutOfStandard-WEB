import { useEffect } from 'react'

// Fades/lifts `.reveal` elements into place the first time they enter the
// viewport. Re-runs on every tab change since inactive panels stay mounted
// with `display: none` (see App.tsx) and only gain layout — and therefore
// only become observable — once their tab is shown.
export function useRevealAnimations(dependency: unknown) {
  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            entry.target.classList.add('is-visible')
            observer.unobserve(entry.target)
          }
        }
      },
      { threshold: 0.1, rootMargin: '0px 0px -8% 0px' },
    )

    const elements = document.querySelectorAll('.reveal:not(.is-visible)')
    elements.forEach((el) => observer.observe(el))

    // Safety net: guarantee content isn't left permanently invisible if the
    // observer never fires for some reason (e.g. unsupported environment).
    const fallback = window.setTimeout(() => {
      elements.forEach((el) => el.classList.add('is-visible'))
    }, 1800)

    return () => {
      observer.disconnect()
      window.clearTimeout(fallback)
    }
  }, [dependency])
}
