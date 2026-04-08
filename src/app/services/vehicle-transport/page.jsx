"use client";
import Navbar from "../../../components/Navbar";
import { useState } from "react";

const CITIES = [
  "Delhi", "Mumbai", "Bangalore", "Hyderabad", "Chennai", "Kolkata",
  "Pune", "Ahmedabad", "Jaipur", "Lucknow", "Moradabad", "Agra",
  "Kanpur", "Varanasi", "Noida",
];

const VEHICLE_TYPES = [
  "Hatchback / Sedan", "SUV / MUV", "Luxury Car",
  "Bike / Scooter", "Commercial Vehicle",
];

const TRANSPORT_MODES = [
  "Open Truck", "Covered Container", "Shared Carrier", "Dedicated Carrier",
];

const STATS = [
  { value: "25K+", label: "Vehicles Moved" },
  { value: "200+", label: "Cities Covered" },
  { value: "15+", label: "Years Experience" },
  { value: "98%", label: "On-time Delivery" },
];

export default function VehicleTransportPage() {
  const [mode, setMode] = useState("within");
  const [city, setCity] = useState("");
  const [fromCity, setFromCity] = useState("");
  const [toCity, setToCity] = useState("");
  const [fromLocation, setFromLocation] = useState("");
  const [toLocation, setToLocation] = useState("");
  const [vehicleType, setVehicleType] = useState("");
  const [transportMode, setTransportMode] = useState("");

  return (
    <>
      <Navbar />

      <div className="min-h-screen bg-[#0b1020] font-['DM_Sans',sans-serif] text-[#e5ecff] pt-20">

        <style>{`
          @import url('https://fonts.googleapis.com/css2?family=DM+Sans:wght@400;500;600;700&family=Sora:wght@700;800&display=swap');

          .check-btn:hover { background: #1d5ed8 !important; transform: translateY(-1px); }
          .service-card:hover, .info-card:hover {
            transform: translateY(-4px);
            border-color: rgba(72, 141, 255, 0.45) !important;
            box-shadow: 0 18px 40px rgba(0,0,0,0.28);
          }

          @media (max-width: 980px) {
            .hero { flex-direction: column !important; align-items: stretch !important; }
            .hero-text { text-align: center; }
            .hero-text p { max-width: 100% !important; margin-left: auto; margin-right: auto; }
            .stats-row { justify-content: center !important; }
            .form-wrap { width: 100% !important; max-width: 560px; margin: 0 auto; }
            .why-inner { flex-direction: column !important; gap: 32px !important; }
          }

          @media (max-width: 640px) {
            .between-cols, .detail-cols, .feature-grid { grid-template-columns: 1fr !important; }
            .hero { padding: 32px 18px 48px !important; }
            .form-wrap { padding: 22px !important; }
            .stats-row { gap: 18px !important; }
          }
        `}</style>

        {/* ── HERO + FORM ── */}
        <section className="hero flex items-center gap-10 px-[5%] pt-[70px] pb-14 max-w-[1280px] mx-auto">

          {/* Left: Hero Text */}
          <div className="hero-text flex-1 min-w-0">

            {/* Badge */}
            <div className="inline-flex items-center gap-2 bg-[rgba(47,110,255,0.12)] border border-[rgba(72,141,255,0.28)] rounded-full px-4 py-[7px] mb-[22px]">
              <span className="w-2 h-2 rounded-full bg-[#4f8fff] shrink-0 inline-block" />
              <span className="text-[13px] text-[#8fb5ff] font-bold tracking-[0.2px]">
                Vehicle Transport
              </span>
            </div>

            {/* Heading */}
            <h1 className="font-['Sora',sans-serif] text-[clamp(2.2rem,4.8vw,4rem)] font-extrabold leading-[1.08] text-white mb-[18px]">
              Door‑to‑Door
              <br />
              <span className="text-[#4f8fff]">Vehicle Transport</span>
            </h1>

            {/* Description */}
            <p className="text-base text-[#9aa6c7] leading-[1.75] max-w-[540px] mb-[30px]">
              Safe car and bike relocation with custom ramps, wheel locks and
              covered carriers. Door‑pickup and door‑delivery support so your
              vehicle reaches the new city safely and on time.
            </p>

            {/* Stats */}
            <div className="stats-row flex gap-7 flex-wrap">
              {STATS.map((s) => (
                <div key={s.label}>
                  <div className="font-['Sora',sans-serif] text-[22px] font-extrabold text-white">
                    {s.value}
                  </div>
                  <div className="text-[12px] text-[#6f7b98] mt-[3px]">
                    {s.label}
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right: Booking Form */}
          <div className="form-wrap w-[410px] shrink-0 bg-[#151b2c] border border-[rgba(95,119,168,0.22)] rounded-3xl p-7 shadow-[0_20px_50px_rgba(0,0,0,0.28)]">
            <h3 className="font-['Sora',sans-serif] text-lg font-bold text-white mb-[18px]">
              Get vehicle transport quote
            </h3>

            {/* Mode Toggle */}
            <div className="flex bg-[#0f1526] border border-[rgba(95,119,168,0.18)] rounded-full p-1 mb-[22px]">
              {["within", "between"].map((m) => (
                <button
                  key={m}
                  type="button"
                  onClick={() => setMode(m)}
                  className={`flex-1 py-[10px] rounded-full border-none cursor-pointer font-bold text-sm transition-all duration-200 ${
                    mode === m ? "bg-[#2f6eff] text-white" : "bg-transparent text-[#8f98b7]"
                  }`}
                >
                  {m === "within" ? "Within City" : "Between Cities"}
                </button>
              ))}
            </div>

            {/* Within City */}
            {mode === "within" ? (
              <>
                <label className="text-[13px] font-semibold text-[#c9d4f2] block mb-2">
                  Select City
                </label>
                <select
                  value={city}
                  onChange={(e) => setCity(e.target.value)}
                  className={`w-full px-[14px] py-[13px] rounded-[14px] border border-[rgba(95,119,168,0.22)] text-sm bg-[#0f1526] mb-[18px] outline-none ${city ? "text-[#f3f6ff]" : "text-[#8f98b7]"}`}
                >
                  <option value="">Select your city</option>
                  {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                </select>

                <label className="text-[13px] font-semibold text-[#c9d4f2] block mb-2">
                  Select pickup and drop location
                </label>
                <div className="mb-[18px]">
                  <input
                    type="text"
                    placeholder="Shifting From"
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    className="w-full px-[14px] py-[13px] rounded-[14px] border border-[rgba(95,119,168,0.22)] text-sm text-[#f3f6ff] bg-[#0f1526] mb-3 outline-none placeholder:text-[#8f98b7]"
                  />
                  <input
                    type="text"
                    placeholder="Shifting To"
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    className="w-full px-[14px] py-[13px] rounded-[14px] border border-[rgba(95,119,168,0.22)] text-sm text-[#f3f6ff] bg-[#0f1526] outline-none placeholder:text-[#8f98b7]"
                  />
                </div>
              </>
            ) : (
              /* Between Cities */
              <div className="between-cols grid grid-cols-2 gap-3 mb-[18px]">
                <div>
                  <label className="text-[13px] font-semibold text-[#c9d4f2] block mb-2">From City</label>
                  <select
                    value={fromCity}
                    onChange={(e) => setFromCity(e.target.value)}
                    className={`w-full px-3 py-[13px] rounded-[14px] border border-[rgba(95,119,168,0.22)] text-sm bg-[#0f1526] outline-none ${fromCity ? "text-[#f3f6ff]" : "text-[#8f98b7]"}`}
                  >
                    <option value="">Select</option>
                    {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>
                <div>
                  <label className="text-[13px] font-semibold text-[#c9d4f2] block mb-2">To City</label>
                  <select
                    value={toCity}
                    onChange={(e) => setToCity(e.target.value)}
                    className={`w-full px-3 py-[13px] rounded-[14px] border border-[rgba(95,119,168,0.22)] text-sm bg-[#0f1526] outline-none ${toCity ? "text-[#f3f6ff]" : "text-[#8f98b7]"}`}
                  >
                    <option value="">Select</option>
                    {CITIES.map((c) => <option key={c} value={c}>{c}</option>)}
                  </select>
                </div>

                {/* Shifting From / To for Between Cities */}
                <div className="col-span-2">
                  <label className="text-[13px] font-semibold text-[#c9d4f2] block mb-2">
                    Pickup &amp; drop location
                  </label>
                  <input
                    type="text"
                    placeholder="Shifting From"
                    value={fromLocation}
                    onChange={(e) => setFromLocation(e.target.value)}
                    className="w-full px-[14px] py-[13px] rounded-[14px] border border-[rgba(95,119,168,0.22)] text-sm text-[#f3f6ff] bg-[#0f1526] mb-3 outline-none placeholder:text-[#8f98b7]"
                  />
                  <input
                    type="text"
                    placeholder="Shifting To"
                    value={toLocation}
                    onChange={(e) => setToLocation(e.target.value)}
                    className="w-full px-[14px] py-[13px] rounded-[14px] border border-[rgba(95,119,168,0.22)] text-sm text-[#f3f6ff] bg-[#0f1526] outline-none placeholder:text-[#8f98b7]"
                  />
                </div>
              </div>
            )}

            {/* Vehicle Details */}
            <label className="text-[13px] font-semibold text-[#c9d4f2] block mb-[10px]">
              Vehicle details
            </label>

            <div className="detail-cols grid grid-cols-2 gap-3 mb-[10px]">

              {/* Vehicle Type */}
              <div className="bg-[#0f1526] border border-[rgba(95,119,168,0.18)] rounded-2xl p-[14px]">
                <div className="text-[12px] font-bold tracking-[0.4px] uppercase text-[#ffdc8b] mb-[10px]">
                  Vehicle Type
                </div>
                <select
                  value={vehicleType}
                  onChange={(e) => setVehicleType(e.target.value)}
                  className={`w-full px-3 py-3 rounded-xl border border-[rgba(95,119,168,0.22)] text-[13px] bg-[#151b2c] outline-none ${vehicleType ? "text-[#f3f6ff]" : "text-[#8f98b7]"}`}
                >
                  <option value="">Select vehicle</option>
                  {VEHICLE_TYPES.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>

              {/* Transport Mode */}
              <div className="bg-[#0f1526] border border-[rgba(95,119,168,0.18)] rounded-2xl p-[14px]">
                <div className="text-[12px] font-bold tracking-[0.4px] uppercase text-[#6de2a6] mb-[10px]">
                  Transport Mode
                </div>
                <select
                  value={transportMode}
                  onChange={(e) => setTransportMode(e.target.value)}
                  className={`w-full px-3 py-3 rounded-xl border border-[rgba(95,119,168,0.22)] text-[13px] bg-[#151b2c] outline-none ${transportMode ? "text-[#f3f6ff]" : "text-[#8f98b7]"}`}
                >
                  <option value="">Select mode</option>
                  {TRANSPORT_MODES.map((item) => <option key={item} value={item}>{item}</option>)}
                </select>
              </div>
            </div>

            {/* Submit */}
            <button
              className="check-btn w-full mt-2 py-[14px] rounded-[14px] border-none bg-[#2f6eff] text-white font-bold text-[15px] cursor-pointer transition-all duration-200 tracking-[0.2px]"
              type="button"
            >
              Get Vehicle Quote
            </button>

            <p className="text-center text-[12px] text-[#7f8baa] mt-[10px]">
              Door pickup • Door delivery • No hidden charges
            </p>
          </div>
        </section>

        {/* ── WHY US ── */}
        <section className="px-[5%] pt-7 pb-20 bg-[rgba(255,255,255,0.01)] border-t border-[rgba(255,255,255,0.04)]">
          <div className="why-inner max-w-[1280px] mx-auto flex gap-[60px] items-center">

            <div className="flex-1">
              <span className="text-[12px] text-[#4f8fff] font-bold tracking-[3px] uppercase">
                Why Us
              </span>
              <h2 className="font-['Sora',sans-serif] text-[clamp(1.8rem,3.2vw,2.8rem)] font-extrabold text-white mt-3 mb-4 leading-[1.2]">
                Your vehicle is tracked,
                <br />
                insured and handled with care.
              </h2>
              <p className="text-[#95a2c2] text-[15px] leading-[1.8] max-w-[560px]">
                From pickup to delivery, our team uses hydraulic ramps, wheel
                locks and GPS‑enabled carriers so your car or bike stays safe and
                you always know where it is during transit.
              </p>
            </div>

            <div className="feature-grid flex-1 grid grid-cols-2 gap-4">
              {[
                { icon: "🚚", title: "Specialised Carriers", desc: "Dedicated and shared car carriers with ramps and wheel locks." },
                { icon: "🛡️", title: "Transit Insurance", desc: "Insurance support for extra safety during long‑distance moves." },
                { icon: "📍", title: "Live Tracking", desc: "Regular updates and tracking support during vehicle transit." },
                { icon: "🧰", title: "Expert Handling", desc: "Trained crew for loading, unloading and inspection at both ends." },
              ].map((f, i) => (
                <div
                  key={i}
                  className="info-card bg-[#171d2d] border border-[rgba(95,119,168,0.16)] rounded-[18px] p-5 transition-all duration-[250ms]"
                >
                  <div className="text-[26px] mb-[10px]">{f.icon}</div>
                  <div className="font-bold text-[15px] text-[#eef3ff] mb-[6px]">{f.title}</div>
                  <div className="text-[13px] text-[#8b97b5] leading-[1.7]">{f.desc}</div>
                </div>
              ))}
            </div>
          </div>
        </section>

      </div>
    </>
  );
}