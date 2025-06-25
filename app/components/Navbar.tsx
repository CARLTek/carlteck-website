"use client";

import { useTheme } from "next-themes";
import Link from "next/link";
import { useRouter } from "next/navigation";

import Logo from "./Logo";
import { Button } from "@/components/ui/button";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarTrigger,
} from "@/components/ui/menubar";
import {
  NavigationMenu,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
} from "@/components/ui/navigation-menu";
import { Moon, Sun } from "lucide-react";

const Navbar = () => {
  const { theme, setTheme } = useTheme(); 
  const router = useRouter();

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  const navLinks = [
    { label: "Home", href: "/" },
    { label: "About", href: "/about" },
    { label: "Products", href: "/products" },
    { label: "Gallery", href: "/gallery" },
    { label: "Contact", href: "/contact" },
  ];

  return (
    <nav className={`fixed w-full z-100   px-5 md:px-20`}>
      <div
        className={` flex justify-between items-center px-4 py-3 mt-2 md:py-4 rounded-xl backdrop-blur-md bg-white/50 dark:bg-white/10`}
      >
        {/* Logo */}
        <Logo />

        {/* Right Side */}
        <div className="flex items-center gap-3">
          

          {/* Mobile Menu */}
          <div className="md:hidden">
            <Menubar>
              <MenubarMenu>
                <MenubarTrigger>Menu</MenubarTrigger>
                <MenubarContent align="end">
                  {navLinks.map((item, idx) => (
                    <div key={idx}>
                      <MenubarItem onClick={() => router.push(item.href)}>
                        {item.label}
                      </MenubarItem>
                      {idx < navLinks.length - 1 && <MenubarSeparator />}
                    </div>
                  ))}
                </MenubarContent>
              </MenubarMenu>
            </Menubar>
          </div>

          {/* Desktop Menu */}
          <NavigationMenu className="hidden md:flex p-20">
            <NavigationMenuList>
              {navLinks.map((item, idx) => (
                <NavigationMenuItem key={idx}>
                  <NavigationMenuLink asChild>
                    <Link href={item.href}>{item.label}</Link>
                  </NavigationMenuLink>
                </NavigationMenuItem>
              ))}
            </NavigationMenuList>
          </NavigationMenu>
          {/* Theme Toggle */}
          <Button variant="outline" size="icon" onClick={toggleTheme}>
            <Sun className="h-5 w-5 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
            <Moon className="absolute h-5 w-5 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
            <span className="sr-only">Toggle theme</span>
          </Button>
        </div>
        
      </div>
    </nav>
  );
};

export default Navbar;
