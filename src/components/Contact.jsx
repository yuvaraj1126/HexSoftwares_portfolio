import React, { useState } from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import emailjs from "@emailjs/browser";

function Contact() {
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => setFormData({ ...formData, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    emailjs
      .send(
        "service_u1101",          // Your EmailJS service ID
        "template_j2jenvv",       // Your EmailJS template ID
        { from_name: formData.name, from_email: formData.email, message: formData.message },
        "1lDbrhelk5-NC8Xhu"      // Your EmailJS public key
      )
      .then(
        () => { alert("Message sent successfully!"); setFormData({ name: "", email: "", message: "" }); },
        () => { alert("Failed to send message. Please try again."); }
      );
  };

  return (
    <section id="contact" className="min-h-screen flex flex-col items-center justify-center px-6 py-20 bg-gray-800 text-center">
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-teal-400 mb-4"
      >
        Contact Me
      </motion.h2>

      <motion.p
        initial={{ opacity: 0 }}
        whileInView={{ opacity: 1 }}
        transition={{ delay: 0.3, duration: 0.8 }}
        className="text-gray-300 mb-8 max-w-2xl"
      >
        Feel free to reach out via the form below or connect with me on LinkedIn / GitHub.
      </motion.p>

      {/* Contact Form */}
      <motion.form
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5, duration: 0.8 }}
        onSubmit={handleSubmit}
        className="flex flex-col gap-4 w-full max-w-xl"
      >
        <input type="text" name="name" value={formData.name} onChange={handleChange} placeholder="Your Name" required className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-teal-400" />
        <input type="email" name="email" value={formData.email} onChange={handleChange} placeholder="Your Email" required className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-teal-400" />
        <textarea name="message" value={formData.message} onChange={handleChange} placeholder="Your Message" rows="5" required className="px-4 py-2 rounded-lg bg-gray-700 text-white focus:outline-teal-400" />
        <button type="submit" className="px-6 py-3 bg-teal-500 text-white rounded-lg hover:bg-teal-400 transition">Send Message</button>
      </motion.form>

      {/* Social Links */}
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.7, duration: 0.8 }}
        className="mt-8 flex justify-center gap-6 text-2xl"
      >
        <a href="https://github.com/yuvaraj1126" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition"><FaGithub /></a>
        <a href="https://www.linkedin.com/in/yuvaraj-k1101" target="_blank" rel="noopener noreferrer" className="hover:text-teal-400 transition"><FaLinkedin /></a>
        <a href="mailto:yuvarajdevops01@gmail.com" className="hover:text-teal-400 transition"><FaEnvelope /></a>
      </motion.div>
    </section>
  );
}

export default Contact;
