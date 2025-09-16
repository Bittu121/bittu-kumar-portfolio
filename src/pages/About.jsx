import React from "react";
import profilePicture from "../assets/profile-picture.png";
import {
  FaMapMarkerAlt,
  FaPhoneAlt,
  FaEnvelope,
  FaLinkedin,
  FaGithub,
} from "react-icons/fa";
import { NavLink } from "react-router-dom";

const About = ({ darkMode }) => {
  const chnageInDarkMode = darkMode ? "text-white" : "text-gray-900";
  return (
    <section
      id="about"
      className={`py-16 px-6 flex flex-col items-center text-center transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900 text-gray-100 mt-14"
          : "bg-[#F9FAFB] text-gray-900 mt-14"
      }`}
    >
      {/* Profile Picture */}
      <div className="p-1 rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-500">
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full overflow-hidden shadow-md bg-white dark:bg-gray-800">
          <img
            src={profilePicture}
            alt="Profile"
            className="w-full h-full object-cover"
          />
        </div>
      </div>

      {/* Name & Title */}
      <h3 className="mt-4 text-xl md:text-2xl font-semibold">Bittu Kumar</h3>
      <p className="text-blue-600 dark:text-indigo-400 font-medium text-base">
        Full-Stack Developer (MERN)
      </p>

      {/* Contact Info */}
      <div className="flex flex-col sm:flex-row flex-wrap justify-center items-center gap-3 mt-4 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
        <div className="flex items-center gap-2">
          <FaEnvelope size={14} className="text-indigo-500" />
          <span className={`${chnageInDarkMode}`}>
            <a
              href="#"
              onClick={(e) => {
                e.preventDefault();
                window.open(
                  "mailto:bittukumar8713@email.com",
                  "_blank",
                  "noopener,noreferrer"
                );
              }}
              className="hover:underline"
            >
              bittukumar8713@email.com
            </a>
          </span>
        </div>
        <div className="flex items-center gap-2">
          <FaPhoneAlt size={14} className="text-green-500" />
          <span className={`${chnageInDarkMode}`}>+91 91994 01774</span>
        </div>
        <div className="flex items-center gap-2">
          <FaMapMarkerAlt size={14} className="text-red-500" />
          <span className={`${chnageInDarkMode}`}>Noida, India</span>
        </div>
        <div className="flex items-center gap-2">
          <NavLink
            to="https://www.linkedin.com/in/bittu-kumar143/"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-6 h-6 rounded-full backdrop-blur-md bg-white/30 dark:bg-gray-700/30 text-blue-600 dark:text-blue-400 border border-gray-300 dark:border-gray-600 shadow-sm hover:scale-105 hover:shadow-md transition-all duration-300"
          >
            <FaLinkedin size={12} />
          </NavLink>
          <span className={`${chnageInDarkMode}`}>LinkedIn</span>
        </div>
        <div className="flex items-center gap-2">
          <NavLink
            to="https://github.com/Bittu121"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center justify-center w-6 h-6 rounded-full backdrop-blur-md bg-white/30 dark:bg-gray-700/30 text-gray-900 dark:text-gray-100 border border-gray-300 dark:border-gray-600 shadow-sm hover:scale-105 hover:shadow-md transition-all duration-300"
          >
            <FaGithub size={12} />
          </NavLink>
          <span className={`${chnageInDarkMode}`}>GitHub</span>
        </div>
      </div>

      {/* About Text */}
      <div className="mt-5 max-w-xl text-sm sm:text-base text-gray-600 leading-relaxed">
        <p className={`${chnageInDarkMode}`}>
          I am a passionate Full-Stack Developer with hands-on experience in{" "}
          <span className="font-semibold">
            React, Node.js, Express, and MongoDB
          </span>
          . I focus on writing clean, maintainable code and building scalable
          web applications that deliver real impact 🚀.
        </p>
      </div>
    </section>
  );
};

export default About;
