import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { Options ,Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'

import AnimatedTextCharacter from "./AnimatedTextCharacter";
import hichamPortfolio from "../public/hichamPortfolio.webp";
import frontendMentor from '../public/frontend_mentor.webp'
import mockup from "../public/mockup1.webp";
import KamalProject from "../public/KamalProject.webp";
import resturanetApp from "../public/resturanetApp.webp";
import DigitalClock from '../public/clock.webp'
import animatedlogin from '../public/annimatedLogin.webp'
import Modal from "./Model";

type Props = {};

const Projects = (props: Props) => {
  const [popUp, setPopUp] = useState<boolean>(false)
  const [project, setProject] = useState({})
  const options : Options = {
    type: "loop",
    gap: "1rem",
    resetProgress: false,
    drag:'free',
    snap:true,
    autoplay: true,
    interval:4000,
    pauseOnHover: true,
    pauseOnFocus:true,
    arrows:popUp?false:true,
    mediaQuery: 'max',
    breakpoints: {
      640: {
        arrows:false,
      },
    },
    pagination:true,
    waitForTransition:true,
    wheelSleep:500,
    classes: {
      pagination: 'flex gap-2 left-0 right-0 px-8 pt-4 sm:pt-0 absolute z-1 justify-center items-center  ',
    },
  }
  const projects = [
    {image: KamalProject, swiperImgs:[{key:'1',link: "../public/kamaleProject/1.jpeg"},{key:'2',link: "/kamaleProject/2.jpeg"},{key:'3',link: "/kamaleProject/3.jpeg"},{key:'4',link: "/kamaleProject/4.jpeg"},{key:'5',link: "/kamaleProject/5.jpeg"},{key:'6',link: "/kamaleProject/6.jpeg"},{key:'7',link: "/kamaleProject/7.jpeg"},{key:'8',link: "/kamaleProject/8.jpeg"},{key:'9',link: "/kamaleProject/9.jpeg"}] ,title: "Client Landing Page" , description:"I Built a fullstack web application with signup, login, teachers onboarding, students onbording, school managament, using react, vanilla javascript and tailwind-css", repo:'', demo:'https://stg.followmeacademy.com/'},
    {image: resturanetApp,swiperImgs:[{key:'1',link: "/kamaleProject/1.jpeg"},{key:'2',link: "/kamaleProject/2.jpeg"}], title: "Delivery App" , description:"I Built a fullstack Food Delivery web application with signup, login, Cart manager, using react, Firebase, vanilla javascript and tailwind-css", repo:'', demo:''},  
    {image: hichamPortfolio,swiperImgs:[{key:'1',link: "/hichamProject/1.jpeg"},{key:'2',link: "/hichamProject/2.jpeg"},{key:'3',link: "/hichamProject/3.jpeg"},{key:'4',link: "/hichamProject/4.jpeg"},{key:'5',link: "/hichamProject/5.jpeg"},{key:'6',link: "/hichamProject/6.jpeg"},{key:'7',link: "/hichamProject/7.jpeg"},{key:'8',link: "/hichamProject/8.jpeg"},{key:'9',link: "/hichamProject/9.jpeg"}], title: "Hicham Portfolio" , description:"i added the lit/dark theme feature and created the contact me section to send emails to his emails, also added a new page /inscription for subcribing to his privet course", repo:'https://github.com/medgues/hicham_Baali_portfolio-', demo:'https://medgues.github.io/hicham_Baali_portfolio-/'}, 
    {image: frontendMentor,swiperImgs:[{key:'1',link: "/introSection/1.jpeg"}], title: "Intro Section " , description:`A responsive intro section with drobdown navigation, built with HTML and CSS, to successfully complete an online coding challenge Frontend-Mentor. The goal was to create a pixel-perfect design with optimal layout for different screen sizes and hover states for interactive elements. This project allowed me to practice my web development skills and come up with creative solutions to design problems.`, repo:'https://github.com/medgues/intro-section-with-dropdown-navigation-main', demo:'https://medgues.github.io/intro-section-with-dropdown-navigation-main/'}, 
    {image: animatedlogin,swiperImgs:[{key:'1',link: "/loginSingupPage/1.jpeg"},{key:'2',link: "/loginSingupPage/2.jpeg"}], title: "Animated Signup/Login Screen" , description:`Utilized my HTML and CSS skills to create a Signup/ login screen, Incorporated framer-motion, TailwindCSS, and Javascript to craft a smooth seamless animation for the transition`, repo:'https://github.com/medgues/signup-login-page', demo:'https://medgues.github.io/signup-login-page/'}, 
    {image: DigitalClock,swiperImgs:[{key:'1',link: "/degitalClock/1.jpeg"}], title: "Digital Clock" , description:`Built functional digital clock, to further hone my skills in HTML, CSS and vanilla JavaScript`, repo:'https://github.com/medgues/Digital-Clock', demo:'https://medgues.github.io/Digital-Clock/'}, 
    // {image: mockup,swiperImgs:[{key:'1',link: "/kamaleProject/1.jpeg"},{key:'2',link: "/kamaleProject/2.jpeg"}], title: "Bootcamp Graduation Project" , description:"i added the lit/dark theme feature and created the contact me section to send emails to his emails, also added a new page /inscription for subcribing to his privet course", repo:'https://github.com/medgues/CLA-Graduation-project', demo:'https://cla-graduation-project780.netlify.app'}
    ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
        className="relative flex overflow-hidden flex-col md:flex-col w-[100dvw] justify-center mx-auto items-center z-0 "
    >
      <h3 className="uppercase tracking-[20px]  text-gray-500 text-2xl xl:text-5xl mb-10">
        <AnimatedTextCharacter text="projects" />
      </h3>
      <Splide  aria-label="Projects" className="w-[80%] " options={options}>
      {projects.map((project, i) => {
          return (
            <SplideSlide key={project.title} className="flex  flex-col justify-center items-center relative w-full">
              <motion.div
                initial={{ y: -5, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                className="flex xl:flex-col items-center justify-center h-1/2 md:h-full relative"
              >
                <div className=" relative group flex flex-col items-center justify-center h-full">
                  <Image
                    src={project.image}
                    alt="project moackup"
                    className=" aspect-auto w-[70%]   mt-5 transition-all duration-1000 ease-in-out  "
                    onClick={() => (setPopUp(true),setProject(project))}
    
                  />
                 
                </div>
              </motion.div>
              
            </SplideSlide>
          );
        })}
  
</Splide>
      {popUp && <Modal setPopUp={setPopUp} project={project}/>}
    </motion.div>
  );
};


export default Projects;
