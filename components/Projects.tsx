import Image from "next/image";
import { motion } from "framer-motion";

import React from "react";

import hichamPortfolio from "../public/hichamPortfolio.webp";
import mockup1 from "../public/mockup1.webp";
import AnimatedTextCharacter from "./AnimatedTextCharacter";

type Props = {};

const Projects = (props: Props) => {
  const projects = [
    {image: hichamPortfolio, title: "Hicham Portfolio" , description:"i added the lit/dark theme feature and created the contact me section to send emails to his emails, also added a new page /inscription for subcribing to his privet course", repo:'https://github.com/medgues/hicham_Baali_portfolio-', demo:'https://medgues.github.io/hicham_Baali_portfolio-/'}, 
    ];
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
              key={project.title}
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
                    src={project.image}
                    alt="project moackup"
                    className=" aspect-auto lg:w-[40%] xl:w-[40%] xl:mt-10 2xl:w-[10%] transition-all duration-1000 ease-in-out  "
                  />
                  <div className="absolute -bottom-2 opacity-0 group-hover:opacity-80 transition-all duration-500 ease-in-out  z-0">
                    <div className="flex items-center justify-center h-full gap-5">
                      <button className="projectButton" onClick={()=>window.open(project.repo)}>Repo</button>
                      <button className="projectButton " onClick={()=>window.open(project.demo)} >Demo</button>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="space-y-10 px-0 md:px-10 max-w-6xl">
                <h4 className="text-xl lg:text-4xl font-bold text-center">
                  <span className="underline decoration-[#F7AB0A]">
                    Case Study {i + 1} of {projects.length}
                  </span>{" "}
                  : {project.title}
                </h4>

                <p className="text-base lg:text-lg text-center sm:w-[70%] m-auto w-full">
                 {project.description}
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
