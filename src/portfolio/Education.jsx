import React from "react";
import { GraduationCap, School } from "lucide-react";

const Education = () => {
  return (
    <section id="education" className="bg-black text-white py-12 px-4 md:px-20">
      <h2 className="text-3xl font-bold text-orange-500 mb-10 text-center">
        Education
      </h2>

      <div className="relative border-l-4 border-orange-500 ml-4 space-y-10">
        {/* B.Tech */}
        <div className="ml-6 relative">
          <span className="absolute -left-8 top-1 bg-orange-500 text-black p-2 rounded-full">
            <GraduationCap size={20} />
          </span>
          <div className="bg-zinc-900 rounded-xl p-5 shadow-md border border-orange-400">
            <h3 className="text-xl font-semibold text-orange-400">
              B.Tech in Computer Science and Engineering
            </h3>
            <p className="text-md text-gray-300 mt-1">
              Rajiv Gandhi University of Knowledge Technologies, Nuzvid
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Currently in 3rd Year 
            </p>
          </div>
        </div>

        {/* Schooling */}
        <div className="ml-6 relative">
          <span className="absolute -left-8 top-1 bg-orange-500 text-black p-2 rounded-full">
            <School size={20} />
          </span>
          <div className="bg-zinc-900 rounded-xl p-5 shadow-md border border-orange-400">
            <h3 className="text-xl font-semibold text-orange-400">
              Secondary School Education
            </h3>
            <p className="text-md text-gray-300 mt-1">
              AGK School
            </p>
            <p className="text-sm text-gray-400 mt-2">
              Completed in 2021
            </p>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Education;
