import React from 'react';
import { motion } from 'framer-motion';
import iMac from '../assets/photos/IMac.png';
import montanaHero from '../assets/photos/montanasHero.jpg';
import iPadPro from '../assets/photos/iPadPro.png';
import iPhone from '../assets/photos/iPhone.png';
export const Hero = () => {
  return (
    <motion.section
      initial={{ opacity: 0, y: 50 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      className="h-[100vh] w-[90%] flex flex-col justify-center md:justify-between items-center gap-[2rem] mx-auto">
      <h1 className="font-gfs text-[70px]  md:text-[80px] lg:text-[100px] text-center">
        Browse Everything.
      </h1>
      <div className="w-[90%] bg-[var(--color-olive-light)] rounded-xl h-[40vh] md:h-[50vh] lg:h-[60vh] overflow-visible flex justify-center items-start relative top-[10rem] md:top-0">
        <div className="relative bottom-20 w-[80%] h-[64vh] overflow-hidden rounded-md z-1 hidden lg:inline">
          <img src={iMac} alt="" className="w-full h-auto" />
          <div className="absolute top-[19px] left-0 w-[96%] h-[98%] rounded-md mx-auto right-0 bottom-0">
            <img src={montanaHero} alt="" />
          </div>
        </div>
        <div className="relative bottom-[7rem] w-[80%] h-[54vh] overflow-hidden rounded-md hidden md:inline lg:hidden z-1 ">
          <img src={iPadPro} alt="" className="w-full h-auto" />
        </div>
        <div className="relative bottom-[10rem] w-[80%] h-[60vh] overflow-hidden rounded-md inline md:hidden z-1 ">
          <img src={iPhone} alt="" className="w-full h-auto" />
        </div>
      </div>
    </motion.section>
  );
};
