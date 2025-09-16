import React from "react";
import { FaPaperPlane } from "react-icons/fa";

const Contact = ({ darkMode }) => {
  return (
    <section
      id="contact"
      className={`py-20 px-6 transition-colors duration-500 ${
        darkMode ? "bg-gray-900 text-white" : "bg-gray-50 text-gray-900"
      }`}
    >
      <div className="max-w-4xl mx-auto text-center">
        <h2 className="text-2xl md:text-3xl font-bold text-center mt-6 mb-6">
          Let’s Connect
        </h2>
        <p
          className={`mb-10 max-w-2xl mx-auto ${
            darkMode ? "text-white" : "text-gray-600"
          }`}
        >
          Open to exciting opportunities and meaningful conversations—my inbox
          is always open.
        </p>

        <div
          className={`rounded-2xl shadow-sm backdrop-blur-md border ${
            darkMode
              ? "bg-gray-900/70 border-gray-700"
              : "bg-white/70 border-gray-200"
          } p-8 md:p-10`}
        >
          <form className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              type="text"
              placeholder="Your Name"
              className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none placeholder-gray-500 dark:placeholder-gray-300"
              required
            />
            <input
              type="email"
              placeholder="Your Email"
              className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none placeholder-gray-500 dark:placeholder-gray-300"
              required
            />
            <input
              type="text"
              placeholder="Subject"
              className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none md:col-span-2 placeholder-gray-500 dark:placeholder-gray-300"
            />
            <textarea
              rows="5"
              placeholder="Your Message"
              className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none md:col-span-2 placeholder-gray-500 dark:placeholder-gray-300"
              required
            ></textarea>
            <div className="md:col-span-2 flex justify-center">
              <button
                type="submit"
                className="flex items-center gap-2 px-6 py-3 bg-gradient-to-r from-indigo-500 via-purple-500 to-pink-500 text-white font-semibold rounded-xl shadow-lg hover:opacity-90 transition-all duration-300 transform hover:scale-105 cursor-pointer"
              >
                <FaPaperPlane />
                Send Message
              </button>
            </div>
          </form>
        </div>
      </div>
    </section>
  );
};

export default Contact;
