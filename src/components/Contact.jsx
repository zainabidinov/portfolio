import React from "react";

const Contact = () => {
  return (
    <div name="contact" className="w-full h-screen mx-auto">
      {/* <div class="w-[64px] h-[6px] rounded-xl bg-gradient-to-r from-teal-300 to-purple-600 mx-4"></div> */}
    
      <div className="max-w-[1150px] h-full flex justify-center items-center px-4">
        <form
          method="POST"
          action="https://getform.io/f/b198b181-766e-4388-ac16-5d330928f41b"
          className="flex flex-col max-w-[600px] w-full"
        >
          <div className="pb-5">
            {/* <p className="text-4xl font-bold inline border-b-4 border-pink-600 text-gray-300">
              Contact
            </p> */}
            <p className="text-4xl md:text-5xl font-bold text-gray-300 text-center">
              Contact Me
            </p>
            <p className="text-gray-300 py-2">
              Please contact me directly at mmzainabidinov@gmail.com or through
              this form.
            </p>
          </div>
          <input
            className="bg-[#ccd6f6] p-2"
            type="text"
            placeholder="Name"
            name="name"
          />
          <input
            className="my-4 p-2 bg-[#ccd6f6]"
            type="email"
            placeholder="Email"
            name="email"
          />
          <textarea
            className="bg-[#ccd6f6] p-2"
            name="message"
            rows="9"
            placeholder="Message"
          ></textarea>
          <button className="text-white border-2 hover:bg-pink-600 hover:border-pink-600 px-4 py-3 my-8 mx-auto flex items-center">
            Let's Collaborate
          </button>
        </form>
      </div>
    </div>
  );
};

export default Contact;
