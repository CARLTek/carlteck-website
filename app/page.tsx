import Navbar from "./components/Navbar";
import LandingSection from "./components/home/LandingSection";
import AboutSection from "./components/home/AboutSection";
import ProjectsSection from "./components/home/ProjectsSection";
import GalleryPromoSection from "./components/home/GalleryPromoSection";
import CallToActionSection from "./components/home/CallToActionSection";
import Footer from "./components/Footer";

export default function Home() {
  return (
    <main>
      <Navbar />
      <LandingSection />
      <AboutSection />
      <ProjectsSection />
      <GalleryPromoSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}
