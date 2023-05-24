import "../sections-styles/Welcome.css";
import WelcomeImage from "../../assets/images/potato-salad.png";

export default function Welcome() {
  return (
    <section className="welcome-section">
      <div className="welcome-content">
        <div className="welcome-headers">
          <h2 className="welcome-content-header">Welcome at Little Lemon</h2>
          <h5 className="welcome-content-subheader">
            Chicago based mediterranean cuisine, with finest tastes
          </h5>
        </div>
        <p className="welcome-content-text">
          Lorem, ipsum dolor sit amet consectetur adipisicing elit. Commodi
          atque consequatur dolore vitae deserunt numquam nesciunt quam debitis
          odio voluptas, eius vero nihil? Maxime nisi, eaque, molestiae
          temporibus ab iste quasi, optio blanditiis eum necessitatibus dolore
          molestias nam. Modi quibusdam, fuga necessitatibus nemo iste dolore
          fugiat pariatur labore, quis at reiciendis, praesentium aspernatur.
          Laboriosam laudantium perspiciatis ea voluptatum, repellendus
          veritatis?
        </p>
      </div>
      <div className="welcome-img-box">
        <img className="welcome-img" src={WelcomeImage} alt="Round plate" />
      </div>
    </section>
  );
}
