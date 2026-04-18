"use client";

import { useState } from "react";

export default function SettingsPage() {
  const [profile, setProfile] = useState({
    name: "Admin",
    email: "admin@easytogo.in",
    phone: "9800000000",
    company: "Easy To Go",
    city: "Moradabad",
  });

  const [notifs, setNotifs] = useState({
    newBooking: true,
    newQuote: true,
    paymentReceived: true,
    marketingEmails: false,
  });

  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 2500);
  };

  return (
    <div className="space-y-8 max-w-3xl">
      <div>
        <h2 className="text-2xl font-black" style={{ color: "var(--foreground)" }}>Settings</h2>
        <p className="text-sm mt-1" style={{ color: "var(--nav-text-muted)" }}>
          Manage your account and preferences
        </p>
      </div>

      {/* Profile */}
      <div
        className="rounded-2xl p-6 space-y-5"
        style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)" }}
      >
        <h3 className="font-bold text-base" style={{ color: "var(--foreground)" }}>
          👤 Profile Information
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {[
            { label: "Full Name", key: "name" },
            { label: "Email", key: "email" },
            { label: "Phone", key: "phone" },
            { label: "Company Name", key: "company" },
            { label: "City", key: "city" },
          ].map((f) => (
            <div key={f.key}>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--nav-text-muted)" }}>
                {f.label}
              </label>
              <input
                type="text"
                value={profile[f.key]}
                onChange={(e) => setProfile({ ...profile, [f.key]: e.target.value })}
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none transition-all"
                style={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border-color)",
                  color: "var(--foreground)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#2979d4")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Notifications */}
      <div
        className="rounded-2xl p-6 space-y-4"
        style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)" }}
      >
        <h3 className="font-bold text-base" style={{ color: "var(--foreground)" }}>
          🔔 Notification Preferences
        </h3>
        {[
          { key: "newBooking", label: "New Booking", desc: "Get notified when a new booking is placed" },
          { key: "newQuote", label: "New Quote Request", desc: "Alert when customer requests a quote" },
          { key: "paymentReceived", label: "Payment Received", desc: "Notify when payment is confirmed" },
          { key: "marketingEmails", label: "Marketing Emails", desc: "Receive promotional & update emails" },
        ].map((n) => (
          <div
            key={n.key}
            className="flex items-center justify-between py-2"
            style={{ borderBottom: "1px solid var(--border-color)" }}
          >
            <div>
              <p className="text-sm font-semibold" style={{ color: "var(--foreground)" }}>{n.label}</p>
              <p className="text-xs" style={{ color: "var(--nav-text-muted)" }}>{n.desc}</p>
            </div>
            <button
              onClick={() => setNotifs({ ...notifs, [n.key]: !notifs[n.key] })}
              className="relative inline-flex h-6 w-11 items-center rounded-full transition-colors duration-300 flex-shrink-0"
              style={{ backgroundColor: notifs[n.key] ? "#2979d4" : "rgba(255,255,255,0.1)" }}
            >
              <span
                className="inline-block h-4 w-4 rounded-full bg-white transition-transform duration-300"
                style={{ transform: notifs[n.key] ? "translateX(24px)" : "translateX(4px)" }}
              />
            </button>
          </div>
        ))}
      </div>

      {/* Password */}
      <div
        className="rounded-2xl p-6 space-y-4"
        style={{ backgroundColor: "var(--card-bg)", border: "1px solid var(--border-color)" }}
      >
        <h3 className="font-bold text-base" style={{ color: "var(--foreground)" }}>
          🔒 Change Password
        </h3>
        <div className="grid sm:grid-cols-2 gap-4">
          {["Current Password", "New Password", "Confirm New Password"].map((label) => (
            <div key={label} className={label === "Current Password" ? "sm:col-span-2" : ""}>
              <label className="block text-xs font-semibold mb-1.5" style={{ color: "var(--nav-text-muted)" }}>
                {label}
              </label>
              <input
                type="password"
                placeholder="••••••••"
                className="w-full px-4 py-2.5 rounded-xl text-sm outline-none"
                style={{
                  backgroundColor: "var(--background)",
                  border: "1px solid var(--border-color)",
                  color: "var(--foreground)",
                }}
                onFocus={(e) => (e.target.style.borderColor = "#2979d4")}
                onBlur={(e) => (e.target.style.borderColor = "var(--border-color)")}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Save */}
      <div className="flex items-center gap-4">
        <button
          onClick={handleSave}
          className="px-6 py-2.5 rounded-xl text-sm font-bold text-white hover:opacity-90 transition-all"
          style={{ backgroundColor: "#2979d4" }}
        >
          Save Changes
        </button>
        {saved && (
          <span className="text-sm font-semibold" style={{ color: "#22c55e" }}>
            ✅ Changes saved!
          </span>
        )}
      </div>
    </div>
  );
}