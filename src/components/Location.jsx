import { siteInfo } from '../data/siteData'
import { PinIcon, PhoneIcon, ClockIcon } from './icons/UtilityIcons'
import Reveal from './Reveal'
import './Location.css'

export default function Location() {
  return (
    <section id="location" className="section location">
      <div className="container location__grid">
        <Reveal className="location__copy">
          <span className="eyebrow">Find Us</span>
          <h2 className="section-heading">Visit HOUSE in Cantonment</h2>

          <ul className="location__list">
            <li>
              <PinIcon className="location__icon" />
              <div>
                <span className="location__label">Address</span>
                <span className="location__value">{siteInfo.address}</span>
              </div>
            </li>
            <li>
              <ClockIcon className="location__icon" />
              <div>
                <span className="location__label">Hours</span>
                <span className="location__value">{siteInfo.hoursNote}</span>
                <span className="content-needed location__flag">{siteInfo.fullHours}</span>
              </div>
            </li>
            <li>
              <PhoneIcon className="location__icon" />
              <div>
                <span className="location__label">Phone</span>
                <a className="location__value location__link" href={`tel:${siteInfo.phone.replace(/\s+/g, '')}`}>
                  {siteInfo.phoneDisplay}
                </a>
              </div>
            </li>
          </ul>

          <a href={siteInfo.mapsUrl} target="_blank" rel="noopener noreferrer" className="btn btn-primary location__maps-btn">
            Get Directions
          </a>
        </Reveal>

        <Reveal className="location__map" delay={120}>
          <iframe
            title="HOUSE Coffee & Desserts location map"
            src={siteInfo.mapsEmbedUrl}
            loading="lazy"
            referrerPolicy="no-referrer-when-downgrade"
            allowFullScreen
          />
        </Reveal>
      </div>
    </section>
  )
}
