import Container from '../Container'
import GlassPanel from '../GlassPanel/GlassPanel'
import SectionHeading from '../SectionHeading/SectionHeading'
import Key2Address from '../Key2Address/Key2Address'
import { UserCheckIcon } from '../decor/Icons'

const ORG_IMPACTS = [
  'Verification of the current status of an address relationship',
  'Continuous monitoring of its status',
  'Reduced risk of sending cards, checks, documents, and other important correspondence to outdated addresses',
  'Reduced losses associated with fraud, inaccurate address data, and delivery errors',
]

const INDIVIDUAL_IMPACTS = [
  'Ability to prevent unauthorized use of an address',
  'Ability to terminate address use by already connected parties',
  'Reduced risk of confidential correspondence and financial documents being sent to an address they can no longer access',
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
    <section id="impact" className="relative pt-[4.8rem] pb-24 sm:pt-[6.4rem] sm:pb-32">
      <Container className="mx-auto max-w-6xl 2xl:max-w-7xl">
      <GlassPanel>
        <SectionHeading
          icon={UserCheckIcon}
          label="Impact"
          title={
            <>
              What <Key2Address /> Enables
            </>
          }
        />

        <div className="mt-10 flex flex-col gap-10">
          <div className="reveal">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
              For Organizations
            </p>
            <p className="mt-3 text-lg font-extrabold leading-relaxed text-ink">
              Organizations receive a reliable signal indicating whether a
              verified relationship between a subject and a declared address
              remains valid, and can also receive real-time notification
              when that relationship ends.
            </p>
            <BulletList items={ORG_IMPACTS} />
          </div>

          <div className="reveal">
            <p className="text-xs font-bold uppercase tracking-[0.2em] text-muted">
              For Individuals
            </p>
            <p className="mt-3 text-lg font-extrabold leading-relaxed text-ink">
              People gain greater control over how their address data is
              used.
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
              Our long-term goal is to establish Key2Address as a nationally
              recognized standard for managing address relationships, with
              the potential for eventual adoption as a federal standard.
            </p>
            <p>
              Over time, Key2Address can become a trusted layer used by
              financial institutions, insurance companies, government
              agencies, and other organizations that depend on accurate and
              current address data.
            </p>
          </div>
        </div>
      </GlassPanel>
      </Container>
    </section>
  )
}
