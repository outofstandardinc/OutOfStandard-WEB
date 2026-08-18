import Container from '../Container'
import GlassPanel from '../GlassPanel/GlassPanel'
import { useTab } from '../../context/TabContext'

const SHORTCOMINGS = [
  'People do not have full control over who uses their address data or how it is used.',
  'Organizations do not have a reliable way to verify whether a person or company has a legitimate right to use a particular address.',
  'There is no universal tool that notifies organizations in real time when the connection between an address and a person or company ends.',
]

export default function Problem() {
  const { setActiveTab } = useTab()

  return (
    <section id="problem" className="relative py-24 sm:py-32">
      <Container>
        <GlassPanel>
        <div className="reveal">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-extrabold leading-[1.12] text-brand">
            A Critical Gap in Address Infrastructure
          </h2>

          <div className="mt-7 flex flex-col gap-5 text-lg leading-relaxed text-ink">
            <p>
              The modern address system was originally created for
              delivering correspondence. Today, however, physical and
              mailing addresses have become an essential part of
              identification and interaction between individuals, private
              organizations, and government institutions.
            </p>

            <p>
              Bank cards, checks, court documents, insurance notices, bills,
              fines, and other important original documents are sent to
              physical and mailing addresses. At the same time, the address
              system itself does{' '}
              <strong className="font-extrabold">
                not provide sufficient tools to control and verify
              </strong>{' '}
              who currently has access to a specific address.
            </p>

            <p>
              News reports regularly cover incidents involving mail theft,
              fraud, personal data breaches, and unauthorized address use.
              Collectively, these problems result in{' '}
              <strong className="font-extrabold">
                billions of dollars in financial losses
              </strong>{' '}
              for governments, banks, insurance companies, businesses, and
              individuals. Examples and supporting sources are available in{' '}
              <button
                type="button"
                onClick={() => setActiveTab('sources')}
                className="font-extrabold text-brand underline underline-offset-2 hover:text-brand-dark"
              >
                Industry Evidence
              </button>
              .
            </p>

            <p className="font-extrabold text-ink">
              We believe these problems stem from three systemic
              shortcomings:
            </p>
          </div>

          <ul className="mt-6 flex flex-col gap-4">
            {SHORTCOMINGS.map((item) => (
              <li
                key={item}
                className="flex items-start gap-3 text-lg leading-relaxed text-ink"
              >
                <span
                  aria-hidden="true"
                  className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand"
                />
                {item}
              </li>
            ))}
          </ul>

          <div className="mt-7 flex flex-col gap-5 text-lg leading-relaxed text-ink">
            <p>
              As a result, the system enables{' '}
              <strong className="font-extrabold">
                fraud, unauthorized address use, database errors,
                misdirected correspondence, personal data breaches
              </strong>
              , and significant operational expenses.
            </p>

            <p>
              A simple example: a person moves or loses access to an address
              for another reason, but banks, courts, insurance companies,
              and other important organizations{' '}
              <strong className="font-extrabold">
                may not be aware of the change
              </strong>
              . They continue sending new bank cards, checks, bills, fines,
              court notices, and confidential documents to the former
              address.
            </p>

            <p>
              If this correspondence falls into the wrong hands, it may lead
              to{' '}
              <strong className="font-extrabold">
                the theft of money, checks, personal data, or identity
              </strong>
              . This is only one of many possible scenarios.
            </p>

            <p className="font-extrabold text-ink">
              Our product is designed to address these systemic problems by
              creating a new infrastructure layer for control, verification,
              and trust across physical and mailing addresses.
            </p>
          </div>
        </div>
        </GlassPanel>
      </Container>
    </section>
  )
}
