import React, { useContext } from "react";
import Typical from "react-typical";
import { contactLinks } from "../constants";
import { ThemeContext } from "../themeProvider";
import { motion } from "framer-motion";
import { Link } from "react-scroll";
import abstract from "../assets/abstract.jpg";
import cloudDark from "../assets/cloudDark.png";
import CV from "../assets/VenumadhuriValluru.pdf";

const Home = () => {
  const theme = useContext(ThemeContext);
  const darkMode = theme.state.darkMode;

  return (
    <>
      <div
        style={{
          backgroundImage: darkMode
            ? `url('${abstract}')`
            : `url('${cloudDark}')`,
          backgroundSize: "cover",
          backgroundPosition: "center",
          backgroundAttachment: "fixed",
          backgroundRepeat: "no-repeat",
          height: "100vh", // Ensure full viewport height
        }}
        className="flex items-center justify-center"
      >
        <main
          className="text-center px-4 sm:px-6 md:mt-0 lg:px-8 max-w-4xl w-full"
          id="/"
        >
          <div>
            <motion.h1
              className="text-3xl tracking-tight font-semibold sm:text-4xl md:text-5xl"
              style={{
                fontFamily: "Poppins, sans-serif", // New font for headings
                color: darkMode ? "white" : "#FF6F00", // White text for dark mode
              }}
              initial={{ opacity: 0, y: 50 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 1 }}
            >
              <motion.span
                className={darkMode ? "block text-white" : "text-white"}
                initial={{ opacity: 0 }}
                animate={{ opacity: 1 }}
                transition={{ delay: 0.3, duration: 0.7 }}
              >
                Hello, I am Venumadhuri Valluru
              </motion.span>
              <span className="block text-[#FF6F00] z-0 lg:inline">
                <Typical
                  steps={[
                    "Front End Developer",
                    1000,
                    "Full Stack Developer",
                    1000,
                    "Backend Developer",
                    1000,
                    "Data Analyst",
                    1000,
                  ]}
                  loop={Infinity}
                  wrapper="span"
                />
              </span>
            </motion.h1>
            <motion.p
              className="flex items-center justify-centre mt-3 text-base sm:mt-5 sm:text-lg sm:max-w-xl sm:mx-auto md:mt-5 md:text-xl lg:mx-0 text-center"
              style={{
                fontFamily: "Lato, sans-serif", // New font for text
                color: darkMode ? "white" : "#FF6F00", // White text for dark mode
              }}
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: 0.5, duration: 0.8 }}
            >
            {/* Building ideas into reality... */}
            </motion.p>
            <div className="flex justify-center mt-8 space-x-4">
              {contactLinks.map((el) => (
                <motion.a
                  href={el.link}
                  className="mr-5 cursor-pointer hover:scale-125"
                  key={el.name}
                  whileHover={{ scale: 1.2 }} // Hover scale effect
                  transition={{ type: "spring", stiffness: 300 }}
                >
                  <img alt="" src={el.url} />
                </motion.a>
              ))}
            </div>
            <div className="mt-5 sm:mt-8 flex justify-center space-x-4">
              {/* CV Button */}
              <motion.a
                href={CV} // Change this link to your actual resume link
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center px-5 py-3 border border-round text-base font-semibold text-white bg-transparent hover:bg-[#FF6F00] hover:text-white transition duration-300"
                whileHover={{ scale: 1.1 }} // Hover scale effect
                transition={{ type: "spring", stiffness: 200 }}
              >
                CV
              </motion.a>

              {/* Hire Me Button */}
              <motion.div
                whileHover={{ scale: 1.1 }} // Hover scale effect
                transition={{ type: "spring", stiffness: 200 }}
              >
                <Link
                  to="contact" // Scrolls to the contact section
                  smooth={true}
                  offset={-50}
                  duration={500}
                  className="flex items-center justify-center px-5 py-3 border border-round text-base font-semibold text-white bg-transparent hover:bg-[#FF6F00] hover:text-white transition duration-300"
                >
                  Hire Me
                </Link>
              </motion.div>
            </div>
          </div>
          
        </main>
      </div>
    </>
  );
};

export default Home;
