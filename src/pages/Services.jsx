const services = [
  {
    title: 'Classic Manicure',
    description: 'Shape, polish, and protect your nails with a professional finish.'
  },
  {
    title: 'Gel Polish',
    description: 'Long-lasting color and shine with a gentle gel overlay.'
  },
  {
    title: 'Pedicure',
    description: 'Relaxing foot care, cuticle work, and glossy toes for all seasons.'
  },
  {
    title: 'Nail Art',
    description: 'Custom designs, accents, and seasonal looks for your nails.'
  }
]

function Services() {
  return (
    <section className="page services-page">
      <div className="section-block">
        <p className="eyebrow">Studio services</p>
        <h1>Complete nail care services</h1>
        <p>
          Explore our main offerings and pick the treatment that matches your
          schedule and style.
        </p>
      </div>
      <div className="service-grid">
        {services.map((service) => (
          <article key={service.title} className="service-card">
            <h2>{service.title}</h2>
            <p>{service.description}</p>
          </article>
        ))}
      </div>
    </section>
  )
}

export default Services
