import Navbar from "../components/Navbar";
import PageHeading from "../components/PageHeading";
import OverviewSection from "../components/about/OverviewSection";
import MissionVisionSection from "../components/about/MissionVisionSection";
import FounderSection from "../components/about/FounderSection";
import OurTeamSection from "../components/about/OurTeamSection";
import CallToActionSection from "../components/home/CallToActionSection";
import Footer from "../components/Footer";
import GallerySwiper from '../components/GallerySwiper';
import GalleryPromoSection from "../components/home/GalleryPromoSection";


export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <OverviewSection />
      <MissionVisionSection />
      <FounderSection />
      <OurTeamSection />
      <GalleryPromoSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}
