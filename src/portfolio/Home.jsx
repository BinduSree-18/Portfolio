import React from 'react';
import { Link } from 'react-scroll';
import Shinchan from "../assets/Bindusree.png"; // Replace with your actual image path

export default function Hero() {
  return (
    <section id="home" className="flex flex-col-reverse lg:flex-row justify-center items-center px-6 lg:px-30 py-16 bg-black">

      <div className="mx-auto py-20 text-center sm:text-left lg:mt-[80px]">
        <p className="text-orange-400 tracking-widest uppercase text-sm mb-3 font-semibold animate-pulse">
          Creative Designer
        </p>

        <h1 className="text-5xl sm:text-6xl font-extrabold leading-tight text-white mb-6">
          Hi, I’m <span className="text-orange-400">BinduSree</span>
        </h1>

        <div className="w-12 h-1 bg-orange-400 rounded-full mx-auto sm:mx-0 mb-8 animate-pulse" />

        <p className="text-gray-400 text-base sm:text-lg leading-relaxed max-w-xl mx-auto sm:mx-0 mb-8">
          I’m a passionate creative designer dedicated to crafting visually stunning and user-friendly digital experiences.
          Let’s work together to bring your ideas to life!
        </p>

        <div className="flex justify-center sm:justify-start space-x-4">
          <Link
            to="contact"
            spy={true}
            smooth={true}
            offset={-96}
            duration={500}
            className="inline-block border border-orange-400 text-orange-400 font-semibold rounded-lg px-8 py-3 hover:bg-orange-400 hover:text-white transition cursor-pointer"
          >
            Contact Me
          </Link>
        </div>
      </div>

      <div className="mt-10 lg:mt-10 relative rounded-3xl shadow-3xl shadow-orange-500/30 lg:w-[350px] lg:h-[400px]">
        <img
          src={Shinchan}
          alt="Designer"
          className="rounded-3xl w-[300px] h-[400px] object-cover brightness-90"
        />
        <div className="absolute top-0 left-0 w-full h-full rounded-3xl shadow-[100px_0px_30px_30px_rgba(251,146,60,0.4)]"></div>
      </div>
    </section>
  );
}
