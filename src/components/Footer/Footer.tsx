import Container from '../Container'
import { COMPANY_NAME, COPYRIGHT_YEAR } from '../../config/siteConfig'

export default function Footer() {
  return (
    <footer className="fixed inset-x-0 bottom-0 z-40 bg-surface py-3">
      <Container>
        <p className="text-center text-sm leading-relaxed text-muted">
          © {COPYRIGHT_YEAR} {COMPANY_NAME} All rights reserved. | Patent
          Pending
        </p>
      </Container>
    </footer>
  )
}
