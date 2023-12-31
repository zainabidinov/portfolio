import React from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import profileImg from "../assets/profile-pic.jpg";

const Home = () => {
  return (
    <div className="w-full h-screen text-gray-300">
      <div className="max-w-[1050px] h-full mx-auto grid 2sm:grid-cols-3">
        <div className="order-2 2sm:order-1 2sm:col-span-2 flex flex-col justify-center items-stretch mx-auto 2sm:justify-center mb-36 px-4">
          <p className="text-xl ">Hi, there! My name is</p>
          <p className="text-3xl sm:text-4xl md:text-7xl font-bold">
            Mukhammadkodir
          </p>
          <p className="text-2xl sm:text-3xl md:text-6xl font-bold text-[#5c62ec]">
            Front End Engineer.
          </p>
          <p className="text-xl py-4 max-w-[500px]">
            I'm a front-end engineer passionate about building functional and
            engaging web applications.
          </p>

          <div className="flex items-center my-3">
            <button
              className="border-2 border-[#5c62ec] hover:opacity-80 transition-opacity font-bold
                         duration-200 ease-in text-white sm:px-3 py-2 rounded-md  bg-[#5c62ec] px-2 text-sm sm:text-base"
            >
              <a
                href="https://drive.google.com/file/d/1HQ14I-dHqaWg-2h-FrAPByp3E6eEAkwR/view?usp=sharing"
                target="_blank"
                rel="noreferrer"
              >
                My Resume
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

        <div className="order-1 2sm:order-2 2sm:min-w-[80px] 2sm:max-w-[185px] 2sm:max-h-[185px] flex flex-col justify-center self-center items-center 2sm:mb-52 2sm:ml-8">
          <div className="w-[185px] h-[185px] rounded-[50%] overflow-hidden shadow-md relative ">
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
