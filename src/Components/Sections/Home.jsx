import React from "react";
import { motion } from "framer-motion";
import mypicture from "../../images/bruce.png";
import "animate.css";

const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0, x: 0, opacity: 1,
      transition: { type: "spring", duration: 1.2, delay, ease: [0.5, 0.25, 0.25, 0.75] },
    },
  };
};

export default function Home() {
  return (
    <section
      id="home"
      className="relative w-full bg-[#09090b] max-w-full overflow-x-hidden pt-6 md:pt-10 px-5 md:px-16 lg:px-28 min-h-screen flex items-center"
    >
      {/* Background Blobs matching Projects */}
      <div className="absolute inset-0 overflow-hidden pointer-events-none z-0">
        <div className="absolute w-[480px] h-[480px] top-[-140px] right-[-120px] bg-[#3b82f6] rounded-full filter blur-[110px] opacity-15 animate-pulse"></div>
        <div className="absolute w-[420px] h-[420px] bottom-[-160px] left-[-100px] bg-[#8b5cf6] rounded-full filter blur-[110px] opacity-15 animate-pulse" style={{animationDelay: '2s'}}></div>
        
        {/* Subtle Grid */}
        <div className="absolute inset-0 bg-[linear-gradient(rgba(255,255,255,0.02)_1px,transparent_1px),linear-gradient(90deg,rgba(255,255,255,0.02)_1px,transparent_1px)] bg-[size:48px_48px] [mask-image:radial-gradient(ellipse_at_center,black_0%,transparent_75%)]"></div>
      </div>

      <div className="container relative z-10 mx-auto flex flex-col md:flex-row items-center justify-center gap-10">
        
        {/* Left Content */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full md:w-1/2 order-1"
        >
          <div className="flex items-center gap-3 mb-5">
            <div className="relative flex items-center">
              <span className="absolute w-2 h-2 bg-[#8b5cf6] rounded-full shadow-[0_0_10px_#8b5cf6]"></span>
              <span className="absolute w-4 h-4 border border-[#8b5cf6] rounded-full opacity-50"></span>
            </div>
            <p className="text-xs text-[#8b5cf6] font-bold uppercase tracking-widest ml-5">
              Generative AI Filmmaker
            </p>
          </div>

          <h3 className="text-2xl lg:text-4xl font-medium mb-3 text-gray-200">
            Hello! I'm
          </h3>

          <h1 className="text-5xl lg:text-7xl font-bold leading-tight mb-5 text-white hover:text-transparent hover:bg-clip-text hover:bg-gradient-to-r hover:from-[#3b82f6] hover:to-[#8b5cf6] transition-all duration-500 cursor-pointer">
            Barongo Bruce
          </h1>

          <p className="text-[15px] leading-8 text-gray-400 max-w-xl mb-8">
            I’m a Generative AI Filmmaker specializing in creating cinematic, high-quality videos powered by artificial intelligence.
            I help YouTube creators, media companies, startups, and brands turn ideas into compelling visual stories—from research and scripting to AI-generated visuals, professional voiceovers, editing, and final delivery.
          </p>

          <motion.div whileHover={{ scale: 1.05, y: -5 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#projects"
              className="inline-block bg-gradient-to-r from-[#3b82f6] to-[#8b5cf6] text-white px-10 py-4 rounded-xl shadow-[0_10px_30px_rgba(59,130,246,0.3)] font-semibold hover:brightness-110 hover:shadow-[0_15px_40px_rgba(139,92,246,0.4)] transition-all duration-300"
            >
              View My Projects
            </a>
          </motion.div>
        </motion.div>

        {/* Right Content */}
        <motion.div
          variants={fadeIn("right", 0.5)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full md:w-1/2 flex justify-center order-2 mt-10 md:mt-0 relative"
        >
          {/* Glow behind image */}
          <div className="absolute w-[300px] h-[300px] bg-[#3b82f6] rounded-full filter blur-[120px] opacity-20 z-0"></div>
          <motion.img
            src={mypicture}
            alt="Barongo Bruce"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="relative z-10 w-full max-w-[280px] md:max-w-[360px] lg:max-w-full lg:h-screen lg:object-cover rounded-2xl border border-white/10 shadow-2xl"
          />
        </motion.div>

      </div>
    </section>
  );
}