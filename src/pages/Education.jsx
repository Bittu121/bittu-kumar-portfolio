import React from "react";
import { FaGraduationCap } from "react-icons/fa";

function Education({ darkMode }) {
  const education = [
    {
      id: 1,
      degree: "Bachelor of Technology (B.Tech) - Computer Science",
      institution: "Aryabhatta Knowledge University, Patna",
      year: "2017 - 2021",
      details:
        "MERN stack full-stack developer with strong DSA skills, hands-on project experience, and open-source contributions. ✅",
    },
    {
      id: 2,
      degree: "Higher Secondary (Class XII)",
      institution: "T.P Varma College Narkatiaganj",
      year: "2012 - 2015",
      details:
        "Completed 12th in PCM with a strong foundation in problem-solving",
    },
  ];

  return (
    <section
      id="education"
      className={`py-20 px-6 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-gray-50 text-gray-900"
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mt-5 mb-12">
        Education
      </h2>

      {/* Timeline */}
      <div className="relative max-w-4xl mx-auto">
        {/* Vertical line */}
        <div className="absolute left-6 top-0 h-full w-[3px] bg-gradient-to-b from-blue-500 via-indigo-500 to-purple-600 rounded-full"></div>

        {/* Timeline items */}
        <div className="space-y-14">
          {education.map(({ id, degree, institution, year, details }) => (
            <div key={id} className="relative pl-20">
              {/* Icon */}
              <span
                className="absolute left-0 flex items-center justify-center w-12 h-12 rounded-full
                           bg-gradient-to-r from-blue-500 to-purple-600 text-white shadow-lg 
                           ring-4 ring-white"
              >
                <FaGraduationCap size={20} />
              </span>

              {/* Card */}
              <div
                className={`rounded-xl border p-6 transition-colors duration-500 
                ${
                  darkMode
                    ? "bg-gray-900/80 backdrop-blur-md border-gray-700 shadow-[0_4px_20px_rgba(0,0,0,0.6)]"
                    : "bg-white border-gray-200 shadow-md"
                } 
                `}
              >
                <h3
                  className={`text-lg font-semibold ${
                    darkMode ? "text-white" : "text-gray-900"
                  }`}
                >
                  {degree}
                </h3>

                <p className="text-sm md:text-base text-blue-600 dark:text-blue-400 font-semibold mt-1">
                  {institution}
                </p>

                <span
                  className="inline-block mt-2 px-3 py-1 text-xs font-medium rounded-full 
                  bg-gradient-to-r from-blue-100 to-purple-100 
                  dark:from-gray-800/80 dark:to-gray-700/80 
                  text-gray-700 dark:text-gray-300"
                >
                  {year}
                </span>

                <p
                  className={`mt-4 leading-relaxed${
                    darkMode ? "text-white" : "text-gray-600"
                  }`}
                >
                  {details}
                </p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Education;
