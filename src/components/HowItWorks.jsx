export default function HowItWorks() {
  return (
    <section className="py-28 px-6 bg-[#0d1120]">
        <div className="max-w-5xl mx-auto text-center">
          <span className="text-[#2979d4] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Simple Process</span>
          <h2 className="text-4xl md:text-5xl font-black text-white mb-16">How It Works</h2>
          <div className="grid md:grid-cols-4 gap-6 relative">
            {/* connector line */}
            <div className="hidden md:block absolute top-10 left-[12%] right-[12%] h-0.5 bg-gradient-to-r from-[#2979d4]/20 via-[#2979d4]/60 to-[#2979d4]/20" />

            {[
              { step: "01", title: "Book Online", desc: "Fill in your details and get an instant quote" },
              { step: "02", title: "Survey Visit", desc: "Our team visits to assess your items" },
              { step: "03", title: "Pack & Move", desc: "Expert packing, loading, and safe transport" },
              { step: "04", title: "Settle In", desc: "Unpacking and setup at your new place" },
            ].map((step) => (
              <div key={step.step} className="relative flex flex-col items-center text-center">
                <div className="w-20 h-20 rounded-2xl bg-[#2979d4]/15 border border-[#2979d4]/30 flex items-center justify-center mb-5 relative z-10">
                  <span className="text-2xl font-black text-[#2979d4]">{step.step}</span>
                </div>
                <h3 className="text-white font-bold text-base mb-2">{step.title}</h3>
                <p className="text-gray-400 text-sm leading-relaxed">{step.desc}</p>
              </div>
            ))}
          </div>
        </div>
      </section>
  );
}