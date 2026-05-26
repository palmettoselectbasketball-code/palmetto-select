"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="bg-[#021B4E] border-b border-blue-300">
      <div className="max-w-7xl mx-auto px-4 py-3">

        {/* TOP BAR */}
        <div className="flex items-center justify-between">

          {/* LOGO */}
          <Link href="/" className="flex items-center">
            <Image
              src="/logo.png"
              alt="Palmetto Select Logo"
              width={70}
              height={70}
              priority
              className="w-auto h-auto"
            />
          </Link>

          {/* DESKTOP MENU */}
          <div className="hidden md:flex gap-8 text-white font-bold uppercase tracking-wide text-lg">
            <Link href="/" className="hover:text-blue-300 transition">
              Home
            </Link>

            <Link
              href="/mission"
              className="hover:text-blue-300 transition"
            >
              Mission
            </Link>

            <Link
              href="/registration"
              className="hover:text-blue-300 transition"
            >
              Registration
            </Link>

            <Link
              href="/contact"
              className="hover:text-blue-300 transition"
            >
              Contact Us
            </Link>
          </div>

          {/* MOBILE HAMBURGER */}
          <button
            className="md:hidden flex flex-col gap-1"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
            <span className="w-6 h-0.5 bg-white"></span>
          </button>
        </div>

        {/* MOBILE MENU */}
        {menuOpen && (
          <div className="md:hidden mt-4 flex flex-col gap-4 text-center text-white font-bold uppercase tracking-wide text-sm pb-4">

            <Link
              href="/"
              className="hover:text-blue-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              Home
            </Link>

            <Link
              href="/mission"
              className="hover:text-blue-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              Mission
            </Link>

            <Link
              href="/registration"
              className="hover:text-blue-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              Registration
            </Link>

            <Link
              href="/contact"
              className="hover:text-blue-300 transition"
              onClick={() => setMenuOpen(false)}
            >
              Contact Us
            </Link>
          </div>
        )}
      </div>
    </nav>
  );
}