import React from 'react';
import { motion } from 'framer-motion';
import profile from "../assets/profile.jpg";

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-gray-800 px-6"
    >
      {/* Small Profile Picture with Zoom on Hover */}
      <motion.img
        src={profile}
        alt="Profile"
        initial={{ opacity: 0, y: -20 }}
        animate={{ opacity: 1, y: 0 }}
        whileHover={{ scale: 1.15 }}   // ✅ zoom effect
        transition={{ duration: 0.5 }}
        className="w-24 h-24 md:w-28 md:h-28 rounded-full border-4 border-teal-400 shadow-lg mb-6 object-cover object-center cursor-pointer"
      />

      {/* Main Heading */}
      <motion.h1
        initial={{ opacity: 0, y: -50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="text-5xl md:text-6xl font-bold text-teal-400"
      >
        Hi, I’m Yuvaraj 👋
      </motion.h1>

      {/* Subtitle */}
      <motion.p
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        className="mt-4 text-xl md:text-2xl text-gray-300"
      >
        Full Stack Developer | MERN Stack
      </motion.p>

      {/* Button */}
      <motion.a
        href="#projects"
        whileHover={{ scale: 1.1 }}
        whileTap={{ scale: 0.95 }}
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 1, duration: 0.8 }}
        className="mt-6 px-6 py-3 bg-teal-500 text-white rounded-xl shadow-lg hover:bg-teal-400"
      >
        View My Work
      </motion.a>
    </section>
  );
}

export default Hero;
