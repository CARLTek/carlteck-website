"use client";

import { useEffect, useRef, useState } from "react";
import { usePathname, useRouter } from "next/navigation";
import { navItems } from "../data";
import Link from "next/link";

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
    setMobileMenuOpen(false);
  };

  return (
  
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
  );
};

export default Navbar;
