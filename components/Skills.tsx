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
      className="flex relative flex-col text-center md:text-left xl:flex-row max-w-[2000px] xl:px-10 min-h-screen justify-center xl:space-y-0 mx-auto items-center  "
    >
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        <AnimatedTextCharacter text="skills" />
      </h3>
      <div className="grid grid-cols-3 md:grid-cols-4 gap-10 ">
        <Skill directionLeft={true} Icon={DiHtml5} name={'HTML'} />
        <Skill directionLeft={true} Icon={DiCss3} name={'CSS'} />
        <Skill directionLeft={true} Icon={TbBrandJavascript} name={'JavaScript'} />
        <Skill directionLeft={true} Icon={DiReact} name={'ReactJS'}/>
        <Skill directionLeft={false} Icon={DiNodejsSmall} name={'NodeJs'} />
        <Skill directionLeft={false} Icon={DiGit} name={'Git'} />
        <Skill directionLeft={false} Icon={DiGithub} name={'GitHub'}/>
        <Skill directionLeft={false} Icon={DiMongodb} name={'MongoDb'}/>
      </div>
    </motion.div>
  );
};

export default Skills;

