import React from 'react';

export const Toplinks = () => {
  return (
    <div className="absolute top-0  w-full md:flex hidden justify-center mt-8 z-[90]">
      <div
        className="flex justify-center items-center h-[10vh] px-6 rounded-[25px]
                     bg-white/30 backdrop-blur-md border border-white/40 ">
        <div className="flex gap-8">
          <a
            href="#"
            className="font-roboto font-semibold text-black hover:text-gray-500 transition">
            Benefits
          </a>
          <a
            href="#"
            className="font-roboto font-semibold text-black hover:text-gray-500 transition">
            Specifications
          </a>
          <a
            href="#"
            className="font-roboto font-semibold text-black hover:text-gray-500 transition">
            How-to
          </a>
          <a
            href="#"
            className="font-roboto font-semibold text-black hover:text-gray-500 transition">
            Contact Us
          </a>
        </div>
      </div>
    </div>
  );
};
