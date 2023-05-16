import React from "react";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  Icon: any;
  name: string
};

const Skill = ({ directionLeft, Icon, name }: Props) => {
  return (
    <motion.div
      initial={{ x: directionLeft ? -50 : 50, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className="group relative flex cursor-pointer "
    >
      <Icon className="hoverShadow group-hover:text-[rgba(247,171,10,50%)] text-gray-500 bg-[#3e3e3e] rounded-full p-2 h-20 w-20 mx-auto object-cover filter group-hover:-translate-y-5 group-hover:scale-125 duration-300 transition ease-in-out " />
      <motion.span className="absolute text-[rgba(247,171,10,50%)] font-semibold text-2xl top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 opacity-0 group-hover:opacity-100 group-hover:translate-y-7  duration-300 transition ease-in-out">{name}</motion.span>
    </motion.div>
  );
};

export default Skill;
