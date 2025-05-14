"use client";
import { useState } from "react";
import Link from "next/link";

interface AnimatedButtonProps {
  label: string;
  href: string;
}

const AnimatedButton = ({ label, href }: AnimatedButtonProps) => {
  const [isHovered, setIsHovered] = useState(false);

  return (
    <div >
      <Link
        href={href}
        className="relative flex items-center justify-center w-48 h-16 overflow-hidden group border border-transparent"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Hover background */}
        <span
          className={`absolute inset-0 transition-all duration-300 ${
            isHovered ? "bg-cyan-500" : "bg-transparent"
          }`}
        />

        {/* Four spans for the moving glowing line */}
        {/* Top */}
        <span className="absolute top-0 left-0 w-full h-[2px] bg-cyan-400 animate-top"></span>
        {/* Right */}
        <span className="absolute top-0 right-0 w-[2px] h-full bg-cyan-400 animate-right"></span>
        {/* Bottom */}
        <span className="absolute bottom-0 right-0 w-full h-[2px] bg-cyan-400 animate-bottom"></span>
        {/* Left */}
        <span className="absolute bottom-0 left-0 w-[2px] h-full bg-cyan-400  animate-left"></span>

        {/* Button Text */}
        <span
          className={`relative z-10 px-6 py-3 text-center transition-all duration-300 ${
            isHovered ? "text-black font-semibold" : "text-cyan-400"
          }`}
        >
          {label}
        </span>

        {/* Glow + Animations */}
        <style jsx global>{`
          .shadow-glow {
            box-shadow: 0 0 8px 2px rgba(34, 211, 238, 0.8);
            opacity: 0;
          }

          @keyframes topAnim {
            0% {
              opacity: 1;
              transform: translateX(-100%);
            }
            25% {
              transform: translateX(0%);
              opacity: 1;
            }
            26%,
            100% {
              opacity: 0;
            }
          }

          @keyframes rightAnim {
            0%,
            24% {
              opacity: 0;
            }
            25% {
              opacity: 1;
              transform: translateY(-100%);
            }
            50% {
              transform: translateY(0%);
              opacity: 1;
            }
            51%,
            100% {
              opacity: 0;
            }
          }

          @keyframes bottomAnim {
            0%,
            49% {
              opacity: 0;
            }
            50% {
              opacity: 1;
              transform: translateX(100%);
            }
            75% {
              transform: translateX(0%);
              opacity: 1;
            }
            76%,
            100% {
              opacity: 0;
            }
          }

          @keyframes leftAnim {
            0%,
            74% {
              opacity: 0;
            }
            75% {
              opacity: 1;
              transform: translateY(100%);
            }
            100% {
              transform: translateY(0%);
              opacity: 1;
            }
          }

          .animate-top {
            animation: topAnim 4s linear infinite;
          }

          .animate-right {
            animation: rightAnim 4s linear infinite;
          }

          .animate-bottom {
            animation: bottomAnim 4s linear infinite;
          }

          .animate-left {
            animation: leftAnim 4s linear infinite;
          }
        `}</style>
      </Link>
    </div>
  );
};

export default AnimatedButton;
