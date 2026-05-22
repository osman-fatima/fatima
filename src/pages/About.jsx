function About() {
  return (
    <section className="page about-page">
      <div className="section-block">
        <div>
          <p className="eyebrow">About Nailes Studio</p>
          <h1>Trusted nail care for every appointment.</h1>
          <p>
            Nailes Studio is a responsive client-facing frontend that makes it
            easier to browse services and submit an appointment
            request from any device.
          </p>
        </div>
      </div>
      <div className="two-column">
        <article className="info-card">
          <h2>Our mission</h2>
          <p>
            Provide an elegant online experience for clients looking for modern
            nail care, with secure styling, professional tools, and rapid booking.
          </p>
        </article>
        <article className="info-card">
          <h2>How it works</h2>
          <p>
            Visitors explore service details, compare price packages, and message
            the studio directly through a contact form that captures appointment
            requests.
          </p>
        </article>
      </div>
    </section>
  )
}

export default About
