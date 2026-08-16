import { menuCategories } from '../data/menuData'
import { featuredItemImages } from '../data/imageData'
import Photo from './Photo'
import Reveal from './Reveal'
import SprigIcon from './icons/SprigIcon'
import './FeaturedItems.css'

const allItems = menuCategories.flatMap((cat) => cat.items.map((item) => ({ ...item, category: cat.label })))
const featured = Object.keys(featuredItemImages)
  .map((name) => allItems.find((item) => item.name === name))
  .filter(Boolean)

const [spotlight, ...rest] = featured

export default function FeaturedItems() {
  return (
    <section className="section featured">
      <div className="container">
        <div className="section-head-row">
          <div>
            <span className="eyebrow">Guest Favourites</span>
            <h2 className="section-heading">A few of the menu&rsquo;s standout picks</h2>
            <p className="section-sub">
              Pulled straight from the current printed menu &mdash; same names, same prices, styled to show what each
              one looks like on the table.
            </p>
          </div>
          <SprigIcon className="divider-sprig" />
        </div>

        {spotlight && (
          <Reveal className="featured__spotlight">
            <div className="featured__spotlight-media img-zoom">
              <Photo src={featuredItemImages[spotlight.name].url} alt={featuredItemImages[spotlight.name].alt} className="img-cover" />
            </div>
            <div className="featured__spotlight-body">
              <span className="featured__card-category">{spotlight.category}</span>
              <h3 className="featured__spotlight-name">{spotlight.name}</h3>
              {spotlight.desc && <p className="featured__spotlight-desc">{spotlight.desc}</p>}
              <span className="featured__card-price featured__spotlight-price">
                {spotlight.price ? `PKR ${spotlight.price.toLocaleString('en-PK')}` : 'Content needed'}
              </span>
            </div>
          </Reveal>
        )}

        <div className="featured__grid">
          {rest.map((item, i) => {
            const img = featuredItemImages[item.name]
            return (
              <Reveal key={item.name} delay={i * 90} className="featured__card">
                <div className="featured__card-media img-zoom">
                  <Photo src={img.url} alt={img.alt} className="img-cover" />
                </div>
                <div className="featured__card-body">
                  <span className="featured__card-category">{item.category}</span>
                  <h3 className="featured__card-name">{item.name}</h3>
                  {item.desc && <p className="featured__card-desc">{item.desc}</p>}
                  <span className="featured__card-price">
                    {item.price ? `PKR ${item.price.toLocaleString('en-PK')}` : 'Content needed'}
                  </span>
                </div>
              </Reveal>
            )
          })}
        </div>
      </div>
    </section>
  )
}

