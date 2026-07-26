import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import mypicture from "../../images/logo.png";

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#F9F6F0] shadow-lg">
      <div className="flex justify-between items-center py-6 px-4 md:px-16 lg:px-28">

        {/* Logo */}
        <Link to="/" className="w-1/2">
          <img src={mypicture} alt="Logo" className="w-26" />
        </Link>

        {/* Desktop Menu */}
        <ul className="hidden md:flex gap-10 w-1/2 justify-end">
          <li>
            <a href="#home" className="hover:text-[#613B26] transition">
              Home
            </a>
          </li>

          <li>
            <a href="#about" className="hover:text-[#613B26] transition">
              About
            </a>
          </li>

          <li>
            <a href="#projects" className="hover:text-[#613B26] transition">
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" className="hover:text-[#613B26] transition">
              Contact
            </a>
          </li>
        </ul>

        {/* Mobile Menu Button */}
        <button
          className="md:hidden text-black"
          onClick={() => setIsOpen(!isOpen)}
          aria-expanded={isOpen}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Dropdown */}
      <div
        className={`md:hidden bg-black text-white overflow-hidden transition-all duration-300 ${
          isOpen ? "max-h-96 opacity-100" : "max-h-0 opacity-0"
        }`}
      >
        <ul className="flex flex-col items-center gap-8 py-8">
          <li>
            <a href="#home" onClick={() => setIsOpen(false)}>
              Home
            </a>
          </li>

          <li>
            <a href="#about" onClick={() => setIsOpen(false)}>
              About
            </a>
          </li>

          <li>
            <a href="#projects" onClick={() => setIsOpen(false)}>
              Projects
            </a>
          </li>

          <li>
            <a href="#contact" onClick={() => setIsOpen(false)}>
              Contact
            </a>
          </li>
        </ul>
      </div>
    </nav>
  );
}