import React from "react";

const About = () => {
  return (
    <div name="about" className="w-full h-full text-gray-300">
      <div className="max-w-[1050px] h-full mx-auto">
        <div class="w-[64px] h-[6px] rounded-xl bg-gradient-to-r from-teal-300 to-purple-600 mx-4"></div>
        <p className="text-4xl md:text-6xl font-bold mt-8 mb-4 mx-4">About Me</p>

        <p className="text-xl text-justify mx-4 max-w-[750px] text-gray-400">
          I am open to new opportunities. I am a recent graduate in software
          engineering with over one year of experience in the field of front-end
          web development. Currently, I'm based in Kyrgyzstan, and would love to
          work at a company whose ideals and mission align well with my
          interests and passions.
        </p>

        <p className="text-4xl md:text-5xl font-bold mt-8 mb-4 mx-4">Location</p>
        <p className="text-xl text-justify mx-4 max-w-[750px] text-gray-400">Osh, Kyrgyzstan</p>
      </div>
    </div>
  );
};

export default About;
