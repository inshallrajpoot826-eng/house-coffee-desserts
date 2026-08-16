import { useState } from 'react'
import { siteInfo } from '../data/siteData'
import { PhoneIcon, PinIcon, ClockIcon, InstagramIcon, FacebookIcon } from './icons/UtilityIcons'
import './Contact.css'

const initialForm = { name: '', email: '', message: '' }

export default function Contact() {
  const [form, setForm] = useState(initialForm)
  const [errors, setErrors] = useState({})
  const [status, setStatus] = useState(null)

  function validate(values) {
    const next = {}
    if (!values.name.trim()) next.name = 'Please enter your name.'
    if (!values.email.trim()) {
      next.email = 'Please enter your email.'
    } else if (!/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(values.email)) {
      next.email = 'Please enter a valid email address.'
    }
    if (!values.message.trim()) next.message = 'Please add a short message.'
    return next
  }

  function handleChange(e) {
    const { name, value } = e.target
    setForm((f) => ({ ...f, [name]: value }))
  }

  function handleSubmit(e) {
    e.preventDefault()
    const validation = validate(form)
    setErrors(validation)
    if (Object.keys(validation).length === 0) {
      // Demo form only — no backend is wired up yet.
      setStatus('success')
      setForm(initialForm)
    } else {
      setStatus(null)
    }
  }

  return (
    <section id="contact" className="section contact">
      <div className="container contact__grid">
        <div className="contact__info">
          <span className="eyebrow">Get In Touch</span>
          <h2 className="section-heading">Say hello, or place an order</h2>
          <p className="section-sub">
            For reservations, orders or questions, reach HOUSE directly using the details below.
          </p>

          <ul className="contact__details">
            <li>
              <PhoneIcon className="contact__icon" />
              <a href={`tel:${siteInfo.phone.replace(/\s+/g, '')}`}>{siteInfo.phoneDisplay}</a>
            </li>
            <li>
              <PinIcon className="contact__icon" />
              <span>{siteInfo.address}</span>
            </li>
            <li>
              <ClockIcon className="contact__icon" />
              <span>{siteInfo.hoursNote}</span>
            </li>
          </ul>

          <div className="contact__social">
            <span className="contact__social-label">Follow HOUSE</span>
            <div className="contact__social-icons">
              {siteInfo.instagram ? (
                <a href={siteInfo.instagram} target="_blank" rel="noopener noreferrer" aria-label="Instagram">
                  <InstagramIcon className="contact__icon" />
                </a>
              ) : (
                <span className="content-needed">Instagram — content needed</span>
              )}
              {siteInfo.facebook ? (
                <a href={siteInfo.facebook} target="_blank" rel="noopener noreferrer" aria-label="Facebook">
                  <FacebookIcon className="contact__icon" />
                </a>
              ) : (
                <span className="content-needed">Facebook — content needed</span>
              )}
            </div>
          </div>
        </div>

        <form className="contact__form" onSubmit={handleSubmit} noValidate>
          <div className="contact__field">
            <label htmlFor="name">Name</label>
            <input
              id="name"
              name="name"
              type="text"
              value={form.name}
              onChange={handleChange}
              aria-invalid={Boolean(errors.name)}
              aria-describedby={errors.name ? 'name-error' : undefined}
            />
            {errors.name && (
              <span className="contact__error" id="name-error">
                {errors.name}
              </span>
            )}
          </div>

          <div className="contact__field">
            <label htmlFor="email">Email</label>
            <input
              id="email"
              name="email"
              type="email"
              value={form.email}
              onChange={handleChange}
              aria-invalid={Boolean(errors.email)}
              aria-describedby={errors.email ? 'email-error' : undefined}
            />
            {errors.email && (
              <span className="contact__error" id="email-error">
                {errors.email}
              </span>
            )}
          </div>

          <div className="contact__field">
            <label htmlFor="message">Message</label>
            <textarea
              id="message"
              name="message"
              rows={4}
              value={form.message}
              onChange={handleChange}
              aria-invalid={Boolean(errors.message)}
              aria-describedby={errors.message ? 'message-error' : undefined}
            />
            {errors.message && (
              <span className="contact__error" id="message-error">
                {errors.message}
              </span>
            )}
          </div>

          <button type="submit" className="btn btn-primary contact__submit">
            Send Message
          </button>

          {status === 'success' && (
            <p className="contact__status" role="status">
              Thanks — this is a concept form UI, so no message was actually sent.
            </p>
          )}
        </form>
      </div>
    </section>
  )
}
