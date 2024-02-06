import React from "react";
import { SocialIcon } from "react-social-icons";
import { motion } from "framer-motion";


type Props = {};

export default function Header({}: Props) {

  const scrollToSection = (sec:string) =>{
    const section = document.getElementById(sec)
    section?.scrollIntoView({ behavior: "smooth"})
    
  }
  return (
    <header className="sticky mx-5 mt-4 sm:mx-24 w-4/5 px-4 bg-[#F7AB0A]  top-0 px-auto rounded-full flex items-start justify-between max-w-7xl  z-[101] xl:items-center">
      <motion.div
        initial={{
          x: -500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        className="felx flex-row items-center"
      >
        {/* social icons */}
        <SocialIcon
          onClick={()=> window.open("https://www.linkedin.com/in/med-gues/")}
          network="linkedin"
          fgColor="currentColor"
          bgColor=" transparent"
          className="cursor-pointer  hover:text-gray-600 text-gray-800 rounded-full pr-2 h-16 w-16 mx-auto object-cover filter hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out"
        />
        <SocialIcon
          onClick={()=> window.open("https://github.com/medgues")}
          network="github"
          fgColor="currentColor"
          bgColor="transparent"
          className="cursor-pointer  hover:text-gray-600 text-gray-800 rounded-full p-2 h-16 w-16 mx-auto object-cover filter hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out"
        />
        <SocialIcon
          onClick={()=> window.open(" fb://page/100873834998317")}
          network="facebook"
          fgColor="currentColor"
          bgColor="transparent"
          className="cursor-pointer  hover:text-gray-600 text-gray-800 rounded-full p-2 h-16 w-16 mx-auto object-cover filter hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out"
        />
        <SocialIcon
          onClick={()=> window.open("https://wa.me/+213698179358?text=hey%2C%0Ai%20am%20interested%20in%20your%20services%2C")}
          network="whatsapp"
          fgColor="currentColor"
          bgColor="transparent"
          className="cursor-pointer  hover:text-gray-600 text-gray-800 rounded-full p-2 h-16 w-16 mx-auto object-cover filter hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out"
        />
      </motion.div>

      <motion.div
        initial={{
          x: 500,
          opacity: 0,
          scale: 0.5,
        }}
        animate={{
          x: 0,
          opacity: 1,
          scale: 1,
        }}
        transition={{
          duration: 1.5,
        }}
        onClick={()=>scrollToSection("contact")} 
        className="cursor-pointer "
        >
      

        <SocialIcon
        className="cursor-pointer  hover:text-gray-600 text-gray-800 rounded-full p-2 h-16 w-16 mx-auto object-cover filter hover:-translate-y-1 hover:scale-125 duration-300 transition ease-in-out"
        network="email"
          fgColor="currentColor"
          bgColor=" transparent"
        />
      <span className="uppercase hidden md:inline-flex text-sm text-gray-800">

          get in touch
        </span>
      </motion.div>
    </header>
  );
}
