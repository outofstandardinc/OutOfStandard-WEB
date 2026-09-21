import Container from '../Container'
import GlassPanel from '../GlassPanel/GlassPanel'
import { useTab } from '../../context/TabContext'

export default function Hero() {
  const { setActiveTab } = useTab()

  return (
    <section id="top" className="relative overflow-hidden pt-24 pb-8 sm:pt-32">
      <Container className="relative z-10">
        <GlassPanel className="mx-auto max-w-6xl 2xl:max-w-7xl">
          <h1 className="text-[clamp(2rem,4.4vw,3.4rem)] font-extrabold leading-[1.05] text-brand">
            Trust Layer for Physical and Mailing Address Control
          </h1>

          <span
            aria-hidden="true"
            className="mt-7 block h-[2px] w-14 rounded-full bg-brand"
          />

          <p className="mt-7 text-xl leading-relaxed text-ink">
            A new system for establishing and maintaining{' '}
            <strong className="font-extrabold">
              trusted relationships between subjects and their declared
              addresses
            </strong>
            .
          </p>

          <p className="mt-5 text-lg leading-relaxed text-muted">
            An address remains one of the{' '}
            <strong className="font-extrabold text-ink">fundamental identifiers</strong>{' '}
            used across banking, insurance, government, real estate,
            logistics, commerce, and many other critical processes.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-muted">
            Yet most existing systems still treat address data as static
            information and{' '}
            <strong className="font-extrabold text-ink">
              depend heavily on the declaring party or third-party databases
            </strong>{' '}
            to keep it accurate and current.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-muted">
            Our system verifies the validity of a declared address
            relationship and{' '}
            <strong className="font-extrabold text-ink">
              continuously monitors it in real time — allowing organizations
              to detect when that relationship breaks without relying solely
              on third-party database updates or actions by the declaring
              party.
            </strong>
          </p>

          <p className="mt-5 text-lg leading-relaxed text-muted">
            For organizations, this creates a{' '}
            <strong className="font-extrabold text-ink">
              reliable real-time trust signal.
            </strong>{' '}
            For individuals and businesses, it provides{' '}
            <strong className="font-extrabold text-ink">
              greater control over how their address data is used.
            </strong>
          </p>

          <p className="mt-5 text-lg leading-relaxed text-muted">
            For a detailed analysis of the underlying market problems, see{' '}
            <button
              type="button"
              onClick={() => setActiveTab('problem')}
              className="font-semibold text-brand underline underline-offset-2 hover:text-brand-dark"
            >
              Problems We Solve
            </button>
            .
          </p>
        </GlassPanel>
      </Container>
    </section>
  )
}
