import React from "react";
import { HiPhone, HiLocationMarker, HiMail } from "react-icons/hi";
import AnimatedTextCharacter from "./AnimatedTextCharacter";

type Props = {};

const ContactMe = (props: Props) => {
  return (
    <div className="h-screen relative flex flex-col text-center md:text-left md:flex-row max-w-7xl px-10 justify-evenly mx-auto items-center">
      <h3 className="absolute top-20 uppercase tracking-[20px] text-gray-500 text-2xl">
        <AnimatedTextCharacter text="contact me" />
      </h3>
      <div className="flex flex-col space-y-5 mt-10 ">
        <h4 className="text-2xl md:text-4xl md:font-semibold text-center">
          I have got just what you nedd,{" "}
          <span className="decoration-[#f7ab0a]/50 underline">Lets Talk</span>
        </h4>

        <form action="" className="flex flex-col space-y-2 w-fit mx-auto">
          <div className="flex flex-col space-y-2 md:flex-row md:space-x-2 md:space-y-0  ">
            <input placeholder="Name" className="contactInput" type="text" />
            <input placeholder="Email" className="contactInput" type="email" />
          </div>
          <input placeholder="Subject" className="contactInput" type="text" />
          <textarea placeholder="Message" className="contactInput" />
          <button
            type="submit"
            className="bg-[#f7ab0a] py-5 px-10 rounded-md text-black font-bold text-lg"
          >
            Submit
          </button>
        </form>
        <div className="flex flex-col md:flex-row gap-5 justify-center items-center">
          <div className="flex items-center space-x-2 justify-center">
            <HiPhone className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p>+213555406270</p>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <HiMail className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p>medgues7@gmail.com</p>
          </div>
          <div className="flex items-center space-x-2 justify-center">
            <HiLocationMarker className="text-[#f7ab0a] h-7 w-7 animate-pulse" />
            <p>city naceria , bejaia</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ContactMe;
