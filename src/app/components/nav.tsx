import Link from "next/link";
import React from "react";
import Image from "next/image";
import { FaDownload } from "react-icons/Fa";

export default function Nav() {
  return (
    <div>
      <header className="text-gray-600 body-font">
        <div className="container mx-auto flex flex-wrap p-5 flex-col md:flex-row items-center">
          <a className="flex title-font font-medium items-center text-gray-900 mb-4 md:mb-0">
            <Image
              src={require("../../../public/assets/pictures/profile.png")}
              alt="Hassan`s picture"
              width={100}
              height={100}
              className="w-15 rounded-s-full"
            />
            <span className="ml-3 text-xl">Muhammad Hassan Ejaz</span>
          </a>
          <nav className="md:ml-auto md:mr-auto flex flex-wrap items-center text-base justify-center">
            <Link href={"/"} className="mr-5 hover:text-blue-600 ">
              HOME
            </Link>
            <Link href={"#"} className="mr-5 hover:text-blue-600">
              ABOUT
            </Link>
            <Link href={"#"} className="mr-5 hover:text-blue-600">
              SKILLS
            </Link>
            <Link href={"#"} className="mr-5 hover:text-blue-600">
              PROJECTS
            </Link>
          </nav>
          <a href="/assets/resume/Muhammad Hassan Resume.pdf">
            <button className="inline-flex items-center bg-gray-100 border-0 py-1 px-3 focus:outline-none hover:bg-gray-200 rounded text-base mt-4 md:mt-0">
              Download CV
              <FaDownload className="text-xl ml-2"/>
            </button>
          </a>
        </div>
      </header>
    </div>
  );
}
