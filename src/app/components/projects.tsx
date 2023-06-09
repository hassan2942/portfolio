import React from "react";
import Image from "next/image";
import Link from "next/link";

export default function Projects() {
  return (
    <div>
      <section className="text-gray-600 body-font" id="project">
        <div className="container px-5 py-24 mx-auto">
          <div className="flex flex-col text-center w-full mb-20">
            <h1 className="title-font sm:text-4xl text-3xl mb-4 font-medium text-gray-900">
              PROJECTS
            </h1>
            <p className="lg:w-2/3 mx-auto leading-relaxed text-base">
              In my project section, you will find a diverse range of innovative
              and impactful projects that showcase my skills and passion for
              problem-solving. From web development to UX/UI design, each
              project reflects my dedication to delivering exceptional results
              and exceeding client expectations.
            </p>
          </div>
          <div className="flex flex-wrap -m-4">
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center border-gray-900 border-4"
                  src={require("../../../public/assets/projects/fb_clone.png")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    REPLICA
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    FACEBOOK CLONE
                  </h1>
                  <p className="leading-relaxed">
                    I designed and developed a Facebook clone app, using Nextjs.
                    The app replicates the core features of Facebook, such as
                    user authentication.
                    {/* news 
                     feed, posting, commenting, and real-time notifications,
                    providing a seamless and interactive user experience.  */}
                  </p>
                  <Link
                    href={"http://evotingblockchain3.surge.sh/"}
                    target="_blank"
                    className="font-semibold text-black hover:text-blue-600 hover:font-bold "
                  >
                    <p>View Project</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className=" absolute inset-0 w-full h-full object-cover object-center border-gray-900 border-4"
                  src={require("../../../public/assets/projects/todo.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    TO-DO LIST PROJECT
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    TO-DO LIST
                  </h1>
                  <p className="leading-relaxed">
                    I developed a minimalist to-do list app using Next.js,
                    allowing users to efficiently manage their tasks
                    and stay organized.
                  </p>
                  <Link
                    href={"http://evotingblockchain3.surge.sh/"}
                    target="_blank"
                    className="font-semibold text-black hover:text-blue-600 hover:font-bold "
                  >
                    <p>View Project</p>
                  </Link>
                </div>
              </div>
            </div>
            <div className="lg:w-1/3 sm:w-1/2 p-4">
              <div className="flex relative">
                <Image
                  alt="gallery"
                  className="absolute inset-0 w-full h-full object-cover object-center border-gray-900 border-4"
                  src={require("../../../public/assets/projects/General-Election-piece.jpg")}
                />
                <div className="px-8 py-10 relative z-10 w-full border-4 border-gray-200 bg-white opacity-0 hover:opacity-100">
                  <h2 className="tracking-widest text-sm title-font font-medium text-indigo-500 mb-1">
                    Voting Project
                  </h2>
                  <h1 className="title-font text-lg font-medium text-gray-900 mb-3">
                    E-Voting System Using Blockchain Technology
                  </h1>
                  <p className="leading-relaxed">
                    This is a project for organizations who select their highly
                    qualified candidate on the basis of election and they value
                    security and anonymity.
                  </p>
                  <Link
                    href={"http://evotingblockchain3.surge.sh/"}
                    target="_blank"
                    className="font-semibold text-black hover:text-blue-600 hover:font-bold  "
                  >
                    <p>View Project</p>
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
