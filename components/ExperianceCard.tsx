import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DiJsBadge, DiReact, DiHtml5, DiNodejsSmall,DiGithub,
  DiMongodb,DiCss3 } from "react-icons/di";

import heroImage from "../public/code1.webp";

type Props = {};

const ExperianceCard = (props: Props) => {
  return (
    <article className="glass scale-90 py-20  m-auto flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[350px] md:w-[600px] xl:w-[600px] px-6 bg-[#292929] opacity-100 sm:hover:opacity-100 sm:opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden ">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image
          src={heroImage}
          alt="hero-image"
          className="rounded-lg object-cover object-center lg:h-28 lg:w-[440px]"
        />
      </motion.div>
      <div className="px-0 md:px-10  ">
        <h4 className="text-3xl font-light  wrap mb-8">FullStack Web Dev bootcamp</h4>
        <div className="flex space-x-2 my-2 flex-wrap">
        <DiGithub className="lg:h-12 lg:w-12 h-8 w-8" />
        <DiHtml5 className="lg:h-12 lg:w-12 h-8 w-8"/>
        <DiCss3 className="lg:h-12 lg:w-12 h-8 w-8"/>
        <DiJsBadge className="lg:h-12 lg:w-12 h-8 w-8"/>
        <DiReact className="lg:h-12 lg:w-12 h-8 w-8"/>
        <DiNodejsSmall className="lg:h-12 lg:w-12 h-8 w-8"/>
        <DiMongodb className="lg:h-12 lg:w-12 h-8 w-8"/>
        </div>
        <p className="uppercase py-5 text-gray-300 xl:text-xl">
          {'6 Months : FROM 06/2022 TO 01/2023'}
        </p>
        <p className="space-y-10 ml-4 text-base xl:text-lg xl:font-mono">
        The Web Development bootcamp is an immersive program that will make you job-ready full-stack web developers. Learn how to code meaningful applications from scratch using first-class technologies, such as HTML/CSS and NodeJS. The Web Development bootcamp covers Git, HTML, CSS, JavaScript, Node.js, React, and Express. This bootcamp is for new graduates, hard workers and everyone who is aiming for career growth or a career change.
        </p>
      </div>
    </article>
  );
};

export default ExperianceCard;
