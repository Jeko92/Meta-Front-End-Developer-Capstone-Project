import Hero from "../../Sections/1-HeroSection/Hero";
import WelcomeSection from "../../Sections/2-WelcomeSection/Welcome";
import MenuSection from "../../Sections/3-MenuSection/Menu";
import AboutSection from "../../Sections/4-AboutSection/About";
import ImgGallery from "../../Sections/5-ImgGallerySection/ImgGallery";

export default function Homepage() {
  return (
    <main>
      <Hero />
      <WelcomeSection />
      <MenuSection />
      <AboutSection />
      <ImgGallery />
    </main>
  );
}
