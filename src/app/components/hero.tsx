"use client";
import React from "react";
import Image from "next/image";
import Typewriter from "typewriter-effect";

export default function () {
  return (
    <section className="text-gray-600 body-font bg-gray-200">
      <div className="container mx-auto flex px-5 py-24 md:flex-row flex-col items-center">
        <div className="lg:flex-grow md:w-1/2 lg:pr-24 md:pr-16 flex flex-col md:items-start md:text-left mb-16 md:mb-0 items-center text-center">
          <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
            I am
            <br className="hidden lg:inline-block" />
            <Typewriter
              options={{
                strings: ["Web Developer", "Next-js Application Developer"],
                autoStart: true,
                loop: true,
              }}
            />
          </h1>
          <div className="w-[100px] h-[3px] bg-blue-600 animate-bounce -mt-1"></div>
          <p className="mb-8 leading-relaxed">
             Lorem, ipsum dolor sit amet consectetur adipisicing elit.
            Voluptatibus, doloremque architecto? Expedita voluptas illo
            provident officia, dolorum beatae molestiae iusto veniam aut
            doloribus voluptatibus fuga ratione dolores repudiandae repellat
            placeat.
          </p>
          <div className="flex justify-center">
            <button className="inline-flex text-white bg-blue-500 border-0 py-2 px-6 focus:outline-none hover:bg-blue-600 rounded text-lg">
              Button
            </button>
            <button className="ml-4 inline-flex text-gray-700 bg-gray-100 border-0 py-2 px-6 focus:outline-none hover:bg-gray-200 rounded text-lg">
              Button
            </button>
          </div>
        </div>
        <div className="lg:max-w-lg lg:w-full md:w-1/2 w-5/6">
          <Image
            src={require("../../../public/assets/pictures/profile2.jpg")}
            alt={"HassanProfile"}
            className="mx-auto w-[18rem]"
            height={500}
            width={500}
          />
        </div>
      </div>
    </section>
  );
}