import React from "react";
import { motion } from "framer-motion";
import guviCert from "../assets/guvi-cert.png";

function Certifications() {
  return (
    <section
      id="certifications"
      className="min-h-screen flex items-center justify-center px-6 py-20 bg-gray-800"
    >
      <motion.div
        initial={{ opacity: 0, x: 100 }}
        whileInView={{ opacity: 1, x: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="max-w-4xl text-center"
      >
        {/* Title */}
        <h2 className="text-4xl font-bold text-teal-400">Certifications</h2>

        {/* Intro Text */}
        <p className="mt-6 text-lg text-gray-300 leading-relaxed">
          I continuously upskill myself to stay ahead in the fast-evolving web
          development world. Below is one of my key certifications that
          demonstrates my proficiency in full-stack web development using the
          MERN stack.
        </p>

        {/* Certificate Card */}
        <div className="mt-10 flex justify-center">
          <div className="bg-gray-700 p-8 rounded-3xl shadow-xl max-w-md">
            <img
              src={guviCert}
              alt="GUVI Certification"
              className="w-full h-96 object-cover object-center rounded-xl border-4 border-teal-400 shadow-md"
            />
            <p className="mt-4 text-lg font-semibold text-gray-200">
              GUVI Full Stack Developer Certification
            </p>

            {/* Optional Button */}
            <a
              href={guviCert}
              target="_blank"
              rel="noopener noreferrer"
              className="mt-4 inline-block bg-teal-400 text-gray-900 font-semibold px-6 py-2 rounded-full hover:bg-teal-500 transition-colors"
            >
              View Certificate
            </a>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

export default Certifications;
