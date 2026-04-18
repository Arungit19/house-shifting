"use client";

import Link from "next/link";
import { useState, useEffect } from "react";
import Image from "next/image";
import { useTheme } from "next-themes";

export default function Navbar({ user, onLogout }) {
  const [menuOpen, setMenuOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [mounted, setMounted] = useState(false);
  const [profileOpen, setProfileOpen] = useState(false);
  const { theme, setTheme } = useTheme();

  useEffect(() => {
    setMounted(true);
    const handleScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const toggleTheme = () => {
    setTheme(theme === "dark" ? "light" : "dark");
  };

  return (
    <nav
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "backdrop-blur-md py-3" : "backdrop-blur-sm py-5"
      }`}
      style={{ backgroundColor: "var(--nav-bg)" }}
    >
      <div className="max-w-7xl mx-auto px-6 flex items-center justify-between md:grid md:grid-cols-3">
        <div className="flex items-center gap-3 justify-start">
          <Link href="/" className="block">
            <div className="w-12 h-12 relative">
              <Image src="/logo.png" alt="logo" fill className="object-contain" />
            </div>
          </Link>
          <span className="text-xl font-bold tracking-tight">
            <span style={{ color: "var(--nav-text)" }}>Easy</span>
            <span className="text-[#2979d4]"> To Go</span>
          </span>
        </div>

        <ul className="hidden md:flex items-center justify-center gap-8 text-sm font-medium">
          {["Home", "About Us", "Services", "Contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item.toLowerCase().replace(" ", "-")}`}
                className="transition-colors duration-200 relative group"
                style={{ color: "var(--nav-text-muted)" }}
              >
                {item}
                <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-[#2979d4] transition-all duration-300 group-hover:w-full rounded-full" />
              </a>
            </li>
          ))}
        </ul>

        <div className="hidden md:flex items-center gap-3 justify-end">
          {user ? (
            <div className="relative">
              <button
                onClick={() => setProfileOpen(!profileOpen)}
                className="flex items-center gap-3 px-3 py-2 rounded-full border transition-all bg-white/80"
                style={{
                  borderColor: "var(--border-color)",
                  color: "var(--nav-text)",
                }}
              >
                <div className="w-10 h-10 rounded-full overflow-hidden bg-gray-200 flex items-center justify-center">
                  {user.image ? (
                    <Image
                      src={user.image}
                      alt={user.name || "User"}
                      width={40}
                      height={40}
                      className="object-cover"
                    />
                  ) : (
                    <span className="text-sm font-semibold">
                      {(user.name || "U").charAt(0).toUpperCase()}
                    </span>
                  )}
                </div>

                <div className="text-left leading-tight">
                  <p className="text-sm font-semibold">
                    {user.name || "My Profile"}
                  </p>
                  <p className="text-xs" style={{ color: "var(--nav-text-muted)" }}>
                    {user.email || "View account"}
                  </p>
                </div>

                <span className="text-xs">⌄</span>
              </button>

              {profileOpen && (
                <div
                  className="absolute right-0 mt-3 w-56 rounded-2xl shadow-lg border overflow-hidden"
                  style={{
                    backgroundColor: "var(--card-bg)",
                    borderColor: "var(--border-color)",
                  }}
                >
                  <Link
                    href="/profile"
                    className="block px-4 py-3 text-sm hover:bg-black/5"
                    onClick={() => setProfileOpen(false)}
                  >
                    My Profile
                  </Link>
                  <Link
                    href="/settings"
                    className="block px-4 py-3 text-sm hover:bg-black/5"
                    onClick={() => setProfileOpen(false)}
                  >
                    Settings
                  </Link>
                  <button
                    className="w-full text-left px-4 py-3 text-sm text-red-500 hover:bg-black/5"
                    onClick={() => {
                      setProfileOpen(false);
                      onLogout?.();
                    }}
                  >
                    Logout
                  </button>
                </div>
              )}
            </div>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm font-medium px-4 py-2 border rounded-xl transition-colors"
                style={{ color: "var(--nav-text-muted)", borderColor: "var(--border-color)" }}
              >
                Login
              </Link>
              <Link
                href="/login"
                className="text-sm font-semibold bg-[#2979d4] text-white px-5 py-2 rounded-xl"
              >
                Sign Up
              </Link>
            </>
          )}

          {mounted && (
            <button
              onClick={toggleTheme}
              className="text-sm px-3 py-2 rounded-xl border transition-all duration-200"
              style={{
                borderColor: theme === "dark" ? "#fff" : "#000",
                color: theme === "dark" ? "#fff" : "#000",
              }}
            >
              {theme === "dark" ? "☀️" : "🌙"}
            </button>
          )}
        </div>

        <button
          className="md:hidden flex flex-col gap-1.5 p-2"
          onClick={() => setMenuOpen(!menuOpen)}
        >
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-2" : ""}`}
            style={{ backgroundColor: "var(--nav-text)" }}
          />
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`}
            style={{ backgroundColor: "var(--nav-text)" }}
          />
          <span
            className={`w-6 h-0.5 transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-2" : ""}`}
            style={{ backgroundColor: "var(--nav-text)" }}
          />
        </button>
      </div>

      {menuOpen && (
        <div
          className="md:hidden backdrop-blur-xl border-t px-6 py-6 flex flex-col gap-4"
          style={{ backgroundColor: "var(--card-bg)", borderColor: "var(--border-color)" }}
        >
          {["Home", "About Us", "Services", "Contact"].map((item) => (
            <a
              key={item}
              href={`#${item.toLowerCase().replace(" ", "-")}`}
              className="text-base font-medium py-2 border-b transition-colors"
              style={{ color: "var(--nav-text-muted)", borderColor: "var(--border-color)" }}
              onClick={() => setMenuOpen(false)}
            >
              {item}
            </a>
          ))}

          {mounted && (
            <button
              onClick={toggleTheme}
              className="text-sm font-medium py-2 text-left"
              style={{ color: "var(--nav-text-muted)" }}
            >
              {theme === "dark" ? "☀️ Switch to Light Mode" : "🌙 Switch to Dark Mode"}
            </button>
          )}

          {user ? (
            <div className="flex flex-col gap-2 pt-2">
              <Link
                href="/profile"
                className="text-sm font-medium border px-4 py-2.5 rounded-xl text-center"
              >
                My Profile
              </Link>
              <button
                className="text-sm font-medium border px-4 py-2.5 rounded-xl text-red-500"
                onClick={onLogout}
              >
                Logout
              </button>
            </div>
          ) : (
            <div className="flex gap-3 pt-2">
              <a
                href="/login"
                className="flex-1 text-center text-sm font-medium border px-4 py-2.5 rounded-xl"
              >
                Login
              </a>
              <a
                href="/login"
                className="flex-1 text-center text-sm font-semibold bg-[#2979d4] text-white px-4 py-2.5 rounded-xl"
              >
                Sign Up
              </a>
            </div>
          )}
        </div>
      )}
    </nav>
  );
}