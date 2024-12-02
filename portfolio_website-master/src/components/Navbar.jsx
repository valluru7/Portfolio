import React, { useContext, useState } from "react";
import { Link } from "react-scroll";
import { ThemeContext } from "../themeProvider";
import { motion, AnimatePresence } from "framer-motion";
import Hamburger from "hamburger-react";
import logo from "../assets/Veva.jpg";

const Navbar = () => {
  const theme = useContext(ThemeContext);
  const [toggle, setToggle] = useState(false);
  const darkMode = theme.state.darkMode;
  const links = [
    {
      name: "Home",
      route: "home", // Link to section ID
    },
    {
      name: "About",
      route: "about", // Link to section ID
    },
    {
      name: "Skills",
      route: "skills",
    },
    {
      name: "Projects",
      route: "projects",
    },
    {
      name: "Contact",
      route: "contact",
    },
  ];

  function toggleTheme() {
    if (darkMode === true) {
      theme.dispatch({ type: "LIGHTMODE" });
    } else {
      theme.dispatch({ type: "DARKMODE" });
    }
  }

  return (
    <>
      <nav
        className={
          darkMode
            ? "bg-[rgba(255,255,255,0.1)] border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0"
            : "bg-[rgba(55,65,81,0.1)] border-gray-200 z-50 shadow-lg md:px-8 px-1 fixed w-full top-0"
        }
      >
        <div className="flex justify-between items-center py-2 md:py-4 md:px-2 pl-2 mx-auto">
          {/* Logo Section */}
          <div className="flex items-center cursor-pointer">
            <a
              href="/"
              className={`text-3xl font-bold whitespace-nowrap transition-all duration-300 hover:scale-105 ${
                darkMode ? "text-black hover:text-gray-700" : "text-white hover:text-gray-300"
              }`}
              style={{
                fontFamily: "'Poppins', sans-serif",
                letterSpacing: "2px",
              }}
            >
              VeVa
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden justify-between items-center w-full md:flex md:w-auto">
            <ul className="flex flex-col mt-4 md:flex-row md:space-x-8 md:mt-0 md:text-md md:font-medium">
              {links.map((el) => (
                <li className="cursor-pointer" key={el.name}>
                  <Link
                    to={el.route}
                    activeClass={"text-white bg-[#FF6F00]"} // Active link style
                    spy={true}
                    smooth={true}
                    duration={500} // Smooth scroll duration
                    offset={-50} // Adjust offset for sticky navbar
                    className={
                      darkMode
                        ? "block py-2 px-3 text-black hover:bg-[#FF6F00] hover:text-white rounded-md"
                        : "block py-2 px-3 text-white hover:bg-[#FF6F00] hover:text-black rounded-md"
                    }
                  >
                    {el.name}
                  </Link>
                </li>
              ))}
            </ul>

            {/* Theme toggle */}
            <div onClick={() => toggleTheme()}>
              {darkMode ? (
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                  className="w-6 ml-6 cursor-pointer hover:scale-1.50 block"
                  alt="Sun Icon"
                />
              ) : (
                <img
                  src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                  className="w-6 ml-6 cursor-pointer hover:scale-1.50 block"
                  alt="Moon Icon"
                />
              )}
            </div>
          </div>

          {/* Mobile Navigation */}
          <div className="flex md:hidden items-center">
            {/* Theme toggle for mobile */}
            <div onClick={() => toggleTheme()}>
              {darkMode ? (
                <img
                  src="https://img.icons8.com/external-flaticons-flat-flat-icons/64/000000/external-sun-lighting-flaticons-flat-flat-icons.png"
                  className="w-6 mr-4 cursor-pointer hover:scale-1.50 block"
                  alt="Sun Icon"
                />
              ) : (
                <img
                  src="https://img.icons8.com/external-prettycons-lineal-color-prettycons/49/000000/external-moon-astrology-and-symbology-prettycons-lineal-color-prettycons.png"
                  alt="Moon Icon"
                  className="w-6 mr-4 cursor-pointer hover:scale-1.50 block"
                />
              )}
            </div>

            {/* Hamburger Icon */}
            <Hamburger
              toggled={toggle}
              size={22}
              duration={0.8}
              distance={"lg"}
              toggle={setToggle}
              color={darkMode ? "#000000" : "#ffffff"}
            />
          </div>
        </div>
      </nav>

      {/* Mobile Navigation Dropdown */}
      <AnimatePresence>
        {toggle && (
          <motion.div
            initial={{ x: 100 }}
            animate={{ x: 0, transition: { type: "spring" } }}
            exit={{ x: 200, transition: { type: "spring" } }}
            className={
              darkMode
                ? "bg-white py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
                : "bg-black py-2 px-2 md:p-0 z-50 fixed top-16 mt-2 rounded-lg shadow-lg right-2 block w-40"
            }
          >
            <ul className="md:hidden md:flex-row md:space-y-8 md:mt-0 md:text-md md:font-medium">
              {links.map((el) => (
                <Link
                  to={el.route}
                  activeClass={"text-white bg-[#FF6F00]"} // Active link style
                  className={
                    darkMode
                      ? "hover:bg-[#FF6F00] text-black block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                      : "hover:bg-[#FF6F00] text-white block px-3 py-2 rounded-md text-base font-medium mt-1 hover:text-white"
                  }
                  spy={true}
                  smooth={true}
                  onClick={() => setToggle(false)} // Close the menu after clicking
                >
                  <li>{el.name}</li>
                </Link>
              ))}
            </ul>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;
