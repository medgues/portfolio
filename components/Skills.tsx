import React from "react";
import { motion } from "framer-motion";
import Skill from "./Skill";
import {
  DiReact,
  DiHtml5,
  DiCss3,
  DiNodejsSmall,
  DiGit,
  DiGithub,
  DiMongodb,
} from "react-icons/di";
import { TbBrandJavascript } from "react-icons/tb";
import AnimatedTextCharacter from "./AnimatedTextCharacter";

type Props = {};

const Skills = (props: Props) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center "
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        <AnimatedTextCharacter text="skills" />
      </h3>
      {/* <h3 className="absolute top-36 uppercase tracking-[3px] text-gray-500 txt-sm">
        hover over a skill for current proffeciancy{" "}
      </h3> */}
      <div className="grid grid-cols-3 md:grid-cols-4 gap-7 ">
        <Skill directionLeft={true} Icon={DiHtml5} />
        <Skill directionLeft={true} Icon={DiCss3} />
        <Skill directionLeft={true} Icon={TbBrandJavascript} />
        <Skill directionLeft={true} Icon={DiReact} />
        <Skill directionLeft={false} Icon={DiNodejsSmall} />
        <Skill directionLeft={false} Icon={DiGit} />
        <Skill directionLeft={false} Icon={DiGithub} />
        <Skill directionLeft={false} Icon={DiMongodb} />
      </div>
    </motion.div>
  );
};

export default Skills;
