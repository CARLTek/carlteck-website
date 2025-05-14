"use client";

import Link from "next/link";

const Navbar: React.FC = () => {
  return (
        <Link href="/" className="h-10 w-auto cursor-pointer block">
          <img src="/Logo.svg" alt="Logo" className="h-10 block dark:hidden" />
          <img
            src="/Logo Dark.svg"
            alt="Logo"
            className="h-10 hidden dark:block"
          />
        </Link>
  );
};

export default Navbar;
