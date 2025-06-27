import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Orbitron, Plus_Jakarta_Sans } from "next/font/google"; // 👈 NEW

import "./globals.css";
import { ThemeProvider } from "@/components/theme-provider";
import "swiper/css";
import "swiper/css/thumbs";
import "swiper/css/free-mode";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

const orbitron = Orbitron({
  variable: "--font-heading", 
  subsets: ["latin"],
  weight: ["400", "600", "700"],
});

const plusJakarta = Plus_Jakarta_Sans({
  variable: "--font-body",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

export const metadata: Metadata = {
  title: "CARLTECK",
  description: "Futuristic Advertisement Robots",
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body
        className={`
          ${geistSans.variable} 
          ${geistMono.variable} 
          ${orbitron.variable} 
          ${plusJakarta.variable} 
          antialiased
        `}
      >
        <ThemeProvider attribute="class" defaultTheme="system" enableSystem>
          {children}
        </ThemeProvider>
      </body>
    </html>
  );
}
