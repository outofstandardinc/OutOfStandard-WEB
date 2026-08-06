import Container from '../Container'
import { useTab } from '../../context/TabContext'

export default function Hero() {
  const { setActiveTab } = useTab()

  return (
    <section
      id="top"
      className="relative overflow-hidden pt-32 pb-8"
    >
      <Container className="relative z-10">
        <div className="max-w-3xl">
          <h1 className="text-[clamp(1.575rem,3.45vw,2.7rem)] font-extrabold leading-[1.1] text-brand">
            Infrastructure Layer for Physical and Postal Address Control
          </h1>

          <span
            aria-hidden="true"
            className="mt-7 block h-[2.8px] w-40 rounded-full bg-brand"
          />

          <p className="mt-7 text-lg leading-relaxed text-ink sm:text-xl">
            Patent-pending{' '}
            <strong className="font-extrabold">next-generation infrastructure</strong>{' '}
            designed to redefine{' '}
            <strong className="font-extrabold">control, verification, and trust</strong>{' '}
            in physical and postal addresses.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-muted">
            The physical address is one of the{' '}
            <strong className="font-extrabold text-ink">fundamental identifiers</strong>{' '}
            of modern America. Banking, insurance, real estate, logistics,
            commerce, and government processes all depend on it.
          </p>

          <p className="mt-5 text-lg leading-relaxed text-muted">
            However, the existing address system has failed to keep pace
            with the modern world, creating{' '}
            <strong className="font-extrabold text-ink">costly security problems</strong>
            . For a detailed analysis of these challenges, see{' '}
            <button
              type="button"
              onClick={() => setActiveTab('problem')}
              className="font-semibold text-brand underline underline-offset-2 hover:text-brand-dark"
            >
              Problems We Solve
            </button>
            .
          </p>

          <p className="mt-5 text-lg leading-relaxed text-muted">
            Out Of Standard is building a new infrastructure layer for
            physical and postal addresses that provides organizations with a{' '}
            <strong className="font-extrabold text-ink">reliable trust signal</strong>{' '}
            while giving people{' '}
            <strong className="font-extrabold text-ink">control over their address data</strong>
            .
          </p>
        </div>
      </Container>
    </section>
  )
}
