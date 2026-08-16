import { useEffect, useState } from 'react'
import { siteInfo } from '../data/siteData'
import { MenuIcon, CloseIcon } from './icons/UtilityIcons'
import './Navbar.css'

const LINKS = [
  { href: '#home', label: 'Home' },
  { href: '#menu', label: 'Menu' },
  { href: '#about', label: 'About' },
  { href: '#gallery', label: 'Gallery' },
  { href: '#contact', label: 'Contact' },
]

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false)
  const [open, setOpen] = useState(false)

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24)
    onScroll()
    window.addEventListener('scroll', onScroll, { passive: true })
    return () => window.removeEventListener('scroll', onScroll)
  }, [])

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : ''
    return () => {
      document.body.style.overflow = ''
    }
  }, [open])

  return (
    <header className={`navbar ${scrolled ? 'navbar--scrolled' : ''}`}>
      <div className="container navbar__inner">
        <a href="#home" className="navbar__logo" onClick={() => setOpen(false)}>
          <span className="navbar__logo-main">{siteInfo.shortName}</span>
          <span className="navbar__logo-sub">Coffee &amp; Desserts</span>
        </a>

        <nav className="navbar__links" aria-label="Primary">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href}>
              {link.label}
            </a>
          ))}
        </nav>

        <div className="navbar__actions">
          <a href="#menu" className="btn btn-primary navbar__cta">
            View Menu
          </a>
          <button
            className="navbar__toggle"
            aria-label={open ? 'Close menu' : 'Open menu'}
            aria-expanded={open}
            aria-controls="mobile-menu"
            onClick={() => setOpen((v) => !v)}
          >
            {open ? <CloseIcon className="navbar__toggle-icon" /> : <MenuIcon className="navbar__toggle-icon" />}
          </button>
        </div>
      </div>

      <div id="mobile-menu" className={`navbar__mobile ${open ? 'navbar__mobile--open' : ''}`}>
        <nav aria-label="Mobile">
          {LINKS.map((link) => (
            <a key={link.href} href={link.href} onClick={() => setOpen(false)}>
              {link.label}
            </a>
          ))}
          <a href="#menu" className="btn btn-primary" onClick={() => setOpen(false)}>
            View Menu
          </a>
        </nav>
      </div>
    </header>
  )
}
