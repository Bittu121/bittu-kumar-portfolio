import { useEffect, useState } from "react";
import Navbar from "./components/Navbar";
import About from "./pages/About";
import Projects from "./pages/Projects";
import Skills from "./pages/Skills";
import WorkExperience from "./pages/WorkExperience";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Footer from "./components/Footer";
import { FaArrowUp } from "react-icons/fa";

function App() {
  const [darkMode, setDarkMode] = useState(false);
  const [showScroll, setShowScroll] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 300) {
        setShowScroll(true);
      } else {
        setShowScroll(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  return (
    <>
      <div className={darkMode ? "dark" : ""}>
        <Navbar darkMode={darkMode} setDarkMode={setDarkMode} />
        <About darkMode={darkMode} />
        <Skills darkMode={darkMode} />
        <Projects darkMode={darkMode} />
        <WorkExperience darkMode={darkMode} />
        <Education darkMode={darkMode} />
        <Contact darkMode={darkMode} />
        <Footer darkMode={darkMode} />
        {showScroll && (
          <button
            onClick={scrollToTop}
            className="fixed bottom-6 right-6 p-3 rounded-full 
             backdrop-blur-md bg-white/80 dark:bg-gray-700/30
             border border-white/40 dark:border-gray-600/40 
             text-gray-500 dark:text-gray-100 
             shadow-lg hover:shadow-xl 
             hover:scale-110 hover:bg-white/80 dark:hover:bg-gray-700/50
             transition-all duration-300 ease-in-out 
             focus:outline-none cursor-pointer"
          >
            <FaArrowUp
              size={20}
              color={darkMode ? "white" : "black"}
              className="animate-bounce"
            />
          </button>
        )}
      </div>
    </>
  );
}

export default App;
