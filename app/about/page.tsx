import Navbar from "../components/Navbar";
import PageHeading from "../components/PageHeading";
import OverviewSection from "../components/about/OverviewSection";
import MissionVisionSection from "../components/about/MissionVisionSection";
import FounderSection from "../components/about/FounderSection";
import OurTeamSection from "../components/OurTeamSection";
import CallToActionSection from "../components/CallToActionSection";
import Footer from "../components/Footer";

export default function AboutPage() {
  return (
    <main>
      <Navbar />
      <div className="mx-full px-10 lg:px-20 mx-auto">
        <PageHeading title="About Us" />
        <OverviewSection />
        <MissionVisionSection />
        <FounderSection />
      </div>
      <OurTeamSection />
      <CallToActionSection />
      <Footer />
    </main>
  );
}
