import React from "react";
import Image from "next/image";
import { motion } from "framer-motion";
import { Options ,Splide, SplideSlide } from '@splidejs/react-splide';
import '@splidejs/react-splide/css'
// import '@splidejs/react-splide/css/sea-green'
// import '@splidejs/react-splide/css/skyblue'
import AnimatedTextCharacter from "./AnimatedTextCharacter";
import hichamPortfolio from "../public/hichamPortfolio.webp";
import frontendMentor from '../public/frontend_mentor.webp'
import DigitalClock from '../public/clock.webp'
import animatedlogin from '../public/annimatedLogin.webp'
import mockup1 from "../public/mockup1.webp";

type Props = {};

const Projects = (props: Props) => {
  const options : Options = {
    type: "loop",
    gap: "1rem",
    resetProgress: false,
    // perPage:1,
    // rewind: true,
    drag:'free',
    snap:true,
    // autoplay: true,
    interval:4000,
    pauseOnHover: true,
    pauseOnFocus:true,
    arrows:true,
    mediaQuery: 'max',
    breakpoints: {
      640: {
        arrows:false,
      },
    },
    pagination:true,
    wheel:true,
    waitForTransition:true,
    wheelSleep:500,
    classes: {
      pagination: 'flex gap-2 left-0 right-0 px-8 pt-4 sm:pt-0 absolute z-1 justify-center items-center  ',
    },
  }
  const projects = [
    {image: hichamPortfolio, title: "Hicham Portfolio" , description:"i added the lit/dark theme feature and created the contact me section to send emails to his emails, also added a new page /inscription for subcribing to his privet course", repo:'https://github.com/medgues/hicham_Baali_portfolio-', demo:'https://medgues.github.io/hicham_Baali_portfolio-/'}, 
    {image: frontendMentor, title: "intro section " , description:`A responsive intro section with drobdown navigation, built with HTML and CSS, to successfully complete an online coding challenge Frontend-Mentor. The goal was to create a pixel-perfect design with optimal layout for different screen sizes and hover states for interactive elements. This project allowed me to practice my web development skills and come up with creative solutions to design problems.`, repo:'https://github.com/medgues/intro-section-with-dropdown-navigation-main', demo:'https://medgues.github.io/intro-section-with-dropdown-navigation-main/'}, 
    {image: animatedlogin, title: "Animated Signup/Login Screen" , description:`Utilized my HTML and CSS skills to create a Signup/ login screen, Incorporated framer-motion, TailwindCSS, and Javascript to craft a smooth seamless animation for the transition`, repo:'https://github.com/medgues/signup-login-page', demo:'https://medgues.github.io/signup-login-page/'}, 
    {image: DigitalClock, title: "Digital Clock" , description:`Built functional digital clock, to further hone my skills in HTML, CSS and vanilla JavaScript`, repo:'https://github.com/medgues/Digital-Clock', demo:'https://medgues.github.io/Digital-Clock/'}, 
    ];
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{ opacity: 1 }}
      transition={{ duration: 1.5 }}
      className="h-screen relative flex overflow-hidden flex-col md:flex-col max-w-full justify-center mx-auto items-center z-0"
    >
      <h3 className="uppercase tracking-[20px] bottom- text-gray-500 text-2xl  sm:mt-16">
        <AnimatedTextCharacter text="projects" />
      </h3>
      <Splide aria-label="Projects" className="w-[90%] " options={options}>
      {projects.map((project, i) => {
          return (
            <SplideSlide key={project.title}>
            {/* <div
              
              className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 mt-12 items-center justify-center p-20 md:p-4"
            > */}
              <motion.div
                initial={{ y: -5, opacity: 0 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 1.5 }}
                // viewport={{ once: false }}
                className="flex items-center justify-center"
              >
                <div className=" relative group flex items-center justify-center">
                  <Image
                    src={project.image}
                    alt="project moackup"
                    className=" aspect-auto  lg:w-[55%] xl:w-[60%] 2xl:w-[100%] mt-5 transition-all duration-1000 ease-in-out  "
                  />
                  <div className="absolute -bottom-2 opacity-0 group-hover:opacity-80 transition-all duration-500 ease-in-out  z-0">
                    <div className="flex items-center justify-center h-full gap-5">
                      <button className="projectButton" onClick={()=>window.open(project.repo)}>Repo</button>
                      <button className="projectButton " onClick={()=>window.open(project.demo)} >Demo</button>
                    </div>
                  </div>
                </div>
              </motion.div>
              <div className="space-y-5 px-0 md:px-10 max-w-full mt-2">
                <h4 className="text-xl lg:text-3xl font-semibold text-center">
                  <span className="underline decoration-[#F7AB0A]">
                    Case Study {i + 1} of {projects.length}
                  </span>{" "}
                  : {project.title}
                </h4>
                <p className="text-base lg:text-lg text-center m-auto sm:w-3/4 ">
                  {project.description}
                </p>
              </div>
            {/* </div> */}
            </SplideSlide>
          );
        })}
  
</Splide>
      <div className="w-full -z-50 absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12"></div>
    </motion.div>
  );
};
// const Projects = (props: Props) => {
//   const projects = [
//     {image: hichamPortfolio, title: "Hicham Portfolio" , description:"i added the lit/dark theme feature and created the contact me section to send emails to his emails, also added a new page /inscription for subcribing to his privet course", repo:'https://github.com/medgues/hicham_Baali_portfolio-', demo:'https://medgues.github.io/hicham_Baali_portfolio-/'}, 
//     {image: frontendMentor, title: "intro section " , description:`A responsive intro section with drobdown navigation, built with HTML and CSS, to successfully complete an online coding challenge Frontend-Mentor. The goal was to create a pixel-perfect design with optimal layout for different screen sizes and hover states for interactive elements. This project allowed me to practice my web development skills and come up with creative solutions to design problems.`, repo:'https://github.com/medgues/intro-section-with-dropdown-navigation-main', demo:'https://medgues.github.io/intro-section-with-dropdown-navigation-main/'}, 
//     {image: animatedlogin, title: "Animated Signup/Login Screen" , description:`Utilized my HTML and CSS skills to create a Signup/ login screen, Incorporated framer-motion, TailwindCSS, and Javascript to craft a smooth seamless animation for the transition`, repo:'https://github.com/medgues/signup-login-page', demo:'https://medgues.github.io/signup-login-page/'}, 
//     {image: DigitalClock, title: "Digital Clock" , description:`Built functional digital clock, to further hone my skills in HTML, CSS and vanilla JavaScript`, repo:'https://github.com/medgues/Digital-Clock', demo:'https://medgues.github.io/Digital-Clock/'}, 
//     ];
//   return (
//     <motion.div
//       initial={{ opacity: 0 }}
//       whileInView={{ opacity: 1 }}
//       transition={{ duration: 1.5 }}
//       className="h-screen relative flex overflow-hidden flex-col md:flex-row max-w-full justify-evenly mx-auto items-center z-0"
//     >
//       <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
//         <AnimatedTextCharacter text="projects" />
//       </h3>
//       <div
//         className="relative w-full flex overflow-x-scroll overflow-hidden snap-x snap-mandatory z-20
//       scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
//       >
//         {/* projects */}
//         {projects.map((project, i) => {
//           return (
//             <div
//               key={project.title}
//               className="w-screen flex-shrink-0 snap-center flex flex-col space-y-3 mt-12 items-center justify-center p-20 md:p-4"
//             >
//               <motion.div
//                 initial={{ y: -20, opacity: 0 }}
//                 whileInView={{ opacity: 1, y: 0 }}
//                 transition={{ duration: 1.5 }}
//                 viewport={{ once: true }}
//                 className="flex items-center justify-center"
//               >
//                 <div className=" relative group flex items-center justify-center">
//                   <Image
//                     src={project.image}
//                     alt="project moackup"
//                     className=" aspect-auto costumeSize1:w-[100%] costumeSize2:w-[10%] lg:w-[55%] xl:w-[80%] 2xl:w-[100%] xl:mt-10 transition-all duration-1000 ease-in-out  "
//                   />
//                   <div className="absolute -bottom-2 opacity-0 group-hover:opacity-80 transition-all duration-500 ease-in-out  z-0">
//                     <div className="flex items-center justify-center h-full gap-5">
//                       <button className="projectButton" onClick={()=>window.open(project.repo)}>Repo</button>
//                       <button className="projectButton " onClick={()=>window.open(project.demo)} >Demo</button>
//                     </div>
//                   </div>
//                 </div>
//               </motion.div>
//               <div className="space-y-5 px-0 md:px-10 max-w-full">
//                 <h4 className="text-xl lg:text-3xl font-semibold text-center">
//                   <span className="underline decoration-[#F7AB0A]">
//                     Case Study {i + 1} of {projects.length}
//                   </span>{" "}
//                   : {project.title}
//                 </h4>

//                 <p className="text-base lg:text-lg text-center m-auto w-full">
//                  {project.description}
//                 </p>
//               </div>
//             </div>
//           );
//         })}
//       </div>
//       <div className="w-full absolute top-[30%] bg-[#F7AB0A]/10 left-0 h-[400px] -skew-y-12"></div>
//     </motion.div>
//   );
// };

export default Projects;
