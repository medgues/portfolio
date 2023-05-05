import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DiJsBadge, DiReact, DiHtml5, DiNodejsSmall } from "react-icons/di";

import heroImage from "../public/code1.webp";

type Props = {};

const ExperianceCard = (props: Props) => {
  return (
    <article className="glass scale-90  m-auto flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[550px] snap-center px-6 py-6 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image
          src={heroImage}
          width={300}
          alt="hero-image"
          className="rounded-lg object-cover object-center"
        />
      </motion.div>
      <div className="px-0 md:px-10  ">
        <h4 className="text-3xl font-light">FullStack Web Dev bootcamp</h4>
        <div className="flex space-x-2 my-2">
          <DiJsBadge />
          <DiReact />
          <DiHtml5 />
          <DiNodejsSmall />
        </div>
        <p className="uppercase py-5 text-gray-300 ">
         {'6 Monthes : FROM 06/2022 TO 01/2023'}
        </p>
        <p className="space-y-2 ml-4 text-base">
        The Web Development bootcamp is an immersive program that will make you job-ready full-stack web developers. Learn how to code meaningful applications from scratch using first-class technologies, such as HTML/CSS and NodeJS. The Web Development bootcamp covers Git, HTML, CSS, JavaScript, Node.js, React, and Express. This bootcamp is for new graduates, hard workers and everyone who is aiming for career growth or a career change.
        </p>
      </div>
    </article>
  );
};

export default ExperianceCard;
