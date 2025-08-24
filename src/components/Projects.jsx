import React from "react";
import { motion } from "framer-motion";
import { FaReact, FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiTailwindcss, SiJavascript, SiHtml5, SiCss3 } from "react-icons/si";

function Projects() {
  const projects = [
    {
      title: "Recipe Sharing Platform",
      description:
        "Responsive MERN app with authentication, recipe uploads, ratings, comments, and bookmarks. Optimized for performance with Lighthouse score of 95%.",
      tech: [<FaReact className="text-sky-400" />, <FaNodeJs className="text-green-500" />, <SiMongodb className="text-green-400" />, <SiTailwindcss className="text-teal-400" />],
      live: "https://recipesuv.netlify.app/",
      github: "https://github.com/yuvaraj1126/capstone-frontend",
      image: "/projects/Recipe.png",
    },
    {
      title: "E-commerce Shopping Cart",
      description:
        "React-based shopping cart with dynamic product listing, localStorage persistence, and responsive UI using TailwindCSS.",
      tech: [<FaReact className="text-sky-400" />, <SiTailwindcss className="text-teal-400" />, <SiJavascript className="text-yellow-400" />],
      live: "https://reactmodeluv.netlify.app/",
      github: "https://github.com/yuvaraj1126/React-Model",
      image: "/projects/shopping.png",
    },
    {
      title: "Memory Game",
      description:
        "A fun memory card game built with HTML, CSS, and JavaScript. Players flip cards to find matching pairs with shuffle and restart functionality.",
      tech: [<SiHtml5 className="text-orange-500" />, <SiCss3 className="text-blue-500" />, <SiJavascript className="text-yellow-400" />],
      live: "https://uvgameshow.netlify.app/",
      github: "https://github.com/yuvaraj1126/Memory-game",
      image: "/projects/memory.png",
    },
  ];

  return (
    <section id="projects" className="min-h-screen px-6 py-20 bg-gray-900 text-center">
      {/* Section Heading */}
      <motion.h2
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ once: true }}
        className="text-4xl font-bold text-teal-400 mb-12"
      >
        Projects
      </motion.h2>

      {/* Projects Grid */}
      <motion.div
        className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 max-w-6xl mx-auto"
        initial="hidden"
        whileInView="show"
        viewport={{ once: true }}
        variants={{
          hidden: { opacity: 0 },
          show: { opacity: 1, transition: { staggerChildren: 0.2 } },
        }}
      >
        {projects.map((project, index) => (
          <motion.div
            key={index}
            variants={{
              hidden: { opacity: 0, y: 50 },
              show: { opacity: 1, y: 0 },
            }}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.98 }}
            className="bg-gray-800 p-6 rounded-2xl shadow-lg hover:shadow-xl flex flex-col justify-between"
          >
            {/* Image */}
            {project.image && (
              <img
                src={project.image}
                alt={project.title}
                className="w-full h-40 object-cover rounded-lg mb-4"
              />
            )}

            {/* Title + Description */}
            <div>
              <h3 className="text-2xl font-semibold text-white">{project.title}</h3>
              <p className="mt-4 text-gray-300 text-sm">{project.description}</p>
            </div>

            {/* Tech Stack */}
            <div className="flex justify-center gap-4 text-2xl mt-4">
              {project.tech.map((icon, i) => (
                <span key={i}>{icon}</span>
              ))}
            </div>

            {/* Buttons */}
            <div className="mt-6 flex justify-center gap-4">
              <a
                href={project.live}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-teal-500 text-white rounded-lg hover:bg-teal-400 transition"
              >
                Live Demo
              </a>
              <a
                href={project.github}
                target="_blank"
                rel="noopener noreferrer"
                className="px-4 py-2 bg-gray-700 text-white rounded-lg hover:bg-gray-600 transition"
              >
                Code
              </a>
            </div>
          </motion.div>
        ))}
      </motion.div>
    </section>
  );
}

export default Projects;
