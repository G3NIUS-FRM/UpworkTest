import React from 'react';
import { motion } from 'framer-motion';

export const Benefits = () => {
  const container = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 0.3,
      },
    },
  };

  const item = {
    hidden: { opacity: 0, y: 30 },
    show: { opacity: 1, y: 0, transition: { duration: 0.6 } },
  };

  const benefitsData = [
    {
      title: 'Amplify Insights',
      description:
        'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          overflow="visible"
          preserveAspectRatio="none"
          viewBox="0 0 21 20"
          role="img"
          className="size-6">
          <path
            d="M5.2425 1.0125C3.8725 2.3925 3.8725 4.6125 5.2425 5.9825L13.7325 14.4625C14.3125 15.0525 14.3125 16.0125 13.7325 16.5825C13.1425 17.1725 12.1925 17.1725 11.6025 16.5825L7.3625 12.3425L8.4225 11.2825L4.8925 7.7425L4.5325 8.1025L3.1225 6.6825C2.7325 6.2925 2.1025 6.2925 1.6925 6.6825L0.2925 8.1025C-0.0975 8.5125 -0.0975 9.1225 0.2925 9.5125L1.6925 10.9225L1.3525 11.2825L4.8925 14.8125L5.9525 13.7525L10.1925 18.0125C11.5625 19.3625 13.7725 19.3625 15.1425 18.0125C16.5125 16.6325 16.5125 14.4125 15.1425 13.0525L6.6525 4.5625C6.0725 3.9725 6.0725 3.0125 6.6525 2.4425C7.2425 1.8525 8.1925 1.8525 8.7825 2.4425L13.0225 6.6825L11.9625 7.7425L15.4925 11.2825L15.8525 10.9225L17.2625 12.3425C17.6525 12.7325 18.2925 12.7325 18.6925 12.3425L20.0925 10.9225C20.4825 10.5125 20.4825 9.9025 20.0925 9.5125L18.6925 8.1025L19.0325 7.7425L15.4925 4.2125L14.4325 5.2725L10.1925 1.0125C8.8225 -0.3375 6.6125 -0.3375 5.2425 1.0125ZM1.0025 8.8025L2.4125 7.3925L3.8325 8.8025L2.4125 10.2225M16.5525 10.2225L17.9725 8.8025L19.3825 10.2225L17.9725 11.6325L16.5525 10.2225Z"
            fill="var(--fill-0, black)"
          />
        </svg>
      ),
    },
    {
      title: 'Control Your Global Presence',
      description:
        'Manage and track satellite offices, ensuring consistent performance and streamlined operations everywhere.',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          overflow="visible"
          preserveAspectRatio="none"
          viewBox="0 0 20 20"
          role="img"
          className="size-6">
          <path
            d="M15.9 15.39C15.64 14.59 14.89 14 14 14H13V11C13 10.7348 12.8946 10.4804 12.7071 10.2929C12.5196 10.1054 12.2652 10 12 10H6V8H8C8.26522 8 8.51957 7.89464 8.70711 7.70711C8.89464 7.51957 9 7.26522 9 7V5H11C11.5304 5 12.0391 4.78929 12.4142 4.41421C12.7893 4.03914 13 3.53043 13 3V2.59C15.93 3.77 18 6.64 18 10C18 12.08 17.2 13.97 15.9 15.39Z"
            fill="var(--fill-0, black)"
          />
        </svg>
      ),
    },
    {
      title: 'Remove Language Barriers',
      description:
        'Adapt to diverse markets with built-in localization for clear communication and enhanced user experience.',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          overflow="visible"
          preserveAspectRatio="none"
          viewBox="0 0 22 19"
          role="img"
          className="size-6">
          <path
            d="M8 3C9.06087 3 10.0783 3.42143 10.8284 4.17157C11.5786 4.92172 12 5.93913 12 7C12 8.06087 11.5786 9.07828 10.8284 9.82843C10.0783 10.5786 9.06087 11 8 11C6.93913 11 5.92172 10.5786 5.17157 9.82843C4.42143 9.07828 4 8.06087 4 7C4 5.93913 4.42143 4.92172 5.17157 4.17157C5.92172 3.42143 6.93913 3 8 3Z"
            fill="var(--fill-0, black)"
          />
        </svg>
      ),
    },
    {
      title: 'Amplify Insights',
      description:
        'Unlock data-driven decisions with comprehensive analytics, revealing key opportunities for strategic regional growth.',
      svg: (
        <svg
          xmlns="http://www.w3.org/2000/svg"
          fill="none"
          overflow="visible"
          preserveAspectRatio="none"
          viewBox="0 0 22 12"
          role="img"
          className="size-6">
          <path
            d="M2 8L2.5 8.07L7.07 3.5C6.89 2.85 7.06 2.11 7.59 1.59C8.37 0.8 9.63 0.8 10.41 1.59C10.94 2.11 11.11 2.85 10.93 3.5L13.5 6.07L14 6C14.18 6 14.35 6 14.5 6.07L18.07 2.5C18 2.35 18 2.18 18 2C18 1.46957 18.2107 0.960859 18.5858 0.585786C18.9609 0.210714 19.4696 0 20 0C20.5304 0 21.0391 0.210714 21.4142 0.585786C21.7893 0.960859 22 1.46957 22 2C22 2.53043 21.7893 3.03914 21.4142 3.41421C21.0391 3.78929 20.5304 4 20 4Z"
            fill="var(--fill-0, black)"
          />
        </svg>
      ),
    },
  ];

  return (
    <>
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        viewport={{ amount: 0.5 }}
        className="h-[40vh] w-full flex flex-col justify-center items-start gap-6 px-10">
        <motion.span className="font-roboto font-[600] text-gray-400">
          Benefits
        </motion.span>
        <h3 className="text-[60px] font-gfs">We’ve cracked the code.</h3>
        <span className="font-roboto font-[400] text-gray-400">
          Area provides real insights, without the data overload.
        </span>
      </motion.div>

      <motion.div
        variants={container}
        initial="hidden"
        whileInView="show"
        viewport={{ amount: 0.5 }}
        className="h-[40vh] w-full flex  justify-center items-start gap-6 mt-[3rem] px-10">
        {benefitsData.map((benefit, index) => (
          <motion.div
            key={index}
            variants={item}
            className="flex flex-col justify-center items-start border-t-2 gap-4 border-t-gray-300 pt-[4rem]">
            {benefit.svg}
            <h3 className="font-gfs text-[24px]">{benefit.title}</h3>
            <p className="font-robot text-[16px] text-gray-500">
              {benefit.description}
            </p>
          </motion.div>
        ))}
      </motion.div>
    </>
  );
};
