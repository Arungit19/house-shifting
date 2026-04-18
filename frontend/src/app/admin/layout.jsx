"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";

const navItems = [
  { href: "/admin", label: "Dashboard", icon: "📊" },
  { href: "/admin/bookings", label: "Bookings", icon: "📋" },
  { href: "/admin/customers", label: "Customers", icon: "👥" },
  { href: "/admin/Quotes", label: "Quotes", icon: "💬" },
  { href: "/admin/payments", label: "Payments", icon: "💳" },
  { href: "/admin/services", label: "Services", icon: "🛠️" },
  { href: "/admin/settings", label: "Settings", icon: "⚙️" },
];

// ✅ Match this to your actual global navbar height
const NAVBAR_HEIGHT = 64;

export default function AdminLayout({ children }) {
  const pathname = usePathname();
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div
      className="flex"
      style={{
        backgroundColor: "var(--background)",
        color: "var(--foreground)",
        minHeight: `calc(100vh - ${NAVBAR_HEIGHT}px)`,
        marginTop: `${NAVBAR_HEIGHT}px`, // ✅ pushes layout below global navbar
      }}
    >
      {/* Sidebar */}
      <aside
        className="flex flex-col transition-all duration-300 sticky top-0 self-start"
        style={{
          width: collapsed ? "64px" : "240px",
          height: `calc(100vh - ${NAVBAR_HEIGHT}px)`, // ✅ fills remaining height
          backgroundColor: "var(--card-bg)",
          borderRight: "1px solid var(--border-color)",
          position: "sticky",
          top: `${NAVBAR_HEIGHT}px`, // ✅ sticks just below navbar
        }}
      >
        {/* Logo */}
        <div
          className="flex items-center gap-3 px-4 py-5"
          style={{ borderBottom: "1px solid var(--border-color)" }}
        >
          <span className="text-2xl">🚚</span>
          {!collapsed && (
            <span className="font-black text-lg text-[#2979d4] tracking-tight">
              Easy To Go
            </span>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="ml-auto text-xs opacity-50 hover:opacity-100 transition-opacity"
            style={{ color: "var(--foreground)" }}
          >
            {collapsed ? "→" : "←"}
          </button>
        </div>

        {/* Nav */}
        <nav className="flex flex-col gap-1 p-3 flex-1 overflow-y-auto">
          {navItems.map((item) => {
            const active =
              pathname === item.href ||
              (item.href !== "/admin" && pathname.startsWith(item.href));
            return (
              <Link
                key={item.href}
                href={item.href}
                className="flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200 font-medium text-sm"
                style={{
                  backgroundColor: active ? "#2979d4" : "transparent",
                  color: active ? "#fff" : "var(--nav-text-muted)",
                  border: active ? "none" : "1px solid transparent",
                }}
                onMouseEnter={(e) => {
                  if (!active) {
                    e.currentTarget.style.backgroundColor = "rgba(41,121,212,0.1)";
                    e.currentTarget.style.color = "#2979d4";
                  }
                }}
                onMouseLeave={(e) => {
                  if (!active) {
                    e.currentTarget.style.backgroundColor = "transparent";
                    e.currentTarget.style.color = "var(--nav-text-muted)";
                  }
                }}
              >
                <span className="text-base">{item.icon}</span>
                {!collapsed && <span>{item.label}</span>}
              </Link>
            );
          })}
        </nav>

        {/* Footer */}
        {!collapsed && (
          <div className="p-4" style={{ borderTop: "1px solid var(--border-color)" }}>
            <div className="flex items-center gap-3">
              <div
                className="w-8 h-8 rounded-full flex items-center justify-center text-sm font-bold text-white"
                style={{ backgroundColor: "#2979d4" }}
              >
                A
              </div>
              <div>
                <p className="text-xs font-semibold" style={{ color: "var(--foreground)" }}>
                  Admin
                </p>
                <p className="text-xs" style={{ color: "var(--nav-text-muted)" }}>
                  admin@Easytogo.in
                </p>
              </div>
            </div>
          </div>
        )}
      </aside>

      {/* Main Content */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top bar */}
        <header
          className="flex items-center justify-between px-6 py-5.5"
          style={{
            backgroundColor: "var(--card-bg)",
            borderBottom: "1px solid var(--border-color)",
          }}
        >
          <h1 className="text-lg font-black" style={{ color: "var(--foreground)" }}>
            {navItems.find(
              (n) =>
                pathname === n.href ||
                (n.href !== "/admin" && pathname.startsWith(n.href))
            )?.label || "Dashboard"}
          </h1>
          <div className="flex items-center gap-3">
            <span
              className="text-xs px-3 py-1 rounded-full font-semibold"
              style={{
                backgroundColor: "rgba(41,121,212,0.15)",
                color: "#2979d4",
              }}
            >
              Admin Panel
            </span>
          </div>
        </header>

        <div className="flex-1 overflow-auto p-6">{children}</div>
      </main>
    </div>
  );
}