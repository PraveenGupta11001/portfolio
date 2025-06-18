import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Mail, Phone, MapPin } from "lucide-react";
import { useState } from "react";

const ContactMe = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (This is a placeholder for actual submission)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={isDark ? "bg-gray-800" : "bg-gray-100"}>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center ${isDark ? "text-white" : "text-gray-900"} mb-8`}>
            Contact Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <h3 className={`text-2xl font-semibold ${isDark ? "text-gray-200" : "text-gray-800"}`}>Get in Touch</h3>
              <p className={`mt-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Feel free to reach out for any opportunities or collaborations!
              </p>
              <div className="mt-4 space-y-2">
                <p className={`flex items-center ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  <Mail className="h-5 w-5 mr-2 text-purple-500" /> praweengupta11001@gmail.com
                </p>
                <p className={`flex items-center ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  <Phone className="h-5 w-5 mr-2 text-purple-500" /> +91 6388553560
                </p>
                <p className={`flex items-center ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  <MapPin className="h-5 w-5 mr-2 text-purple-500" /> Varanasi, UP, India
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
            >
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className={`block text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 w-full p-2 rounded-md ${isDark ? "bg-gray-700 text-gray-300" : "bg-white text-gray-900"} border ${isDark ? "border-gray-600" : "border-gray-300"}`}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 w-full p-2 rounded-md ${isDark ? "bg-gray-700 text-gray-300" : "bg-white text-gray-900"} border ${isDark ? "border-gray-600" : "border-gray-300"}`}
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-1 w-full p-2 rounded-md ${isDark ? "bg-gray-700 text-gray-300" : "bg-white text-gray-900"} border ${isDark ? "border-gray-600" : "border-gray-300"}`}
                    rows="4"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full px-4 py-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:from-purple-600 hover:to-pink-600 transition duration-300"
                >
                  Send Message
                </button>
              </form>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default ContactMe;