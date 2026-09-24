import Container from '../Container'
import GlassPanel from '../GlassPanel/GlassPanel'
import SectionHeading from '../SectionHeading/SectionHeading'
import { MailIcon } from '../decor/Icons'
import { useTab } from '../../context/TabContext'

const SHORTCOMINGS = [
  'People have limited control over who uses their address data and how it is used.',
  'Organizations lack a reliable way to verify the current relationship between a subject and a declared address.',
  'Existing systems do not monitor this relationship or notify organizations in real time when it breaks.',
]

export default function Problem() {
  const { setActiveTab } = useTab()

  return (
    <section id="problem" className="relative pt-[4.8rem] pb-24 sm:pt-[6.4rem] sm:pb-32">
      <Container className="mx-auto max-w-6xl 2xl:max-w-7xl">
      <GlassPanel>
        <SectionHeading
          icon={MailIcon}
          label="Problems We Solve"
          title="A Critical Gap in Address Trust"
        />

        <div className="reveal mt-10 flex flex-col gap-5 text-lg leading-relaxed text-ink">
          <p>
            Physical and mailing addresses have become an important part of
            identification and interaction between individuals, businesses,
            and government organizations.
          </p>

          <p>
            Bank cards, checks, court documents, insurance notices, bills,
            fines, and other important correspondence are routinely sent to
            physical and mailing addresses. At the same time, organizations
            that use this data have limited ability to verify whether the
            relationship between a subject and a declared address remains
            valid.
          </p>

          <p>
            News reports regularly cover incidents involving mail theft,
            fraud, personal data breaches, and unauthorized address use.
            Collectively, these problems create significant financial and
            operational losses for government entities, financial
            institutions, insurance companies, businesses, and individuals.
            Examples and supporting sources are available in{' '}
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
            We believe these problems stem from three systemic shortcomings:
          </p>
        </div>

        <ul className="reveal mt-6 flex flex-col gap-4 border-l border-line pl-6">
          {SHORTCOMINGS.map((item) => (
            <li
              key={item}
              className="font-extrabold text-lg leading-relaxed text-ink"
            >
              {item}
            </li>
          ))}
        </ul>

        <div className="reveal mt-10 flex flex-col gap-5 text-lg leading-relaxed text-ink">
          <p>
            As a result, outdated or unreliable address relationships can
            lead to fraud, unauthorized address use, database errors,
            misdirected correspondence, personal data breaches, and
            additional operational costs.
          </p>

          <p>
            A simple example: a person moves or otherwise loses access to an
            address, but banks, courts, insurance companies, and other
            organizations may continue to treat that address as current and
            send confidential and sensitive correspondence there.
          </p>

          <p>
            If that correspondence reaches the wrong person, it may lead to
            the theft or misuse of money, checks, personal information, or
            identity data. And this is only one of many possible scenarios.
          </p>

          <p className="font-extrabold text-ink">
            Key2Address is designed to address this gap by verifying address
            relationships, continuously monitoring their status, and
            detecting when they break without relying on actions by the
            declaring party or third-party databases.
          </p>
        </div>
      </GlassPanel>
      </Container>
    </section>
  )
}
