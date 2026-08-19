import { useRef, useState } from 'react'
import { menuCategories } from '../data/menuData'
import { menuCategoryImages } from '../data/imageData'
import MenuItem from './MenuItem'
import Photo from './Photo'
import Reveal from './Reveal'
import SprigIcon from './icons/SprigIcon'
import './Menu.css'

const FEATURED_CATEGORY_IDS = ['specialty-coffee', 'desserts', 'og-matcha', 'sandwiches']
const CATEGORY_DISPLAY_LABEL = {
  'specialty-coffee': 'Signature Coffees',
  desserts: 'Artisan Desserts',
  'og-matcha': 'Matcha Selection',
  sandwiches: 'Sandwiches',
}

export default function Menu() {
  const [activeId, setActiveId] = useState(menuCategories[0].id)
  const activeCategory = menuCategories.find((c) => c.id === activeId)
  const sectionRef = useRef(null)

  function selectCategory(id) {
    setActiveId(id)
    sectionRef.current?.scrollIntoView({ behavior: 'smooth', block: 'start' })
  }

  return (
    <section id="menu" className="section menu" ref={sectionRef}>
      <div className="container">
        <div className="section-head-row">
          <div>
            <span className="eyebrow">The Menu</span>
            <h2 className="section-heading">Coffee, matcha &amp; desserts made in-house</h2>
            <p className="section-sub">
              Transcribed from HOUSE&rsquo;s current printed menu. Prices are in Pakistani Rupees (PKR) and subject to
              change in-store.
            </p>
          </div>
          <SprigIcon className="divider-sprig" />
        </div>

        <div className="menu__categories">
          {FEATURED_CATEGORY_IDS.map((id, i) => {
            const cat = menuCategories.find((c) => c.id === id)
            const img = menuCategoryImages[id]
            if (!cat || !img) return null
            return (
              <Reveal key={id} delay={i * 80}>
                <button
                  className={`menu__category-card img-zoom ${activeId === id ? 'menu__category-card--active' : ''}`}
                  onClick={() => selectCategory(id)}
                  aria-pressed={activeId === id}
                >
                  <Photo src={img.url} alt={img.alt} className="img-cover" />
                  <span className="menu__category-overlay" />
                  <span className="menu__category-copy">
                    <span className="menu__category-label">{CATEGORY_DISPLAY_LABEL[id]}</span>
                    {cat.note && <span className="menu__category-note">{cat.note}</span>}
                    <span className="menu__category-cta">View Menu →</span>
                  </span>
                </button>
              </Reveal>
            )
          })}
        </div>

        <div className="menu__tabs" role="tablist" aria-label="Menu categories">
          {menuCategories.map((cat) => (
            <button
              key={cat.id}
              role="tab"
              aria-selected={activeId === cat.id}
              className={`menu__tab ${activeId === cat.id ? 'menu__tab--active' : ''}`}
              onClick={() => setActiveId(cat.id)}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="menu__panel" role="tabpanel">
          {activeCategory.note && <p className="menu__note">{activeCategory.note}</p>}
          <ul className="menu__list">
            {activeCategory.items.map((item) => (
              <MenuItem key={item.name} item={item} />
            ))}
          </ul>
        </div>

        <div className="menu__view-all">
          <a href="#menu" className="btn btn-outline" onClick={() => selectCategory(menuCategories[0].id)}>
            View Full Menu
          </a>
        </div>
      </div>
    </section>
  )
}
