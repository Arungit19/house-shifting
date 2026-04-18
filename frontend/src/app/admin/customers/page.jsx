"use client";

import { useState } from "react";

const customers = [
  { id: "C001", name: "Priya Sharma", email: "priya@gmail.com", phone: "9876543210", city: "Delhi", bookings: 3, total: "₹96,000", joined: "Jan 2026", status: "Active" },
  { id: "C002", name: "Rahul Verma", email: "rahul.v@gmail.com", phone: "9812345678", city: "Bangalore", bookings: 1, total: "₹75,000", joined: "Feb 2026", status: "Active" },
  { id: "C003", name: "Neha Singh", email: "neha.s@yahoo.com", phone: "9988776655", city: "Lucknow", bookings: 2, total: "₹17,000", joined: "Mar 2026", status: "Active" },
  { id: "C004", name: "Amit Gupta", email: "amit.g@gmail.com", phone: "9870001122", city: "Bareilly", bookings: 1, total: "₹15,000", joined: "Mar 2026", status: "Inactive" },
  { id: "C005", name: "Sunita Yadav", email: "sunita.y@gmail.com", phone: "9765432100", city: "Kanpur", bookings: 4, total: "₹42,800", joined: "Dec 2025", status: "Active" },
  { id: "C006", name: "Vikas Tiwari", email: "vikas.t@gmail.com", phone: "9654321009", city: "Agra", bookings: 2, total: "₹31,500", joined: "Nov 2025", status: "Active" },
];

export default function CustomersPage() {
  const [search, setSearch] = useState("");

  const filtered = customers.filter(
    (c) =>
      c.name.toLowerCase().includes(search.toLowerCase()) ||
      c.email.toLowerCase().includes(search.toLowerCase()) ||
      c.city.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black" style={{ color: "var(--foreground)" }}>
            Customers
          </h2>
          <p className="text-sm mt-1" style={{ color: "var(--nav-text-muted)" }}>
            {customers.length} registered customers
          </p>
        </div>
        <button
          className="px-4 py-2 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-opacity"
          style={{ backgroundColor: "#2979d4" }}
        >
          + Add Customer
        </button>
      </div>

      {/* Summary Cards */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Customers", value: customers.length, icon: "👥" },
          { label: "Active", value: customers.filter((c) => c.status === "Active").length, icon: "✅" },
          { label: "Inactive", value: customers.filter((c) => c.status === "Inactive").length, icon: "⏸️" },
          { label: "Avg. Bookings", value: (customers.reduce((a, c) => a + c.bookings, 0) / customers.length).toFixed(1), icon: "📋" },
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

      {/* Search */}
      <input
        type="text"
        placeholder="Search by name, email or city..."
        value={search}
        onChange={(e) => setSearch(e.target.value)}
        className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
        style={{
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--border-color)",
          color: "var(--foreground)",
        }}
      />

      {/* Table */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)" }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                {["ID", "Name", "Email", "Phone", "City", "Bookings", "Total Spent", "Joined", "Status"].map((h) => (
                  <th
                    key={h}
                    className="text-left px-5 py-3 text-xs font-bold tracking-wider uppercase"
                    style={{ color: "var(--nav-text-muted)" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {filtered.map((c) => (
                <tr
                  key={c.id}
                  style={{ borderBottom: "1px solid var(--border-color)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(41,121,212,0.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  <td className="px-5 py-4 font-mono text-xs text-[#2979d4]">{c.id}</td>
                  <td className="px-5 py-4 font-semibold" style={{ color: "var(--foreground)" }}>
                    <div className="flex items-center gap-2">
                      <div
                        className="w-7 h-7 rounded-full flex items-center justify-center text-xs font-bold text-white flex-shrink-0"
                        style={{ backgroundColor: "#2979d4" }}
                      >
                        {c.name[0]}
                      </div>
                      {c.name}
                    </div>
                  </td>
                  <td className="px-5 py-4" style={{ color: "var(--nav-text-muted)" }}>{c.email}</td>
                  <td className="px-5 py-4" style={{ color: "var(--nav-text-muted)" }}>{c.phone}</td>
                  <td className="px-5 py-4" style={{ color: "var(--nav-text-muted)" }}>{c.city}</td>
                  <td className="px-5 py-4 text-center font-semibold" style={{ color: "var(--foreground)" }}>{c.bookings}</td>
                  <td className="px-5 py-4 font-semibold" style={{ color: "var(--foreground)" }}>{c.total}</td>
                  <td className="px-5 py-4" style={{ color: "var(--nav-text-muted)" }}>{c.joined}</td>
                  <td className="px-5 py-4">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={{
                        backgroundColor: c.status === "Active" ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)",
                        color: c.status === "Active" ? "#22c55e" : "#ef4444",
                      }}
                    >
                      {c.status}
                    </span>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}