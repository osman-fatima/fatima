import { useMemo, useState } from 'react'

const serviceOptions = [
  { key: 'classic', label: 'Classic Manicure', price: 25 },
  { key: 'gel', label: 'Gel Polish', price: 40 },
  { key: 'pedicure', label: 'Pedicure', price: 45 },
  { key: 'art', label: 'Nail Art', price: 55 }
]

const extras = [
  { key: 'spa', label: 'Spa hand treatment', price: 12 },
  { key: 'french', label: 'French tips', price: 10 },
  { key: 'stones', label: 'Accent stones', price: 8 }
]

function Prices() {
  const [service, setService] = useState(serviceOptions[0].key)
  const [selectedExtras, setSelectedExtras] = useState([])

  const total = useMemo(() => {
    const base = serviceOptions.find((item) => item.key === service)?.price || 0
    const extraTotal = selectedExtras.reduce((sum, extraKey) => {
      const item = extras.find((extra) => extra.key === extraKey)
      return sum + (item?.price || 0)
    }, 0)
    return base + extraTotal
  }, [service, selectedExtras])

  return (
    <section className="page prices-page">
      <div className="section-block">
        <p className="eyebrow">Pricing calculator</p>
        <h1>Estimate your nail service cost</h1>
        <p>
          Choose a service and optional upgrades to see a live price quote.
        </p>
      </div>
      <div className="price-grid">
        <div className="price-panel">
          <label className="field-label">
            Choose a service
            <select
              className="field-select"
              value={service}
              onChange={(event) => setService(event.target.value)}
            >
              {serviceOptions.map((option) => (
                <option key={option.key} value={option.key}>
                  {option.label} — ${option.price}
                </option>
              ))}
            </select>
          </label>
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
          <h2>Estimated total</h2>
          <p className="price-value">${total}.00</p>
          <p>
            You can use this estimate to choose the best service for your next
            appointment.
          </p>
        </div>
      </div>
    </section>
  )
}

export default Prices
