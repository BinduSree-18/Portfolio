import React, { useState } from 'react';
import { Menu, X } from 'lucide-react';
import { Link } from 'react-scroll';

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  const navItems = ['home', 'about',"education", 'skills', 'projects', 'contact'];

  return (
    <nav className="stick bg-black text-orange-500 px-6 md:px-10 py-6 fixed top-0 left-0 w-full z-50 shadow-[0_0_60px_10px_rgba(251,146,60,0.4)]">
      <div className="flex justify-between items-center">
        <div className="text-orange-400 text-4xl font-bold leading-none">Bindu</div>

        {/* Desktop Menu */}
        <ul className="hidden md:flex uppercase text-sm justify-evenly w-full">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                activeClass="text-orange-900 border-b-2 border-orange-900"
                className="cursor-pointer font-bold px-3 py-1 hover:text-orange-900 transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>

        {/* Mobile Icon */}
        <div className="md:hidden cursor-pointer" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={24} /> : <Menu size={24} />}
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <ul className="mt-4 flex flex-col gap-4 uppercase text-sm tracking-wide md:hidden bg-black">
          {navItems.map((item) => (
            <li key={item}>
              <Link
                to={item}
                spy={true}
                smooth={true}
                offset={-80}
                duration={500}
                onClick={() => setIsOpen(false)}
                activeClass="text-white"
                className="cursor-pointer hover:text-white transition"
              >
                {item}
              </Link>
            </li>
          ))}
        </ul>
      )}
    </nav>
  );
}
