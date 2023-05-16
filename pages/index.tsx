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

const inter = Inter({ subsets: ["latin"] });

export default function Home() {
  return (
    <div
      className="snap-y snap-proximity bg-[url('../public/background.svg')] bg-cover text-white h-screen overflow-y-scroll z-0
    scrollbar scrollbar-track-gray-400/20 scrollbar-thumb-[#f7ab0a]/80"
    >
      <Head>
        <title>Portfolio</title>
      </Head>
      {/* header */}
      <Header />
      {/* hero */}
      <section id="hero" >
        <Hero />
      </section>
      {/* ABOUT */}
      <section id="about" >
        <About />
      </section>
      {/* experiance */}
      <section id="experiance" >
        <Experiance />
      </section>
      {/* skills */}
      <section id="skills">
        <Skills />
      </section>
      {/* projects */}
      <section id="projects" >
        <Projects />
      </section>
      {/* contact me */}
      <section id="contact" className="outline outline-orange-600 snap-always snap-center">
        <ContactMe />
      </section>
      <a href="#hero">
        <BsFillArrowUpCircleFill className="absolute bottom-4 right-7 group-hover:text-[rgba(247,171,10,50%)] text-gray-500 bg-[#3e3e3e] rounded-full p-2 h-16 w-16 mx-auto object-cover filter group-hover:-translate-y-1 group-hover:scale-125 duration-300 transition ease-in-out " />
      </a>
    </div>
  );
}
