import { Mail, Phone, MapPin } from "lucide-react";

const ContactHeading = () => {
  const contactLinks = [
    {
      icon: <Phone className="w-5 h-5" />,
      label: "Phone",
      value: "+92 300 1234567",
    },
    {
      icon: <Mail className="w-5 h-5" />,
      label: "Email",
      value: "info@bluechiplabs.pk",
    },
    {
      icon: <MapPin className="w-5 h-5" />,
      label: "Location",
      value: "Bluechip Labs, BUITEMS Takatu Campus, Airport Road, Quetta, Pk.",
    },
  ];

  return (
    <div className=" mb-10 text-center lg:text-left">
      <h2 className="text-3xl md:text-4xl font-bold mb-2">We’d love to hear from you</h2>
      <p className="text-gray-600 dark:text-gray-300 mb-6">
        Whether you have a question, a business inquiry, or want to collaborate — we’re here.
      </p>

      <div className="flex flex-col justify-center  gap-6">
        {contactLinks.map((item) => (
          <div
            key={item.label}
            className="flex items-center gap-3 p-3 rounded-md transition-colors hover:border-solid hover:border-1 hover:border-cyan-600 dark:hover:border-solid cursor-pointer"
          >
            <span className="text-cyan-600 dark:text-cyan-400">{item.icon}</span>
            <div className="text-left">
              <p className="font-semibold text-black dark:text-white">{item.label}</p>
              <p className="text-sm text-gray-600 dark:text-gray-300">{item.value}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ContactHeading;
