import { siteInfo } from '../data/siteData'
import { images } from '../data/imageData'
import Photo from './Photo'
import SprigIcon from './icons/SprigIcon'
import './Hero.css'

export default function Hero() {
  return (
    <section id="home" className="hero">
      <div className="container hero__inner">
        <div className="hero__copy">
          <span className="eyebrow">{siteInfo.branch}</span>
          <h1 className="hero__title">
            HOUSE
            <span className="hero__title-sub">Coffee &amp; Desserts</span>
          </h1>
          <p className="hero__tagline">{siteInfo.tagline}</p>
          <p className="hero__desc">{siteInfo.description}</p>

          <div className="hero__cta-row">
            <a href="#menu" className="btn btn-primary">
              Explore Menu
            </a>
            <a href="#location" className="btn btn-outline">
              Visit Us
            </a>
          </div>

          <div className="hero__meta">
            <SprigIcon className="divider-sprig" />
            <span>
              {siteInfo.rating.value}★ &middot; {siteInfo.rating.count} Google reviews
            </span>
          </div>
        </div>

        <div className="hero__art">
          <div className="hero__art-accent" aria-hidden="true" />
          <div className="hero__art-frame">
            <Photo src={images.heroCoffeeCake.url} alt={images.heroCoffeeCake.alt} className="img-cover hero__art-photo" loading="eager" />
          </div>
          <div className="hero__art-badge">
            <span className="hero__art-badge-value">{siteInfo.rating.value}★</span>
            <span className="hero__art-badge-label">{siteInfo.rating.count} reviews</span>
          </div>
        </div>
      </div>

      <a href="#about" className="hero__scroll" aria-label="Scroll to About section">
        <span className="hero__scroll-line" />
        Scroll
      </a>
    </section>
  )
}

