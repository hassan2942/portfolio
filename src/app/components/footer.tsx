import React from "react";
import {
  AiFillFacebook,
  AiOutlineInstagram,
  AiFillGithub,
  AiFillLinkedin,
} from "react-icons/ai";
import Link from "next/link";

export default function Footer() {
  return (
    <div>
      <footer className="text-gray-600 body-font">
        <div className="container px-5 py-8 mx-auto flex items-center sm:flex-row flex-col">
          <a className="flex title-font font-medium items-center md:justify-start justify-center text-gray-900">
            <span className="ml-3 text-xl">Muhammad Hassan Ejaz</span>
          </a>
          <p className="text-sm text-gray-500 sm:ml-4 sm:pl-4 sm:border-l-2 sm:border-gray-200 sm:py-2 sm:mt-0 mt-4">
            © 2023 KARACHI - PAKISTAN —
          </p>
          <span className="inline-flex sm:ml-auto sm:mt-0 mt-4 justify-center sm:justify-start">
            <Link
              target="_blank"
              href={"https://www.facebook.com/shaikh.hassain/"}
            >
              <AiFillFacebook className="text-2xl hover:text-[blue]" />
            </Link>
            <Link href={"https://www.instagram.com/Yarhassaan/"}>
              <AiOutlineInstagram className="text-2xl ml-2 hover:text-[#c03737]" />
            </Link>
            <Link 
            target="_blank"
            href={"https://github.com/hassan2942"}>
              <AiFillGithub className="text-2xl ml-2 hover:text-[#47a7fc]" />
            </Link>
            <Link
              target="_blank"
              href={
                "https://www.linkedin.com/in/muhammad-hassan-ejaz-0588271b7/"
              }
            >
              <AiFillLinkedin className="text-2xl ml-2 hover:text-[#2f40ff]" />
            </Link>
          </span>
        </div>
      </footer>
    </div>
  );
}
