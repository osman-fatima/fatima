import { Link } from 'react-router-dom'
import Slider from '../components/Slider.jsx'
import heroImage from '../assets/hero.png'

function Home() {
  return (
    <section className="page home-page">
      <div className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow">Nail Studio Booking</p>
          <h1>Beautiful nails, faster bookings.</h1>
          <p className="hero-text">
            Nailes Studio helps your clients choose a service, preview prices,
            and request an appointment directly from the website.
          </p>
          <div className="hero-actions">
            <Link className="button primary-button" to="/contact">
              Book an appointment
            </Link>
            <Link className="button secondary-button" to="/prices">
              Estimate cost
            </Link>
          </div>
        </div>
        <div className="hero-image">
          <img src={heroImage} alt="Nail studio hero" />
        </div>
      </div>
      <section className="home-intro">
        <div>
          <h2>Why clients love Nailes Studio</h2>
          <p>
            Responsive styling, clear service pricing, and a contact form that
            turns visitors into real appointments.
          </p>
        </div>
      </section>
      <Slider />
    </section>
  )
}

export default Home
