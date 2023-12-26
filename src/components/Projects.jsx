import React from "react";
import pizzuniverseDesktop from "../assets/projects/pizzuniverseDesktop.png";
import pizzauniverseMobile from "../assets/projects/pizzauniverseMobile.png";
import lemonDesktop from "../assets/projects/lemonDesktop.png";
import lemonMobile from "../assets/projects/lemonMobile.png";
import onequizDesktop from "../assets/projects/onequizDesktop.png";
import onequizMobile from "../assets/projects/onequizMobile.png";
import { HiExternalLink } from "react-icons/hi";
import { FaGithub } from "react-icons/fa";

const Projects = () => {
  return (
    <div name="projects" className="w-full h-full text-gray-300 ">
      <div className="max-w-[1050px] h-full mx-auto ">
        <div class="w-[64px] h-[6px] rounded-xl bg-gradient-to-r from-teal-300 to-purple-600 md:mx-8 mx-4"></div>
        <p className="text-4xl md:text-6xl font-bold my-8 md:mx-8 mx-4">
          Projects
        </p>

        <div className="mx-4">
          <div className="mb-14 relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b  from-slate-800 to-indigo-900 dark:border-slate-700 border-slate-100 max-w-[980px] mx-auto">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-600 to-transparent"></div>
            <div className="grid grid-cols-1 min-h-[500px]  xmd:grid-cols-2 justify-items-center xmd:justify-items-start">
              <div className="self-start col-span-1 my-8 mx-8 text-center xmd:text-left w-full max-w-[600px] xmd:w-[400px] xmd:mx-4">
                <h2 className="mb-2 text-white text-4xl font-bold px-2">
                  Pizza Universe
                </h2>
                <div className="flex gap-x-1 gap-y-1 my-4 flex-wrap justify-center xmd:justify-start px-2">
                  <div className="bg-[#6b3030] text-[#d4c0c0] py-[4px] px-[12px] rounded-md text-[13px]">
                    React.js
                  </div>
                  <div className="bg-[#6b3030] text-[#d4c0c0] py-[4px] px-[12px] rounded-md text-[13px]">
                    JavaScript
                  </div>
                  <div className="bg-[#6b3030] text-[#d4c0c0] py-[4px] px-[12px] rounded-md text-[13px]">
                    SASS
                  </div>
                  <div className="bg-[#6b3030] text-[#d4c0c0] py-[4px] px-[12px] rounded-md text-[13px]">
                    RESTful API
                  </div>
                </div>
                <p className="text-slate-300 text-lg w-full xmd:w-[350px] xxmd:w-[400px] px-2">
                  Using React, HTML, CSS & JS built a responsive e-commerce
                  website that lets users to select and order pizzas. Utilized a
                  RESTful API for data retrieval and management, simulated
                  through a Mock API
                </p>

                <button className="mt-4 text-slate-100 bg-gray-900 py-[6px] px-[20px] rounded-full font-semibold hover:text-gray-300">
                  <a
                    href="https://pizza-universe.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                  >
                    <HiExternalLink
                      style={{ fontSize: "1.2em", marginRight: "3px" }}
                    />
                    Live Demo
                  </a>
                </button>
                <button className="mt-4 ml-4 text-gray-700 bg-gray-200 py-[4px] px-[20px] rounded-full font-semibold hover:text-gray-600">
                  <a
                    href="https://github.com/zainabidinov/pizza-order-app.git"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                  >
                    <FaGithub
                      style={{ fontSize: "1.2em", marginRight: "4px" }}
                    />
                    GitHub
                  </a>
                </button>
              </div>

              <div className="xmd:absolute md:right-[-210px] xmd:w-[800px] mb-4 px-1 sm:ml-0 ml-1">
                <img
                  src={pizzuniverseDesktop}
                  alt="desktop"
                  className=" sm:w-[750px]"
                />
              </div>
              <div className="absolute self-end justify-self-start xmd:top-[261px] xmd:right-[-225px] xmd:w-[800px]">
                <img
                  src={pizzauniverseMobile}
                  alt="mobile"
                  className="w-[70px] mobileS:w-[65px] mobileL:w-[85px] mobileXl:w-[95px] sm:w-[115px] ml-2 mobileXl:ml-4 mb-4"
                />
              </div>
            </div>
          </div>
        </div>

        <div className="mx-4">
          <div className="mb-16 relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b  from-slate-800 to-blue-900 border-slate-700 max-w-[1000px] mx-auto">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-600 to-transparent"></div>
            <div className="grid grid-cols-1 min-h-[500px]  xmd:grid-cols-2 justify-items-center xmd:justify-items-start">
              <div className="self-start col-span-1 my-8 mx-8 text-center xmd:text-left w-full max-w-[600px] xmd:w-[400px] xmd:mx-4">
                <h2 className="mb-2 text-white text-4xl font-bold px-2">
                  One Quiz
                </h2>
                <div className="flex flex-wrap gap-x-1 gap-y-1 my-4 justify-center xmd:justify-start px-2">
                  <div className="bg-[#6b3030] text-[#d4c0c0] py-[4px] px-[12px] rounded-md text-[13px]">
                    React.js
                  </div>
                  <div className="bg-[#6b3030] text-[#d4c0c0] py-[4px] px-[12px] rounded-md text-[13px]">
                    JavaScript
                  </div>
                  <div className="bg-[#6b3030] text-[#d4c0c0] py-[4px] px-[12px] rounded-md text-[13px]">
                    Node.js
                  </div>
                  <div className="bg-[#6b3030] text-[#d4c0c0] py-[4px] px-[12px] rounded-md text-[13px]">
                    RESTful API
                  </div>
                  <div className="bg-[#6b3030] text-[#d4c0c0] py-[4px] px-[12px] rounded-md text-[13px]">
                    MongoDB
                  </div>
                  <div className="bg-[#6b3030] text-[#d4c0c0] py-[4px] px-[12px] rounded-md text-[13px]">
                    Express
                  </div>
                  <div className="bg-[#6b3030] text-[#d4c0c0] py-[4px] px-[12px] rounded-md text-[13px]">
                    ChakraUI
                  </div>
                </div>
                <p className="text-slate-300 text-lg w-full xmd:w-[350px] xxmd:w-[400px] px-2">
                  A fully responsive CRUD application developed using the MERN
                  stack (MongoDB, Express, React, and Node.js). This quiz
                  platform empowers teachers to effortlessly create and edit
                  quizzes, while providing students with the ability to take
                  quizzes and view their results with ease.
                </p>

                <button className="mt-4 text-slate-100 bg-gray-900 py-[6px] px-[20px] rounded-full font-semibold hover:text-gray-300">
                  <a
                    href="https://onequiz.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                  >
                    <HiExternalLink
                      style={{ fontSize: "1.2em", marginRight: "3px" }}
                    />
                    Live Demo
                  </a>
                </button>
                <button className="mt-4 ml-4 text-gray-700 bg-gray-200 py-[4px] px-[20px] rounded-full font-semibold hover:text-gray-600">
                  <a
                    href="https://github.com/zainabidinov/quiz-app.git"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                  >
                    <FaGithub
                      style={{ fontSize: "1.2em", marginRight: "4px" }}
                    />
                    GitHub
                  </a>
                </button>
              </div>

              <div className="xmd:absolute md:right-[-210px] xmd:w-[800px] mb-4 px-1 sm:ml-0 ml-1">
                <img
                  src={onequizDesktop}
                  alt="desktop"
                  className=" sm:w-[750px]"
                />
              </div>
              <div className="absolute self-end justify-self-start xmd:top-[261px] xmd:right-[-225px] xmd:w-[800px]">
                <img
                  src={onequizMobile}
                  alt="mobile"
                  className="w-[70px] mobileS:w-[65px] mobileL:w-[85px] mobileXl:w-[95px] sm:w-[115px] ml-2 mobileXl:ml-4 mb-4"
                />
              </div>
            </div>
          </div>

          <div className="mb-16 relative w-full overflow-hidden border rounded-3xl bg-gradient-to-b  from-slate-800 to-blue-900 border-slate-700 max-w-[1000px] mx-auto">
            <div className="w-full h-[1px] bg-gradient-to-r from-transparent via-indigo-600 to-transparent"></div>
            <div className="grid grid-cols-1 min-h-[500px]  xmd:grid-cols-2 justify-items-center xmd:justify-items-start">
              <div className="self-start col-span-1 my-8 mx-8 text-center xmd:text-left w-full max-w-[600px] xmd:w-[400px] xmd:mx-4">
                <h2 className="mb-2 text-white text-4xl font-bold px-2">
                  Little Lemon
                </h2>
                <div className="flex flex-wrap gap-x-1 gap-y-1 my-4 justify-center xmd:justify-start px-2">
                  <div className="bg-[#6b3030] text-[#d4c0c0] py-[4px] px-[12px] rounded-md text-[13px]">
                    JavaScript
                  </div>
                  <div className="bg-[#6b3030] text-[#d4c0c0] py-[4px] px-[12px] rounded-md text-[13px]">
                    React.js
                  </div>
                  <div className="bg-[#6b3030] text-[#d4c0c0] py-[4px] px-[12px] rounded-md text-[13px]">
                    HTML
                  </div>
                  <div className="bg-[#6b3030] text-[#d4c0c0] py-[4px] px-[12px] rounded-md text-[13px]">
                    CSS
                  </div>
                  <div className="bg-[#6b3030] text-[#d4c0c0] py-[4px] px-[12px] rounded-md text-[13px]">
                    Figma
                  </div>
                </div>
                <p className="text-slate-300 text-lg w-full xmd:w-[350px] xxmd:w-[400px] px-2">
                  The restaurant landing page, built with ReactJS, optimized for
                  desktop and mobile viewing. Website lets users to book a table
                  for various occasions.
                </p>

                <button className="mt-4 text-slate-100 bg-gray-900 py-[6px] px-[20px] rounded-full font-semibold hover:text-gray-300">
                  <a
                    href="https://little-lemon-dine.netlify.app/"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                  >
                    <HiExternalLink
                      style={{ fontSize: "1.2em", marginRight: "3px" }}
                    />
                    Live Demo
                  </a>
                </button>
                <button className="mt-4 ml-4 text-gray-700 bg-gray-200 py-[4px] px-[20px] rounded-full font-semibold hover:text-gray-600">
                  <a
                    href="https://github.com/zainabidinov/little-lemon-restaurant.git"
                    target="_blank"
                    rel="noreferrer"
                    className="flex items-center"
                  >
                    <FaGithub
                      style={{ fontSize: "1.2em", marginRight: "4px" }}
                    />
                    GitHub
                  </a>
                </button>
              </div>

              <div className="xmd:absolute md:right-[-210px] xmd:w-[800px] mb-4 px-1 sm:ml-0 ml-1">
                <img
                  src={lemonDesktop}
                  alt="desktop"
                  className=" sm:w-[750px]"
                />
              </div>
              <div className="absolute self-end justify-self-start xmd:top-[261px] xmd:right-[-225px] xmd:w-[800px]">
                <img
                  src={lemonMobile}
                  alt="mobile"
                  className="w-[70px] mobileS:w-[65px] mobileL:w-[85px] mobileXl:w-[95px] sm:w-[115px] ml-2 mobileXl:ml-4 mb-4"
                />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
