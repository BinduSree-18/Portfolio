import React, { useState } from "react";

// Replace these URLs with your real skill icons or import local images
const skillsData = [
  {
    name: "HTML",
    level: 95,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg",
  },
  {
    name: "CSS",
    level: 90,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/css3/css3-original.svg",
  },
  {
    name: "JavaScript",
    level: 85,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg",
  },
  {
    name: "React",
    level: 80,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/react/react-original.svg",
  },
  {
    name: "Tailwind CSS",
    level: 85,
    icon: "https://upload.wikimedia.org/wikipedia/commons/d/d5/Tailwind_CSS_Logo.svg",
  },
  {
    name: "Node.js",
    level: 70,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/nodejs/nodejs-original.svg",
  },
  {
    name: "Git & GitHub",
    level: 75,
    icon: "https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg",
  },
  
];

// Circle progress bar component
function CircleProgress({ size = 120, strokeWidth = 10, progress, skillName }) {
  const radius = (size - strokeWidth) / 2;
  const circumference = 2 * Math.PI * radius;
  const offset = circumference - (progress / 100) * circumference;

  return (
    <div className="flex flex-col items-center relative">
      <svg width={size} height={size} className="transform -rotate-90">
        <circle
          stroke="#2d2d2d"
          fill="transparent"
          strokeWidth={strokeWidth}
          r={radius}
          cx={size / 2}
          cy={size / 2}
        />
        <circle
          stroke="url(#gradient)"
          fill="transparent"
          strokeWidth={strokeWidth}
          strokeLinecap="round"
          strokeDasharray={circumference}
          strokeDashoffset={offset}
          r={radius}
          cx={size / 2}
          cy={size / 2}
          className="transition-all duration-1000 ease-in-out"
        />
        <defs>
          <linearGradient id="gradient" x1="1" y1="0" x2="0" y2="1">
            <stop offset="0%" stopColor="#fb923c" />
            <stop offset="100%" stopColor="#facc15" />
          </linearGradient>
        </defs>
      </svg>

      {/* Centered percentage */}
      <div className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 text-white font-bold text-xl select-none">
        {progress}%
      </div>

      <p className="text-white mt-6 font-semibold">{skillName}</p>
    </div>
  );
}

export default function Skills() {
  const [showProgress, setShowProgress] = useState(false);

  return (
    <section  id="skills" className="min-h-screen bg-black px-6 py-16 flex flex-col items-center">
      <h2 className="text-orange-400 uppercase tracking-widest text-sm mb-2 font-semibold">
        My Expertise
      </h2>
      <h1 className="text-white text-4xl sm:text-5xl font-extrabold mb-12 text-center">
        Skills & Technologies
      </h1>

      {!showProgress ? (
        // Icon Grid view
        <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-10 mb-12">
          {skillsData.map(({ name, icon }) => (
            <div
              key={name}
              className="flex flex-col items-center cursor-pointer hover:scale-110 transform transition duration-300"
              title={name}
            >
              <img src={icon} alt={name} className="w-20 h-20 object-contain" />
              <p className="text-white mt-3 font-semibold">{name}</p>
            </div>
          ))}
        </div>
      ) : (
        // Circle Progress Bars view
        <div className="w-full max-w-5xl grid grid-cols-2 sm:grid-cols-4 gap-14 mb-12">
          {skillsData.map(({ name, level }) => (
            <CircleProgress key={name} skillName={name} progress={level} />
          ))}
        </div>
      )}

      <button
        onClick={() => setShowProgress(!showProgress)}
        className="bg-gradient-to-r from-orange-500 to-yellow-400 text-black font-semibold rounded-lg px-10 py-4 shadow-lg hover:from-orange-600 hover:to-yellow-500 transition"
        aria-label="Toggle skill proficiency display"
      >
        {showProgress ? "Show Skill Icons" : "Show My Proficiency"}
      </button>
    </section>
  );
}
