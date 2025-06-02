import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function AboutMe() {
  const skills = [
    "JavaScript",
    "React",
    "Node.js",
    "Express",
    "MongoDB",
    "Tailwind CSS",
    "Git",
    "REST APIs",
  ];

  return (
    <div id="about" className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-6 py-16 flex items-center justify-center relative overflow-hidden">
      
      {/* Background Glow Circle */}
      <div className="absolute top-1/4 left-1/2 w-[400px] h-[400px] bg-orange-500 rounded-full opacity-20 blur-3xl transform -translate-x-1/2 -z-10"></div>

      <motion.div
        className="w-full max-w-4xl bg-zinc-900 p-10 rounded-3xl shadow-2xl border border-orange-500 backdrop-blur-sm"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        <motion.h2
          className="text-4xl font-bold text-orange-500 mb-4 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          About Me
        </motion.h2>

        <motion.p
          className="text-gray-300 text-lg mb-10 text-center max-w-2xl mx-auto"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          I'm a passionate Full Stack Developer who thrives on building dynamic, responsive web applications. I love exploring new tools, optimizing performance, and delivering clean, maintainable code.
        </motion.p>

        <motion.div
          className="mb-10"
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          transition={{ duration: 0.6, delay: 0.5 }}
          viewport={{ once: true }}
        >
          <h3 className="text-2xl font-semibold text-orange-400 mb-5 text-center">
            Skills
          </h3>
          <div className="flex flex-wrap justify-center gap-4">
            {skills.map((skill, i) => (
              <motion.span
                key={i}
                className="px-4 py-2 bg-zinc-800 border border-zinc-700 rounded-full text-sm cursor-pointer hover:bg-orange-500 hover:text-black transition shadow-md hover:shadow-orange-500/30"
                whileHover={{ scale: 1.1 }}
                whileTap={{ scale: 0.95 }}
              >
                {skill}
              </motion.span>
            ))}
          </div>
        </motion.div>

        <motion.div
          className="flex justify-center gap-8 mt-10 text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <motion.a
            href="https://linkedin.com/in/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-orange-500 transition"
            whileHover={{ y: -5, scale: 1.1 }}
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-orange-500 transition"
            whileHover={{ y: -5, scale: 1.1 }}
          >
            <FaGithub />
          </motion.a>
          <motion.a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-orange-500 transition"
            whileHover={{ y: -5, scale: 1.1 }}
          >
            <FaTwitter />
          </motion.a>
        </motion.div>
      </motion.div>
    </div>
  );
}
