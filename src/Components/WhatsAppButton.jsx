import React from "react";
import { FaWhatsapp } from "react-icons/fa";

export default function WhatsAppButton() {
  const phoneNumber = "254710802808";
  const defaultMessage = "Hello Bruce! I visited your Generative AI Filmmaker portfolio and I'd like to discuss a project.";
  
  const whatsappURL = `https://wa.me/${phoneNumber}?text=${encodeURIComponent(defaultMessage)}`;

  return (
    <a
      href={whatsappURL}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 group"
      aria-label="Chat on WhatsApp"
    >
      {/* Glow effect */}
      <div className="absolute inset-0 bg-[#25D366] rounded-full blur-xl opacity-40 group-hover:opacity-60 transition-opacity duration-300"></div>
      
      {/* Button */}
      <div className="relative w-14 h-14 bg-[#25D366] rounded-full flex items-center justify-center shadow-[0_0_30px_rgba(37,211,102,0.4)] hover:shadow-[0_0_40px_rgba(37,211,102,0.6)] transition-all duration-300 hover:scale-110">
        <FaWhatsapp className="text-white text-3xl" />
      </div>
      
      {/* Tooltip (optional) */}
      <div className="absolute right-full mr-3 top-1/2 -translate-y-1/2 bg-[#18181b] text-white text-sm px-3 py-2 rounded-lg whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none border border-white/10">
        Chat with me
      </div>
    </a>
  );
}