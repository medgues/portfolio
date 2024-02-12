import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import AnimatedTextCharacter from "./AnimatedTextCharacter";
import hichamPortfolio from "../public/hichamPortfolio.webp";
import frontendMentor from "../public/frontend_mentor.webp";
import mockup from "../public/mockup1.webp";
import KamalProject from "../public/KamalProject.webp";
import KamalProject1 from "../public/kamaleProject/KamalProject.webp";
import KamalProject2 from "../public/kamaleProject/2.jpeg";
import KamalProject3 from "../public/kamaleProject/3.jpeg";
import KamalProject4 from "../public/kamaleProject/4.jpeg";
import KamalProject5 from "../public/kamaleProject/5.jpeg";
import KamalProject6 from "../public/kamaleProject/6.jpeg";
import KamalProject7 from "../public/kamaleProject/7.jpeg";
import KamalProject8 from "../public/kamaleProject/8.jpeg";
import KamalProject9 from "../public/kamaleProject/9.jpeg";
import resturanetApp from "../public/resturanetApp.webp";
import DigitalClock from "../public/clock.webp";
import animatedlogin from "../public/annimatedLogin.webp";
import Modal from "./Model";

type Props = {};

const Projects = (props: Props) => {
  const [popUp, setPopUp] = useState<boolean>(false);
  const [project, setProject] = useState({});
  const options: Options = {
    type: "loop",
    gap: "1rem",
    resetProgress: false,
    drag: "free",
    snap: true,
    autoplay: true,
    interval: 4000,
    pauseOnHover: true,
    pauseOnFocus: true,
    arrows: popUp ? false : true,
    mediaQuery: "max",
    breakpoints: {
      640: {
        arrows: false,
      },
    },
    pagination: true,
    waitForTransition: true,
    wheelSleep: 500,
    classes: {
      pagination:
        "flex gap-2 left-0 right-0 px-8 pt-4 sm:pt-0 absolute z-1 justify-center items-center  ",
    },
  };
  const projects = [
    {
      image: KamalProject,
      swiperImgs: [
        { key: "1", link: KamalProject1 },
        { key: "2", link: KamalProject2 },
        { key: "3", link: KamalProject3 },
        { key: "4", link: KamalProject4 },
        { key: "5", link: KamalProject5 },
        { key: "6", link: KamalProject6 },
        { key: "7", link: KamalProject7 },
        { key: "8", link: KamalProject8 },
        { key: "9", link: KamalProject9 },
      ],
      title: "Client Landing Page",
      description: [
        {
          section: "Situation",
          content:
            " As a freelance web developer, I collaborated with a client who owns an English teaching school. The client expressed the need for a professional online presence to enhance their credibility and increase visibility to high-value client`s.",
        },
        {
          section: "Task",
          content:
            "My task was to design and develop a visually appealing landing page that effectively showcased the client's English teaching services. The goal was to create a platform where the client could demonstrate professionalism and highlight positive feedback from students",
        },
        {
          section: "Action",
          content:
            " began by conducting thorough research on the client's business, target audience, and competitors. I collaborated closely with the client to understand their specific requirements and preferences. Using React, HTML, CSS,TailwindCSS and JavaScript, I designed a sleek and modern landing page that reflected the professionalism and expertise of the English teaching school. I incorporated compelling visuals, testimonials from satisfied students, and clear calls-to-action to engage visitors and encourage inquiries.",
        },
        {
          section: "Result",
          content:
            "The completed landing page provided the client with a polished online presence that effectively showcased their English teaching services. The client reported increased interest from high-end client's and noted a significant improvement in their online visibility. The landing page served as a valuable tool for the client to demonstrate professionalism and attract potential students, ultimately contributing to the growth and success of the English teaching school.",
        },
      ],
      repo: "",
      demo: "https://stg.followmeacademy.com/",
    },
    // {image: resturanetApp,swiperImgs:[{key:'1',link: "/kamaleProject/1.jpeg"},{key:'2',link: "/kamaleProject/2.jpeg"}], title: "Delivery App" , description:"I Built a fullstack Food Delivery web application with signup, login, Cart manager, using react, Firebase, vanilla javascript and tailwind-css", repo:'', demo:''},
    {
      image: hichamPortfolio,
      swiperImgs: [
        { key: "1", link: "/hichamProject/1.jpeg" },
        { key: "2", link: "/hichamProject/2.jpeg" },
        { key: "3", link: "/hichamProject/3.jpeg" },
        { key: "4", link: "/hichamProject/4.jpeg" },
        { key: "5", link: "/hichamProject/5.jpeg" },
        { key: "6", link: "/hichamProject/6.jpeg" },
        { key: "7", link: "/hichamProject/7.jpeg" },
        { key: "8", link: "/hichamProject/8.jpeg" },
        { key: "9", link: "/hichamProject/9.jpeg" },
      ],
      title: "Customization of Online English Teaching Landing Page",
      description: [
        {
          section: "Situation",
          content:
            " I collaborated with a client who is an online English teacher. The client had purchased a template for a landing page but required customization to align with their visual identity and specific requirements. Additionally, the client wanted to replace Google Forms with a custom-built inscription page and implement dark/light mode functionality. They also expressed the need for statistical insights on form submissions.",
        },
        {
          section: "Task",
          content:
            "My task involved editing the purchased template to incorporate the client's visual identity, contact information, and services. I implemented dark/light mode functionality to enhance user experience. Additionally, I developed a custom inscription page using React, Tailwind CSS, and plain JavaScript to replace Google Forms. Furthermore, I integrated Typeform to provide the client with detailed statistics on form submissions, thereby enhancing their ability to track engagement.",
        },
        {
          section: "Action",
          content:
            "  I began by thoroughly reviewing the purchased template and discussing the client's preferences and requirements. Using React and Tailwind CSS, I customized the landing page layout, colors, and typography to reflect the client's visual identity. I implemented dark/light mode functionality to provide users with a personalized browsing experience. For the inscription page, I leveraged React to create a dynamic form that collected relevant client information securely. Integrating Typeform allowed me to provide the client with comprehensive statistics on form submissions, empowering them with valuable insights.",
        },
        {
          section: "Result",
          content:
            " The customized landing page provided the client with a professional online platform that accurately represented their brand and services. The incorporation of dark/light mode and the custom inscription page enhanced user engagement and streamlined the client's registration process. With Typeform integration, the client gained valuable statistical insights into form submissions, enabling them to make informed decisions and optimize their online presence effectively.",
        },
      ],
      repo: "https://github.com/medgues/hicham_Baali_portfolio-",
      demo: "https://medgues.github.io/hicham_Baali_portfolio-/",
    },
    // {image: frontendMentor,swiperImgs:[{key:'1',link: "/introSection/1.jpeg"}], title: "Intro Section " , description:`A responsive intro section with drobdown navigation, built with HTML and CSS, to successfully complete an online coding challenge Frontend-Mentor. The goal was to create a pixel-perfect design with optimal layout for different screen sizes and hover states for interactive elements. This project allowed me to practice my web development skills and come up with creative solutions to design problems.`, repo:'https://github.com/medgues/intro-section-with-dropdown-navigation-main', demo:'https://medgues.github.io/intro-section-with-dropdown-navigation-main/'},
    // {image: animatedlogin,swiperImgs:[{key:'1',link: "/loginSingupPage/1.jpeg"},{key:'2',link: "/loginSingupPage/2.jpeg"}], title: "Animated Signup/Login Screen" , description:`Utilized my HTML and CSS skills to create a Signup/ login screen, Incorporated framer-motion, TailwindCSS, and Javascript to craft a smooth seamless animation for the transition`, repo:'https://github.com/medgues/signup-login-page', demo:'https://medgues.github.io/signup-login-page/'},
    // {image: DigitalClock,swiperImgs:[{key:'1',link: "/degitalClock/1.jpeg"}], title: "Digital Clock" , description:`Built functional digital clock, to further hone my skills in HTML, CSS and vanilla JavaScript`, repo:'https://github.com/medgues/Digital-Clock', demo:'https://medgues.github.io/Digital-Clock/'},
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
      <Splide aria-label="Projects" className="w-[80%] " options={options}>
        {projects.map((project, i) => {
          return (
            <SplideSlide
              key={project.title}
              className="flex  flex-col justify-center items-center relative w-full"
            >
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
                    onClick={() => (setPopUp(true), setProject(project))}
                  />
                </div>
              </motion.div>
            </SplideSlide>
          );
        })}
      </Splide>
      {popUp && <Modal setPopUp={setPopUp} project={project} />}
    </motion.div>
  );
};

export default Projects;
