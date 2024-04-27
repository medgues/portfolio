import React, { useState } from "react";
import Image from "next/image";

import { motion } from "framer-motion";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";

import AnimatedTextCharacter from "./AnimatedTextCharacter";
import hichamPortfolio from "../public/hichamPortfolio.webp";
import frontendMentor from "../public/frontend_mentor.webp";
import frontendMentor1 from "../public/introSection/1.jpeg";
import mockup from "../public/mockup1.webp";
import KamalProject from "../public/KamalProject.webp";
import KamalProject1 from "../public/kamaleProject/1.jpeg";
import KamalProject2 from "../public/kamaleProject/2.jpeg";
import KamalProject3 from "../public/kamaleProject/3.jpeg";
import KamalProject4 from "../public/kamaleProject/4.jpeg";
import KamalProject5 from "../public/kamaleProject/5.jpeg";
import KamalProject6 from "../public/kamaleProject/6.jpeg";
import KamalProject7 from "../public/kamaleProject/7.jpeg";
import KamalProject8 from "../public/kamaleProject/8.jpeg";
import KamalProject9 from "../public/kamaleProject/9.jpeg";
import HichamProject1 from "../public/hichamProject/1.jpeg";
import HichamProject2 from "../public/hichamProject/2.jpeg";
import HichamProject3 from "../public/hichamProject/3.jpeg";
import HichamProject4 from "../public/hichamProject/4.jpeg";
import HichamProject5 from "../public/hichamProject/5.jpeg";
import HichamProject6 from "../public/hichamProject/6.jpeg";
import HichamProject7 from "../public/hichamProject/7.jpeg";
import HichamProject8 from "../public/hichamProject/8.jpeg";
import HichamProject9 from "../public/hichamProject/9.jpeg";
import resturanetApp from "../public/resturanetApp.webp";
import foodDeliver from "../public/foodDelivery/foodDelivery.jpeg";
import foodDeliver1 from "../public/foodDelivery/foodDelivery2.jpeg";
import foodDeliver2 from "../public/foodDelivery/foodDelivery3.jpeg";
import foodDeliver3 from "../public/foodDelivery/foodDelivery4.jpeg";
import DigitalClock from "../public/clock.webp";
import DigitalClock1 from "../public/degitalClock/1.jpeg";
import animatedlogin from "../public/annimatedLogin.webp";
import animatedlogin1 from "../public/loginSingupPage/1.jpeg";
import animatedlogin2 from "../public/loginSingupPage/2.jpeg";
import Modal from "./Model";
import { DiCss3, DiHtml5, DiJsBadge, DiReact } from "react-icons/di";
import { SiTailwindcss } from "react-icons/si";
import { TbBrandNextjs } from "react-icons/tb";

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
      stack: [
        { key: 1, icon: <DiHtml5 className=" h-8 w-8" /> },
        { key: 2, icon: <DiCss3 className=" h-8 w-8" /> },
        { key: 3, icon: <DiJsBadge className=" h-8 w-8" /> },
        { key: 4, icon: <DiReact className=" h-8 w-8" /> },
        { key: 5, icon: <SiTailwindcss className=" h-8 w-8" /> },
      ],
      repo: true,
      demo: "https://dev-follow-me-academy-landing-page.web.app/",
    },
    {
      image: resturanetApp,
      swiperImgs: [
        { key: "1", link: foodDeliver },
        { key: "2", link: foodDeliver1 },
        { key: "3", link: foodDeliver2 },
        { key: "4", link: foodDeliver3 },
      ],
      title: "Food Delivery App",
      description: [
        {
          section: "Situation",
          content:
            " Seeking to improve my web development skills, I undertook a project to build a fully functional food delivery app. The goal was to develop an application that combined React-based architecture, Redux for state management, and Firebase for backend integration to create a robust platform for users to order food.",
        },
        {
          section: "Task",
          content:
            "The primary task was to design and implement a food delivery application with a seamless user experience, allowing users to browse food items, add them to a cart, and place orders. The app needed to ensure real-time data synchronization for a smooth and responsive interaction. Additionally, secure user authentication was required to maintain user account integrity.",
        },
        {
          section: "Action",
          content:
            " I began by setting up the frontend of the application using React with TypeScript, creating reusable components for different sections of the app such as the menu, cart, and checkout. Redux was used for state management to maintain consistent application state across various components. I integrated Firebase for backend services, including real-time data synchronization and user authentication. Throughout the project, I adopted an iterative development approach, testing and refining the application to ensure a seamless user experience. This included optimizing the Redux state management to minimize re-renders and integrating Firebase's real-time database to synchronize data efficiently.",
        },
        {
          section: "Result",
          content:
            "The completed food delivery app demonstrated a seamless user experience, with features such as browsing food items, adding to cart, and placing orders. The use of Redux ensured smooth state management, while Firebase provided robust backend services with real-time data synchronization and secure user authentication. This project not only honed my skills in React, TypeScript, and Redux but also showcased my ability to build complex applications with efficient backend integration and a smooth frontend experience.",
        },
      ],
      stack: [
        { key: 1, icon: <DiHtml5 className=" h-8 w-8" /> },
        { key: 2, icon: <DiCss3 className=" h-8 w-8" /> },
        { key: 3, icon: <DiJsBadge className=" h-8 w-8" /> },
        { key: 4, icon: <DiReact className=" h-8 w-8" /> },
        { key: 5, icon: <SiTailwindcss className=" h-8 w-8" /> },
      ],
      repo: "https://github.com/medgues/delivery-app",
      demo: "https://restaurantapp-a3ab8.web.app/",
    },
    {
      image: hichamPortfolio,
      swiperImgs: [
        { key: "1", link: HichamProject1 },
        { key: "2", link: HichamProject2 },
        { key: "3", link: HichamProject3 },
        { key: "4", link: HichamProject4 },
        { key: "5", link: HichamProject5 },
        { key: "6", link: HichamProject6 },
        { key: "7", link: HichamProject7 },
        { key: "8", link: HichamProject8 },
        { key: "9", link: HichamProject9 },
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
      stack: [
        { key: 1, icon: <TbBrandNextjs className=" h-8 w-8" /> },
        { key: 2, icon: <DiCss3 className=" h-8 w-8" /> },
        { key: 3, icon: <DiJsBadge className=" h-8 w-8" /> },
        { key: 5, icon: <SiTailwindcss className=" h-8 w-8" /> },
      ],
      repo: "https://github.com/medgues/hicham_Baali_portfolio-",
      demo: "https://medgues.github.io/hicham_Baali_portfolio-/",
    },
    {
      image: frontendMentor,
      swiperImgs: [{ key: "1", link: frontendMentor1 }],
      title: "Intro Section ",
      description: [
        {
          section: "Situation",
          content:
            "As part of an online coding challenge from Frontend-Mentor, I was tasked with creating a responsive intro section featuring dropdown navigation using HTML and CSS.",
        },
        {
          section: "Task",
          content:
            "The goal was to produce a pixel-perfect design that seamlessly adapts to various screen sizes, ensuring optimal layout and functionality. Additionally, I needed to implement hover states for interactive elements, enhancing user engagement and interactivity.",
        },
        {
          section: "Action",
          content:
            "  Leveraging my proficiency in web development, I meticulously crafted the HTML and CSS code, paying close attention to detail to achieve the desired visual aesthetics and functionality. I carefully structured the code to accommodate responsiveness, employing media queries and flexible layout techniques to ensure an optimal viewing experience across devices. ",
        },
        {
          section: "Result",
          content:
            " The outcome of this project was a polished and responsive intro section with dropdown navigation that met the requirements of the Frontend-Mentor challenge. By successfully creating a pixel-perfect design and implementing hover states, I demonstrated my ability to tackle design challenges and deliver high-quality web development solutions. This project provided valuable hands-on experience, allowing me to refine my skills and explore creative solutions to design problems in a real-world context.",
        },
      ],
      stack: [
        { key: 1, icon: <DiHtml5 className=" h-8 w-8" /> },

        { key: 2, icon: <DiCss3 className=" h-8 w-8" /> },
        { key: 3, icon: <DiJsBadge className=" h-8 w-8" /> },
      ],
      repo: "https://github.com/medgues/intro-section-with-dropdown-navigation-main",
      demo: "https://medgues.github.io/intro-section-with-dropdown-navigation-main/",
    },
    {
      image: animatedlogin,
      swiperImgs: [
        { key: "1", link: animatedlogin1 },
        { key: "2", link: animatedlogin2 },
      ],
      title: "Animated Signup/Login Screen",
      description: [
        {
          section: "Situation",
          content:
            "Tasked with developing a signup/login screen, I aimed to leverage my HTML and CSS expertise to create a visually appealing and user-friendly interface. ",
        },
        {
          section: "Task",
          content:
            " My objective was to enhance the user experience by incorporating seamless animations into the transition between the signup and login sections. To achieve this, I utilized advanced frontend technologies including Framer Motion, TailwindCSS, and JavaScript.",
        },
        {
          section: "Action",
          content:
            "   I began by structuring the HTML elements required for the signup/login screen, ensuring accessibility and semantic markup. Leveraging TailwindCSS, I styled the interface components to achieve a modern and visually appealing design. Utilizing JavaScript, I integrated the necessary functionality for user authentication and interaction. To add smooth and seamless animations to the transition between the signup and login sections, I employed Framer Motion, a powerful animation library for React. Through careful configuration and manipulation of motion components, I crafted fluid animations that enhanced the overall user experience.",
        },
        {
          section: "Result",
          content:
            " The result of this project was a polished signup/login screen featuring a seamless transition animation, achieved through the integration of Framer Motion, TailwindCSS, and JavaScript. By combining these technologies with my HTML and CSS skills, I successfully delivered an intuitive and visually engaging user interface. This project not only showcased my ability to utilize advanced frontend tools but also demonstrated my commitment to delivering high-quality and interactive web solutions.",
        },
      ],
      stack: [
        { key: 1, icon: <DiHtml5 className=" h-8 w-8" /> },
        { key: 2, icon: <DiCss3 className=" h-8 w-8" /> },
        { key: 3, icon: <DiJsBadge className=" h-8 w-8" /> },
        { key: 5, icon: <SiTailwindcss className=" h-8 w-8" /> },
      ],
      repo: "https://github.com/medgues/signup-login-page",
      demo: "https://medgues.github.io/signup-login-page/",
    },
    {
      image: DigitalClock,
      swiperImgs: [{ key: "1", link: DigitalClock1 }],
      title: "Degital Clock",
      description: [
        {
          section: "Situation",
          content:
            "Seeking to refine my proficiency in web development, I embarked on a project to build a functional digital clock using HTML, CSS, and vanilla JavaScript. ",
        },
        {
          section: "Task",
          content:
            "The primary goal was to create a digital clock that accurately displayed the current time and updated dynamically without requiring a page refresh. Through this project, I aimed to deepen my understanding of frontend development principles and improve my JavaScript skills.",
        },
        {
          section: "Action",
          content:
            "   I commenced the project by structuring the HTML markup to define the layout of the digital clock interface, ensuring clarity and accessibility. Leveraging CSS, I styled the clock elements to achieve a clean and visually appealing design, optimizing readability and usability. For the core functionality of the clock, I utilized vanilla JavaScript to implement the logic for fetching the current time, updating the display in real-time, and handling any necessary time conversions. By leveraging JavaScript's Date object and built-in methods, I ensured the accuracy and reliability of the clock's timekeeping functionality. Throughout the development process, I adopted a modular and organized approach to coding, adhering to best practices and writing clean, maintainable code. Additionally, I conducted thorough testing to identify and address any bugs or issues, ensuring the smooth and error-free operation of the digital clock.",
        },
        {
          section: "Result",
          content:
            " The culmination of this project was a fully functional digital clock built using HTML, CSS, and vanilla JavaScript. The clock accurately displayed the current time and updated dynamically, providing users with a seamless and intuitive experience. By completing this project, I not only honed my skills in frontend development but also gained valuable experience in problem-solving and implementing complex functionality using JavaScript. This project served as a testament to my dedication to continuous learning and improvement in the field of web development.",
        },
      ],
      stack: [
        { key: 1, icon: <DiHtml5 className=" h-8 w-8" /> },
        { key: 2, icon: <DiCss3 className=" h-8 w-8" /> },
        { key: 3, icon: <DiJsBadge className=" h-8 w-8" /> },
        { key: 5, icon: <SiTailwindcss className=" h-8 w-8" /> },
      ],
      repo: "https://github.com/medgues/Digital-Clock",
      demo: "https://medgues.github.io/Digital-Clock/",
    },
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
              key={String(project.title)}
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
