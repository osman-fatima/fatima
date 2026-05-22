import { useMemo, useState } from 'react'

const serviceOptions = [
  { key: 'classic', label: 'Classic Manicure', price: 5 },
  { key: 'pose vernis', label: 'Pose Vernis', price: 5 },
  { key: 'gel color', label: 'Gel Polish', price: 6 },
  { key: 'pedicure', label: 'Pedicure', price: 7 },
]

const extras = [
  { key: 'spa', label: 'Spa hand treatment', price: 12 },
  { key: 'spa foot', label: 'Spa Foot Treatment', price: 15 },
  { key: 'french', label: 'French tips', price: 2 },
]

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    date: '',
    note: '',
  })
  const [selectedServices, setSelectedServices] = useState([
    serviceOptions[0].key,
  ])
  const [selectedExtras, setSelectedExtras] = useState([])
  const [submitted, setSubmitted] = useState(false)

  const total = useMemo(() => {
    const serviceTotal = selectedServices.reduce((sum, serviceKey) => {
      const item = serviceOptions.find((option) => option.key === serviceKey)
      return sum + (item?.price || 0)
    }, 0)

    const extraTotal = selectedExtras.reduce((sum, extraKey) => {
      const item = extras.find((extra) => extra.key === extraKey)
      return sum + (item?.price || 0)
    }, 0)

    return serviceTotal + extraTotal
  }, [selectedServices, selectedExtras])

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
      date: '',
      note: '',
    })
  }

  return (
    <section className="page contact-page">
      <div className="section-block">
        <p className="eyebrow">Book Now</p>
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
              placeholder="+961 81 279 761"
              required
            />
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
            <div className="success-message">
              <p>Thanks! Your appointment request has been received.</p>
              <p>
                Selected services: {selectedServices.map((serviceKey) => {
                  const item = serviceOptions.find((option) => option.key === serviceKey)
                  return item?.label
                }).join(', ') || 'None'}
              </p>
              {selectedExtras.length > 0 && (
                <p>
                  Extras: {selectedExtras.map((extraKey) => {
                    const item = extras.find((extra) => extra.key === extraKey)
                    return item?.label
                  }).join(', ')}
                </p>
              )}
              <p>Total price: ${total}.00</p>
            </div>
          )}
        </form>
        <div>
          <div className="price-panel">
            <div className="extras-block">
              <p className="field-label">Choose your service(s)</p>
              {serviceOptions.map((option) => (
                <label key={option.key} className="checkbox-row">
                  <input
                    type="checkbox"
                    checked={selectedServices.includes(option.key)}
                    onChange={(event) => {
                      const isChecked = event.target.checked
                      setSelectedServices((current) =>
                        isChecked
                          ? [...current, option.key]
                          : current.filter((item) => item !== option.key)
                      )
                    }}
                  />
                  <span>{option.label}</span>
                  <span className="extra-price">+ ${option.price}</span>
                </label>
              ))}
            </div>
            <div className="extras-block">
              <p className="field-label">Add extra treatment</p>
              {extras.map((extra) => (
                <label key={extra.key} className="checkbox-row">
                  <input
                    type="checkbox"
                    checked={selectedExtras.includes(extra.key)}
                    onChange={(event) => {
                      const isChecked = event.target.checked
                      setSelectedExtras((current) =>
                        isChecked
                          ? [...current, extra.key]
                          : current.filter((item) => item !== extra.key)
                      )
                    }}
                  />
                  <span>{extra.label}</span>
                  <span className="extra-price">+ ${extra.price}</span>
                </label>
              ))}
            </div>
          </div>
          <div className="price-summary">
            <h2>Booking summary</h2>
            <div className="booking-items">
              {selectedServices.map((serviceKey) => {
                const item = serviceOptions.find((option) => option.key === serviceKey)
                return (
                  <div key={serviceKey} className="booking-item">
                    <span>{item?.label}</span>
                    <span>${item?.price}.00</span>
                  </div>
                )
              })}
              {selectedExtras.map((extraKey) => {
                const item = extras.find((extra) => extra.key === extraKey)
                return (
                  <div key={extraKey} className="booking-item">
                    <span>{item?.label}</span>
                    <span>${item?.price}.00</span>
                  </div>
                )
              })}
            </div>
            <p className="price-value">Total: ${total}.00</p>
            <p>
              The selected services and extras will be included in your booking.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default Contact
