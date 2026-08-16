import { galleryImages } from '../data/imageData'
import Photo from './Photo'
import Reveal from './Reveal'
import SprigIcon from './icons/SprigIcon'
import './Gallery.css'

// NOTE: These are royalty-free demo photos (Unsplash License), not real
// photography of HOUSE Coffee & Desserts — the business's own Google-listing
// photos aren't licensed for reuse on a separate demo site. Swap these for
// the client's own interior/drink/dessert photography before this ships.

export default function Gallery() {
  return (
    <section id="gallery" className="section gallery">
      <div className="container">
        <div className="section-head-row">
          <div>
            <span className="eyebrow">Gallery</span>
            <h2 className="section-heading">Inside HOUSE</h2>
            <p className="section-sub">
              Demo gallery using royalty-free photography. Replace with the client&rsquo;s own interior, drink and
              dessert photography before launch.
            </p>
          </div>
          <SprigIcon className="divider-sprig" />
        </div>

        <div className="gallery__grid">
          {galleryImages.map((img, i) => (
            <Reveal key={img.id} delay={(i % 3) * 90} className={`gallery__tile gallery__tile--${img.size} img-zoom`}>
              <Photo src={img.url} alt={img.alt} className="img-cover" />
            </Reveal>
          ))}
        </div>
      </div>
    </section>
  )
}

