"use client";

import { useState } from "react";

const quotes = [
  { id: "Q501", customer: "Deepak Saxena", phone: "9871234560", from: "Bareilly", to: "Delhi", service: "Home Shifting", rooms: "2BHK", date: "16 Apr 2026", estimate: "₹18,000 – ₹22,000", status: "Pending" },
  { id: "Q500", customer: "Anjali Rao", phone: "9988112233", from: "Hyderabad", to: "Pune", service: "Office Relocation", rooms: "Small Office", date: "15 Apr 2026", estimate: "₹45,000 – ₹60,000", status: "Sent" },
  { id: "Q499", customer: "Manoj Kumar", phone: "9765001122", from: "Lucknow", to: "Lucknow", service: "Packing & Unpacking", rooms: "3BHK", date: "14 Apr 2026", estimate: "₹9,000 – ₹12,000", status: "Accepted" },
  { id: "Q498", customer: "Ritu Agarwal", phone: "9654223344", from: "Jaipur", to: "Mumbai", service: "Home Shifting", rooms: "1BHK", date: "13 Apr 2026", estimate: "₹25,000 – ₹30,000", status: "Rejected" },
  { id: "Q497", customer: "Suresh Pandey", phone: "9543112345", from: "Varanasi", to: "Kolkata", service: "Vehicle Transport", rooms: "1 Car", date: "12 Apr 2026", estimate: "₹12,000 – ₹16,000", status: "Pending" },
];

const statusStyle = {
  Pending: { bg: "rgba(251,191,36,0.15)", color: "#f59e0b" },
  Sent: { bg: "rgba(41,121,212,0.15)", color: "#2979d4" },
  Accepted: { bg: "rgba(34,197,94,0.15)", color: "#22c55e" },
  Rejected: { bg: "rgba(239,68,68,0.15)", color: "#ef4444" },
};

export default function QuotesPage() {
  const [selected, setSelected] = useState(null);

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
        <div>
          <h2 className="text-2xl font-black" style={{ color: "var(--foreground)" }}>
            Quotes
          </h2>
          <p className="text-sm mt-1" style={{ color: "var(--nav-text-muted)" }}>
            Manage shifting quote requests from customers
          </p>
        </div>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Quotes", value: quotes.length, icon: "💬" },
          { label: "Pending", value: quotes.filter((q) => q.status === "Pending").length, icon: "⏳" },
          { label: "Accepted", value: quotes.filter((q) => q.status === "Accepted").length, icon: "✅" },
          { label: "Rejected", value: quotes.filter((q) => q.status === "Rejected").length, icon: "❌" },
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

      {/* Cards Grid */}
      <div className="grid md:grid-cols-2 gap-4">
        {quotes.map((q) => (
          <div
            key={q.id}
            className="rounded-2xl p-5 transition-all duration-200 cursor-pointer"
            style={{
              backgroundColor: "var(--card-bg)",
              border: selected === q.id ? "1px solid #2979d4" : "1px solid var(--border-color)",
            }}
            onClick={() => setSelected(selected === q.id ? null : q.id)}
          >
            <div className="flex items-start justify-between mb-3">
              <div>
                <span className="font-mono text-xs text-[#2979d4]">{q.id}</span>
                <h3 className="font-bold mt-0.5" style={{ color: "var(--foreground)" }}>{q.customer}</h3>
                <p className="text-xs" style={{ color: "var(--nav-text-muted)" }}>{q.phone}</p>
              </div>
              <span className="text-xs font-bold px-3 py-1 rounded-full" style={statusStyle[q.status]}>
                {q.status}
              </span>
            </div>

            <div className="flex items-center gap-2 mb-2">
              <span className="text-xs font-semibold px-2 py-0.5 rounded-lg" style={{ backgroundColor: "rgba(41,121,212,0.1)", color: "#2979d4" }}>
                {q.service}
              </span>
              <span className="text-xs" style={{ color: "var(--nav-text-muted)" }}>{q.rooms}</span>
            </div>

            <p className="text-sm" style={{ color: "var(--nav-text-muted)" }}>
              📍 {q.from} → {q.to}
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--nav-text-muted)" }}>
              Requested: {q.date}
            </p>

            <div
              className="mt-3 pt-3 flex items-center justify-between"
              style={{ borderTop: "1px solid var(--border-color)" }}
            >
              <span className="font-bold text-sm text-[#2979d4]">{q.estimate}</span>
              {q.status === "Pending" && (
                <div className="flex gap-2">
                  <button
                    className="text-xs px-3 py-1 rounded-lg font-semibold text-white"
                    style={{ backgroundColor: "#2979d4" }}
                  >
                    Send Quote
                  </button>
                  <button
                    className="text-xs px-3 py-1 rounded-lg font-semibold"
                    style={{ backgroundColor: "rgba(239,68,68,0.15)", color: "#ef4444" }}
                  >
                    Reject
                  </button>
                </div>
              )}
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}