import Image from "next/image";
import { motion } from "framer-motion";

import React from "react";

import mockup from "../public/mockup.png";
import AnimatedTextCharacter from "./AnimatedTextCharacter";

type Props = {};

const Projects = (props: Props) => {
  const projects = [1, 2, 3, 4, 5];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        <AnimatedTextCharacter text="projects" />
      </h3>
      <div
        className="relative w-full flex overflow-x-scroll overflow-hidden snap-x snap-mandatory z-20
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
      >
        {/* projects */}
        {projects.map((project, i) => {
          return (
            <div
              key={project}
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 mt-12 items-center justify-center p-20 md:p-44"
            >
              <motion.div
                initial={{ y: -20, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                viewport={{ once: true }}
                className="flex items-center justify-center"
              >
                <div className=" relative group flex items-center justify-center">
                  <Image
                    src={mockup}
                    alt="project moackup"
                    className="group-hover:grayscale group-hover:blur aspect-auto lg:w-[40%] xl:w-[40%] xl:mt-10 2xl:w-[10%] transition-all duration-1000 ease-in-out  "
                  />
                  <div className="absolute opacity-0 group-hover:opacity-80 transition-all duration-500 ease-in-out h-full w-full  z-0">
                    <div className="flex items-center justify-center h-full gap-5">
                      <button className="projectButton">Repo</button>
                      <button className="projectButton  ">Demo</button>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-xl lg:text-4xl font-bold text-center">
                  <span className="underline decoration-[#F7AB0A]">
                    Case Study {i + 1} of {projects.length}
                  </span>{" "}
                  : StarBucks Clone
                </h4>

                <p className="text-base lg:text-lg text-center">
                  Lorem ipsum, dolor sit amet consectetur adipisicing elit.
                  Inventore quae beatae modi, quis fugit pariatur non corrupti
                  libero totam sunt, quibusdam vero fugiat unde impedit illum
                  corporis, iure sint facere.
                </p>
              </div>
            </div>
          );
        })}
      </div>
      <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12"></div>
    </motion.div>
  );
};

export default Projects;
