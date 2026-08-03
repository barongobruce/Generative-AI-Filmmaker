import React from "react";
import {
  FaXTwitter, FaGithub, FaInstagram, FaFacebook, FaTiktok,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import mypicture from "../../images/logo.png";

export default function Footer() {
  return (
    <footer
      className="max-w-full overflow-x-hidden bg-[#09090b] border-t border-white/5 text-gray-300 py-16 mt-10 px-5 lg:px-30 md:px-20"
      id="footer"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo and Description */}
        <div className="flex flex-col items-start gap-4">
          <Link to="/">
            {/* Added a subtle glow to the logo */}
            <img src={mypicture} alt="Bruce Logo" className="w-28 drop-shadow-[0_0_15px_rgba(59,130,246,0.3)]" />
          </Link>
          <p className="text-sm leading-relaxed text-gray-400 max-w-xs">
            Building modern, responsive, and user-friendly web applications that
            solve real-world problems and create meaningful digital experiences.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold text-white">Connect with me</h3>
          <div className="flex flex-wrap gap-3">
            {/* Replaced brown with glassmorphic blue/purple hovers */}
            {[
              { icon: <FaXTwitter size={20} />, href: "https://x.com/brucee_ke" },
              { icon: <FaGithub size={20} />, href: "https://github.com/barongobruce" },
              { icon: <FaInstagram size={20} />, href: "https://www.instagram.com/brucee_focus?igsh=aGNsaXlsenp0cXl2" },
              { icon: <FaFacebook size={20} />, href: "https://www.facebook.com/brucee.barongo" },
              { icon: <FaTiktok size={20} />, href: "https://www.tiktok.com/@brucee_ke?is_from_webapp=1&sender_device=pc" },
            ].map((social, idx) => (
              <a
                key={idx}
                href={social.href}
                target="_blank"
                rel="noopener noreferrer"
                className="text-[#8b5cf6] bg-white/5 border border-white/10 hover:bg-[#3b82f6]/20 hover:text-white hover:border-[#3b82f6]/50 hover:shadow-[0_0_15px_rgba(59,130,246,0.3)] p-3 rounded-full transition-all duration-300"
              >
                {social.icon}
              </a>
            ))}
          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold text-white">Let's Build Something Great</h3>
          <p className="text-sm leading-relaxed text-gray-400">
            Have a website idea, need a developer, or want to collaborate on a
            project? I'd love to hear from you. Click the button below and let's
            start the conversation on WhatsApp.
          </p>
          <a
            href="https://wa.me/254710802808?text=Hello%20Bruce!%20I%20visited%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-6 py-2.5 bg-[#25D366] text-white font-medium rounded-lg hover:bg-[#1EBE5D] hover:shadow-[0_0_20px_rgba(37,211,102,0.4)] transition-all duration-300"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>
      
      <div className="max-w-7xl mx-auto mt-12 pt-8 border-t border-white/5 text-center text-sm text-gray-500">
        © {new Date().getFullYear()} Barongo Bruce. All rights reserved.
      </div>
    </footer>
  );
}