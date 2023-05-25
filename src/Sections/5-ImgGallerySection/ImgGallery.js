import "../sections-styles/ImgGallery.css";
// import GalleryImg1 from "../../assets/images/round-plate.png";
import SwiperCarousel from "../../components/SwiperCarousel";

export default function ImgGallery() {
  return (
    <section className="gallery-section">
      <div className="container-xl">
        <h1 className="gallery-section__header">Take a look...</h1>
        <SwiperCarousel />
      </div>
    </section>
  );
}
