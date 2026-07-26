import React from "react";
import {
  FaXTwitter,
  FaGithub,
  FaInstagram,
  FaFacebook,
  FaTiktok,
} from "react-icons/fa6";
import { Link } from "react-router-dom";
import mypicture from "../../images/logo.png";

export default function Footer() {
  return (
    <footer
      className="max-w-full overflow-x-hidden bg-gray-50 text-black py-16 mt-10 px-5 lg:px-30 md:px-20"
      id="footer"
    >
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-10">

        {/* Logo and Description */}
        <div className="flex flex-col items-start gap-4">
          <Link to="/">
            <img src={mypicture} alt="Bruce Logo" className="w-28" />
          </Link>

          <p className="text-sm leading-relaxed">
            Building modern, responsive, and user-friendly web applications that
            solve real-world problems and create meaningful digital experiences.
          </p>
        </div>

        {/* Social Links */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold">Connect with me</h3>

          <div className="flex flex-wrap gap-2">

            <a
              href="https://x.com/brucee_ke"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#613B26] hover:bg-[#BB8E5A] p-2 rounded-full transition"
            >
              <FaXTwitter size={20} />
            </a>

            <a
              href="https://github.com/barongobruce"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#613B26] hover:bg-[#BB8E5A] p-2 rounded-full transition"
            >
              <FaGithub size={20} />
            </a>

            <a
              href="https://www.instagram.com/brucee_focus?igsh=aGNsaXlsenp0cXl2"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#613B26] hover:bg-[#BB8E5A] p-2 rounded-full transition"
            >
              <FaInstagram size={20} />
            </a>

            <a
              href="https://www.facebook.com/brucee.barongo"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#613B26] hover:bg-[#BB8E5A] p-2 rounded-full transition"
            >
              <FaFacebook size={20} />
            </a>

            <a
              href="https://www.tiktok.com/@brucee_ke?is_from_webapp=1&sender_device=pc"
              target="_blank"
              rel="noopener noreferrer"
              className="text-[#613B26] hover:bg-[#BB8E5A] p-2 rounded-full transition"
            >
              <FaTiktok size={20} />
            </a>

          </div>
        </div>

        {/* Call to Action */}
        <div className="flex flex-col items-start gap-4">
          <h3 className="text-lg font-semibold">
            Let's Build Something Great
          </h3>

          <p className="text-sm leading-relaxed">
            Have a website idea, need a developer, or want to collaborate on a
            project? I'd love to hear from you. Click the button below and let's
            start the conversation on WhatsApp.
          </p>

          <a
            href="https://wa.me/254710802808?text=Hello%20Bruce!%20I%20visited%20your%20portfolio%20and%20I'd%20like%20to%20discuss%20a%20project."
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block mt-2 px-5 py-2.5 bg-[#25D366] text-white rounded-lg hover:bg-[#1EBE5D] transition duration-300"
          >
            Chat on WhatsApp
          </a>
        </div>

      </div>
    </footer>
  );
}