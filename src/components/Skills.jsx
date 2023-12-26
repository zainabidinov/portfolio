import React from "react";
import {
  DiReact,
  DiJsBadge,
  DiHtml5,
  DiCss3,
  DiResponsive,
} from "react-icons/di";
import { SiRedux } from "react-icons/si";
import { PiFigmaLogo } from "react-icons/pi";
import { Icon } from "@iconify/react";

const Skills = () => {
  return (
    <div name="technologies" className="w-full h-full text-gray-300">
      <div className="max-w-[1050px] h-full mx-auto">
        <div class="w-[64px] h-[6px] rounded-xl bg-gradient-to-r from-teal-300 to-purple-600 md:mx-8 mx-4"></div>
        <p className="text-4xl md:text-6xl font-bold my-8 md:mx-8 mx-4">
          Skills
        </p>

        <p className="text-xl text-justify md:mx-8 mx-4 max-w-[925px] text-gray-400">
          As a web development enthusiast, I've worked with a wide range of
          technologies. My passion for web development extends to personal
          projects, exploring new libraries and experimenting with innovative
          UI/UX designs.
        </p>

        <div className="grid grid-cols-3 sm:grid-cols-5 gap-y-8 my-16 max-w-[900px] md:mx-14 mx-4">
          <div className="px-4 mx-5 flex flex-col items-center gap-1 hover:scale-125 duration-500">
            {/* <DiHtml5 size={"3rem"} /> */}
            <Icon icon="vscode-icons:file-type-html" width="60" />
            <parent>HTML</parent>
          </div>

          <div className="px-4 mx-5 flex flex-col items-center gap-1 hover:scale-125 duration-500">
            {/* <DiCss3 size={"3rem"} /> */}
            <Icon icon="vscode-icons:file-type-css" width="60" />
            <p>CSS</p>
          </div>

          <div className="px-4 mx-5 flex flex-col items-center gap-1 hover:scale-125 duration-500">
            {/* <DiJsBadge size={"3rem"} /> */}
            <Icon icon="logos:javascript" width="60px" height="60px" />
            <p>JavaScript</p>
          </div>

          <div className="px-4 mx-5 flex flex-col items-center gap-1 hover:scale-125 duration-500">
            {/* <DiReact size={"3rem"} /> */}
            <Icon icon="logos:react" width="60" />
            <p>React</p>
          </div>

          <div className="px-4 mx-5 flex flex-col items-center gap-1 hover:scale-125 duration-500">
            {/* <SiRedux size={"3rem"} /> */}
            <Icon icon="logos:typescript-icon" width="60" />
            <p>TypeScript</p>
          </div>

          <div className="px-4 mx-5 flex flex-col items-center gap-1 hover:scale-125 duration-500">
            {/* <SiRedux size={"3rem"} /> */}
            <Icon icon="logos:redux" width="60" />
            <p>Redux Toolkit</p>
          </div>

          <div className="px-4 mx-5 flex flex-col items-center gap-1 hover:scale-125 duration-500">
            {/* <DiResponsive size={"3rem"} /> */}
            <Icon icon="devicon:tailwindcss" width="60" />
            <p>Tailwind</p>
          </div>

          <div className="px-4 mx-5 flex flex-col items-center gap-1 hover:scale-125 duration-500">
            {/* <DiResponsive size={"3rem"} /> */}
            <Icon icon="logos:figma" width="38" />
            <p>Figma</p>
          </div>

          <div className="px-4 mx-5 flex flex-col items-center gap-1 hover:scale-125 duration-500">
            {/* <DiResponsive size={"3rem"} /> */}
            <Icon icon="devicon:git" width="60" />
            <p>Git</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Skills;
