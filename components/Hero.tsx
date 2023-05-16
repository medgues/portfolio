import React from "react";

import { Cursor, useTypewriter } from "react-simple-typewriter";
import BackgroundCircles from "./BackgroundCircles";
import heroImage from "../public/hero.webp";
import Image from "next/image";

type Props = {};

export default function Hero({}: Props) {
  const [text, count] = useTypewriter({
    words: ["Hi, My Name is amine", "a guy who loves to code", "<code geek />"],
    loop: true,
    delaySpeed: 2000,
  });

  const scrollToSection = (sec:string) =>{
    const section = document.getElementById(sec)
    section?.scrollIntoView({ behavior: "smooth"})
  }
  return (
    <div className="h-screen flex flex-col space-y-8 items-center justify-center text-center overflow-hidden ">
      <BackgroundCircles />
      <Image
        src={heroImage}
        alt="hero-image"
        className="animate relative mx-auto h-[300px] w-[300px]"
        priority ={true}
      />
      <div className="z-20">
        <h2 className="text-sm uppercase pb-2 tracking-[15px] text-gray-500">
          Frontend developper
        </h2>
        <h1 className="text-5xl lg:text-6xl font-semibold px-10">
          <span className="mr-3 ">{text}</span>
          <Cursor cursorColor="#F7AB0A" />
        </h1>

        <div className="pt-5">
            <button onClick={()=>scrollToSection("about")} className="heroButton">About</button>
            <button onClick={()=>scrollToSection("experiance")} className="heroButton">Experiance</button>
            <button onClick={()=>scrollToSection("skills")} className="heroButton">Skills</button>
            <button onClick={()=>scrollToSection("projects")} className="heroButton">Projects</button>
        </div>
      </div>
    </div>
  );
}
