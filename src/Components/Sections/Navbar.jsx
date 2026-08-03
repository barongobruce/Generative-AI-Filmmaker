import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import mypicture from "../../images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#09090b]/80 backdrop-blur-md border-b border-white/5 shadow-[0_4px_30px_rgba(0,0,0,0.5)]">
      <div className="flex justify-between items-center py-4 px-4 md:px-16 lg:px-28 max-w-[1600px] mx-auto">

        {/* Logo */}
        <Link to="/" className="w-1/2 max-w-[140px]">
          <img src={mypicture} alt="Logo" className="w-full drop-shadow-[0_0_10px_rgba(139,92,246,0.3)]" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 w-1/2 justify-end items-center">
          {["home", "about", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                className="text-gray-300 hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#3b82f6] hover:to-[#8b5cf6] font-medium transition-all duration-300 capitalize"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-white hover:text-[#8b5cf6] transition-colors"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-[#09090b]/95 backdrop-blur-lg border-t border-white/5 overflow-hidden transition-all duration-300 ease-in-out ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-6 py-8">
          {["home", "about", "projects", "contact"].map((item) => (
            <li key={item}>
              <a
                href={`#${item}`}
                onClick={() => setIsOpen(false)}
                className="text-gray-200 hover:text-white text-lg font-medium capitalize transition-colors"
              >
                {item}
              </a>
            </li>
          ))}
        </ul>
      </div>
    </nav>
  );
}