"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <nav className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
      scrolled ? "bg-[#0a0e1a]/95 backdrop-blur-md py-3" : "bg-transparent py-5"
    }`}>

      
        <div className="max-w-7xl mx-auto px-6 flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center gap-3">
  <div className="w-12 h-12 relative">
    <Image
      src="/logo.png"
      alt="logo"
      fill
      className="object-contain"
    />
  </div>

  <span className="text-xl font-bold tracking-tight">
    <span className="text-white">Easy</span>
    <span className="text-[#2979d4]"> To Go</span>
  </span>
</div>

          {/* Desktop Nav Links */}
          <ul className="hidden md:flex items-center gap-8 text-sm font-medium">
            {["Home", "About Us", "Services", "Contact"].map((item) => (
              <li key={item}>
                <a
                  href={`#${item.toLowerCase().replace(" ", "-")}`}
                  className="text-gray-300 hover:text-white transition-colors duration-200 relative group"
                >
                  {item}
                  <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2979d4] transition-all duration-300 group-hover:w-full rounded-full" />
                </a>
              </li>
            ))}
          </ul>

          {/* Login / Signup */}

<div className="hidden md:flex items-center gap-3">
  <Link
    href="/login"
    className="text-sm font-medium text-gray-300 px-4 py-2 border rounded-xl"
  >
    Login
  </Link>

  <Link
    href="/login"
    className="text-sm font-semibold bg-[#2979d4] text-white px-5 py-2 rounded-xl"
  >
    Sign Up
  </Link>
</div>

          {/* Mobile Hamburger */}
          <button
            className="md:hidden flex flex-col gap-1.5 p-2"
            onClick={() => setMenuOpen(!menuOpen)}
          >
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
            <span className={`w-6 h-0.5 bg-white transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`} />
          </button>
        </div>

        {/* Mobile Menu */}
        {menuOpen && (
          <div className="md:hidden bg-[#0d1120]/98 backdrop-blur-xl border-t border-white/10 px-6 py-6 flex flex-col gap-4">
            {["Home", "About Us", "Services", "Contact"].map((item) => (
              <a
                key={item}
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="text-gray-300 hover:text-white text-base font-medium py-2 border-b border-white/5"
                onClick={() => setMenuOpen(false)}
              >
                {item}
              </a>
            ))}
            <div className="flex gap-3 pt-2">
              <a href="#login" className="flex-1 text-center text-sm font-medium text-gray-300 border border-white/20 px-4 py-2.5 rounded-xl">
                Login
              </a>
              <a href="#signup" className="flex-1 text-center text-sm font-semibold bg-[#2979d4] text-white px-4 py-2.5 rounded-xl">
                Sign Up
              </a>
            </div>
          </div>
        )}
    </nav>
  );
}