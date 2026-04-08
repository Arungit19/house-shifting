"use client"

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');
        .footer-font { font-family: 'Poppins', sans-serif; }
      `}</style>

      <footer className="footer-font bg-[#1a3c6e] text-white">

        {/* Main Grid */}
        <div className="max-w-[1100px] mx-auto px-6 pt-12 pb-9 grid grid-cols-1 lg:grid-cols-[2fr_1fr_1fr] gap-10">

          {/* Brand */}
          <div>
            <div className="flex items-center gap-2.5 text-[22px] font-bold text-white mb-2.5">
              <img
                src="/logo.png"
                alt="ShiftEasy Logo"
                className="w-[38px] h-[38px] object-contain rounded-md bg-white p-1 shrink-0"
              />
              Easy<span className="text-blue-400">To Go</span>
            </div>

            <p className="text-[13.5px] text-[#93b8e8] leading-[1.7] mb-5">
              Your trusted partner for stress-free house shifting across India. Safe, affordable &amp; on time.
            </p>

            <a href="tel:+911800123456" className="flex items-center gap-2 text-[13px] text-[#93b8e8] no-underline mb-2 hover:text-white transition-colors">
              <svg className="text-blue-400 shrink-0" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              1800-123-4567 (Toll Free)
            </a>

            <a href="mailto:hello@shifteasy.in" className="flex items-center gap-2 text-[13px] text-[#93b8e8] no-underline hover:text-white transition-colors">
              <svg className="text-blue-400 shrink-0" width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              hello@shifteasy.in
            </a>
          </div>

          {/* Services + Quick Links: always side by side on mobile via flex, separate grid cols on desktop via lg:contents */}
          <div className="flex gap-10 lg:contents">

            {/* Services */}
            <div className="flex-1">
              <p className="text-[13px] font-semibold tracking-[0.1em] uppercase text-blue-400 mb-4">
                Services
              </p>
              <ul className="list-none p-0 m-0">
                {["Home Shifting", "Office Relocation", "Vehicle Transport", "Storage & Warehousing", "Packing & Unpacking"].map(s => (
                  <li key={s} className="mb-2.5">
                    <a href="#" className="text-[13.5px] text-[#93b8e8] no-underline hover:text-white transition-colors">
                      {s}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

            {/* Quick Links */}
            <div className="flex-1">
              <p className="text-[13px] font-semibold tracking-[0.1em] uppercase text-blue-400 mb-4">
                Quick Links
              </p>
              <ul className="list-none p-0 m-0">
                {["About Us", "How It Works", "Get a Quote", "Track Your Move", "Reviews", "Contact Us"].map(l => (
                  <li key={l} className="mb-2.5">
                    <a href="#" className="text-[13.5px] text-[#93b8e8] no-underline hover:text-white transition-colors">
                      {l}
                    </a>
                  </li>
                ))}
              </ul>
            </div>

          </div>

        </div>

        {/* Divider */}
        <hr className="border-none border-t border-[#2d5a9e] m-0" />

        {/* Bottom Bar */}
        <div className="max-w-[1100px] mx-auto px-6 py-[18px] flex flex-col sm:flex-row justify-between items-start sm:items-center flex-wrap gap-3">
          <p className="text-[13px] text-[#93b8e8] m-0">
            © {new Date().getFullYear()} ShiftEasy. All rights reserved.
          </p>
          <nav className="flex gap-5">
            {["Privacy Policy", "Terms of Service", "Refund Policy"].map(link => (
              <a key={link} href="#" className="text-[13px] text-[#93b8e8] no-underline hover:text-white transition-colors">
                {link}
              </a>
            ))}
          </nav>
        </div>

      </footer>
    </>
  );
};

export default Footer;