import Head from "next/head";
import Image from "next/image";
import { Inter } from "next/font/google";
import styles from "@/styles/Home.module.css";
import Header from "@/components/Header";
import Hero from "@/components/Hero";
import About from "@/components/About";
import Experiance from "@/components/Experiance";
import Skills from "@/components/Skills";
import Projects from "@/components/Projects";
import ContactMe from "@/components/ContactMe";
import { BsFillArrowUpCircleFill } from "react-icons/bs";
import background from "../public/background.svg";

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className=" bg-[url('../public/background.svg')] text-white h-screen snap-y snap-proximity  overflow-y-scroll z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
    >
      <Head>
        <title>Portfolio</title>
      </Head>
      {/* header */}
      <Header />
      {/* hero */}
      <section id="hero" className="snap-start pt-5 md:pt-8">
        <Hero />
      </section>
      {/* ABOUT */}
      <section id="about" className="snap-center">
        <About />
      </section>
      {/* experiance */}
      <section id="experiance" className="snap-center">
        <Experiance />
      </section>
      {/* skills */}
      <section id="skills" className="snap-center">
        <Skills />
      </section>
      {/* projects */}
      <section id="projects" className="snap-center">
        <Projects />
      </section>
      {/* contact me */}
      <section id="contact" className="snap-center">
        <ContactMe />
      </section>
      <a href="#hero">
        <BsFillArrowUpCircleFill className="absolute bottom-4 right-7 group-hover:text-[rgba(247,171,10,50%)] text-gray-500 bg-[#3e3e3e] rounded-full p-2 h-16 w-16 mx-auto object-cover filter group-hover:-translate-y-1 group-hover:scale-125 duration-300 transition ease-in-out " />
      </a>
    </div>
  );
}
