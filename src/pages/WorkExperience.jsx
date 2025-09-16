import React from "react";

const experiences = [
  {
    id: 1,
    role: "Software Developer",
    company: "Vserv Infosystems Pvt.",
    logo: "https://source.unsplash.com/50x50/?abstract",
    duration: "January2025 - Present",
    mode: "On-site",
    location: "Noida",
  },
  {
    id: 2,
    role: "Mern Stack Developer - Intern",
    company: "Applore Technologies",
    logo: "https://source.unsplash.com/50x50/?design",
    duration: "April 2024 - October 2024",
    mode: "On-site",
    location: "Noida",
  },
  {
    id: 3,
    role: "Frontend Developer - Intern",
    company: "Can Technology",
    logo: "https://source.unsplash.com/50x50/?coffee",
    duration: "January 2024 - March 2024",
    mode: "Remote",
    location: "Noida",
  },
  {
    id: 4,
    role: "Software Engineer",
    company: "Share India Securities Limited",
    logo: "https://source.unsplash.com/50x50/?brand",
    duration: "July 2022 - January 2023",
    mode: "On-site",
    location: "Noida",
  },
];

function WorkExperience({ darkMode }) {
  return (
    <section
      id="experience"
      className={`py-12 px-6 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-gray-100" : "bg-white text-gray-900"
      }`}
    >
      <h2 className="text-2xl md:text-3xl font-bold text-center mb-12">
        Work experience
      </h2>

      <div className="max-w-4xl mx-auto space-y-4">
        {experiences.map(
          ({ id, role, company, logo, duration, mode, location }) => (
            <div
              key={id}
              className={`flex items-center justify-between p-4 rounded-xl border ${
                darkMode
                  ? "border-gray-700 bg-gray-800"
                  : "border-gray-200 bg-gray-50"
              }`}
            >
              {/* Left: Logo + Role + Company */}
              <div className="flex items-center gap-4">
                <img
                  src={logo}
                  alt={company}
                  className="w-12 h-12 rounded-lg object-cover"
                />
                <div>
                  <h3 className="font-semibold text-lg">{role}</h3>
                  <p
                    className={`text-sm ${
                      darkMode ? "text-white" : "text-gray-500"
                    }`}
                  >
                    {company}
                  </p>
                </div>
              </div>

              {/* Right: Duration + Mode + Location */}
              <div className="text-right text-sm">
                <p className="font-medium">
                  {duration} <span className="mx-1">·</span> {mode}
                </p>
                <p
                  className={`${
                    darkMode ? "text-white" : "text-gray-500"
                  } text-sm`}
                >
                  {location}
                </p>
              </div>
            </div>
          )
        )}
      </div>
    </section>
  );
}

export default WorkExperience;
