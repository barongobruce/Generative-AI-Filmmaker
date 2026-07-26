import React from "react";
import { motion } from "framer-motion";
import mypicture from "../../images/bruce.png";
import "animate.css";

// Animation variants
const fadeIn = (direction, delay) => {
  return {
    hidden: {
      y: direction === "up" ? 40 : direction === "down" ? -40 : 0,
      x: direction === "left" ? 40 : direction === "right" ? -40 : 0,
      opacity: 0,
    },
    show: {
      y: 0,
      x: 0,
      opacity: 1,
      transition: {
        type: "spring",
        duration: 1.2,
        delay,
        ease: [0.5, 0.25, 0.25, 0.75],
      },
    },
  };
};

export default function Home() {
  return (
    <section
      id="home"
      className="w-full bg-[#F9F6F0] max-w-full overflow-x-hidden pt-24 md:pt-28 px-5 md:px-16 lg:px-28"
    >
      <div className="container mx-auto flex flex-col md:flex-row items-center justify-center gap-10 min-h-screen">

        {/* Left Content */}
        <motion.div
          variants={fadeIn("left", 0.3)}
          initial="hidden"
          animate="show"
          exit="hidden"
          className="w-full md:w-1/2 order-1"
        >
          {/* Profession */}
          <div className="flex items-center gap-3 mb-5">
            <div className="relative flex items-center">
              <span className="absolute w-2 h-2 bg-[#613B26] rounded-full"></span>
              <span className="absolute w-4 h-4 border border-[#613B26] rounded-full"></span>
            </div>

            <p className="text-xs text-[#613B26] font-light ml-5">
              Frontend Software Developer
            </p>
          </div>

          {/* Greeting */}
          <h3 className="text-2xl lg:text-4xl font-medium mb-3">
            Hello! I'm
          </h3>

          {/* Name */}
          <h1 className="text-5xl lg:text-7xl font-semibold leading-tight mb-5 hover:animate__heartBeat cursor-pointer">
            Barongo Bruce
          </h1>

          {/* Description */}
          <p className="text-[15px] leading-8 text-black max-w-xl mb-8">
            I build modern, responsive and high-performance web applications
            using Python, HTML, React, JavaScript and Tailwind CSS. I enjoy turning ideas into
            clean, interactive digital experiences with a strong focus on user
            experience and performance.
          </p>

          {/* Button */}
          <motion.div whileHover={{ scale: 1.05 }} whileTap={{ scale: 0.95 }}>
            <a
              href="#projects"
              className="inline-block bg-[#613B26] text-white px-10 py-4 rounded-2xl shadow-xl font-semibold hover:bg-transparent hover:text-[#613B26] hover:border-2 hover:border-[#613B26] transition duration-300"
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
          className="w-full md:w-1/2 flex justify-center order-2 mt-10 md:mt-0"
        >
          <motion.img
            src={mypicture}
            alt="Barongo Bruce"
            initial={{ opacity: 0, scale: 0.9 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.6 }}
            className="w-full max-w-[280px] md:max-w-[360px] lg:max-w-full lg:h-screen lg:object-cover"
          />
        </motion.div>

      </div>
    </section>
  );
}