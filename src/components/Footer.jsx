"use client"

const Footer = () => {
  return (
    <>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&display=swap');

        .footer {
          background-color: #1a3c6e;
          color: #ffffff;
          font-family: 'Poppins', sans-serif;
        }

        .footer-main {
          max-width: 1100px;
          margin: 0 auto;
          padding: 48px 24px 36px;
          display: grid;
          grid-template-columns: 2fr 1fr 1fr;
          gap: 40px;
        }

        /* Brand */
        .brand-name {
          font-size: 22px;
          font-weight: 700;
          color: #ffffff;
          margin-bottom: 10px;
          display: flex;
          align-items: center;
          gap: 10px;
        }

        .brand-name span {
          color: #60a5fa;
        }

        .brand-logo-img {
          width: 38px;
          height: 38px;
          object-fit: contain;
          border-radius: 6px;
          background: #fff;
          padding: 4px;
          flex-shrink: 0;
        }

        .brand-logo-icon {
          width: 38px;
          height: 38px;
          background: #2563eb;
          border-radius: 8px;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }

        .brand-desc {
          font-size: 13.5px;
          color: #93b8e8;
          line-height: 1.7;
          margin-bottom: 20px;
        }

        .contact-item {
          display: flex;
          align-items: center;
          gap: 8px;
          font-size: 13px;
          color: #93b8e8;
          margin-bottom: 8px;
          text-decoration: none;
        }

        .contact-item:hover { color: #fff; }

        .contact-item svg {
          color: #60a5fa;
          flex-shrink: 0;
        }

        /* Columns */
        .col-heading {
          font-size: 13px;
          font-weight: 600;
          letter-spacing: 0.1em;
          text-transform: uppercase;
          color: #60a5fa;
          margin-bottom: 16px;
        }

        .footer-links {
          list-style: none;
          padding: 0;
          margin: 0;
        }

        .footer-links li {
          margin-bottom: 10px;
        }

        .footer-links a {
          font-size: 13.5px;
          color: #93b8e8;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-links a:hover {
          color: #ffffff;
        }

        /* Divider */
        .footer-divider {
          border: none;
          border-top: 1px solid #2d5a9e;
          margin: 0;
        }

        /* Bottom bar */
        .footer-bottom {
          max-width: 1100px;
          margin: 0 auto;
          padding: 18px 24px;
          display: flex;
          justify-content: space-between;
          align-items: center;
          flex-wrap: wrap;
          gap: 12px;
        }

        .footer-copy {
          font-size: 13px;
          color: #93b8e8;
        }

        .footer-legal {
          display: flex;
          gap: 20px;
        }

        .footer-legal a {
          font-size: 13px;
          color: #93b8e8;
          text-decoration: none;
          transition: color 0.2s;
        }

        .footer-legal a:hover { color: #fff; }

        /* Responsive */
        @media (max-width: 860px) {
          .footer-main {
            grid-template-columns: 1fr 1fr;
          }
        }

        @media (max-width: 520px) {
          .footer-main {
            grid-template-columns: 1fr;
            gap: 28px;
          }
          .footer-bottom {
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <footer className="footer">
        <div className="footer-main">

          {/* Brand */}
          <div>
            <div className="brand-name">
              {/* Logo icon left of brand name — replace src with your actual logo path */}
              <img 
  src="/logo.png" 
  alt="ShiftEasy Logo" 
  className="brand-logo-img" 
/>
              Easy<span>To Go</span>
            </div>
            <p className="brand-desc">
              Your trusted partner for stress-free house shifting across India. Safe, affordable & on time.
            </p>
            <a href="tel:+911800123456" className="contact-item">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07A19.5 19.5 0 013.07 8.81 19.79 19.79 0 01.01 2.18 2 2 0 012 0h3a2 2 0 012 1.72 12.84 12.84 0 00.7 2.81 2 2 0 01-.45 2.11L6.09 7.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45 12.84 12.84 0 002.81.7A2 2 0 0122 16.92z" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              1800-123-4567 (Toll Free)
            </a>
            <a href="mailto:hello@shifteasy.in" className="contact-item">
              <svg width="14" height="14" fill="none" stroke="currentColor" strokeWidth="2" viewBox="0 0 24 24">
                <path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z" strokeLinecap="round" strokeLinejoin="round"/>
                <polyline points="22,6 12,13 2,6" strokeLinecap="round" strokeLinejoin="round"/>
              </svg>
              hello@shifteasy.in
            </a>
          </div>

          {/* Services */}
          <div>
            <p className="col-heading">Services</p>
            <ul className="footer-links">
              {["Home Shifting", "Office Relocation", "Vehicle Transport", "Storage & Warehousing", "Packing & Unpacking"].map(s => (
                <li key={s}><a href="#">{s}</a></li>
              ))}
            </ul>
          </div>

          {/* Quick Links */}
          <div>
            <p className="col-heading">Quick Links</p>
            <ul className="footer-links">
              {["About Us", "How It Works", "Get a Quote", "Track Your Move", "Reviews", "Contact Us"].map(l => (
                <li key={l}><a href="#">{l}</a></li>
              ))}
            </ul>
          </div>

        </div>

        <hr className="footer-divider" />

        <div className="footer-bottom">
          <p className="footer-copy">© {new Date().getFullYear()} ShiftEasy. All rights reserved.</p>
          <nav className="footer-legal">
            <a href="#">Privacy Policy</a>
            <a href="#">Terms of Service</a>
            <a href="#">Refund Policy</a>
          </nav>
        </div>
      </footer>
    </>
  );
};

export default Footer;