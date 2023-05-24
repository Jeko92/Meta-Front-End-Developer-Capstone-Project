import "../sections-styles/ImgGallery.css";
import GalleryImg1 from "../../assets/images/round-plate.png";

export default function ImgGallery() {
  return (
    <section className="gallery-section">
      <h2 className="gallery-section__header">Take a look...</h2>
      <div className="container-xl">
        <img
          className="gallery-item"
          src={GalleryImg1}
          alt="Delicous dish on a round plate"
        />
      </div>
    </section>
  );
}
