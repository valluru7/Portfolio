import React, { useContext } from "react";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { techStack } from "../constants"; // Assuming techStack contains the list of technologies
import { Link } from "react-scroll";

const Skills = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <section
      id="skills"
      className="flex flex-col md:flex-row items-center px-4 lg:px-12 py-12" // Increased padding for more space
      style={{
        backgroundColor: darkMode ? "#1b1b1b" : "#FFF7E5", // Dark: Off-black, Light: Dusty Orange Tint
      }}
    >
      {/* Left Text */}
      <motion.div
        className="w-full md:w-1/2 text-left md:pr-8 mt-8 md:mt-0"
        initial={{ opacity: 0, x: -50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8, ease: "easeOut" }}
      >
        <h2
          className={`text-4xl font-bold leading-tight ${
            darkMode ? "text-[#FF6F00]" : "text-gray-800"
          }`}
          style={{ fontFamily: "Montserrat, sans-serif" }}
        >
          Technologies I Master
        </h2>
        <br/>
        <p
          className={`mt-4 text-xl ${
            darkMode ? "text-gray-300" : "text-gray-700"
          }`}
          style={{
            
            fontFamily: "'Pacifico', cursive", // A cute, playful font
            lineHeight: "1.8",
            textShadow: "2px 2px 5px rgba(0, 0, 0, 0.3)", // Subtle text shadow for emphasis
            boxShadow: "0px 0px 15px rgba(50, 111, 111, 0.3)", 
          }}
        >
          Turning coffee into code and ideas into reality with these powerful tools!
        </p>
      </motion.div>

      {/* Right Tech Stack Icons */}
      <motion.div
        className="w-full md:w-1/2 flex justify-center items-center flex-wrap gap-8 mt-8 md:mt-0" // Increased gap for more space between icons
        initial={{ opacity: 0, x: 50 }}
        whileInView={{ opacity: 1, x: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, ease: "easeOut", delay: 0.2 }}
      >
        {techStack.map((el, index) => (
          <motion.div
            key={index}
            className="p-4 flex items-center justify-center" // No border and background
            whileHover={{
              scale: 1.2, // Icons will enlarge when hovered
              boxShadow: "0px 0px 20px rgba(255, 111, 0, 0.7)", // Glowing effect for hover
              filter: "brightness(1.2)", // Brightness increases on hover to make it pop
            }}
          >
            <motion.img
              alt={el.name}
              src={el.link}
              className="w-20 h-20" // Set the size of the icons
              style={{
                transition: "transform 0.2s ease", // Smooth transition for scaling
                
              }}
            />
          </motion.div>
        ))}
      </motion.div>

      {/* Explore Button */}
      {/* You can add your Explore button here if necessary */}
    </section>
  );
};

export default Skills;
