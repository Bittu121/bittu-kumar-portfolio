import React, { useState } from "react";
import { FaPaperPlane } from "react-icons/fa";
import { toast } from "react-toastify";

const Contact = ({ darkMode }) => {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    message: "",
  });
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    const googleFormURL =
      "https://docs.google.com/forms/d/e/1FAIpQLSeRkMkSSXyTtIXByepXcbLffEEXQsCPk-45AgogWL06adBfGQ/formResponse";

    const data = new FormData();
    data.append("entry.2045601744", formData.name);
    data.append("entry.1915860374", formData.email);
    data.append("entry.939680766", formData.subject);
    data.append("entry.1592997811", formData.message);

    try {
      await fetch(googleFormURL, {
        method: "POST",
        body: data,
        mode: "no-cors",
      });

      setSubmitted(true);
      setFormData({ name: "", email: "", subject: "", message: "" });
      toast.success("Thank you! Your response has been recorded.");
    } catch (error) {
      toast.error("Something went wrong. Please try again.");
      console.error("Error submitting form!", error);
    }
  };
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
          <form
            onSubmit={handleSubmit}
            className="grid grid-cols-1 md:grid-cols-2 gap-6"
          >
            <input
              name="name"
              value={formData.name}
              onChange={handleChange}
              placeholder="Your Name"
              className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none placeholder-gray-500 dark:placeholder-gray-300"
              required
            />
            <input
              type="email"
              name="email"
              value={formData.email}
              onChange={handleChange}
              placeholder="Your Email"
              className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none placeholder-gray-500 dark:placeholder-gray-300"
              required
            />
            <input
              type="text"
              name="subject"
              value={formData.subject}
              onChange={handleChange}
              placeholder="Subject"
              className="px-4 py-3 rounded-xl border border-gray-300 dark:border-gray-600 bg-transparent focus:ring-2 focus:ring-indigo-500 outline-none md:col-span-2 placeholder-gray-500 dark:placeholder-gray-300"
            />
            <textarea
              rows="5"
              name="message"
              value={formData.message}
              onChange={handleChange}
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
