import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub } from "react-icons/fa";

export default function AboutMe() {
  return (
    <div
      id="about"
      className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-6 py-20 flex items-center justify-center relative overflow-hidden"
    >
      {/* Glow Effect */}
      <div className="absolute top-1/4 left-1/2 w-[400px] h-[400px] bg-orange-500 rounded-full opacity-20 blur-3xl transform -translate-x-1/2 -z-10"></div>

      <motion.div
        className="w-full max-w-4xl bg-zinc-900 p-10 rounded-3xl shadow-2xl border border-orange-500 backdrop-blur-sm"
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
      >
        {/* Heading */}
        <motion.h2
          className="text-4xl font-bold text-orange-500 mb-6 text-center"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          About Me
        </motion.h2>

        {/* Description */}
        <motion.p
          className="text-gray-300 text-lg leading-relaxed text-center mb-8"
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Hello! I'm <span className="text-orange-400 font-semibold">Bindu Sree</span>, a passionate
          Full Stack Developer who transforms ideas into impactful digital experiences.
          I help businesses and startups build fast, secure, and scalable websites and
          web apps tailored to their needs.
          <br /><br />
          Whether you're looking to launch a product, redesign your existing site, or
          automate a business process — I bring your vision to life with clean code,
          attention to detail, and a focus on results. I believe in clear communication,
          reliable delivery, and long-term value.
        </motion.p>

        {/* Why Work With Me */}
        

        {/* Social Icons */}
        <motion.div
          className="flex justify-center gap-10 mt-12 text-3xl"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.5 }}
        >
          <motion.a
            href="https://www.linkedin.com/in/palukurthi-bindu-sree-737697325/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-orange-500 transition"
            whileHover={{ y: -5 }}
            title="LinkedIn"
          >
            <FaLinkedin />
          </motion.a>
          <motion.a
            href="https://github.com/BinduSree-18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-orange-500 transition"
            whileHover={{ y: -5 }}
            title="GitHub"
          >
            <FaGithub />
          </motion.a>
        </motion.div>

        {/* Download CV Button */}
        <motion.div
          className="flex justify-center mt-10"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <a
            href="/Resume1.pdf"
            download="BinduSree-Resume.pdf"
            className="px-6 py-3 bg-orange-500 text-black font-semibold rounded-full shadow-lg hover:bg-orange-600 transition duration-300 border border-orange-400 hover:shadow-orange-400/40"
          >
            ⬇️ Download CV
          </a>
        </motion.div>
      </motion.div>
    </div>
  );
}
