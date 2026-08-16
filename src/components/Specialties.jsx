import { siteInfo } from '../data/siteData'
import { specialtyImages } from '../data/imageData'
import Photo from './Photo'
import Reveal from './Reveal'
import './Specialties.css'

const CARDS = [
  {
    key: 'matcha',
    label: 'Matcha',
    title: 'OG Matcha, ceremonial grade',
    text: 'A rotating pop-up menu of matcha drinks prepared with Japanese ceremonial-grade matcha — from a classic OG latte to seasonal flavours.',
  },
  {
    key: 'desserts',
    label: 'Desserts',
    title: 'Pastry case, made fresh',
    text: 'San Sebastian cheesecakes, kunafa cookies, brookies and pistachio pastries, finished and displayed fresh in the in-house dessert counter.',
  },
  {
    key: 'coffee',
    label: 'Coffee',
    title: 'Specialty coffee',
    text: 'A specialty coffee program on the printed menu, served alongside the dessert case for guests settling in with a laptop or a book.',
  },
]

export default function Specialties() {
  return (
    <section className="section specialties">
      <div className="container">
        <div className="section-head-row">
          <div>
            <span className="eyebrow">Specialties</span>
            <h2 className="section-heading">What guests come back for</h2>
          </div>
        </div>

        <div className="specialties__grid">
          {CARDS.map(({ key, label, title, text }, i) => {
            const img = specialtyImages[key]
            return (
              <Reveal className="specialties__card img-zoom" key={key} delay={i * 90}>
                <Photo src={img.url} alt={img.alt} className="img-cover" />
                <span className="specialties__overlay" />
                <span className="specialties__label">{label}</span>
                <div className="specialties__copy">
                  <h3 className="specialties__title">{title}</h3>
                  <p className="specialties__text">{text}</p>
                </div>
              </Reveal>
            )
          })}
        </div>

        <div className="specialties__highlights">
          <span className="specialties__highlights-label">As noted by guests on Google</span>
          <ul className="specialties__highlights-list">
            {siteInfo.highlights.map((h) => (
              <li key={h}>{h}</li>
            ))}
          </ul>
        </div>
      </div>
    </section>
  )
}

