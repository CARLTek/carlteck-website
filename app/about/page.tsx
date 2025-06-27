import Navbar from "../components/Navbar";
import OverviewSection from "../components/about/OverviewSection";
import MissionVisionSection from "../components/about/MissionVisionSection";
import FounderSection from "../components/about/FounderSection";
import OurTeamSection from "../components/about/OurTeamSection";
import CallToActionSection from "../components/home/CallToActionSection";
import Footer from "../components/Footer";
import GalleryPromoSection from "../components/home/GalleryPromoSection";
import TeamSection from "../components/about/TeamSection";


export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <OverviewSection />
      <MissionVisionSection />
      <FounderSection />
      <OurTeamSection />
      {/*<TeamSection />*/}
      <GalleryPromoSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}
