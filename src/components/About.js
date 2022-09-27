import React from "react";
import { FaLinkedin, FaGithub } from "react-icons/fa";
import { MdContactPage, MdPersonAddAlt1 } from "react-icons/md";
import CustomBtn from "./CustomBtn";
import { useRouter } from "next/router";
import Image from "next/image";

const About = () => {
  const router = useRouter();

  return (
    <section
      id="about"
      className="bg-neutral-800 flex flex-col justify-center items-center py-20 p-6 space-y-10"
    >
      <Image
        className="bg-white max-w-xl relative rounded-full z-0"
        src="https://w7.pngwing.com/pngs/527/663/png-transparent-logo-person-user-person-icon-rectangle-photography-computer-wallpaper.png"
        alt="Some alt"
        width={350}
        height={350}
      ></Image>
      <div className="text-3xl text-slate-300 font-sans font-semibold space-y-3 tracking-wider max-w-lg">
        <h1 className="font-serif font-normal">I&apos;m John Hernández</h1>
        <h1 className="text-yellow-300 text-2xl">Software Engineer</h1>
        <p className="text-base font-normal text-slate-300 tracking-wide text-justify">
          Desarrollador de Software Frontend con 21 años de edad residente en
          <span className="text-yellow-300"> Colombia</span>, apasionado por la
          tecnología y el desarrollo de aplicaciones en ambientes web, escritorio y movil.
        </p>
        <div className="flex flex-wrap text-sm space-x-10 justify-center pt-5">
          <CustomBtn
            text="LinkedIn"
            handleClick={() =>
              window.open("https://www.linkedin.com/in/john-eh/", "_blank")
            }
          >
            <FaLinkedin size={18} />
          </CustomBtn>
          <CustomBtn
            text="GitHub"
            handleClick={() =>
              window.open("https://github.com/johnEhz", "_blank")
            }
          >
            <FaGithub size={18} />
          </CustomBtn>
          <CustomBtn text="CV">
            <MdContactPage size={18} />
          </CustomBtn>
          <CustomBtn text="Hire me" color="bg-amber-600">
            <MdPersonAddAlt1 size={18} />
          </CustomBtn>
        </div>
      </div>
    </section>
  );
};

export default About;
