import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import profileImage from "../assets/about.jpg"; // Replace with your image
import { Link } from "react-scroll";
const AboutMe = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section
      id="about"
      className="flex flex-col md:flex-row items-center px-4 lg:px-12 py-12"
      style={{
        backgroundColor: darkMode ? "#1b1b1b" : "#FFF7E5", // Dark: Off-black, Light: Dusty Orange Tint
      }}
    >
      {/* Left Image */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center relative"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 1.8, ease: "easeOut" }}
      >
        <img
          src={profileImage} // Replace with your image URL
          alt="Profile"
          className="rounded-lg shadow-lg w-2/5 sm:w-3/5"
          style={{
            filter: darkMode
              ? "brightness(100%)"
              : "brightness(100%) contrast(90%)",
          }}
        />
        {/* Cinematic Overlay */}
        <div
          className="absolute inset-0 bg-[#FF6F00] mix-blend-multiply opacity-20 rounded-lg"
          aria-hidden="true"
        ></div>
      </motion.div>

      {/* Right Text */}
      <motion.div
        className="w-full md:w-1/2 text-left md:pl-8 mt-8 md:mt-0"
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut", delay: 0.2 }}
      >
        <h2
          className={`text-4xl font-bold leading-tight ${
            darkMode ? "text-white" : "text-gray-800"
          }`}
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          About Me
        </h2>
        <p
          className={`mt-4 text-1xl ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
          style={{ fontFamily: "Roboto, sans-serif", lineHeight: "1.8" }}
        >
          A software developer with a passion
          for creating intuitive, user-friendly, and visually stunning
          applications. With experience in full-stack development and data
          analysis, I combine creativity with technical expertise to solve
          real-world problems.
        </p>
        <p
          className={`mt-3 text-1xl ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
        >
          My journey has been one of constant learning, exploring diverse
          technologies, and turning ideas into impactful solutions. Beyond
          coding, I love photography, hiking, and diving into creative hobbies
          that inspire innovation in my work.
        </p>
        <br/>
        <Link
          
          to="projects" /* Scrolls to the projects section */
          smooth={true}
          offset={-50}
          duration={500}
          className="inline-flex items-center justify-center px-6 py-3 rounded-lg border border-transparent text-base font-medium text-white bg-[#FF6F00] hover:bg-[#D85A00] shadow-lg transform transition-all duration-300 ease-in-out hover:scale-105"
          activeClass="active-link"
        >
          Explore My Work
        </Link>

      </motion.div>
    </section>
  );
};

export default AboutMe;
