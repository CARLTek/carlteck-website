import Navbar from "../components/Navbar";
import PageHeading from "../components/PageHeading";
import ContactHeading from "../components/ContactHeading";
import ContactForm from "../components/ContactForm";
import Footer from "../components/Footer";

export default function ContactPage() {
  return (
    <main>
      <Navbar />
      <div className="max-w-[calc(100%-2in)] mx-auto">

        {/* Main Heading */}
        <PageHeading title="Contact Us" />

        <div className="flex items-center justify-between py-20">
          <ContactHeading />
          <ContactForm />
        </div>
      </div>

      <Footer />
    </main>
  );
}
