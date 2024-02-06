import Head from "next/head";
import { Inter } from "next/font/google";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experiance from "@/components/Experiance";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import { AnimatePresence } from "framer-motion";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <AnimatePresence>
    <div
      className="bg-[url('../public/background.svg')] bg-cover text-white h-screen overflow-y-scroll z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80 flex flex-col items-center relative overflow-x-hidden"
    >
      <Head>
        <title>Portfolio</title>
      </Head>
      {/* header */}
      <Header />
      {/* hero */}
      <section id="hero" className="mb-20 lg:mb-60">
        <Hero />
      </section>
      {/* ABOUT */}
      <section id="about" className="mb-20 lg:mb-60">
        <About />
      </section>
     {/* projects */}
     <section id="projects" className="mb-20 lg:mb-60">
        <Projects />
      </section>
      {/* skills */}
      <section id="skills" className="mb-20 lg:mb-60">
        <Skills />
      </section>
       {/* experiance */}
       <section id="experiance" className="mb-20 lg:mb-60">
        <Experiance />
      </section>
      
      {/* contact me */}
      <section id="contact">
        <ContactMe />
      </section>
      <a href="#hero">
        <BsFillArrowUpCircleFill className="absolute bottom-4 right-7 group-hover:text-[rgba(247,171,10,50%)] text-gray-500 bg-[#3e3e3e] rounded-full p-2 h-16 w-16 mx-auto object-cover filter group-hover:-translate-y-1 group-hover:scale-125 duration-300 transition ease-in-out " />
      </a>
    </div>
    </AnimatePresence>
  );
}
