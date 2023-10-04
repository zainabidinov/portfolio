import React from "react";
import testProj1 from "../assets/projects/01-big.jpg";
import testProj2 from "../assets/projects/02.jpg";
import testProj3 from "../assets/projects/03.jpg";
import testProj4 from "../assets/projects/04.jpg";

const Projects = () => {
  return (
    <div name="projects" className="w-full h-screen text-gray-300">
      <div className="max-w-[1150px] h-full mx-auto">
        <div class="w-[64px] h-[6px] rounded-xl bg-gradient-to-r from-teal-300 to-purple-600 mx-4"></div>
        <p className="text-6xl font-bold my-8 mx-4">Projects</p>

        {/* Grid Container */}
        <div className="w-full h-full grid sm:grid-cols-2 gap-4 justify-items-center">
          {/* Project Item */}
          <div className="sm:w-[400px] w-[300px] flex flex-col my-4 shadow-slate-500 shadow-md">
            <img
              src={testProj1}
              alt="project1-img"
              className="w-[300px] sm:w-[400px]"
            />
            <p className="text-2xl text-center font-semibold my-2">
              Gaming streaming portal
            </p>
            <p className="text-justify px-[40px] ">
              Lorem ipsum dolor, sit amet consectetur adipisicing elit. Odio
              officia eos laboriosam ducimus similique culpa omnis ipsa quo
              voluptatum nisi.
            </p>
            <div className="flex justify-around my-4 text-xl">
              <p>React</p>
              <p>API</p>
            </div>
            <div className="flex justify-around my-4">
              <button
                className="border-2 border-[#5c62ec] hover:opacity-80 transition-opacity font-bold
                         duration-200 ease-in text-white px-3 py-2 rounded-3xl bg-[#5c62ec]"
              >
                Repo
              </button>
              <button
                className="border-2 border-[#5c62ec] hover:opacity-80 transition-opacity font-bold
                         duration-200 ease-in text-white px-3 py-2 rounded-3xl bg-[#5c62ec]"
              >
                Live Demo
              </button>
            </div>
          </div>

          <div className="sm:w-[400px] w-[300px] flex flex-col my-4 shadow-slate-500 shadow-md">
            <img
              src={testProj2}
              alt="project2-img"
              className="w-[300px] sm:w-[400px]"
            />
            <p className="text-2xl text-center font-semibold my-2">
              Video Service
            </p>
            <p className="text-justify px-[40px] ">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Asperiores ducimus est quas obcaecati a delectus?
            </p>
            <div className="flex justify-around my-4 text-xl">
              <p>React</p>
              <p>JavaScript</p>
            </div>
            <div className="flex justify-around my-4">
              <button
                className="border-2 border-[#5c62ec] hover:opacity-80 transition-opacity font-bold
                         duration-200 ease-in text-white px-3 py-2 rounded-3xl bg-[#5c62ec]"
              >
                Repo
              </button>
              <button
                className="border-2 border-[#5c62ec] hover:opacity-80 transition-opacity font-bold
                         duration-200 ease-in text-white px-3 py-2 rounded-3xl bg-[#5c62ec]"
              >
                Live Demo
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
