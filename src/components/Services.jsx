export default function Services() {
  return (
    <section id="services" className="py-28 px-6 bg-[#0a0e1a]">
        <div className="max-w-6xl mx-auto">
          <div className="text-center mb-16">
            <span className="text-[#2979d4] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">What We Offer</span>
            <h2 className="text-4xl md:text-5xl font-black text-white">Our Services</h2>
          </div>

          <div className="grid md:grid-cols-3 gap-6">
            {[
              {
                icon: "🏘️",
                title: "Home Shifting",
                desc: "Complete house relocation — local or intercity. We manage the entire process from start to finish.",
                tag: "Most Popular",
              },
              {
                icon: "🏢",
                title: "Office Relocation",
                desc: "Seamless office shifting with minimal downtime. Your business continuity is our priority.",
                tag: null,
              },
              {
                icon: "📦",
                title: "Packing & Unpacking",
                desc: "Expert packing using bubble wrap, foam, and custom crates for fragile and valuable items.",
                tag: null,
              },
              {
                icon: "🚗",
                title: "Vehicle Transport",
                desc: "Safe and insured car transport via enclosed carriers across all major routes.",
                tag: null,
              },
              {
                icon: "🏬",
                title: "Storage Solutions",
                desc: "Secure, climate-controlled storage facilities for short-term and long-term needs.",
                tag: null,
              },
              {
                icon: "🧹",
                title: "Post-Move Cleaning",
                desc: "Deep cleaning services for your old or new home after the move is complete.",
                tag: null,
              },
            ].map((s) => (
              <div
                key={s.title}
                className={`relative bg-white/5 border rounded-2xl p-6 hover:border-[#2979d4]/50 hover:bg-[#2979d4]/5 transition-all duration-300 group cursor-pointer ${
                  s.tag ? "border-[#2979d4]/40" : "border-white/10"
                }`}
              >
                {s.tag && (
                  <span className="absolute -top-3 left-5 bg-[#2979d4] text-white text-xs font-bold px-3 py-1 rounded-full shadow-lg shadow-blue-500/20">
                    {s.tag}
                  </span>
                )}
                <span className="text-4xl mb-4 block">{s.icon}</span>
                <h3 className="text-white font-bold text-lg mb-2 group-hover:text-[#5fa8f0] transition-colors">
                  {s.title}
                </h3>
                <p className="text-gray-400 text-sm leading-relaxed">{s.desc}</p>
                <div className="mt-4 text-[#2979d4] text-sm font-semibold flex items-center gap-1 opacity-0 group-hover:opacity-100 transition-opacity">
                  Learn more <span>→</span>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}