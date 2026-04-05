export default function Hero() {
  return (
     <section id="home" className="relative min-h-screen flex items-center justify-center overflow-hidden">
        {/* Video Background */}
        <video
          autoPlay
          muted
          loop
          playsInline
          className="absolute inset-0 w-full h-full object-cover opacity-30"
        >
          {/* Place your video at /public/hero-video.mp4 */}
          <source src="/bg_video.mp4" type="video/mp4" />
        </video>

        {/* Gradient overlay 
        <div className="absolute inset-0 bg-gradient-to-br from-[#0a0e1a]/80 via-[#0a0e1a]/60 to-[#0d1a35]/70" />
        <div className="absolute inset-0 bg-gradient-to-t from-[#0a0e1a] via-transparent to-transparent" />

        {/* Animated grid pattern 
        <div
          className="absolute inset-0 opacity-[0.04]"
          style={{
            backgroundImage:
              "linear-gradient(#2979d4 1px, transparent 1px), linear-gradient(90deg, #2979d4 1px, transparent 1px)",
            backgroundSize: "60px 60px",
          }}
        />
        */}

        
        {/* Hero Content */}
        <div className="relative z-10 max-w-5xl mx-auto px-6 text-center">
          <div className="inline-flex items-center gap-2 bg-[#2979d4]/15 border border-[#2979d4]/30 text-[#5fa8f0] text-xs font-semibold uppercase tracking-widest px-4 py-2 rounded-full mb-8">
            <span className="w-2 h-2 rounded-full bg-[#2979d4] animate-pulse" />
            Trusted House Shifting Service
          </div>

          <h1 className="text-5xl md:text-7xl font-black leading-tight tracking-tight mb-6">
            <span className="text-white">Moving Made</span>
            <br />
            <span className="text-[#2979d4]">Easy &amp; Stress-Free</span>
          </h1>

          <p className="text-lg md:text-xl text-gray-400 max-w-2xl mx-auto leading-relaxed mb-10">
            Professional house shifting services at your doorstep. We handle your valuables with care — from packing to unpacking.
          </p>

          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <a
              href="#services"
              className="bg-[#2979d4] hover:bg-[#1d5fb8] text-white font-bold px-8 py-4 rounded-2xl shadow-2xl shadow-blue-500/30 transition-all duration-300 hover:scale-105 hover:shadow-blue-500/50 text-base"
            >
              Book a Move
            </a>
            <a
              href="#about-us"
              className="bg-white/5 hover:bg-white/10 border border-white/15 hover:border-white/30 text-white font-semibold px-8 py-4 rounded-2xl transition-all duration-300 text-base"
            >
              Learn More
            </a>
          </div>

          {/* Stats row */}
          <div className="mt-20 grid grid-cols-3 gap-4 max-w-2xl mx-auto">
            {[
              { num: "00+", label: "Happy Families" },
              { num: "0+", label: "Cities Covered" },
              { num: "4.9★", label: "Average Rating" },
            ].map((stat) => (
              <div
                key={stat.label}
                className="bg-white/5 border border-white/10 rounded-2xl px-4 py-5 backdrop-blur-sm"
              >
                <p className="text-2xl md:text-3xl font-black text-[#2979d4]">{stat.num}</p>
                <p className="text-xs text-gray-400 mt-1 font-medium">{stat.label}</p>
              </div>
            ))}
          </div>
        </div>

        {/* Scroll indicator */}
        <div className="absolute bottom-10 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 opacity-50">
          <span className="text-xs text-gray-400 tracking-widest uppercase">Scroll</span>
          <div className="w-0.5 h-8 bg-gradient-to-b from-[#2979d4] to-transparent rounded-full animate-pulse" />
        </div>
      </section>
  );
}