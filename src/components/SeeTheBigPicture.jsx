import React from 'react';
import grapes from '../assets/photos/grapes.jpg';

export const SeeTheBigPicture = () => {
  return (
    <div className="h-screen w-full flex justify-around items-center mt-[4rem]">
      {/* Texto izquierdo */}
      <div className="w-[40%] h-[90vh] flex flex-col justify-center gap-6">
        <div>
          <h2 className="font-gfs text-[40px]">See the Big Picture</h2>
          <span className="font-roboto text-[24px] text-gray-400 font-semibold">
            Area turns your data into clear, vibrant visuals that show you
            exactly what's happening in each region.
          </span>
        </div>

        {/* Lista de puntos */}
        <div className="flex flex-col gap-10 ">
          <div className="flex gap-4">
            <span className="font-roboto text-gray-400 font-semibold">01</span>
            <span className="font-roboto font-semibold">
              Spot Trends in Seconds: No more digging through numbers.
            </span>
          </div>
          <div className="flex gap-4">
            <span className="font-roboto text-gray-400 font-semibold">02</span>
            <span className="font-roboto font-semibold">
              Get Everyone on the Same Page: Share easy-to-understand reports
              with your team.
            </span>
          </div>
          <div className="flex gap-4">
            <span className="font-roboto text-gray-400 font-semibold">03</span>
            <span className="font-roboto font-semibold">
              Make Presentations Pop: Interactive maps and dashboards keep your
              audience engaged.
            </span>
          </div>
          <div className="flex gap-4">
            <span className="font-roboto text-gray-400 font-semibold">04</span>
            <span className="font-roboto font-semibold">
              Your Global Snapshot: Get a quick, clear overview of your entire
              operation.
            </span>
          </div>
        </div>
      </div>

      {/* Imagen derecha */}
      <div className="w-[40%] h-[90vh]">
        <img
          src={grapes}
          alt="Grapes"
          className="h-full w-full rounded-3xl object-cover"
        />
      </div>
    </div>
  );
};
