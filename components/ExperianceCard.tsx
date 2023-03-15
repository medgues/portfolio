import React from "react";
import { motion } from "framer-motion";
import Image from "next/image";
import { DiJsBadge, DiReact, DiHtml5, DiNodejsSmall } from "react-icons/di";

import heroImage from "../public/hero.jpg";

type Props = {};

const ExperianceCard = (props: Props) => {
  return (
    <article className="flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 w-[300px] md:w-[600px] xl:w-[500px] snap-center p-10 bg-[#292929] hover:opacity-100 opacity-40 cursor-pointer transition-opacity duration-200 overflow-hidden">
      <motion.div
        initial={{ y: -100, opacity: 0 }}
        whileInView={{ y: 0, opacity: 1 }}
        transition={{ duration: 1.2 }}
        viewport={{ once: true }}
      >
        <Image
          src={heroImage}
          alt="hero-image"
          className="rounded-lg h-16 w-16 object-cover xl:w-[60px] xl:h-[60px] object-center"
        />
      </motion.div>
      <div className="px-0 md:px-10  ">
        <h4 className="text-4xl font-light">project name</h4>
        <div className="flex space-x-2 my-2">
          <DiJsBadge />
          <DiReact />
          <DiHtml5 />
          <DiNodejsSmall />
        </div>
        <p className="uppercase py-5 text-gray-300 ">
          time created the project
        </p>
        <p className="space-y-2 ml-4 text-base">
          Lorem ipsum dolor sit amet consectetur adipisicing elit. Rerum quasi
          magni vel voluptates at, quo sint praesentium. Dolorem consequatur
          nulla aspernatur soluta, odio quaerat blanditiis dicta culpa totam
          libero reprehenderit.
        </p>
      </div>
    </article>
  );
};

export default ExperianceCard;
