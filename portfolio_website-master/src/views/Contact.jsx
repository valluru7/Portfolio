import React, { useContext } from "react";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";

const Contact = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <div
      id="contact"
      className={`${
        darkMode
          ? "bg-gradient-to-r from-gray-800 via-gray-900 to-black pt-24 min:h-screen"
          : "bg-gradient-to-r from-indigo-500 via-blue-500 to-teal-500 pt-24 text-white min:h-screen"
      }`}
    >
      <div className="max-w-7xl mx-auto sm:px-6 lg:px-8 px-4">
        <h2 className="text-5xl font-bold text-center text-white z-0">
          Let's Talk
        </h2>
        <div className="text-center mt-8">
          <h4 className="text-3xl font-semibold text-indigo-400">
            Connect with me
          </h4>
          <p className="text-lg text-gray-300 mt-4">
            If you want to know more about me or my work, or if you would just
            like to say hello, send me a message. I'd love to hear from you.
          </p>
        </div>

        <div className="flex justify-between items-center md:items-stretch flex-col md:flex-row mt-16 pb-16">
          {/* Form Section */}
          <div className="w-full md:pr-8">
            <form  name="contact" method="POST" data-netlify="true" className="space-y-6">
              {/* Hidden input for Netlify */}
              <input type="hidden" name="form-name" value="contact" />  
              <div className="my-6">
                <label
                  htmlFor="name"
                  className={`block mb-2 text-lg font-medium ${
                    darkMode ? "text-white" : "text-white"
                  }`}
                >
                  Name
                </label>
                <input
                  type="text"
                  id="name"
                  name="name" /* Add name attribute to each input for Netlify to capture data */
                  className="bg-gray-800 text-white text-sm rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your name"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="email"
                  className={`block mb-2 text-lg font-medium ${
                    darkMode ? "text-white" : "text-white"
                  }`}
                >
                  Email
                </label>
                <input
                  type="email"
                  id="email"
                  name="email" /* Add name attribute to each input for Netlify to capture data */
                  className="bg-gray-800 text-white text-sm rounded-lg w-full p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your email"
                  required
                />
              </div>

              <div className="mb-4">
                <label
                  htmlFor="message"
                  className={`block mb-2 text-lg font-medium ${
                    darkMode ? "text-white" : "text-white"
                  }`}
                >
                  Message
                </label>
                <textarea
                  id="message"
                  name="message" /* Add name attribute to each input for Netlify to capture data */
                  className="bg-gray-800 text-white h-32 w-full text-sm rounded-lg p-3 focus:outline-none focus:ring-2 focus:ring-indigo-500"
                  placeholder="Enter your message"
                  required
                />
              </div>

              <div className="flex justify-between items-center">
                {/* <div className="underline">
                  <a href="mailto:vmvalluru@gmail.com">
                  <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-500 transition-all duration-300"
                >
                   Send an email
                   </button>
                  </a>
                </div> */}
                <button
                  type="submit"
                  className="bg-indigo-600 text-white px-6 py-2 rounded-md hover:bg-indigo-500 transition-all duration-300"
                >
                  Submit
                </button>
              </div>
            </form>
          </div>

          {/* Contact Info Section */}
          <div className="w-full flex flex-col md:items-end mt-12 md:mt-6">
            <h1 className="text-3xl text-white font-bold">Email</h1>
            <a
              href="mailto:vmvalluru@gmail.com"
              className="mb-12 mt-4 font-semibold text-blue-400 hover:text-blue-500"
            >
              vmvalluru@gmail.com
            </a>

            <h1 className="text-3xl text-white font-bold">Address</h1>
            <p className="mt-4 text-lg text-blue-300 md:text-right">
              Saxony
              <br />
              Germany
            </p>

            <h1 className="text-3xl text-white font-bold mt-8">Social</h1>
            <ul className="flex mt-4">
              {contactLinks.map((el) => (
                <a
                  key={el.name}
                  href={el.link}
                  className="md:ml-6 md:mr-0 mr-6 cursor-pointer hover:scale-125 transition-all duration-300 flex flex-col justify-center items-center"
                >
                  <img alt="" src={el.url} className="w-8 h-8" />
                </a>
              ))}
            </ul>
          </div>
        </div>
      </div>

      <div
        className={
          darkMode
            ? "w-full bg-white text-black text-lg py-3 flex justify-center md:mt-16"
            : "w-full bg-gray-900 text-white text-lg py-3 flex justify-center md:mt-16"
        }
      >
        Made with
        <div className="text-red-500 px-2 text-2xl">❤️</div>
        by Venumadhuri Valluru
      </div>
    </div>
  );
};

export default Contact;
