import React from "react";
import { motion } from "framer-motion";

type Props = {};

function BackgroundCircles({}: Props) {
  return (
    <motion.div
    
      className="absolute -mt-24 lg:-mt-16 top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2  flex justify-center items-center"
      initial={{
        opacity: 0,
      }}
      animate={{
        scale: [1, 2, 2, 3, 1],
        opacity: [0.1, 0.2, 0.4, 0.8, 0.1, 1],
        borderRadius: ["20%", "20%", "50%", "80%", "20%"],
      }}
      transition={{
        duration: 2.5,
      }}
    >
      <div className="absolute border border-[#333333] rounded-full h-[100px] w-[100px]  animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[200px] w-[200px]  animate-ping" />
      <div className="absolute border border-[#333333] rounded-full h-[400px] w-[400px] animate-ping" />
      <div className="absolute border  border-[#F7AB0A] opacity-20 rounded-full h-[550px] w-[550px] animate-pulse" />
      <div className="absolute border border-[#333333] rounded-full h-[600px] w-[600px] animate-ping" />
    </motion.div>
  );
}

export default BackgroundCircles;
