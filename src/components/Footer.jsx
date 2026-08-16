import { siteInfo } from '../data/siteData'
import { InstagramIcon, FacebookIcon } from './icons/UtilityIcons'
import './Footer.css'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Footer() {
  return (
    <footer className="footer">
      <div className="container footer__inner">
        <div className="footer__top">
          <div className="footer__brand">
            <span className="footer__logo">{siteInfo.shortName}</span>
            <span className="footer__logo-sub">Coffee &amp; Desserts</span>
          </div>

          <nav className="footer__links" aria-label="Footer">
            {LINKS.map((l) => (
              <a key={l.href} href={l.href}>
                {l.label}
              </a>
            ))}
          </nav>

          <div className="footer__social">
            {siteInfo.instagram && (
              <a href={siteInfo.instagram} aria-label="Instagram" target="_blank" rel="noopener noreferrer">
                <InstagramIcon className="footer__social-icon" />
              </a>
            )}
            {siteInfo.facebook && (
              <a href={siteInfo.facebook} aria-label="Facebook" target="_blank" rel="noopener noreferrer">
                <FacebookIcon className="footer__social-icon" />
              </a>
            )}
          </div>
        </div>

        <div className="footer__meta">
          <p>{siteInfo.address}</p>
          <p>{siteInfo.phoneDisplay}</p>
        </div>

        <div className="footer__bottom">
          <span>&copy; {new Date().getFullYear()} HOUSE Coffee &amp; Desserts. All rights reserved.</span>
          <span className="footer__disclaimer">{siteInfo.disclaimer}</span>
        </div>
      </div>
    </footer>
  )
}
