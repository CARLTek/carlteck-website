import Navbar from "../components/Navbar";
import PageHeading from "../components/PageHeading";
import ContactHeading from "../components/ContactHeading";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";
import ContactFormSection from "../components/contact/ContactFormSection";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="px-10 lg:px-20">
        {/* Main Heading */}
        <PageHeading title="Contact Us" />
        <ContactFormSection />
      </div>

      <Footer />
    </main>
  );
}
