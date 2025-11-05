import React from 'react';
import { motion } from 'framer-motion';
import iMac from '../assets/photos/IMac.png';
import montanaHero from '../assets/photos/montanasHero.jpg';

export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="h-[100vh] w-[90%] flex flex-col justify-between items-center gap-4 mx-auto">
      <h1 className="font-gfs text-[110px]">Browse Everything.</h1>
      <div className="w-[90%] bg-[var(--color-olive-light)] rounded-xl h-[60vh] overflow-visible flex justify-center items-start">
        <div className="relative bottom-20 w-[80%] h-[64vh] overflow-hidden rounded-md z-1">
          <img src={iMac} alt="" className="w-full h-auto" />
          <div className="absolute top-[19px] left-0 w-[96%] h-[98%] rounded-md mx-auto right-0 bottom-0">
            <img src={montanaHero} alt="" />
          </div>
        </div>
      </div>
    </motion.section>
  );
};
