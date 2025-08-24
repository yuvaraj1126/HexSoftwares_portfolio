import React from 'react';
import { motion } from 'framer-motion';
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss } from "react-icons/si";

function About() {
  return (
    <section
      id="about"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, x: -100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        {/* Title */}
        <h2 className="text-4xl font-bold text-teal-400">About Me</h2>

        {/* Intro */}
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          I’m a passionate Full Stack Developer with experience in building
          modern web applications using the MERN stack. I love solving
          real-world problems and creating projects that deliver value to users.
        </p>

        {/* Skills with Icons */}
        <div className="mt-8 flex flex-wrap justify-center gap-6 text-5xl">
          <span className="text-blue-400 hover:scale-110 transition-transform">
            <FaReact title="React" />
          </span>
          <span className="text-green-500 hover:scale-110 transition-transform">
            <FaNodeJs title="Node.js" />
          </span>
          <span className="text-green-400 hover:scale-110 transition-transform">
            <SiMongodb title="MongoDB" />
          </span>
          <span className="text-sky-400 hover:scale-110 transition-transform">
            <SiTailwindcss title="TailwindCSS" />
          </span>
        </div>
      </motion.div>
    </section>
  );
}

export default About;
