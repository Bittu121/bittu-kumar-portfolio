import React, { useState } from "react";
import { NavLink } from "react-router-dom";
import {
  FaUserAlt,
  FaProjectDiagram,
  FaTools,
  FaBriefcase,
  FaPhoneAlt,
  FaDownload,
} from "react-icons/fa";
import { FiMenu, FiX } from "react-icons/fi";
import { BsMoonStarsFill, BsSunFill } from "react-icons/bs";

const Navbar = ({ darkMode, setDarkMode }) => {
  const [menuOpen, setMenuOpen] = useState(false);

  const menuItems = [
    { name: "About", icon: <FaUserAlt size={16} />, link: "#about" },
    { name: "Skills", icon: <FaTools size={16} />, link: "#skills" },
    {
      name: "Projects",
      icon: <FaProjectDiagram size={16} />,
      link: "#projects",
    },
    {
      name: "Experience",
      icon: <FaBriefcase size={16} />,
      link: "#experience",
    },
    { name: "Education", icon: <FaBriefcase size={16} />, link: "#education" },
    { name: "Contact", icon: <FaPhoneAlt size={16} />, link: "#contact" },
  ];

  return (
    <div
      className={`w-full fixed top-0 z-50 px-6 py-4 flex items-center justify-between backdrop-blur-md shadow-sm border-b transition-colors duration-500 ${
        darkMode
          ? "bg-gray-900/80 text-gray-100 border-gray-700"
          : "bg-white/70 text-gray-900 border-gray-200"
      }`}
    >
      {/* Left Side: Hamburger for Mobile */}
      <div className="flex items-center gap-4">
        <button
          className="md:hidden p-2 rounded-lg hover:bg-gray-200 dark:hover:bg-gray-700 transition"
          onClick={() => setMenuOpen(true)}
        >
          <FiMenu size={22} />
        </button>

        {/* CV Button */}
        <NavLink
          to="/Bittu-Kumar-CV.pdf"
          download
          className={`hidden md:flex items-center gap-2 px-4 py-2 rounded-2xl backdrop-blur-md 
    bg-white/20 ${darkMode ? "bg-gray-700/20" : ""} 
    font-medium border ${darkMode ? "border-gray-600" : "border-gray-300"} 
    shadow-sm hover:scale-105 hover:shadow-md transition-all duration-300 cursor-pointer
    ${darkMode ? "text-white" : "text-gray-900"}`}
        >
          <FaDownload size={14} />
          Resume
        </NavLink>
      </div>

      {/* Center Menu (Desktop) */}
      <ul className="hidden md:flex gap-6 md:gap-10 text-md font-medium">
        {menuItems.map((item, index) => (
          <li key={index} className="relative flex items-center gap-2 group">
            <a
              href={item.link}
              className="flex items-center gap-2 cursor-pointer"
            >
              <span className="text-indigo-500">{item.icon}</span>
              <span>{item.name}</span>
            </a>
            <span className="absolute left-0 -bottom-1 w-0 h-[2px] bg-indigo-500 transition-all duration-300 group-hover:w-full"></span>
          </li>
        ))}
      </ul>

      {/* Right Side: Dark/Light Mode */}
      <button
        onClick={() => setDarkMode(!darkMode)}
        className="transition-all duration-500 p-2 rounded-full hover:scale-110"
      >
        {darkMode ? (
          <BsSunFill
            size={26}
            className="text-yellow-400 drop-shadow-lg hover:rotate-45 transition-transform cursor-pointer"
          />
        ) : (
          <BsMoonStarsFill
            size={24}
            className="text-indigo-500 drop-shadow-lg hover:rotate-12 transition-transform cursor-pointer"
          />
        )}
      </button>

      {/* Mobile Menu Drawer */}
      <div
        className={`fixed top-0 left-0 h-full w-64 shadow-lg transform transition-transform duration-500 ${
          menuOpen ? "translate-x-0" : "-translate-x-full"
        } ${darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"}`}
      >
        {/* Close Button */}
        <div className="flex items-center justify-between px-6 py-4 border-b dark:border-gray-700">
          <span className="font-semibold text-lg">Portfolio</span>
          <button onClick={() => setMenuOpen(false)}>
            <FiX size={24} />
          </button>
        </div>

        {/* Mobile Menu Links */}
        <ul
          className={`flex flex-col gap-6 p-6 text-sm font-medium ${
            darkMode ? "bg-gray-900" : "bg-white"
          }`}
        >
          {menuItems.map((item, index) => (
            <li key={index} className="flex items-center gap-3">
              <span className="text-indigo-500">{item.icon}</span>
              <a
                href={item.link}
                className="cursor-pointer"
                onClick={() => setMenuOpen(false)}
              >
                {item.name}
              </a>
            </li>
          ))}
          <NavLink
            href="/Bittu-Kumar-CV.pdf"
            download
            className="flex items-center gap-2 px-4 py-2 rounded-full bg-indigo-500 text-white shadow-md hover:scale-105 transition-all duration-300"
          >
            <FaDownload size={14} />
            Resume
          </NavLink>
        </ul>
      </div>
    </div>
  );
};

export default Navbar;
