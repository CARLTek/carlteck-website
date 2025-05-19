import { Mail, Phone } from "lucide-react"; // Optional: install lucide-react for icons

const Footer: React.FC = () => {
  return (
    <footer className="bg-gray-200 dark:bg-gray-900  py-15 rounded-t-4xl ">
      <div className="mx-auto flex flex-col lg:flex-row justify-between gap-10 px-10 lg:px-20">
        {/* Left Side - Logo and Address */}
        <div className="w-full lg:w-1/3">
          <div className="flex items-center mb-5">
            <img
              src="/Logo.svg"
              alt="Logo"
              className="h-15 block dark:hidden"
            />
            <img
              src="/Logo Dark.svg"
              alt="Logo"
              className="h-15 hidden dark:block"
            />
          </div>
          <p className="text-sm">
            <strong>
              Bluechip Labs, BUITEMS Takatu Campus, Airport Road, Quetta, Pk.
            </strong>
          </p>
        </div>

        {/* Right Side - Links and Contact */}
        <div className="flex gap-20 text-sm justify-start lg:justify-end">
          {/* Titles Column */}
          <div className="md:flex flex-col justify-between gap-6 min-w-[100px] hidden md:visible">
            <h4 className="font-semibold">Quick Links</h4>
            <h4 className="font-semibold">Projects</h4>
            <h4 className="font-semibold">Contact</h4>
          </div>

          {/* Items Column */}
          <div className="flex flex-col gap-6 ">
            {/* Quick Links */}
            <ul className="space-y-1 flex gap-6  items-center">
              <li>
                <a href="/" className="hover:underline">
                  Home
                </a>
              </li>
              <li>
                <a href="/about" className="hover:underline">
                  About
                </a>
              </li>
               <li>
                <a href="/products" className="hover:underline">
                  Products
                </a>
              </li>
              <li>
                <a href="/contact" className="hover:underline">
                  Contact Us
                </a>
              </li>
            </ul>

            <div className="border-t border-white w-full" />

            {/* Projects */}
            <ul className="space-y-1 flex gap-6 justify-center items-center ">
              <li>Ad Rover</li>
              <li>Waiter Bot</li>
              <li>Smart Bot</li>
              <li>Snake Bot</li>
            </ul>

            <div className="border-t border-white w-full" />

            {/* Contact Info */}
            <div className="space-y-2 flex gap-6 justify-center items-center ">
              <div className="flex items-center gap-2">
                <Phone size={16} />
                <span>+92 300 1234567</span>
              </div>
              <div className="flex items-center gap-2">
                <Mail size={16} />
                <span>info@bluechiplabs.pk</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
