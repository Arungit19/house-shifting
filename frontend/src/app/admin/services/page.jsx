"use client";

import { useState } from "react";

const initialServices = [
  { id: 1, icon: "🏘️", title: "Home Shifting", desc: "Complete house relocation — local or intercity.", bookings: 412, revenue: "₹1,24,80,000", active: true },
  { id: 2, icon: "🏢", title: "Office Relocation", desc: "Seamless office shifting with minimal downtime.", bookings: 87, revenue: "₹65,25,000", active: true },
  { id: 3, icon: "📦", title: "Packing & Unpacking", desc: "Expert packing for fragile and valuable items.", bookings: 318, revenue: "₹28,62,000", active: true },
  { id: 4, icon: "🚗", title: "Vehicle Transport", desc: "Safe and insured car transport across all major routes.", bookings: 145, revenue: "₹21,75,000", active: true },
  { id: 5, icon: "🏬", title: "Storage Solutions", desc: "Secure climate-controlled storage facilities.", bookings: 203, revenue: "₹10,15,000", active: false },
  { id: 6, icon: "🧹", title: "Post-Move Cleaning", desc: "Deep cleaning for old or new home after the move.", bookings: 119, revenue: "₹4,16,500", active: true },
];

export default function ServicesPage() {
  const [services, setServices] = useState(initialServices);

  const toggleActive = (id) => {
    setServices((prev) =>
      prev.map((s) => (s.id === id ? { ...s, active: !s.active } : s))
    );
  };

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black" style={{ color: "var(--foreground)" }}>
            Services
          </h2>
          <p className="text-sm mt-1" style={{ color: "var(--nav-text-muted)" }}>
            Manage the services offered on your platform
          </p>
        </div>
        <button
          className="px-4 py-2 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#2979d4" }}
        >
          + Add Service
        </button>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
        {[
          { label: "Total Services", value: services.length, icon: "🛠️" },
          { label: "Active", value: services.filter((s) => s.active).length, icon: "✅" },
          { label: "Total Bookings", value: services.reduce((a, s) => a + s.bookings, 0), icon: "📋" },
        ].map((s) => (
          <div
            key={s.label}
            className="rounded-2xl p-4"
            style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)" }}
          >
            <span className="text-2xl">{s.icon}</span>
            <p className="text-xl font-black mt-2" style={{ color: "var(--foreground)" }}>{s.value}</p>
            <p className="text-xs mt-0.5" style={{ color: "var(--nav-text-muted)" }}>{s.label}</p>
          </div>
        ))}
      </div>

      {/* Service Cards */}
      <div className="grid md:grid-cols-2 gap-4">
        {services.map((s) => (
          <div
            key={s.id}
            className="rounded-2xl p-5 transition-all"
            style={{
              backgroundColor: "var(--card-bg)",
              border: `1px solid ${s.active ? "var(--border-color)" : "rgba(239,68,68,0.3)"}`,
              opacity: s.active ? 1 : 0.7,
            }}
          >
            <div className="flex items-start justify-between mb-3">
              <div className="flex items-center gap-3">
                <span className="text-3xl">{s.icon}</span>
                <div>
                  <h3 className="font-bold" style={{ color: "var(--foreground)" }}>{s.title}</h3>
                  <p className="text-xs mt-0.5" style={{ color: "var(--nav-text-muted)" }}>{s.desc}</p>
                </div>
              </div>
              {/* Toggle */}
              <button
                onClick={() => toggleActive(s.id)}
                className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 flex-shrink-0"
                style={{ backgroundColor: s.active ? "#2979d4" : "rgba(255,255,255,0.1)" }}
              >
                <span
                  className="inline-block h-4 w-4 rounded-full bg-white transition-transform duration-300"
                  style={{ transform: s.active ? "translateX(24px)" : "translateX(4px)" }}
                />
              </button>
            </div>

            <div
              className="flex items-center gap-6 pt-3"
              style={{ borderTop: "1px solid var(--border-color)" }}
            >
              <div>
                <p className="text-xs" style={{ color: "var(--nav-text-muted)" }}>Total Bookings</p>
                <p className="font-bold text-sm" style={{ color: "var(--foreground)" }}>{s.bookings}</p>
              </div>
              <div>
                <p className="text-xs" style={{ color: "var(--nav-text-muted)" }}>Revenue</p>
                <p className="font-bold text-sm text-[#2979d4]">{s.revenue}</p>
              </div>
              <div className="ml-auto flex gap-2">
                <button className="text-xs px-3 py-1 rounded-lg font-semibold" style={{ backgroundColor: "rgba(41,121,212,0.1)", color: "#2979d4" }}>
                  Edit
                </button>
                <button className="text-xs px-3 py-1 rounded-lg font-semibold" style={{ backgroundColor: "rgba(239,68,68,0.1)", color: "#ef4444" }}>
                  Delete
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}