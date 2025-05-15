import ContactHeading from "../ContactHeading";
import ContactForm from "../ContactForm";

export default function ContactFormSection() {
  return (
    <>
      <div className="flex flex-col lg:flex-row items-center justify-between py-20">
          <ContactHeading />
          <ContactForm />
        </div>
    </>
  );
}
