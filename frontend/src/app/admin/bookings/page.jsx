"use client";

import { useState } from "react";

const allBookings = [
  { id: "#BK1021", customer: "Priya Sharma", phone: "9876543210", service: "Home Shifting", from: "Delhi", to: "Mumbai", date: "16 Apr 2026", amount: "₹32,000", status: "Confirmed" },
  { id: "#BK1020", customer: "Rahul Verma", phone: "9812345678", service: "Office Relocation", from: "Bangalore", to: "Bangalore", date: "15 Apr 2026", amount: "₹75,000", status: "In Progress" },
  { id: "#BK1019", customer: "Neha Singh", phone: "9988776655", service: "Packing & Unpacking", from: "Lucknow", to: "Lucknow", date: "14 Apr 2026", amount: "₹8,500", status: "Completed" },
  { id: "#BK1018", customer: "Amit Gupta", phone: "9870001122", service: "Vehicle Transport", from: "Bareilly", to: "Noida", date: "13 Apr 2026", amount: "₹15,000", status: "Pending" },
  { id: "#BK1017", customer: "Sunita Yadav", phone: "9765432100", service: "Storage Solutions", from: "Kanpur", to: "Kanpur", date: "12 Apr 2026", amount: "₹5,200", status: "Confirmed" },
  { id: "#BK1016", customer: "Vikas Tiwari", phone: "9654321009", service: "Home Shifting", from: "Agra", to: "Pune", date: "11 Apr 2026", amount: "₹28,000", status: "Completed" },
  { id: "#BK1015", customer: "Pooja Mishra", phone: "9543210098", service: "Post-Move Cleaning", from: "Varanasi", to: "Varanasi", date: "10 Apr 2026", amount: "₹3,500", status: "Completed" },
];

const statusStyle = {
  Confirmed: { bg: "rgba(41,121,212,0.15)", color: "#2979d4" },
  "In Progress": { bg: "rgba(251,191,36,0.15)", color: "#f59e0b" },
  Completed: { bg: "rgba(34,197,94,0.15)", color: "#22c55e" },
  Pending: { bg: "rgba(239,68,68,0.15)", color: "#ef4444" },
};

const statuses = ["All", "Confirmed", "In Progress", "Completed", "Pending"];

export default function BookingsPage() {
  const [search, setSearch] = useState("");
  const [filterStatus, setFilterStatus] = useState("All");

  const filtered = allBookings.filter((b) => {
    const matchSearch =
      b.customer.toLowerCase().includes(search.toLowerCase()) ||
      b.id.toLowerCase().includes(search.toLowerCase());
    const matchStatus = filterStatus === "All" || b.status === filterStatus;
    return matchSearch && matchStatus;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black" style={{ color: "var(--foreground)" }}>
            Bookings
          </h2>
          <p className="text-sm mt-1" style={{ color: "var(--nav-text-muted)" }}>
            {allBookings.length} total bookings
          </p>
        </div>
        <button
          className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-opacity hover:opacity-90"
          style={{ backgroundColor: "#2979d4" }}
        >
          + New Booking
        </button>
      </div>

      {/* Filters */}
      <div className="flex flex-col sm:flex-row gap-3">
        <input
          type="text"
          placeholder="Search by name or booking ID..."
          value={search}
          onChange={(e) => setSearch(e.target.value)}
          className="flex-1 px-4 py-2.5 rounded-xl text-sm outline-none"
          style={{
            backgroundColor: "var(--card-bg)",
            border: "1px solid var(--border-color)",
            color: "var(--foreground)",
          }}
        />
        <div className="flex gap-2 flex-wrap">
          {statuses.map((s) => (
            <button
              key={s}
              onClick={() => setFilterStatus(s)}
              className="px-3 py-2 rounded-xl text-xs font-bold transition-all"
              style={{
                backgroundColor: filterStatus === s ? "#2979d4" : "var(--card-bg)",
                color: filterStatus === s ? "#fff" : "var(--nav-text-muted)",
                border: filterStatus === s ? "none" : "1px solid var(--border-color)",
              }}
            >
              {s}
            </button>
          ))}
        </div>
      </div>

      {/* Table */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--border-color)",
        }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                {["Booking ID", "Customer", "Phone", "Service", "Route", "Date", "Amount", "Status", "Action"].map((h) => (
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
              {filtered.length === 0 ? (
                <tr>
                  <td colSpan={9} className="text-center py-10" style={{ color: "var(--nav-text-muted)" }}>
                    No bookings found.
                  </td>
                </tr>
              ) : (
                filtered.map((b) => (
                  <tr
                    key={b.id}
                    style={{ borderBottom: "1px solid var(--border-color)" }}
                    onMouseEnter={(e) =>
                      (e.currentTarget.style.backgroundColor = "rgba(41,121,212,0.05)")
                    }
                    onMouseLeave={(e) =>
                      (e.currentTarget.style.backgroundColor = "transparent")
                    }
                  >
                    <td className="px-5 py-4 font-mono text-xs text-[#2979d4]">{b.id}</td>
                    <td className="px-5 py-4 font-medium" style={{ color: "var(--foreground)" }}>{b.customer}</td>
                    <td className="px-5 py-4" style={{ color: "var(--nav-text-muted)" }}>{b.phone}</td>
                    <td className="px-5 py-4" style={{ color: "var(--nav-text-muted)" }}>{b.service}</td>
                    <td className="px-5 py-4 text-xs" style={{ color: "var(--nav-text-muted)" }}>
                      {b.from} → {b.to}
                    </td>
                    <td className="px-5 py-4" style={{ color: "var(--nav-text-muted)" }}>{b.date}</td>
                    <td className="px-5 py-4 font-semibold" style={{ color: "var(--foreground)" }}>{b.amount}</td>
                    <td className="px-5 py-4">
                      <span className="text-xs font-bold px-3 py-1 rounded-full" style={statusStyle[b.status]}>
                        {b.status}
                      </span>
                    </td>
                    <td className="px-5 py-4">
                      <button className="text-xs text-[#2979d4] font-semibold hover:underline">View</button>
                    </td>
                  </tr>
                ))
              )}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}