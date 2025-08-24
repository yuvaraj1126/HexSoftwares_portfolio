import React from 'react';
import { motion } from 'framer-motion';

function Hero() {
  return (
    <section
      id="home"
      className="min-h-screen flex flex-col justify-center items-center text-center bg-gradient-to-b from-gray-900 to-gray-800 px-6"
    >
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
