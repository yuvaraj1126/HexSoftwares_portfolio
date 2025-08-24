import React from "react";
import { FaGithub, FaLinkedin, FaEnvelope } from "react-icons/fa";

function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-400 py-6 text-center">
      <div className="flex justify-center gap-6 text-2xl mb-4">
        <a href="https://github.com/yuvaraj1126" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
          <FaGithub />
        </a>
        <a href="https://www.linkedin.com/in/yuvaraj-k1101" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition">
          <FaLinkedin />
        </a>
        <a href="mailto:yuvarajdevops01@gmail.com" className="hover:text-teal-400 transition">
          <FaEnvelope />
        </a>
      </div>
      <p className="text-sm">&copy; {new Date().getFullYear()} Yuvaraj. All rights reserved.</p>
    </footer>
  );
}

export default Footer;
