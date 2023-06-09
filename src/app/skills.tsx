import React from "react";
import {AiFillHtml5} from "react-icons/ai"
import {BsFiletypeCss} from "react-icons/bs"
import {SiJavascript} from "react-icons/si"
import {FaReact} from "react-icons/fa"
import {TbBrandNextjs} from "react-icons/tb"
import {AiOutlineConsoleSql} from "react-icons/ai"

export default function Skills() {
  return (
    <div id="Skills">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h2 className="text-xs text-indigo-500 tracking-widest font-medium title-font mb-1">
              SKILLS
            </h2>
            <h1 className="sm:text-3xl text-2xl font-medium title-font text-gray-900">
              My Skills
            </h1>
          </div>
          <div className="flex flex-wrap -m-4 -mt-[5rem]">
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                   <AiFillHtml5 className="text-2xl"/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    HTML
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute h-1 w-[95%] bg-blue-600 rounded-xl"></div>
                  </div>
                 <p className="font-bold text-blue-500 text-right">90%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                   <BsFiletypeCss className="text-xl"/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    CSS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute h-1 w-[85%] bg-blue-600 rounded-xl"></div>
                  </div>
                 <p className="font-bold text-blue-500 text-right">85%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                   <SiJavascript className="text-xl"/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    JAVASCRIPT/TYPESCRIPT
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute h-1 w-[85%] bg-blue-600 rounded-xl"></div>
                  </div>
                 <p className="font-bold text-blue-500 text-right">85%</p>
                </div>
              </div>
            </div> 
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                   <FaReact className="text-xl"/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    REACT JS
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute h-1 w-[80%] bg-blue-600 rounded-xl"></div>
                  </div>
                 <p className="font-bold text-blue-500 text-right">80%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                   <TbBrandNextjs className="text-2xl"/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    NEXT JS 
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute h-1 w-[82%] bg-blue-600 rounded-xl"></div>
                  </div>
                 <p className="font-bold text-blue-500 text-right">82%</p>
                </div>
              </div>
            </div>
            <div className="p-4 w-[100%] md:w-1/3">
              <div className="flex rounded-lg h-full  p-8 flex-col">
                <div className="flex items-center mb-3">
                  <div className="w-8 h-8 mr-3 inline-flex items-center justify-center rounded-full bg-indigo-500 text-white flex-shrink-0">
                   <AiOutlineConsoleSql className="text-2xl"/>
                  </div>
                  <h2 className="text-gray-900 text-lg title-font font-medium">
                    SQL
                  </h2>
                </div>
                <div className="flex-grow">
                  <div className=" relative h-1 w-full bg-gray-300 rounded-xl">
                    <div className="absolute h-1 w-[75%] bg-blue-600 rounded-xl"></div>
                  </div>
                 <p className="font-bold text-blue-500 text-right">75%</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
