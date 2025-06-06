import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin, FaGithub, FaTwitter } from "react-icons/fa";

export default function Me() {
  return (
    <div id="contact" className="min-h-screen bg-gradient-to-br from-black via-zinc-900 to-black text-white px-6 py-12 flex items-center justify-center">
      <motion.div
        className="w-full max-w-3xl bg-zinc-900 p-10 rounded-2xl shadow-2xl border border-orange-500"
        initial={{ opacity: 0, scale: 0.95 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        <motion.h2
          className="text-4xl font-bold text-orange-500 mb-4 text-center"
          initial={{ opacity: 0, y: -30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.2 }}
        >
          Get in Touch
        </motion.h2>

        {/* Social Media Links */}
        <motion.div
          className="flex justify-center gap-8 mb-10 text-3xl"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
        >
          <a
            href="https://www.linkedin.com/in/palukurthi-bindu-sree-737697325/"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-orange-500 transition transform hover:scale-125"
          >
            <FaLinkedin />
          </a>
          <a
            href="https://github.com/BinduSree-18"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-orange-500 transition transform hover:scale-125"
          >
            <FaGithub />
          </a>
          <a
            href="https://twitter.com/your-username"
            target="_blank"
            rel="noopener noreferrer"
            className="text-gray-300 hover:text-orange-500 transition transform hover:scale-125"
          >
            <FaTwitter />
          </a>
        </motion.div>

        <motion.form
          className="space-y-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.6 }}
        >
          <div>
            <label className="block mb-2 text-sm text-gray-300">Name</label>
            <input
              type="text"
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="Your Name"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">Email</label>
            <input
              type="email"
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              placeholder="you@example.com"
              required
            />
          </div>

          <div>
            <label className="block mb-2 text-sm text-gray-300">Message</label>
            <textarea
              className="w-full px-4 py-3 rounded-lg bg-zinc-800 border border-zinc-700 text-white focus:outline-none focus:ring-2 focus:ring-orange-500"
              rows="5"
              placeholder="Write your message..."
              required
            ></textarea>
          </div>

          <div className="text-center">
            <button
              type="submit"
              className="px-8 py-3 bg-orange-500 hover:bg-orange-600 transition duration-300 text-black font-semibold rounded-lg shadow-lg hover:shadow-orange-500/40"
            >
              Send Message
            </button>
          </div>
        </motion.form>
      </motion.div>
    </div>
  );
}
