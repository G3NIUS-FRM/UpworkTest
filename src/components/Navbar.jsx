import React from 'react';
import { motion } from 'framer-motion';

export const Navbar = () => {
  return (
    <motion.nav
      initial={{ y: -50, opacity: 0 }}
      animate={{ y: 0, opacity: 1 }}
      transition={{ duration: 0.8, ease: 'easeOut' }}
      className="w-[90%] flex justify-between mt-2 p-10 relative">
      <div className="flex justify-between items-center w-full text-black">
        <h3 className="font-roboto text-[32px] font-semibold">Area</h3>

        <div className="flex bg-[var(--color-olive-dark)] rounded-[25px] group cursor-pointer transition-all duration-300 hover:bg-[#5f7415]">
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
      </div>
    </motion.nav>
  );
};
