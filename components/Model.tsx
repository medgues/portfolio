import React, { useEffect, useRef } from "react";
import { Options, Splide, SplideSlide } from "@splidejs/react-splide";
import "@splidejs/react-splide/css";
import { motion } from "framer-motion";
import Image from "next/image";
import {
  DiJsBadge,
  DiReact,
  DiHtml5,
  DiNodejsSmall,
  DiMongodb,
  DiCss3,
} from "react-icons/di";
const options: Options = {
  gap: "1rem",
  resetProgress: false,
  drag: "free",
  snap: true,
  autoplay: true,
  interval: 4000,
  pauseOnHover: true,
  pauseOnFocus: true,
  arrows: true,
  mediaQuery: "max",
  breakpoints: {
    640: {
      arrows: false,
    },
  },
  pagination: true,
  wheel: true,
  waitForTransition: true,
  wheelSleep: 500,
  classes: {
    pagination:
      "flex gap-2 left-0 right-0 px-8 pt-4 sm:pt-0 absolute z-1 justify-center items-center  ",
  },
};
function Modal({ setPopUp, project }: { setPopUp: React.Dispatch<React.SetStateAction<boolean>>, project: any }) {
  const wrapperRef = useRef(null);
  useOutsideAlerter(wrapperRef);
  function useOutsideAlerter(ref: React.RefObject<any>) {
    useEffect(() => {
      /**
       * Alert if clicked on outside of element
       */
      function handleClickOutside(event: MouseEvent) {
        if (ref.current && !ref.current.contains(event.target as Node)) {
          setPopUp(false);
        }
      }
      // Bind the event listener
      document.addEventListener("mousedown", handleClickOutside);
      return () => {
        // Unbind the event listener on clean up
        document.removeEventListener("mousedown", handleClickOutside);
      };
    }, [ref]);
  }
  return (
    <div
      className="z-100 w-screen h-screen bg-black bg-opacity-80 fixed top-0 right-0 flex justify-center items-center"
    >
      <article  ref={wrapperRef} className="glass w-4/5 lg:w-3/5  h-4/5 m-auto flex flex-col rounded-lg items-center space-y-5 flex-shrink-0 px-6 py-6 bg-[#292929] opacity-100  cursor-pointer transition-opacity duration-200 overflow-x-hidden overflow-y-scroll scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 z-50 ">
        <motion.div
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1.2 }}
          className="mb-10"
        >
          <Splide aria-label="Projects" className="w-[80%] m-auto" options={options}>
            {project.swiperImgs.map((img: any, i: number) => {
              return (
                <SplideSlide
                  key={img.key}
                  className="flex  flex-col justify-center items-center relative w-full"
                >
                  <motion.div
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ duration: 1.5 }}
                    viewport={{ once: true }}

                    className="flex xl:flex-col items-center justify-center h-1/2 md:h-full relative"
                  >
                    <div className=" relative group flex flex-col items-center justify-center h-full">
                      <img
                        src={img.link}
                        width={500}
                        height={500}
                        alt="project moackup"
                        className=" aspect-auto w-[80%]   mt-5 transition-all duration-1000 ease-in-out  rounded-xl "
                      />
                      </div>
                  </motion.div>
                </SplideSlide>
              );
            })}
          </Splide>
        </motion.div>
        <div className="px-0 md:px-10  lg:w-4/5 m-auto">
          <h4 className="text-lg font-light wrap mb-2">{project.title}</h4>
          <div className="flex space-x-2 flex-wrap">
            <DiHtml5 className=" h-8 w-8" />
            <DiCss3 className=" h-8 w-8" />
            <DiJsBadge className=" h-8 w-8" />
            <DiReact className=" h-8 w-8" />
            <DiNodejsSmall className=" h-8 w-8" />
            <DiMongodb className=" h-8 w-8" />
          </div>
          <p className="uppercase py-2 text-gray-300 xl:text-base">
            {"Project Description"}
          </p>
          <p className="space-y-10  text-base font-mono">
            {project.description}
          </p>
          <p className="uppercase py-2 text-gray-300 xl:text-base">{"role"}</p>
          <p className="space-y-10  text-base font-mono">
            {project.description}
          </p>
        </div>
        <div className=" -bottom-2 transition-all duration-500 ease-in-out  z-0 font-mono">
          <div className="flex items-center justify-center h-full gap-5">
            <button
              className="projectButton"
              onClick={() => window.open(project.repo)}
            >
              Repo
            </button>
            <button
              className="projectButton "
              onClick={() => window.open(project.demo)}
            >
              Demo
            </button>
          </div>
        </div>
      </article>
    </div>
  );
}

export default Modal;
