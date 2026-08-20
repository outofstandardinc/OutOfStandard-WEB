import Container from '../Container'
import GlassPanel from '../GlassPanel/GlassPanel'
import SectionHeading from '../SectionHeading/SectionHeading'
import { UserCheckIcon } from '../decor/Icons'

const ORG_IMPACTS = [
  'Organizations will gain a tool for verifying the validity and current status of address data in real time. This will help prevent correspondence, bank cards, checks, and important documents from being sent to outdated or invalid addresses.',
  'Organizations will be able to reduce financial and operational losses associated with fraud, false address information, delivery errors, and ineffective marketing campaigns.',
]

const INDIVIDUAL_IMPACTS = [
  'Individuals and companies will receive greater protection against the theft of personal data and financial documents caused by delivery errors or correspondence being sent to an address they can no longer access.',
  'Individuals and companies will be able to prevent the unauthorized use of their addresses across banking, government, insurance, and other systems.',
]

function BulletList({ items }: { items: string[] }) {
  return (
    <ul className="mt-6 flex flex-col gap-4 border-l border-line pl-6">
      {items.map((item) => (
        <li key={item} className="text-base leading-relaxed text-ink">
          {item}
        </li>
      ))}
    </ul>
  )
}

export default function Impact() {
  return (
    <section id="impact" className="relative py-24 sm:py-32">
      <Container className="max-w-6xl">
      <GlassPanel>
        <SectionHeading
          icon={UserCheckIcon}
          label="Impact"
          title="What Our Infrastructure Enables"
        />

        <div className="mt-10 flex flex-col gap-10">
          <div className="reveal">
            <p className="text-lg font-extrabold leading-relaxed text-ink">
              Organizations will receive a reliable trust signal confirming
              whether an individual or company is currently connected to a
              claimed address. They will also be able to receive real-time
              notifications when that connection ends.
            </p>
            <BulletList items={ORG_IMPACTS} />
          </div>

          <div className="reveal">
            <p className="text-lg font-extrabold leading-relaxed text-ink">
              Individuals and companies will gain control over who can use
              their address data and will be able to prevent its
              unauthorized use.
            </p>
            <BulletList items={INDIVIDUAL_IMPACTS} />
          </div>
        </div>
      </GlassPanel>

      <GlassPanel className="mt-8">
        <div className="reveal">
          <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
            Long-Term Vision
          </p>
          <div className="mt-5 flex flex-col gap-5 text-lg font-extrabold leading-relaxed text-ink">
            <p>
              Our long-term goal is to strengthen national security and
              become the federal standard for the verification, accuracy,
              and security of address data in the United States.
            </p>
            <p>
              We aim to build trusted infrastructure that individuals,
              private organizations, and government institutions can use as
              a single reliable source of trust for address data.
            </p>
          </div>
        </div>
      </GlassPanel>
      </Container>
    </section>
  )
}
