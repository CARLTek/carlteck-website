"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";

const navItems = [
  { name: "Home", path: "/" },
  { name: "About", path: "/about" },
  { name: "Products", path: "/products" },
  { name: "Contact", path: "/contact" },
];

const Navbar: React.FC = () => {
  const [scrolled, setScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [underlineStyle, setUnderlineStyle] = useState({});
  const router = useRouter();
  const pathname = usePathname();
  const navRefs = useRef<Record<string, HTMLLIElement | null>>({});

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const activeItem = navItems.find((item) => item.path === pathname);
    if (activeItem) {
      const el = navRefs.current[activeItem.name];
      if (el) {
        setUnderlineStyle({
          width: `${el.offsetWidth}px`,
          left: `${el.offsetLeft}px`,
        });
      }
    }
  }, [pathname]);

  const handleNavigate = (name: string, path: string) => {
    router.push(path);
    setMobileMenuOpen(false); // close mobile menu on navigation
  };

  return (
    <nav
      className={`fixed  w-full z-50 transition-colors duration-300 ${
        scrolled
          ? "bg-black/30 dark:bg-black/40 backdrop-blur-lg"
          : "bg-white/30 dark:bg-transparent backdrop-blur-lg"
      }  overflow-x-hidden`}
    >
      <div className="max-w-[calc(100%-2in)] mx-auto">
        <div className="w-full px-4 py-4 flex justify-between items-center">
          {/* Logo */}
          <div
            className="h-10 w-auto cursor-pointer"
            onClick={() => handleNavigate("Home", "/")}
          >
            <img
              src="/Logo.svg"
              alt="Logo"
              className="h-10 block dark:hidden"
            />
            <img
              src="/Logo Dark.svg"
              alt="Logo"
              className="h-10 hidden dark:block"
            />
          </div>

          {/* Desktop Nav */}
          <div>
            <ul className="flex space-x-8 font-medium text-black bg-gray-300 dark:bg-gray-600 dark:text-white px-6 py-3 rounded-md  relative">
              {navItems.map((item) => (
                <li
                  key={item.name}
                  ref={(el) => (navRefs.current[item.name] = el)}
                  className="cursor-pointer pb-1 relative"
                  onClick={() => handleNavigate(item.name, item.path)}
                >
                  {item.name}
                </li>
              ))}
              <span
                className="absolute bottom-0 h-[5px] rounded-t-lg bg-cyan-600 transition-all duration-300"
                style={underlineStyle}
              ></span>
            </ul>
          </div>

          {/* Hamburger Icon for Mobile */}
          <div className="md:hidden">
            <button
              onClick={() => setMobileMenuOpen((prev) => !prev)}
              className="text-black dark:text-white text-2xl"
            >
              {mobileMenuOpen ? "✕" : "☰"}
            </button>
          </div>
        </div>

        {/* Mobile Menu */}
        {mobileMenuOpen && (
          <div className="md:hidden bg-white dark:bg-black px-6 py-4 space-y-4 text-right overflow-x-hidden">
            {navItems.map((item) => (
              <div
                key={item.name}
                onClick={() => handleNavigate(item.name, item.path)}
                className="text-black dark:text-white cursor-pointer"
              >
                {item.name}
              </div>
            ))}
          </div>
        )}
      </div>
    </nav>
  );
};

export default Navbar;
