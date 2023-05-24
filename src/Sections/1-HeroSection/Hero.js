import "../sections-styles/Hero.css";
import bgVideo from "../../assets/bg-video/bg-video.mp4";
import bgVideo1 from "../../assets/bg-video/bg-video1.mp4";
import { Link } from "react-router-dom";

export default function Hero() {
  return (
    <section className="hero-section">
      <span className="hero-section__backdrop-filter"></span>
      <div className="hero-section__bg-video--container">
        <video className="hero-section__bg-video" autoPlay muted loop>
          <source src={bgVideo1} type="video/mp4" />
          <source src={bgVideo} type="video/mp4" />
          Your browser is not supported!
        </video>
      </div>
      <div className="hero-section__content">
        <h1>Little Lemon brings mediterranean taste to you!</h1>
        <p>Lorem ipsum dolor sit, amet consectetur adipisicing elit.</p>

        <Link className="cta-btn" role="button" to="/reserve-a-table">
          Reserve a table
        </Link>
      </div>
    </section>
  );
}
