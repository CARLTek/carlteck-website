"use client";
import React from "react";

import { useRouter } from "next/navigation";

import { useEffect, useState } from "react";
import Logo from "./Logo";
import {
  Menubar,
  MenubarContent,
  MenubarItem,
  MenubarMenu,
  MenubarSeparator,
  MenubarShortcut,
  MenubarTrigger,
} from "@/components/ui/menubar";
import { Moon, Sun } from "lucide-react";
import { useTheme } from "next-themes";

import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";

const Navbar = () => {
  const [scrolled, setScrolled] = useState(false);
  const { setTheme } = useTheme();
  const router = useRouter();
  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);
  return (
    <nav
      className={`fixed  w-full z-50 transition-colors duration-300 overflow-x-hidden ${
        scrolled
          ? "bg-white/30 dark:bg-black backdrop-blur-sm"
          : "bg-transparent"
      }  `}
    >
      <div className="py-4 flex justify-between items-center px-10 lg:px-20">
        {/* Logo */}
        <Logo />

        {/* Desktop Nav */}
        <div className="flex gap-4 items-center">
          
          <DropdownMenu>
            <DropdownMenuTrigger asChild>
              <Button variant="outline" size="icon">
                <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                <span className="sr-only">Toggle theme</span>
              </Button>
            </DropdownMenuTrigger>
            <DropdownMenuContent align="end">
              <DropdownMenuItem onClick={() => setTheme("light")}>
                Light
              </DropdownMenuItem>
              <DropdownMenuItem onClick={() => setTheme("dark")}>
                Dark
              </DropdownMenuItem>
            </DropdownMenuContent>
          </DropdownMenu>
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
