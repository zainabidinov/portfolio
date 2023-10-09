import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/profile-pic.jpg";

const Home = () => {
  return (
    <div className="w-full h-screen text-gray-300">
      <div className="max-w-[1150px] h-full mx-auto grid 2sm:grid-cols-3">
        {/* Home Text Content */}
        <div className="order-2 2sm:order-1 2sm:col-span-2 flex flex-col justify-center items-stretch mx-auto 2sm:justify-center mb-36 px-4">
          <p className="text-xl ">Hi, there! My name is</p>
          <p className="text-4xl md:text-7xl font-bold">Mukhammadkodir</p>
          <p className="text-3xl md:text-6xl font-bold text-[#5c62ec]">
            A Front End Engineer.
          </p>
          <p className="text-xl py-4 max-w-[500px]">
            I'm a front-end engineer passionate about building functional and
            engaging web applications.
          </p>

          <div className="flex items-center my-3">
            <button
              className="border-2 border-[#5c62ec] hover:opacity-80 transition-opacity font-bold
                         duration-200 ease-in text-white px-3 py-2 rounded-3xl bg-[#5c62ec]"
            >
              <a href="http://example.com" target="_blank" rel="noreferrer">
                Get My Resume
              </a>
            </button>

            <a
              href="http://github.com/zainabidinov"
              target="_blank"
              rel="noreferrer"
              className="ml-2 px-5 hover:scale-125 duration-300"
            >
              <FaGithub size={"2rem"} />
            </a>

            <a
              href="http://www.linkedin.com/in/zainabidinov/"
              target="_blank"
              rel="noreferrer"
              className="px-5 hover:scale-125 duration-300"
            >
              <FaLinkedin size={"2rem"} />
            </a>
          </div>
        </div>

        {/* Profile Image */}
        <div className="order-1 2sm:order-2 2sm:col-span-1 flex flex-col justify-center items-center 2sm:mb-40">
          <div className="w-[200px] h-[200px] rounded-[50%] overflow-hidden shadow-md relative ">
            <img
              className="absolute top-[-30px] object-center object-cover"
              src={profileImg}
              alt="profile"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Home;
