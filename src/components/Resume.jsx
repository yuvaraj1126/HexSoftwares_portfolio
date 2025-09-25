import React from "react";
import { motion } from "framer-motion";
import { FaDownload, FaEye } from "react-icons/fa";
import resumeFile from "../assets/resume.pdf";

const Resume = () => {
  return (
    <section
      id="resume"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-900"
    >
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-3xl text-center"
      >
        <h2 className="text-4xl font-bold text-teal-400">Resume</h2>

        <p className="mt-6 text-lg text-gray-300">
          You can view or download my resume below:
        </p>

        <div className="mt-8 flex justify-center gap-6">
          <a
            href={resumeFile}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 px-6 py-3 bg-blue-600 text-white rounded-lg shadow hover:bg-blue-700 transition"
          >
            <FaEye /> View Resume
          </a>
          <a
            href={resumeFile}
            download="Yuvaraj_Resume.pdf"
            className="flex items-center gap-2 px-6 py-3 bg-green-600 text-white rounded-lg shadow hover:bg-green-700 transition"
          >
            <FaDownload /> Download Resume
          </a>
        </div>
      </motion.div>
    </section>
  );
};

export default Resume;
