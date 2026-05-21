import { useState } from 'react'

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    service: 'classic',
    date: '',
    note: ''
  })
  const [submitted, setSubmitted] = useState(false)

  const handleChange = (event) => {
    const { name, value } = event.target
    setFormData((current) => ({ ...current, [name]: value }))
    setSubmitted(false)
  }

  const handleSubmit = (event) => {
    event.preventDefault()
    setSubmitted(true)
    setFormData({
      name: '',
      email: '',
      phone: '',
      service: 'classic',
      date: '',
      note: ''
    })
  }

  return (
    <section className="page contact-page">
      <div className="section-block">
        <p className="eyebrow">Contact & booking</p>
        <h1>Request a nail appointment</h1>
        <p>
          Send a message to Nailes Studio. We will confirm your request and
          help you choose the right service.
        </p>
      </div>
      <div className="contact-grid">
        <form className="contact-form" onSubmit={handleSubmit}>
          <label className="field-label">
            Full name
            <input
              type="text"
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your name"
              required
            />
          </label>
          <label className="field-label">
            Email address
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="hello@example.com"
              required
            />
          </label>
          <label className="field-label">
            Phone number
            <input
              type="tel"
              name="phone"
              value={formData.phone}
              onChange={handleChange}
              placeholder="+123 456 7890"
              required
            />
          </label>
          <label className="field-label">
            Desired service
            <select
              name="service"
              value={formData.service}
              onChange={handleChange}
            >
              <option value="classic">Classic Manicure</option>
              <option value="gel">Gel Polish</option>
              <option value="pedicure">Pedicure</option>
              <option value="art">Nail Art</option>
            </select>
          </label>
          <label className="field-label">
            Preferred date
            <input
              type="date"
              name="date"
              value={formData.date}
              onChange={handleChange}
              required
            />
          </label>
          <label className="field-label">
            Notes
            <textarea
              name="note"
              value={formData.note}
              onChange={handleChange}
              placeholder="Tell us about your nail style preference"
            />
          </label>
          <button type="submit" className="button primary-button">
            Send request
          </button>
          {submitted && (
            <p className="success-message">
              Thanks! Your appointment request has been received.
            </p>
          )}
        </form>
        <div className="contact-info">
          <div className="info-card">
            <h2>Studio contact</h2>
            <p>Phone: +1 (555) 123-4567</p>
            <p>Email: hello@nailesstudio.com</p>
          </div>
          <div className="info-card">
            <h2>Location</h2>
            <p>123 Beauty Lane</p>
            <p>Salon City, CA 90210</p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
