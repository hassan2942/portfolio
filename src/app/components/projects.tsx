import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div className="-mt-20">
      <section className="text-gray-600 body-font">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              Projects
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              Whatever cardigan tote bag tumblr hexagon brooklyn asymmetrical
              gentrify, subway tile poke farm-to-table. Franzen you probably
              haven't heard of them man bun deep jianbing selfies heirloom.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                {/* <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center"
                  src={require("../../../public/assets/projects/General-Election-piece.jpg")}
                /> */}
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100 hover:cursor-pointer">
                  <h2 className="tracking-widest text-sm title-font font-medium text-blue-500 mb-1">
                    FYP PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    E-Voting using blockchain technology
                  </h1>
                  <p className="leading-relaxed">
                    This is a project for organizations who select their highly
                    qualified candidate on the basis of election and they value
                    security and anonymity.
                  </p>
                  <Link href={"http://evotingblockchain3.surge.sh/"}>
                    <p className="text-blue-600 hover:underline hover:text-black">
                      View Project..
                    </p>
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
