import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

import { RiReactjsFill, RiNextjsFill, RiTailwindCssFill } from "react-icons/ri";
import { SiTypescript, SiExpress } from "react-icons/si";
import { FaCss3Alt, FaNodeJs, FaDatabase, FaServer } from "react-icons/fa";
import { IoLogoHtml5 } from "react-icons/io";
import { IoLogoJavascript } from "react-icons/io5";
import { BiLogoMongodb } from "react-icons/bi";

const techStack = [
  { name: "HTML5", icon: <IoLogoHtml5 size={30} color="#E34F26" /> },
  { name: "CSS3", icon: <FaCss3Alt size={30} color="#1572B6" /> },
  {
    name: "JavaScript",
    icon: <IoLogoJavascript size={30} color="#F7DF1E" />,
  },
  { name: "TypeScript", icon: <SiTypescript size={30} color="#3178C6" /> },
  { name: "React", icon: <RiReactjsFill size={30} color="#61DAFB" /> },
  { name: "Next.js", icon: <RiNextjsFill size={30} color="#000000" /> },
  {
    name: "Tailwind CSS",
    icon: <RiTailwindCssFill size={30} color="#38BDF8" />,
  },
  { name: "Node.js", icon: <FaNodeJs size={30} color="#339933" /> },
  { name: "Express.js", icon: <SiExpress size={30} color="#000000" /> },
  { name: "REST API", icon: <FaServer size={30} color="#6C63FF" /> },
  { name: "MongoDB", icon: <BiLogoMongodb size={30} color="#47A248" /> },
  { name: "Database", icon: <FaDatabase size={30} color="#4DB33D" /> },
];

const Skills = ({ darkMode }) => {
  const settings = {
    dots: false,
    infinite: true,
    speed: 5000,
    slidesToShow: 4,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 0,
    cssEase: "linear",
    pauseOnHover: false,
    arrows: false,
    responsive: [
      { breakpoint: 1280, settings: { slidesToShow: 3 } },
      { breakpoint: 1024, settings: { slidesToShow: 2 } },
      { breakpoint: 768, settings: { slidesToShow: 1 } },
    ],
  };

  return (
    <section
      id="skills"
      className={`py-12 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mt-10 mb-10">
        Skills
      </h2>

      <div className="mx-auto max-w-[1000px] mt-15">
        <Slider {...settings}>
          {techStack.map((tech, index) => (
            <div key={index} className="px-2">
              <div
                className={`p-[2px] rounded-xl bg-gradient-to-r from-cyan-400 via-blue-500 to-indigo-600
 transition-transform duration-300 hover:scale-105`}
                style={{ width: "130px" }}
              >
                <div
                  className={`flex flex-col items-center justify-center p-2 rounded-xl ${
                    darkMode
                      ? "bg-gray-900 text-gray-100"
                      : "bg-white text-gray-900"
                  }`}
                >
                  <div className="w-12 h-12 md:w-14 md:h-14 flex items-center justify-center rounded-full bg-white mb-1 shadow-inner">
                    {tech.icon}
                  </div>
                  <p
                    className={`font-semibold text-xs md:text-sm text-center ${
                      tech.textColor || ""
                    }`}
                  >
                    {tech.name}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </Slider>
      </div>
    </section>
  );
};

export default Skills;
