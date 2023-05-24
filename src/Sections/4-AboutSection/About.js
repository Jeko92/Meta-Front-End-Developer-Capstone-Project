import "../sections-styles/About.css";
import AboutImage from "../../assets/images/Salad.png";

export default function About() {
  return (
    <section className="about-section__container">
      <div className="about-section">
        <div className="about-section__img-box">
          <img
            className="about-section__img"
            src={AboutImage}
            alt="Vegetarian Salad"
          />
        </div>
        <div className="about-section__content">
          <h2>About Us</h2>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel quis
            aliquid cupiditate, nisi odit explicabo pariatur, quos natus neque
            nobis sunt porro incidunt atque corporis! Autem saepe fugit dolores
            minus ad velit consequuntur obcaecati quia!
          </p>
          <p>
            Lorem ipsum dolor sit amet consectetur adipisicing elit.
            Consequuntur nulla quisquam quia tenetur earum illum nihil quam
            quas, eius asperiores. Mollitia ea aspernatur similique sint, ipsa
            esse a molestiae ipsam?
          </p>
        </div>
      </div>
    </section>
  );
}
