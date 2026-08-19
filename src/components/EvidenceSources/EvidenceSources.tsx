import type { ReactNode } from 'react'
import Container from '../Container'
import GlassPanel from '../GlassPanel/GlassPanel'
import InfoCard from '../InfoCard/InfoCard'
import { ExternalLinkIcon } from '../decor/Icons'

type Citation = {
  source: ReactNode
  logo?: string
  logoLarge?: boolean
  logoSizePx?: number
  docType?: string
  title: ReactNode
  locationLabel: string
  excerptHeading?: string
  leadIn?: string
  boldPhrase?: string
  excerpt: string[]
  url: string
}

type EvidenceEntry = {
  citations: Citation[]
}

const EVIDENCE: EvidenceEntry[] = [
  {
    citations: [
      {
        source: 'Reuters',
        logo: '/logos/reuters.svg',
        logoLarge: true,
        title: 'U.S. Postal Service reports $2.5 billion quarterly loss',
        locationLabel: 'Opening paragraph',
        boldPhrase:
          'WASHINGTON — The U.S. Postal Service reported a $2.5 billion net loss for the fiscal third quarter',
        excerpt: [
          'WASHINGTON — The U.S. Postal Service reported a $2.5 billion net loss for the fiscal third quarter, nearly $600 million less of a loss than the same quarter last year, and urged a series of actions from Congress to address its mounting financial crisis.',
        ],
        url: 'https://www.reuters.com/business/us-postal-service-reports-25-billion-quarterly-loss-2026-08-07/',
      },
    ],
  },
  {
    citations: [
      {
        source: 'Federal Trade Commission',
        logo: '/logos/ftc.svg',
        title:
          'Agencies Issue Final Rules on Identity Theft Red Flags and Notices of Address Discrepancy',
        locationLabel: 'Opening paragraph',
        boldPhrase:
          'The Federal Trade Commission and the federal financial institution regulatory agencies have sent to the Federal Register for publication final rules on identity theft “red flags” and address discrepancies.',
        excerpt: [
          'The Federal Trade Commission and the federal financial institution regulatory agencies have sent to the Federal Register for publication final rules on identity theft “red flags” and address discrepancies.',
        ],
        url: 'https://www.ftc.gov/news-events/news/press-releases/2007/10/agencies-issue-final-rules-identity-theft-red-flags-notices-address-discrepancy',
      },
    ],
  },
  {
    citations: [
      {
        source: 'Verisk',
        logo: '/logos/verisk.svg',
        logoLarge: true,
        title: 'Garaging errors: A significant cause of premium leakage',
        locationLabel: '1st paragraph',
        boldPhrase: '$3 billion in annual premium leakage',
        excerpt: [
          'A recent study found more than 10 percent of auto policies had verifiable garaging address defects, pointing to $3 billion in annual premium leakage related to this issue.',
        ],
        url: 'https://www.verisk.com/blog/garaging-errors-a-significant-cause-of-premium-leakage/',
      },
      {
        source: 'Bank of America',
        logo: '/logos/bankofamerica.svg',
        logoLarge: true,
        docType: 'Security Advisory',
        title: 'Beware of Check Fraud',
        locationLabel: 'Opening section',
        boldPhrase:
          'Scammers often target the mail to steal checks and other personal or financial information',
        excerpt: [
          'Paper checks contain personal information, and whomever gets their hands on the check can see that info. Check fraud occurs when a criminal obtains money illegally using stolen checks or check information. Scammers often target the mail to steal checks and other personal or financial information with the intent to commit fraud and identity theft. They may even alter a check payee, dollar amount or the forge endorsement. Don’t let this happen to you.',
        ],
        url: 'https://web.bankofamerica.com/en/security/library/beware-of-check-fraud',
      },
    ],
  },
  {
    citations: [
      {
        source: "U.S. Attorney's Office, Northern District of Ohio",
        logo: '/logos/doj.png',
        logoSizePx: 160,
        title: (
          <>
            Customer Service Rep Charged with Stealing Over $1.1 Million from "
            <span style={{ color: '#cf2a36' }}>US</span>{' '}
            <span style={{ color: '#001e79' }}>Bank</span>" Customers
          </>
        ),
        locationLabel: '3rd paragraph',
        boldPhrase:
          'changing an account holder’s original mailing address for debit cards issued by U.S. Bank',
        excerpt: [
          'Court documents state that during this timeframe, Miller allegedly devised a scheme to obtain funds from U.S. Bank customers by changing an account holder’s original mailing address for debit cards issued by U.S. Bank, causing debit cards to be mailed to a residential address in Akron owned by the defendant.',
        ],
        url: 'https://www.justice.gov/usao-ndoh/pr/customer-service-rep-charged-stealing-over-11-million-bank-customers',
      },
    ],
  },
  {
    citations: [
      {
        source: 'New York State Department of Financial Services',
        logo: '/logos/nydfs.png',
        title:
          'CPFED Annual Report for 2025',
        locationLabel: 'Page 36, Summary of Data Reported',
        boldPhrase: 'The total amount of reported premium lost in 2025',
        excerpt: [
          'The total amount of reported premium lost in 2025 as a result of New York insureds who misrepresented the principal place where their vehicles were garaged and/or driven was $50M.',
        ],
        url: 'https://www.dfs.ny.gov/system/files/documents/2026/04/Consumer-Protection-and-Financial-Fraud-Enforcement-Annual-Report-for-2025.pdf',
      },
    ],
  },
  {
    citations: [
      {
        source: 'Federal Bureau of Investigation (FBI)',
        logo: '/logos/fbi.svg',
        docType: 'Public Service Announcement',
        title: 'Mail Theft-Related Check Fraud is on the Rise',
        locationLabel: 'Opening paragraph',
        leadIn:
          'The FBI and USPIS are warning that check fraud is on the rise, with a significant volume enabled through mail theft.',
        excerpt: [
          ' Suspicious Activity Reports related to check fraud have nearly doubled from 2021 to 2023. Fraudsters take advantage of regulations requiring financial institutions to make check funds available within specified timeframes, which is often too short a window for the consumer or financial institutions to identify and stop the fraud. As a result, the compromised checks clear, and the funds are withdrawn by the criminal participants before the fraud is detected.',
        ],
        url: 'https://www.fbi.gov/investigate/cyber/alerts/2025/mail-theft-related-check-fraud-is-on-the-rise',
      },
      {
        source: 'Federal Reserve Bank of Boston',
        logo: '/logos/bostonfed.svg',
        logoLarge: true,
        docType: 'Article',
        title: 'Why is Check Fraud Suddenly Rampant?',
        locationLabel: 'Opening section',
        boldPhrase:
          'Individuals and organized criminal operations are swiping checks from residential mailboxes',
        excerpt: [
          'Individuals and organized criminal operations are swiping checks from residential mailboxes or the iconic blue drop-off boxes. Then, they’re removing the ink and selling the newly blank check or writing in whatever they want. They’re also picking off checks paying government assistance, Social Security, or unemployment benefits.',
        ],
        url: 'https://www.bostonfed.org/news-and-events/news/2023/08/check-fraud-rampant-mike-timoney-column-fraud-awareness-key-to-slowing-surge.aspx',
      },
    ],
  },
  {
    citations: [
      {
        source: 'U.S. Postal Service Office of Inspector General',
        logo: '/logos/uspsoig.svg',
        title: 'Postal Automated Redirection System',
        locationLabel: 'Page 3',
        excerptHeading: 'What We Found',
        boldPhrase:
          'Finally, the Postal Service’s publicly available data for PARS mail was based on outdated information and was not reliable.',
        excerpt: [
          'The Postal Service PARS mail does not have a service standard, which reduces the accountability and visibility for processing and delivering this mail to customers. Additionally, in FYs 2023 and 2024, delivery units improperly returned large volumes of undeliverable Marketing Mail (over 178 million), which should have been disposed of at the delivery unit, back to processing plants. They also improperly returned mail without a valid COA (over 449 million) back to processing plants – and since no updated address was identified when the mailpiece was run through the PARS sorting equipment, it was cycled back to the same delivery unit. These actions cost the Postal Service about $17.2 million and $95.5 million, respectively. Without further improvements to processes, we forecast an additional $124.5 million will be incurred in FYs 2025 and 2026. Finally, the Postal Service’s publicly available data for PARS mail was based on outdated information and was not reliable.',
        ],
        url: 'https://www.uspsoig.gov/sites/default/files/reports/2025-04/25-029-r25.pdf',
      },
    ],
  },
  {
    citations: [
      {
        source:
          'U.S. Department of the Treasury, Financial Crimes Enforcement Network (FinCEN)',
        logo: '/logos/fincen.svg',
        title:
          'Mail Theft-Related Check Fraud: Threat Pattern & Trend Information',
        locationLabel: 'Page 2',
        excerptHeading: 'Executive Summary',
        boldPhrase:
          'Mail theft-related check fraud losses can affect personal savings, checking accounts, business accounts, brokerage accounts and retirement savings, as well as negatively impact financial institutions that typically cover check fraud losses.',
        excerpt: [
          'This Financial Trend Analysis analyzes threat pattern and trend information on mail theft-related check fraud incidents, based on BSA data filed with FinCEN between 27 February and 31 August 2023 (the review period). During the review period, FinCEN received 15,417 BSA reports related to mail theft-related check fraud associated with more than $688 million in transactions, which may include both actual and attempted transactions. Mail theft-related check fraud losses can affect personal savings, checking accounts, business accounts, brokerage accounts and retirement savings, as well as negatively impact financial institutions that typically cover check fraud losses.',
        ],
        url: 'https://www.fincen.gov/system/files/shared/FTA-Check-Fraud-FINAL508.pdf',
      },
    ],
  },
  {
    citations: [
      {
        source: 'U.S. Postal Service Office of Inspector General',
        logo: '/logos/uspsoig.svg',
        title: 'The Postal Service’s Secure Destruction Program',
        locationLabel: 'Page 3',
        excerptHeading: 'Objective',
        boldPhrase:
          'This mail could not be delivered for reasons including illegible addresses, individuals or businesses which have moved, or unknown addressees.',
        excerpt: [
          'Our objective was to assess the effectiveness of the U.S Postal Service’s Secure Destruction program.',
          'The Secure Destruction program is one of the Postal Service’s key environmental sustainability initiatives. The Postal Service developed the program with commercial mailers (mailers) in 2014 to facilitate more efficient, secure, and environmentally responsible handling of undeliverable as addressed (UAA) mail. This mail could not be delivered for reasons including illegible addresses, individuals or businesses which have moved, or unknown addressees.',
          'The Postal Service reported nearly 5.3 billion pieces of UAA mail in fiscal year (FY) 2020. When UAA mail is identified, it is either forwarded, returned to sender, or treated as waste depending on the mail class and service specifications. Handling this mail cost the Postal Service over $1.3 billion in FY 2020.',
        ],
        url: 'https://www.uspsoig.gov/sites/default/files/reports/2023-01/21-025-R21.pdf',
      },
    ],
  },
]

function CitationBlock({ citation }: { citation: Citation }) {
  return (
    <div className="relative isolate overflow-hidden">
      {citation.logo && (
        <div className="pointer-events-none absolute inset-0 z-0 flex items-center justify-center">
          <img
            src={citation.logo}
            alt=""
            aria-hidden="true"
            style={
              citation.logoSizePx
                ? {
                    height: citation.logoSizePx,
                    width: citation.logoSizePx,
                    maxWidth: 'none',
                    flexShrink: 0,
                  }
                : { flexShrink: 0 }
            }
            className={`select-none object-contain opacity-[0.12] transition-opacity duration-200 group-hover:opacity-[0.27] ${citation.logoSizePx ? '' : citation.logoLarge ? 'h-80 w-80' : 'h-40 w-40'}`}
          />
        </div>
      )}
      <ExternalLinkIcon className="absolute right-0 top-0 z-10 h-4 w-4 text-brand/50 transition-colors group-hover:text-brand" />
      <div className="relative z-10 pr-6">
        <p className="inline-block min-w-0 rounded-full bg-accent-light px-3 py-1 text-xs font-black uppercase tracking-wide text-brand shadow-none transition-shadow duration-200 group-hover:shadow-[0_4px_10px_-4px_rgba(47,85,231,0.5)]">
          {citation.source}
          {citation.docType ? ` — ${citation.docType}` : ''}
        </p>
      </div>
      <h3 className="relative z-10 mt-2 text-lg font-extrabold text-ink">
        {citation.title}
      </h3>
      <p className="relative z-10 mt-2 text-sm font-extrabold text-brand">
        {citation.locationLabel}:
      </p>
      <div className="relative z-10 mt-1 flex flex-col gap-2 text-sm leading-relaxed text-ink">
        {citation.excerpt.map((paragraph, index) => {
          const boldPhrase = citation.boldPhrase
          const boldIndex = boldPhrase ? paragraph.indexOf(boldPhrase) : -1
          const isFirst = index === 0
          const isLast = index === citation.excerpt.length - 1

          return (
            <p key={index}>
              {isFirst && '“'}
              {isFirst && citation.excerptHeading && (
                <strong className="font-extrabold">
                  {citation.excerptHeading}:{' '}
                </strong>
              )}
              {isFirst && citation.leadIn && (
                <strong className="font-extrabold">{citation.leadIn}</strong>
              )}
              {boldIndex === -1 || !boldPhrase ? (
                paragraph
              ) : (
                <>
                  {paragraph.slice(0, boldIndex)}
                  <strong className="font-extrabold">{boldPhrase}</strong>
                  {paragraph.slice(boldIndex + boldPhrase.length)}
                </>
              )}
              {isLast && '”'}
            </p>
          )
        })}
      </div>
    </div>
  )
}

const ALL_CITATIONS = EVIDENCE.flatMap((entry) => entry.citations)

function findCitation(urlPart: string): Citation {
  const found = ALL_CITATIONS.find((c) => c.url.includes(urlPart))
  if (!found) throw new Error(`Citation not found for url part: ${urlPart}`)
  return found
}

const COLUMNS: Citation[][] = [
  [
    findCitation('reuters.com'),
    findCitation('fbi.gov'),
    findCitation('ftc.gov'),
    findCitation('25-029-r25.pdf'),
    findCitation('21-025-R21.pdf'),
  ],
  [
    findCitation('justice.gov'),
    findCitation('bankofamerica.com'),
    findCitation('bostonfed.org'),
    findCitation('fincen.gov'),
  ],
  [
    findCitation('verisk.com'),
    findCitation('dfs.ny.gov'),
  ],
]

export default function EvidenceSources() {
  return (
    <section id="sources" className="relative py-24 sm:py-32">
      <Container>
        <GlassPanel shadow={false}>
        <div className="reveal">
          <h2 className="text-[clamp(1.9rem,3.6vw,2.75rem)] font-extrabold leading-[1.12] text-brand">
            Industry Evidence
          </h2>
          <p className="mt-7 text-lg font-extrabold leading-relaxed text-ink">
            The problems described throughout this site are documented by
            independent government and industry sources. Below, we highlight
            official reports and public statements that demonstrate their
            scale and support the need for the infrastructure we are
            building.
          </p>
        </div>
        </GlassPanel>

        <div className="mt-10 flex flex-col gap-6 lg:flex-row">
          {COLUMNS.map((column, columnIndex) => (
            <div key={columnIndex} className="flex flex-1 flex-col gap-6">
              {column.map((citation) => (
                <a
                  key={citation.url}
                  href={citation.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="group block"
                >
                  <InfoCard
                    accent="top"
                    accentWeight="medium"
                    accentHoverWeight="default"
                    padding="p-5"
                    className="transition-transform duration-200 group-hover:-translate-y-1 group-hover:shadow-[0_22px_44px_-24px_rgba(8,42,67,0.45)]"
                  >
                    <CitationBlock citation={citation} />
                  </InfoCard>
                </a>
              ))}
            </div>
          ))}
        </div>
      </Container>
    </section>
  )
}
