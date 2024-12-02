import React from "react";
import { motion } from "framer-motion";
import Card from "../components/Card"; // Assuming the Card component is separate

const Projects = () => {
  // Sample project data, replace with actual GitHub projects if needed
  const projects = [
    {
      title: "Ecommerce Web Application",
      description: "A full-stack e-commerce web application built using Django and React, providing a seamless shopping experience with great features.",
      githubUrl: "https://github.com/valluru7/EcommerceWebapp.git",
      image: "https://images.pexels.com/photos/34577/pexels-photo.jpg"
    },
    {
      title: "Natural Language to SQL query",
      description: "An application that converts plain text to sql query by using openAI API key.",
      githubUrl: "https://github.com/valluru7/Open-API-SQL",
      image: "https://images.pexels.com/photos/6153343/pexels-photo-6153343.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "CI-CD-Pipeline-Test-FastAPI",
      description: "A project designed to implement continuous integration and continuous deployment pipelines for testing FastAPI applications.",
      githubUrl: "https://github.com/valluru7/CI-CD-Pipeline-Test-FastAPI",
      image: "https://images.pexels.com/photos/16592498/pexels-photo-16592498/free-photo-of-software-source-code-program-code-code-on-a-computer-screen-the-developer-is-working-on-program-codes-in-the-office-photo-with-source-code.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    {
      title: "Diabetes Prediction system",
      description: "A simple project using Django .",
      githubUrl: "https://github.com/valluru7/Diabetes-Prediction-System",
      image: "https://images.pexels.com/photos/6940853/pexels-photo-6940853.jpeg?auto=compress&cs=tinysrgb&w=1260&h=750&dpr=1"
    },
    
    
    // Add more projects here
  ];

  return (
    <div
      id='projects'
      className="flex flex-col  items-center px-4 lg:px-12 py-12"
      style={{
        backgroundColor: "#1b1b1b", // Dark background for the section
      }}
    >
      <h3
  className="mt-16 text-3xl font-semibold opacity-0 transform scale-90 animate-fadeInUp"
  style={{
    color: "#FF6F00",
    fontFamily: "'Montserrat', sans-serif",
  }}
>
  The things that I built !!!
</h3>

<style jsx>
  {`
    @keyframes fadeInUp {
      from {
        opacity: 0;
        transform: translateY(20px);
      }
      to {
        opacity: 1;
        transform: translateY(0);
      }
    }
    .animate-fadeInUp {
      animation: fadeInUp 1s ease-out forwards;
    }
  `}
</style>


      {/* Projects List */}
      <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
        {projects.map((project, index) => (
          <Card key={index} project={project} />
        ))}
      </div>
    </div>
  );
};

export default Projects;
