import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { FiMenu, FiX } from 'react-icons/fi';

export const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const navLinks = [
    { name: 'Benefits', href: '#' },
    { name: 'Specifications', href: '#' },
    { name: 'How-to', href: '#' },
    { name: 'Contact Us', href: '#' },
  ];

  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-[90%] flex justify-between mt-2 p-10 md:relative shadow-lg md:shadow-none  absolute top-0 z-[80] bg-white">
      <div className="flex justify-between items-center w-full text-black ">
        <h3 className="font-roboto text-[32px] font-semibold">Area</h3>

        {/* Desktop & Tablet Button */}
        <div className="hidden md:flex bg-[var(--color-olive-dark)] rounded-[25px] group cursor-pointer transition-all duration-300 hover:bg-[#5f7415]">
          <a
            href="#"
            className="font-roboto text-[16px] p-3 text-white font-bold">
            Learn more
          </a>
          <svg
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 24 24"
            strokeWidth={1.5}
            stroke="currentColor"
            className="size-3 relative right-3 top-3 rotate-[45deg] text-white transition-transform duration-300 group-hover:-translate-y-1 group-hover:rotate-[65deg]">
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 6.75 12 3m0 0 3.75 3.75M12 3v18"
            />
          </svg>
        </div>

        {/* Mobile Hamburger */}
        <div className="md:hidden flex items-center">
          <button
            onClick={() => setMenuOpen(!menuOpen)}
            className="text-2xl text-black">
            {menuOpen ? <FiX /> : <FiMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {menuOpen && (
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          animate={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: 50 }}
          transition={{ duration: 0.3 }}
          className="absolute top-full right-0 w-3/4 bg-white shadow-lg rounded-b-lg p-6 flex flex-col gap-4 md:hidden z-40">
          {navLinks.map((link, idx) => (
            <a
              key={idx}
              href={link.href}
              className="font-roboto font-semibold text-black hover:text-gray-500 transition"
              onClick={() => setMenuOpen(false)}>
              {link.name}
            </a>
          ))}
          <a
            href="#"
            className="font-roboto font-bold text-white bg-[var(--color-olive-dark)] rounded-[25px] p-3 text-center hover:bg-[#5f7415] transition"
            onClick={() => setMenuOpen(false)}>
            Learn more
          </a>
        </motion.div>
      )}
    </motion.nav>
  );
};
