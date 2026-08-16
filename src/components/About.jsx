import { siteInfo } from '../data/siteData'
import { images } from '../data/imageData'
import Photo from './Photo'
import Reveal from './Reveal'
import SprigIcon from './icons/SprigIcon'
import './About.css'

export default function About() {
  return (
    <section id="about" className="section about">
      <div className="container about__grid">
        <Reveal className="about__art">
          <div className="about__frame img-zoom">
            <Photo src={images.cafeInterior.url} alt={images.cafeInterior.alt} className="img-cover" />
          </div>
        </Reveal>

        <Reveal className="about__copy" delay={120}>
          <span className="eyebrow">About Us</span>
          <h2 className="section-heading">A quiet corner of Cantonment, made for slow mornings.</h2>
          <SprigIcon className="divider-sprig about__sprig" />
          <p className="about__text">{siteInfo.description}</p>

          <ul className="about__tags">
            {siteInfo.atmosphere.map((tag) => (
              <li key={tag} className="pill">
                {tag}
              </li>
            ))}
          </ul>

          <div className="about__stats">
            <div>
              <span className="about__stat-value">{siteInfo.rating.value}★</span>
              <span className="about__stat-label">{siteInfo.rating.count} Google reviews</span>
            </div>
            <div>
              <span className="about__stat-value">{siteInfo.priceRange.split('(')[0].trim()}</span>
              <span className="about__stat-label">Typical spend per person</span>
            </div>
          </div>

          <a href="#menu" className="btn btn-outline about__cta">
            See the Full Menu
          </a>
        </Reveal>
      </div>
    </section>
  )
}

