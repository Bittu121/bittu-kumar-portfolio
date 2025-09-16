import React from "react";
import { FaLinkedin, FaGithub, FaEnvelope } from "react-icons/fa";
import { NavLink } from "react-router-dom";

function Footer({ darkMode }) {
  return (
    <footer
      className={`transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-200" : "bg-gray-50 text-gray-800"
      } border-t border-gray-200 dark:border-gray-700`}
    >
      {/* Content wrapper */}
      <div className="max-w-6xl mx-auto px-6 py-10 flex flex-col md:flex-row items-center justify-between gap-6">
        {/* Left side */}
        <div className="text-center md:text-left">
          <h3 className="text-lg font-semibold">Bittu Kumar</h3>
          <p
            className={`text-sm text-gray-500 ${
              darkMode ? "text-white" : "text-gray-400"
            }`}
          >
            Software Developer (MERN)
          </p>
        </div>

        {/* Socials */}
        <div className="flex items-center gap-4">
          <NavLink
            to="mailto:bittukumar8713@email.com"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full 
              bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md 
              hover:scale-110 transition-transform duration-300"
          >
            <FaEnvelope size={16} />
          </NavLink>
          <NavLink
            to="https://www.linkedin.com/in/bittu-kumar143/"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full 
              bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md 
              hover:scale-110 transition-transform duration-300"
          >
            <FaLinkedin size={16} />
          </NavLink>
          <NavLink
            to="https://github.com/Bittu121"
            target="_blank"
            rel="noopener noreferrer"
            className="w-9 h-9 flex items-center justify-center rounded-full 
              bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-md 
              hover:scale-110 transition-transform duration-300"
          >
            <FaGithub size={16} />
          </NavLink>
        </div>
      </div>

      {/* Bottom text */}
      <div
        className={`text-center text-sm py-4 border-t${
          darkMode ? "text-white" : "text-gray-400"
        }`}
      >
        © {new Date().getFullYear()} Bittu Kumar. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;
