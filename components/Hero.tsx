import React from "react";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import heroImage from "../public/hero.webp";
import Image from "next/image";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, My Name is Amine", "Web Developer", " <Design that speaks, code that does the work/>"],
    loop: true,
    delaySpeed: 2000,
  });

  const scrollToSection = (sec:string) =>{
    const section = document.getElementById(sec)
    section?.scrollIntoView({ behavior: "smooth"})
  }
  return (
    <div className=" relative  w-[100vw] min-h-screen flex flex-col gap-16 items-center justify-center text-center overflow-hidden ">
      <BackgroundCircles />
      <Image
        src={heroImage}
        alt="hero-image"
        className="animate relative lg:mt-20 mx-auto h-[300px] w-[300px]"
        priority ={true}
      />
      <div className="z-20 flex flex-col gap-4 justify-center items-center">
        <h2 className="text-sm uppercase pb-2 tracking-[15px] text-gray-500">
          Frontend developper
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3  ">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5 flex flex-row gap-2 lg:gap-16">
            <button onClick={()=>scrollToSection("about")} className="heroButton lg:scale-150">About</button>
            <button onClick={()=>scrollToSection("experiance")} className="heroButton lg:scale-150">Experiance</button>
            <button onClick={()=>scrollToSection("skills")} className="heroButton lg:scale-150">Skills</button>
            <button onClick={()=>scrollToSection("projects")}className="heroButton lg:scale-150">Projects</button>
        </div>
      </div>
    </div>
  );
}
