"use client";

const stats = [
  { label: "Total Bookings", value: "1,284", icon: "📋", change: "+12%", up: true },
  { label: "Active Customers", value: "842", icon: "👥", change: "+8%", up: true },
  { label: "Revenue This Month", value: "₹4,28,500", icon: "💰", change: "+22%", up: true },
  { label: "Pending Quotes", value: "37", icon: "💬", change: "-3%", up: false },
];

const recentBookings = [
  { id: "#BK1021", customer: "Priya Sharma", service: "Home Shifting", city: "Delhi → Mumbai", status: "Confirmed", date: "16 Apr 2026" },
  { id: "#BK1020", customer: "Rahul Verma", service: "Office Relocation", city: "Bangalore", status: "In Progress", date: "15 Apr 2026" },
  { id: "#BK1019", customer: "Neha Singh", service: "Packing & Unpacking", city: "Lucknow", status: "Completed", date: "14 Apr 2026" },
  { id: "#BK1018", customer: "Amit Gupta", service: "Vehicle Transport", city: "Bareilly → Noida", status: "Pending", date: "13 Apr 2026" },
  { id: "#BK1017", customer: "Sunita Yadav", service: "Storage Solutions", city: "Kanpur", status: "Confirmed", date: "12 Apr 2026" },
];

const statusStyle = {
  Confirmed: { bg: "rgba(41,121,212,0.15)", color: "#2979d4" },
  "In Progress": { bg: "rgba(251,191,36,0.15)", color: "#f59e0b" },
  Completed: { bg: "rgba(34,197,94,0.15)", color: "#22c55e" },
  Pending: { bg: "rgba(239,68,68,0.15)", color: "#ef4444" },
};

export default function AdminDashboard() {
  return (
    <div className="space-y-8">
      {/* Welcome */}
      <div>
        <h2 className="text-2xl font-black" style={{ color: "var(--foreground)" }}>
          Welcome back, Admin 👋
        </h2>
        <p className="text-sm mt-1" style={{ color: "var(--nav-text-muted)" }}>
          Here's what's happening with ShiftEase today.
        </p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-2xl p-5"
            style={{
              backgroundColor: "var(--card-bg)",
              border: "1px solid var(--border-color)",
            }}
          >
            <div className="flex items-center justify-between mb-3">
              <span className="text-2xl">{s.icon}</span>
              <span
                className="text-xs font-bold px-2 py-0.5 rounded-full"
                style={{
                  backgroundColor: s.up ? "rgba(34,197,94,0.15)" : "rgba(239,68,68,0.15)",
                  color: s.up ? "#22c55e" : "#ef4444",
                }}
              >
                {s.change}
              </span>
            </div>
            <p className="text-2xl font-black" style={{ color: "var(--foreground)" }}>
              {s.value}
            </p>
            <p className="text-xs mt-1" style={{ color: "var(--nav-text-muted)" }}>
              {s.label}
            </p>
          </div>
        ))}
      </div>

      {/* Recent Bookings */}
      <div
        className="rounded-2xl overflow-hidden"
        style={{
          backgroundColor: "var(--card-bg)",
          border: "1px solid var(--border-color)",
        }}
      >
        <div
          className="flex items-center justify-between px-6 py-4"
          style={{ borderBottom: "1px solid var(--border-color)" }}
        >
          <h3 className="font-bold text-base" style={{ color: "var(--foreground)" }}>
            Recent Bookings
          </h3>
          <a href="/admin/bookings" className="text-xs font-semibold text-[#2979d4] hover:underline">
            View All →
          </a>
        </div>
        <div className="overflow-x-auto">
          <table className="w-full text-sm">
            <thead>
              <tr style={{ borderBottom: "1px solid var(--border-color)" }}>
                {["Booking ID", "Customer", "Service", "Location", "Date", "Status"].map((h) => (
                  <th
                    key={h}
                    className="text-left px-6 py-3 text-xs font-bold tracking-wider uppercase"
                    style={{ color: "var(--nav-text-muted)" }}
                  >
                    {h}
                  </th>
                ))}
              </tr>
            </thead>
            <tbody>
              {recentBookings.map((b) => (
                <tr
                  key={b.id}
                  className="transition-colors"
                  style={{ borderBottom: "1px solid var(--border-color)" }}
                  onMouseEnter={(e) =>
                    (e.currentTarget.style.backgroundColor = "rgba(41,121,212,0.05)")
                  }
                  onMouseLeave={(e) =>
                    (e.currentTarget.style.backgroundColor = "transparent")
                  }
                >
                  <td className="px-6 py-4 font-mono text-xs text-[#2979d4]">{b.id}</td>
                  <td className="px-6 py-4 font-medium" style={{ color: "var(--foreground)" }}>
                    {b.customer}
                  </td>
                  <td className="px-6 py-4" style={{ color: "var(--nav-text-muted)" }}>
                    {b.service}
                  </td>
                  <td className="px-6 py-4" style={{ color: "var(--nav-text-muted)" }}>
                    {b.city}
                  </td>
                  <td className="px-6 py-4" style={{ color: "var(--nav-text-muted)" }}>
                    {b.date}
                  </td>
                  <td className="px-6 py-4">
                    <span
                      className="text-xs font-bold px-3 py-1 rounded-full"
                      style={statusStyle[b.status]}
                    >
                      {b.status}
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