"use client";

import { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useTheme } from "next-themes";
import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import { Menubar, MenubarContent, MenubarItem, MenubarMenu, MenubarSeparator, MenubarTrigger } from "@/components/ui/menubar";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { theme, setTheme } = useTheme();
  const [mounted, setMounted] = useState(false);
  const router = useRouter();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  // Avoid hydration issues
  if (!mounted) return null;

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`fixed w-full z-50 transition-colors duration-300 ${
        scrolled ? "bg-white/30 dark:bg-black/50 backdrop-blur-sm" : "bg-transparent"
      }`}
    >
      <div className="py-4 flex justify-between items-center px-10 lg:px-20">
        {/* Logo */}
        <Logo />

        {/* Right Side: Theme Toggle + Menu */}
        <div className="flex gap-4 items-center">
          {/* Theme Toggle Button */}
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>

          {/* Navigation Menu */}
          <Menubar>
            <MenubarMenu>
              <MenubarTrigger>Menu</MenubarTrigger>
              <MenubarContent className="mr-10 md:mr-20">
                <MenubarItem onClick={() => router.push("/")}>Home</MenubarItem>
                <MenubarSeparator />
                <MenubarItem onClick={() => router.push("/about")}>About</MenubarItem>
                <MenubarSeparator />
                <MenubarItem onClick={() => router.push("/products")}>Products</MenubarItem>
                <MenubarSeparator />
                <MenubarItem onClick={() => router.push("/gallery")}>Gallery</MenubarItem>
                <MenubarSeparator />
                <MenubarItem onClick={() => router.push("/contact")}>Contact</MenubarItem>
              </MenubarContent>
            </MenubarMenu>
          </Menubar>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
