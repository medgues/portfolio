import React from "react";
import { motion } from "framer-motion";
import ExperianceCard from "./ExperianceCard";
import AnimatedTextCharacter from "./AnimatedTextCharacter";

type Props = {};

function Experiance({}: Props) {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen flex relative overflow-hidden flex-col text-left md:flex-col max-w-full px-0 sm:px-10 justify-evenly mx-auto items-center "
    >
      <h3 className="mt-16 uppercase tracking-[20px] text-gray-500 text-2xl xl:text-5xl">
      <AnimatedTextCharacter text="Experience" />
      </h3>
      <div
        className="w-full space-x-5 flex  
      scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 h-4/5lg: h-screen"
      >
        <ExperianceCard />
      </div>
    </motion.div>
  );
}

export default Experiance;
