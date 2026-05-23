
import {Link} from "react-router-dom";
export default function Home() {
  return (
    <div className="page home-page">
      <section className="hero-panel">
        <div className="hero-copy">
          <p className="eyebrow" > I Nailed It</p>


          <h1>
            Elegant nails designed to match your style.
          </h1>

          <p className="hero-text">
            From classic manicures to modern nail art, we create beautiful
            looks that make you feel confident every day.
          </p>

          <div className="hero-actions">
           <Link to="/contact" className="button secondary-button">
              Book NOW!
            </Link>
          </div>
</div>
        <div className="hero-slider">
          <div className="slides">
            <img src="nails1.jpeg" alt="image1"
            />

            <img src="nails3.jpeg" alt="image2" />

            <img
              src="nails4.jpeg"
              alt="image3"
            />

            <img
              src="nails1.jpeg"
              alt="image1"
            />

            <img
              src="nails3.jpeg"
              alt="image2"
            />

            <img
              src="nails4.jpeg"
              alt="image3"
            />
          </div>
        </div>
      </section>

      <section className="home-intro">
        <div className="service-grid">
          <div className="feature-card">
            <h3>Premium Products</h3>
            <p>
              We use high-quality nail products to ensure beautiful and
              long-lasting results.
            </p>
          </div>

          <div className="feature-card">
            <h3>Creative Nail Art</h3>
            <p>
              Minimal, elegant, bold, or trendy designs tailored to your style.
            </p>
          </div>

          <div className="feature-card">
            <h3>Relaxing Experience</h3>
            <p>
              Enjoy a comfortable and relaxing atmosphere during every visit.
            </p>
          </div>
        </div>
      </section>
    </div>
  );
}
