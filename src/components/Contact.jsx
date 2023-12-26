import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen mx-auto">
      {/* <div class="w-[64px] h-[6px] rounded-xl bg-gradient-to-r from-teal-300 to-purple-600 mx-4"></div> */}

      <div className="max-w-[1050px] h-full flex justify-center items-center px-4 mx-auto">
        <form
          method="POST"
          action="https://getform.io/f/b198b181-766e-4388-ac16-5d330928f41b"
          className="flex flex-col max-w-[600px] w-full content-start"
        >
          <div className="pb-5">
            {/* <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact
            </p> */}
            <p className="text-4xl md:text-5xl font-bold text-gray-300 text-center">
              Contact Me
            </p>
            <p className="text-gray-300 py-2 text-center">
              Please contact me directly at mmzainabidinov@gmail.com or through
              this form.
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2 rounded-sm"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6] rounded-sm"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2 rounded-sm"
            name="message"
            rows="9"
            placeholder="Message"
          ></textarea>

          <button
            className="border-2 border-[#5c62ec] hover:opacity-80 transition-opacity font-bold
                        duration-200 ease-in text-white sm:px-3 py-1.5 rounded-md  bg-[#5c62ec]
                        px-2 text-sm sm:text-base my-3 w-fit  flex items-center mx-auto"
          >
            Submit
            <FaPaperPlane
              style={{
                fontSize: "0.9em",
                marginLeft: "4px",
                alignSelf: "inherit",
              }}
            />
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
