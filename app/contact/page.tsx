import Navbar from "../components/Navbar";
import PageHeading from "../components/PageHeading";
import ContactHeading from "../components/ContactHeading";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="px-10 lg:px-20">
        {/* Main Heading */}
        <PageHeading title="Contact Us" />

        <div className="flex flex-col lg:flex-row items-center justify-between py-20">
          <ContactHeading />
          <ContactForm />
        </div>
      </div>

      <Footer />
    </main>
  );
}
