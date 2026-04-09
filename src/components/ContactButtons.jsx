import { FaPhoneAlt, FaWhatsapp } from "react-icons/fa";

export default function ContactButtons() {
  return (
    <div className="fixed bottom-6 right-6 flex flex-col gap-4">
      
      {/* Call Button */}
      <a
        href="tel:+1234567890"
        className="w-14 h-14 rounded-full bg-teal-500 flex items-center justify-center shadow-lg"
      >
        <FaPhoneAlt className="text-white text-xl" />
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/1234567890"
        target="_blank"
        rel="noopener noreferrer"
        className="w-14 h-14 rounded-full bg-green-500 flex items-center justify-center shadow-lg"
      >
        <FaWhatsapp className="text-white text-xl" />
      </a>

    </div>
  );
}