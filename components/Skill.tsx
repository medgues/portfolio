import React from "react";
import { DiReact } from "react-icons/di";
import { motion } from "framer-motion";

type Props = {
  directionLeft?: boolean;
  Icon: any;
};

const Skill = ({ directionLeft, Icon }: Props) => {
  return (
    <motion.div
      initial={{ x: directionLeft ? -50 : 50, opacity: 0 }}
      whileInView={{ opacity: 1, x: 0 }}
      transition={{ duration: 1.5 }}
      className="group relative flex cursor-pointer "
    >
      <Icon className="hoverShadow group-hover:text-[rgba(247,171,10,50%)] text-gray-500 bg-[#3e3e3e] rounded-full p-2 h-16 w-16 mx-auto object-cover filter group-hover:-translate-y-1 group-hover:scale-125 duration-300 transition ease-in-out " />
    </motion.div>
  );
};

export default Skill;
