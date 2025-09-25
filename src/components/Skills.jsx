import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs, FaGithub } from "react-icons/fa";
import { SiMongodb, SiExpress, SiJavascript, SiTailwindcss } from "react-icons/si";

const Skills = () => {
  return (
    <section
      id="skills"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center"
      >
        {/* Title */}
        <h2 className="text-4xl font-bold text-teal-400">Skills</h2>

        {/* Technical Skills */}
        <h3 className="mt-10 text-2xl font-semibold text-gray-200">
          Technical Skills
        </h3>
        <div className="mt-6 grid grid-cols-2 sm:grid-cols-4 gap-10 justify-center">
          <div className="flex flex-col items-center hover:scale-110 transition-transform">
            <FaReact className="text-6xl text-blue-400" />
            <p className="mt-2 text-gray-300">React</p>
          </div>
          <div className="flex flex-col items-center hover:scale-110 transition-transform">
            <FaNodeJs className="text-6xl text-green-500" />
            <p className="mt-2 text-gray-300">Node.js</p>
          </div>
          <div className="flex flex-col items-center hover:scale-110 transition-transform">
            <SiExpress className="text-6xl text-gray-300" />
            <p className="mt-2 text-gray-300">Express.js</p>
          </div>
          <div className="flex flex-col items-center hover:scale-110 transition-transform">
            <SiMongodb className="text-6xl text-green-400" />
            <p className="mt-2 text-gray-300">MongoDB</p>
          </div>
          <div className="flex flex-col items-center hover:scale-110 transition-transform">
            <SiJavascript className="text-6xl text-yellow-400" />
            <p className="mt-2 text-gray-300">JavaScript</p>
          </div>
          <div className="flex flex-col items-center hover:scale-110 transition-transform">
            <SiTailwindcss className="text-6xl text-sky-400" />
            <p className="mt-2 text-gray-300">Tailwind CSS</p>
          </div>
          <div className="flex flex-col items-center hover:scale-110 transition-transform">
            <FaGithub className="text-6xl text-gray-100" />
            <p className="mt-2 text-gray-300">Git/GitHub</p>
          </div>
        </div>

        {/* Soft Skills */}
        <h3 className="mt-12 text-2xl font-semibold text-gray-200">
          Soft Skills
        </h3>
        <ul className="mt-6 flex flex-wrap justify-center gap-4 text-lg">
          <li className="px-5 py-2 bg-gray-700 text-gray-200 rounded-full shadow hover:bg-gray-600 transition">
            Communication
          </li>
          <li className="px-5 py-2 bg-gray-700 text-gray-200 rounded-full shadow hover:bg-gray-600 transition">
            Teamwork
          </li>
          <li className="px-5 py-2 bg-gray-700 text-gray-200 rounded-full shadow hover:bg-gray-600 transition">
            Problem-solving
          </li>
          <li className="px-5 py-2 bg-gray-700 text-gray-200 rounded-full shadow hover:bg-gray-600 transition">
            Adaptability
          </li>
        </ul>
      </motion.div>
    </section>
  );
};

export default Skills;
