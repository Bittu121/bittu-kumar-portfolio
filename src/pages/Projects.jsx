import React from "react";
import { FaGithub } from "react-icons/fa";
import profilePicture from "../assets/profile-picture.png";
const Projects = ({ darkMode }) => {
  const projects = [
    {
      id: 1,
      image: profilePicture,
      title: "Travel Desk",
      website: "https://your-live-site.com",
      demo: "https://your-demo-link.com",
      github: "https://github.com/your-repo",
    },
    {
      id: 2,
      image: profilePicture,
      title: "Service Management",
      website: "https://dashboard-live.com",
      demo: "https://dashboard-demo.com",
      github: "https://github.com/dashboard-repo",
    },
    {
      id: 3,
      image: profilePicture,
      title: "QEats",
      website: "https://dashboard-live.com",
      demo: "https://dashboard-demo.com",
      github: "https://github.com/dashboard-repo",
    },
  ];

  return (
    <section
      id="projects"
      className={`py-16 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mt-5 mb-12">
        Featured Projects
      </h2>

      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-10 px-6 max-w-4xl mx-auto">
        {projects.map(({ id, image, title, website, demo, github }) => (
          <div
            key={id}
            className={`rounded-2xl shadow-sm border border-transparent ${
              darkMode ? "bg-gray-800 text-gray-100" : "bg-white text-gray-900"
            }`}
          >
            <div className=" rounded-2xl border-2 border-transparent bg-gradient-to-r from-blue-500 via-purple-500 to-pink-500"></div>

            <div>
              <img
                src={image}
                alt={title}
                className="w-full h-48 object-center rounded-2xl p-2"
              />
              <div className="p-5">
                <h3 className="font-semibold text-md md:text-md text-start mb-4">
                  {title}
                </h3>

                <div className="flex items-center justify-between">
                  <div className="flex gap-3">
                    <button
                      onClick={() => window.open(website, "_blank")}
                      className={`px-5 py-2 text-sm font-semibold rounded-xl shadow-md cursor-pointer
    border transition-colors duration-300
    ${
      darkMode
        ? "bg-gray-700/30 text-blue-300 border-gray-600 hover:bg-gray-700/50"
        : "bg-white/20 text-blue-700 border-white/30 hover:bg-gray-100/40"
    }`}
                    >
                      View
                    </button>

                    <button
                      onClick={() => window.open(demo, "_blank")}
                      className={`px-5 py-2 text-sm font-semibold rounded-xl shadow-md cursor-pointer
    border transition-colors duration-300
    ${
      darkMode
        ? "bg-gray-700/30 text-green-300 border-gray-600 hover:bg-gray-700/50"
        : "bg-white/20 text-green-700 border-white/30 hover:bg-gray-100/40"
    }`}
                    >
                      Demo
                    </button>
                  </div>
                  <button
                    onClick={() => window.open(github, "_blank")}
                    className={`p-2 rounded-full shadow-md cursor-pointer border transition-colors duration-300
    ${
      darkMode
        ? "bg-gray-700/30 text-gray-200 border-gray-600 hover:bg-gray-700/50"
        : "bg-white/20 text-gray-700 border-white/30 hover:bg-gray-100/40"
    }`}
                  >
                    <FaGithub size={22} />
                  </button>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Projects;
