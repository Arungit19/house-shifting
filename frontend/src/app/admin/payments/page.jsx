"use client";

import { useState } from "react";

const payments = [
  { id: "PAY2601", booking: "#BK1021", customer: "Priya Sharma", method: "UPI", amount: "₹32,000", date: "16 Apr 2026", status: "Success" },
  { id: "PAY2600", booking: "#BK1020", customer: "Rahul Verma", method: "Net Banking", amount: "₹37,500", date: "15 Apr 2026", status: "Success" },
  { id: "PAY2599", booking: "#BK1019", customer: "Neha Singh", method: "UPI", amount: "₹8,500", date: "14 Apr 2026", status: "Success" },
  { id: "PAY2598", booking: "#BK1018", customer: "Amit Gupta", method: "Card", amount: "₹15,000", date: "13 Apr 2026", status: "Failed" },
  { id: "PAY2597", booking: "#BK1017", customer: "Sunita Yadav", method: "UPI", amount: "₹5,200", date: "12 Apr 2026", status: "Success" },
  { id: "PAY2596", booking: "#BK1016", customer: "Vikas Tiwari", method: "Card", amount: "₹28,000", date: "11 Apr 2026", status: "Refunded" },
  { id: "PAY2595", booking: "#BK1015", customer: "Pooja Mishra", method: "Cash", amount: "₹3,500", date: "10 Apr 2026", status: "Success" },
];

const statusStyle = {
  Success: { bg: "rgba(34,197,94,0.15)", color: "#22c55e" },
  Failed: { bg: "rgba(239,68,68,0.15)", color: "#ef4444" },
  Refunded: { bg: "rgba(251,191,36,0.15)", color: "#f59e0b" },
  Pending: { bg: "rgba(41,121,212,0.15)", color: "#2979d4" },
};

const methodIcon = { UPI: "📱", "Net Banking": "🏦", Card: "💳", Cash: "💵" };

export default function PaymentPage() {
  const [filterMethod, setFilterMethod] = useState("All");

  const methods = ["All", "UPI", "Net Banking", "Card", "Cash"];

  const filtered =
    filterMethod === "All" ? payments : payments.filter((p) => p.method === filterMethod);

  const totalSuccess = payments
    .filter((p) => p.status === "Success")
    .reduce((a, p) => a + parseInt(p.amount.replace(/[^\d]/g, "")), 0);

  return (
    <div className="space-y-6">
      <div>
        <h2 className="text-2xl font-black" style={{ color: "var(--foreground)" }}>
          Payments
        </h2>
        <p className="text-sm mt-1" style={{ color: "var(--nav-text-muted)" }}>
          Track all transactions and payment statuses
        </p>
      </div>

      {/* Summary */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {[
          { label: "Total Collected", value: `₹${totalSuccess.toLocaleString()}`, icon: "💰" },
          { label: "Successful", value: payments.filter((p) => p.status === "Success").length, icon: "✅" },
          { label: "Failed", value: payments.filter((p) => p.status === "Failed").length, icon: "❌" },
          { label: "Refunded", value: payments.filter((p) => p.status === "Refunded").length, icon: "↩️" },
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

      {/* Method Filter */}
      <div className="flex gap-2 flex-wrap">
        {methods.map((m) => (
          <button
            key={m}
            onClick={() => setFilterMethod(m)}
            className="px-3 py-2 rounded-xl text-xs font-bold transition-all"
            style={{
              backgroundColor: filterMethod === m ? "#2979d4" : "var(--card-bg)",
              color: filterMethod === m ? "#fff" : "var(--nav-text-muted)",
              border: filterMethod === m ? "none" : "1px solid var(--border-color)",
            }}
          >
            {m !== "All" && methodIcon[m]} {m}
          </button>
        ))}
      </div>

      {/* Table */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)" }}
      >
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                {["Payment ID", "Booking", "Customer", "Method", "Amount", "Date", "Status"].map((h) => (
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
              {filtered.map((p) => (
                <tr
                  key={p.id}
                  style={{ borderBottom: "1px solid var(--border-color)" }}
                  onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "rgba(41,121,212,0.05)")}
                  onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "transparent")}
                >
                  <td className="px-5 py-4 font-mono text-xs text-[#2979d4]">{p.id}</td>
                  <td className="px-5 py-4 font-mono text-xs" style={{ color: "var(--nav-text-muted)" }}>{p.booking}</td>
                  <td className="px-5 py-4 font-medium" style={{ color: "var(--foreground)" }}>{p.customer}</td>
                  <td className="px-5 py-4" style={{ color: "var(--nav-text-muted)" }}>
                    {methodIcon[p.method]} {p.method}
                  </td>
                  <td className="px-5 py-4 font-semibold" style={{ color: "var(--foreground)" }}>{p.amount}</td>
                  <td className="px-5 py-4" style={{ color: "var(--nav-text-muted)" }}>{p.date}</td>
                  <td className="px-5 py-4">
                    <span className="text-xs font-bold px-3 py-1 rounded-full" style={statusStyle[p.status]}>
                      {p.status}
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