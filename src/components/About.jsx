
export default function About() {
  return (
    <section id="about-us" className="py-28 px-6 bg-[#0d1120]">
        <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-16 items-center">
          <div>
            <span className="text-[#2979d4] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Who We Are</span>
            <h2 className="text-4xl md:text-5xl font-black leading-tight mb-6 text-white">
              Your Trusted Moving
              <span className="text-[#2979d4]"> Partner</span>
            </h2>
            <p className="text-gray-400 text-base leading-relaxed mb-6">
              Easy To Go is a professional house-shifting company dedicated to making your relocation experience seamless and worry-free. With years of expertise, our trained team handles everything from careful packing to safe transportation and unpacking at your new home.
            </p>
            <p className="text-gray-400 text-base leading-relaxed mb-8">
              We use premium packing materials and modern equipment to ensure your belongings arrive safely — no matter the distance.
            </p>
            <a
              href="#contact"
              className="inline-block bg-[#2979d4] hover:bg-[#1d5fb8] text-white font-bold px-7 py-3.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-200 hover:scale-105"
            >
              Get a Free Quote
            </a>
          </div>

          {/* Feature cards */}
          <div className="grid grid-cols-2 gap-4">
            {[
              { icon: "📦", title: "Expert Packing", desc: "Professional packing with premium materials" },
              { icon: "🚛", title: "Safe Transport", desc: "Modern fleet with GPS tracking" },
              { icon: "🏠", title: "Unpacking Help", desc: "We set up your new home too" },
              { icon: "🛡️", title: "Fully Insured", desc: "100% coverage on all goods" },
            ].map((f) => (
              <div
                key={f.title}
                className="bg-white/5 border border-white/10 rounded-2xl p-5 hover:border-[#2979d4]/40 hover:bg-[#2979d4]/5 transition-all duration-300 group"
              >
                <span className="text-3xl mb-3 block">{f.icon}</span>
                <h3 className="text-white font-bold text-sm mb-1 group-hover:text-[#5fa8f0] transition-colors">{f.title}</h3>
                <p className="text-gray-500 text-xs leading-relaxed">{f.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}