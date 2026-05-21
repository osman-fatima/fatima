const slides = [
  {
    title: 'Fast booking',
    description: 'Reserve your salon time in seconds and get a confirmation instantly.'
  },
  {
    title: 'Professional care',
    description: 'Enjoy premium nail treatments with hygienic tools and expert styling.'
  },
  {
    title: 'Mobile-friendly',
    description: 'The entire studio experience is designed to work beautifully on phones.'
  }
]

function Slider() {
  return (
    <section className="hero-slider">
      {slides.map((slide) => (
        <article key={slide.title} className="feature-card">
          <h3>{slide.title}</h3>
          <p>{slide.description}</p>
        </article>
      ))}
    </section>
  )
}

export default Slider
