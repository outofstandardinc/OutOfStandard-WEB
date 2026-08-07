import Container from '../Container'
import GlassPanel from '../GlassPanel/GlassPanel'
import InfoCard from '../InfoCard/InfoCard'

const ORG_IMPACTS = [
  'Organizations will gain a tool for verifying the validity and current status of address data in real time. This will help prevent correspondence, bank cards, checks, and important documents from being sent to outdated or invalid addresses.',
  'Organizations will be able to reduce financial and operational losses associated with fraud, false address information, delivery errors, and ineffective marketing campaigns.',
]

const INDIVIDUAL_IMPACTS = [
  'Individuals and companies will receive greater protection against the theft of personal data and financial documents caused by delivery errors or correspondence being sent to an address they can no longer access.',
  'Individuals and companies will be able to prevent the unauthorized use of their addresses across banking, government, insurance, and other systems.',
]

function BulletCard({ items }: { items: string[] }) {
  return (
    <InfoCard accent="top">
      <ul className="flex flex-col gap-4">
        {items.map((item) => (
          <li
            key={item}
            className="flex items-start gap-3 text-base leading-relaxed text-ink"
          >
            <span
              aria-hidden="true"
              className="mt-2.5 h-1.5 w-1.5 flex-shrink-0 rounded-full bg-brand"
            />
            {item}
          </li>
        ))}
      </ul>
    </InfoCard>
  )
}

export default function Impact() {
  return (
    <section id="impact" className="relative py-24 sm:py-32">
      <Container>
        <GlassPanel>
        <div className="reveal">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-extrabold leading-[1.12] text-brand">
            What Our Infrastructure Enables
          </h2>
        </div>

        <div className="mt-10 flex flex-col gap-10">
          <div>
            <p className="text-lg font-extrabold leading-relaxed text-ink">
              Organizations will receive a reliable trust signal confirming
              whether an individual or company is currently connected to a
              claimed address. They will also be able to receive real-time
              notifications when that connection ends.
            </p>
            <div className="mt-6">
              <BulletCard items={ORG_IMPACTS} />
            </div>
          </div>

          <div>
            <p className="text-lg font-extrabold leading-relaxed text-ink">
              Individuals and companies will gain control over who can use
              their address data and will be able to prevent its
              unauthorized use.
            </p>
            <div className="mt-6">
              <BulletCard items={INDIVIDUAL_IMPACTS} />
            </div>
          </div>
        </div>
        </GlassPanel>

        <GlassPanel className="mt-8">
        <div className="reveal">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-extrabold leading-[1.12] text-brand">
            Long-Term Vision
          </h2>
          <div className="mt-7 flex flex-col gap-5 text-lg font-extrabold leading-relaxed text-ink">
            <p>
              Our long-term goal is to strengthen national security and
              become the federal standard for the verification, accuracy,
              and security of address data in the United States.
            </p>
            <p>
              We aim to build trusted infrastructure that individuals,
              private organizations, and government institutions can use
              as a single reliable source of trust for address data.
            </p>
          </div>
        </div>
        </GlassPanel>
      </Container>
    </section>
  )
}
