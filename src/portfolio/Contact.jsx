import React from "react";
import Edu from "../assets/Edu.png"
import Alumni from "../assets/Alumni.png"
import Martex from "../assets/Martex.png"
import Teckzite from "../assets/Teckzite.png"
const projects = [
  {
    title: "EDU100",
    description:
      "A sleek personal site showcasing my development skills, project portfolio, and resume downloads.",
    tech: "React, Tailwind CSS",
    link: "https://gregarious-beijinho-e227f8.netlify.app/",
    image: Edu, // Replace with actual screenshot URL
  },
  {
    title: "Alumni",
    description:
      "An interactive quiz platform with real-time scores, countdown timer, and a powerful admin dashboard.",
    tech: "React, Node.js, MongoDB",
    link: "https://alumni-repo.vercel.app/",
    image: Alumni,
  },
  {
    title: "Martex",
    description:
      "A secure web-based voting platform with login validation, admin control, and real-time vote counting.",
    tech: "React, Tailwind CSS",
    link: "https://martex-clone.vercel.app/",
    image:Martex,
  },
  {
    title: "Teckzite",
    description:
      "An interactive quiz platform with real-time scores, countdown timer, and a powerful admin dashboard.",
    tech: "React, Tailwind CSS",
    link: "https://teckzite.org",
    image: Teckzite,
  },
];

const Projects = () => {
  return (
    <div id="projects" className="relative">
      <style>{`
        @keyframes fadeInUp {
          0% {
            opacity: 0;
            transform: translateY(30px);
          }
          100% {
            opacity: 1;
            transform: translateY(0);
          }
        }
        .fade-in-up {
          opacity: 0;
          animation: fadeInUp 0.8s ease-out forwards;
        }
        .glow-hover:hover {
          box-shadow: 0 0 20px rgba(255, 165, 0, 0.3), 0 0 40px rgba(255, 165, 0, 0.2);
        }
      `}</style>

      <section className="bg-gradient-to-b from-black via-zinc-900 to-black text-white py-16 px-6 md:px-20">
        <h2 className="text-4xl md:text-5xl font-extrabold text-center text-orange-500 mb-16 tracking-wider uppercase drop-shadow-md">
          My Projects
        </h2>

        <div className="grid md:grid-cols-3 gap-10">
          {projects.map((project, index) => (
            <div
              key={index}
              className="relative p-[2px] rounded-2xl bg-gradient-to-br from-orange-500 to-yellow-400 fade-in-up"
              style={{ animationDelay: `${index * 0.3}s` }}
            >
              <div className="bg-zinc-950 p-6 rounded-[inherit] h-full hover:scale-[1.03] glow-hover transition-transform duration-300 ease-in-out">
                <h3 className="text-xl font-bold text-orange-400 mb-4 tracking-wide">
                  {project.title}
                </h3>
                <a href={project.link} target="_blank" rel="noopener noreferrer">
                  <img
                    src={project.image}
                    alt={`${project.title} screenshot`}
                    className="rounded-lg mb-4 hover:opacity-90 transition-opacity duration-300"
                  />
                </a>
                <p className="text-sm text-gray-300 mb-4 leading-relaxed">
                  {project.description}
                </p>
                <p className="text-xs text-gray-500 italic">
                  Tech: {project.tech}
                </p>
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
};

export default Projects;
