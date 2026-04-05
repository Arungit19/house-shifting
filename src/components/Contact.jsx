export default function Contact() {
  return (
    <section id="contact" className="py-28 px-6 bg-[#0a0e1a]">
        <div className="max-w-4xl mx-auto">
          <div className="text-center mb-14">
            <span className="text-[#2979d4] text-xs font-bold tracking-[0.3em] uppercase mb-4 block">Reach Out</span>
            <h2 className="text-4xl md:text-5xl font-black text-white">Get In Touch</h2>
            <p className="text-gray-400 mt-4 text-base max-w-xl mx-auto">
              Ready to move? Get a free quote today or reach us for any questions.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              {[
                { icon: "📍", label: "Address", value: "Moradabad, Uttar Pradesh, India" },
                { icon: "📞", label: "Phone", value: "+91 98765 43210" },
                { icon: "📧", label: "Email", value: "hello@gmail.com" },
                { icon: "🕐", label: "Hours", value: "Mon–Sat: 8AM – 8PM" },
              ].map((c) => (
                <div key={c.label} className="flex items-start gap-4 bg-white/5 border border-white/10 rounded-2xl p-5">
                  <span className="text-2xl mt-0.5">{c.icon}</span>
                  <div>
                    <p className="text-[#2979d4] text-xs font-bold uppercase tracking-wider mb-1">{c.label}</p>
                    <p className="text-white font-medium text-sm">{c.value}</p>
                  </div>
                </div>
              ))}

               {/* ✅ Google Map */}
  <div className="rounded-2xl overflow-hidden border border-white/10 hover:scale-[1.02] transition-transform duration-300">
    <iframe
      src="https://www.google.com/maps?q=Moradabad,Uttar Pradesh,India&output=embed"
      width="100%"
      height="150"
      style={{ border: 0 }}
      allowFullScreen=""
      loading="lazy"
      referrerPolicy="no-referrer-when-downgrade"
      title="Google Map"
    ></iframe>
  </div>
            </div>

            {/* Contact Form */}
            <form className="space-y-4 bg-white/5 border border-white/10 rounded-2xl p-6">
              <div>
                <label className="text-xs text-gray-400 font-medium uppercase tracking-wider block mb-2">Your Name</label>
                <input
                  type="text"
                  placeholder="Name"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#2979d4]/60 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 font-medium uppercase tracking-wider block mb-2">Phone </label>
                <input
                  type="Numbar"
                  placeholder="+91 98765 43210"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#2979d4]/60 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 font-medium uppercase tracking-wider block mb-2"> Email</label>
                <input
                  type="text"
                  placeholder="Mail"
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#2979d4]/60 transition-colors"
                />
              </div>
              <div>
                <label className="text-xs text-gray-400 font-medium uppercase tracking-wider block mb-2">Message</label>
                <textarea
                  rows={4}
                  placeholder="Shifting from All over India, need packing + transport..."
                  className="w-full bg-white/5 border border-white/15 rounded-xl px-4 py-3 text-white text-sm placeholder-gray-600 focus:outline-none focus:border-[#2979d4]/60 transition-colors resize-none"
                />
              </div><br></br>
              <button
                type="submit"
                className="w-full bg-[#2979d4] hover:bg-[#1d5fb8] text-white font-bold py-3.5 rounded-xl shadow-lg shadow-blue-500/20 transition-all duration-200 hover:scale-[1.02]"
              >
                Send Message
              </button>
            </form>
          </div>
        </div>
      </section>
  );
}