import React from 'react';
import { motion } from "framer-motion";

function Navbar() {
  return (
    <motion.nav
      initial={{ y: -100, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.6 }}
      className="fixed top-0 left-0 w-full bg-gray-900 text-white shadow-md z-50"
    >
      <div className="max-w-6xl mx-auto flex justify-between items-center p-4">
        {/* Logo / Name */}
        <h1 className="text-2xl font-bold text-teal-400">Yuvaraj K</h1>

        {/* Navigation Links */}
        <ul className="flex gap-6">
          <li>
            <a href="#home" className="hover:text-teal-400 transition">Home</a>
          </li>
          <li>
            <a href="#about" className="hover:text-teal-400 transition">About</a>
          </li>
           <li><a href="#resume" className="hover:text-teal-400">Resume</a></li>
          <li><a href="#skills" className="hover:text-teal-400">Skills</a></li>
          <li>
            <a href="#projects" className="hover:text-teal-400 transition">Projects</a>
          </li>
          <li>
            <a href="#contact" className="hover:text-teal-400 transition">Contact</a>
          </li>
        </ul>
      </div>
    </motion.nav>
  );
}

export default Navbar;
