import React from "react";
import { motion } from "framer-motion";

const Card = ({ project }) => {
  return (
    <motion.div
      className="relative max-w-xs rounded-lg overflow-hidden mx-4 my-8 shadow-lg transform transition duration-300 hover:scale-105"
      style={{
        background: "linear-gradient(to bottom, #fff, #f7f7f7)", // Subtle gradient background
      }}
    >
      <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
        <img
          className="w-full h-48 object-cover"
          src={project.image}
          alt={project.title}
          style={{
            filter: "grayscale(50%)", // Stylish grayscale effect
            transition: "filter 0.3s",
          }}
          onMouseEnter={(e) => (e.currentTarget.style.filter = "grayscale(0%)")}
          onMouseLeave={(e) => (e.currentTarget.style.filter = "grayscale(50%)")}
        />
      </a>
      <div className="p-5">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">
          <h5
            className="text-xl font-semibold mb-2 tracking-tight"
            style={{
              color: "#2D3748", // Darker text for elegance
              fontFamily: "'Poppins', sans-serif", // Trendy, modern font
            }}
          >
            {project.title}
          </h5>
        </a>
        <p
          className="mb-4 text-sm"
          style={{
            color: "#4A5568", // Muted text color for description
            lineHeight: "1.8",
            fontFamily: "'Inter', sans-serif", // Clean, professional font
          }}
        >
          {project.description}
        </p>
        <a
          href={project.githubUrl}
          target="_blank"
          rel="noopener noreferrer"
          className="absolute bottom-4 left-1/2 transform -translate-x-1/2 bg-gradient-to-r from-orange-500 to-red-500 text-white text-sm font-medium py-2 px-4 rounded-full shadow-lg hover:shadow-xl hover:from-orange-600 hover:to-red-600"
        >
          View Project
          <svg
            className="inline-block ml-2 w-4 h-4"
            fill="currentColor"
            viewBox="0 0 20 20"
            xmlns="http://www.w3.org/2000/svg"
          >
            <path
              fillRule="evenodd"
              d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z"
              clipRule="evenodd"
            />
          </svg>
        </a>
      </div>
    </motion.div>
  );
};

export default Card;
