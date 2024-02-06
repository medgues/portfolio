import { motion } from "framer-motion";
import Image from "next/image";
import React from "react";
import AnimatedTextCharacter from "./AnimatedTextCharacter";

import aboutImage from "../public/description.webp";

type Props = {};

export default function About({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className=" flex relative  h-screen text-center md:text-left flex-col max-w-7xl px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="uppercase tracking-[20px] text-gray-500 text-2xl xl:text-5xl">
        <AnimatedTextCharacter text="about" />
      </h3>
      

      <div className="space-y-10 px-0 md:px-10 flex md:flex-row flex-col gap-12 justify-center items-center">
      <motion.div
        initial={{ x: -200, opacity: 0 }}
        whileInView={{ x: 0, opacity: 1 }}
        transition={{ duration: 1 }}
      >
        <Image
          src={aboutImage}
          alt="hero-image"
          className="mt-10 md:mb-0 flex-shrink-0 w-96 h-56 rounded-full object-cover md:rounded-lg md:w-[40rem] md:h-95 xl:w-[1040px] xl:h-[489px]"
        />
      </motion.div>
        <h4 className="space-y-2 text-4xl xl:text-6xl font-semibold xl:w-full xl:h-full">
          Here is a{" "}
          <span className="underline decoration-[#f7ab01]/50 uppercase">littel</span>{" "}
          background
          <p className="text-base xl:text-3xl">
            I am a recent graduate of a full-stack web development bootcamp with
            6 months of experience in developing web applications using modern
            technologies such as HTML, CSS, JavaScript, and various web
            frameworks such as ReactJS, NodeJs and ExpressJS. I am a fast
            learner and a team player who is passionate about creating
            user-friendly and visually appealing websites.
          </p>
        </h4>
      </div>
    </motion.div>
  );
}
