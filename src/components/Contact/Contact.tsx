import { useState } from 'react'
import Container from '../Container'
import GlassPanel from '../GlassPanel/GlassPanel'
import SectionHeading from '../SectionHeading/SectionHeading'
import InfoCard from '../InfoCard/InfoCard'
import { MailIcon, LinkedInIcon, CheckIcon, LayersIcon } from '../decor/Icons'
import { CONTACT_EMAIL, LINKEDIN_URL } from '../../config/siteConfig'

export default function Contact() {
  const [copied, setCopied] = useState(false)

  function handleCopyEmail() {
    navigator.clipboard.writeText(CONTACT_EMAIL)
    setCopied(true)
    setTimeout(() => setCopied(false), 2000)
  }

  return (
    <section id="contact" className="relative py-24 sm:py-32">
      <Container className="mx-auto max-w-6xl 2xl:max-w-7xl">
      <GlassPanel>
        <SectionHeading icon={LayersIcon} label="Company" title="About the Company" />

        <div className="reveal mt-10 flex flex-col gap-5 text-lg leading-relaxed text-ink">
          <p>
            The company is developing a system designed to increase trust in
            physical and mailing address data.
          </p>
          <p>
            Its primary product is designed to verify and continuously
            monitor the relationship between a subject and a declared
            address.
          </p>
          <p>
            The system is being developed for use by individuals, private
            organizations, and government agencies and can integrate into
            existing processes without requiring the replacement of current
            postal, legal, or corporate systems.
          </p>
        </div>
      </GlassPanel>

      <GlassPanel className="mt-8">
        <div className="reveal">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
            Contact
          </p>
          <p className="mt-5 text-lg font-extrabold leading-relaxed text-ink">
            For partnerships, pilot projects, investment opportunities, and
            other inquiries:
          </p>

          <InfoCard accent="bottom" className="mt-8 max-w-xl">
            {(CONTACT_EMAIL || LINKEDIN_URL) && (
              <div className="flex flex-wrap items-center gap-4">
                {CONTACT_EMAIL ? (
                  <button
                    type="button"
                    onClick={handleCopyEmail}
                    className="inline-flex min-w-0 max-w-full items-center gap-2 text-lg font-extrabold text-ink underline-offset-4 transition-colors hover:text-brand hover:underline focus-visible:underline"
                  >
                    <MailIcon className="h-5 w-5 flex-shrink-0 text-brand" strokeWidth={2.2} />
                    <span className="break-all">{CONTACT_EMAIL}</span>
                  </button>
                ) : null}
                {copied ? (
                  <span className="inline-flex items-center gap-1 text-sm font-extrabold text-brand">
                    <CheckIcon className="h-4 w-4" />
                    Copied
                  </span>
                ) : null}
                {LINKEDIN_URL ? (
                  <a
                    href={LINKEDIN_URL}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 rounded-full border border-line bg-surface px-5 py-2.5 text-sm font-semibold text-ink transition-colors hover:border-brand hover:text-brand"
                  >
                    <LinkedInIcon className="h-4 w-4" />
                    LinkedIn
                  </a>
                ) : null}
              </div>
            )}
          </InfoCard>
        </div>
      </GlassPanel>
      </Container>
    </section>
  )
}
