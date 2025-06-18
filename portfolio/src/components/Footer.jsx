import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Github, Linkedin, Mail, Phone } from "lucide-react";

const Footer = () => {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <motion.footer
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`py-8 ${isDark ? "bg-gray-900" : "bg-gray-800"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="flex justify-center space-x-6 mb-4">
          <a href="https://github.com" target="_blank" rel="noopener noreferrer">
            <Github className={`h-6 w-6 ${isDark ? "text-gray-300 hover:text-purple-400" : "text-gray-400 hover:text-purple-500"}`} />
          </a>
          <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
            <Linkedin className={`h-6 w-6 ${isDark ? "text-gray-300 hover:text-purple-400" : "text-gray-400 hover:text-purple-500"}`} />
          </a>
        </div>
        <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-400"}`}>
          <Mail className="inline h-4 w-4 mr-2" /> praweengupta11001@gmail.com
        </p>
        <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-400"} mt-2`}>
          <Phone className="inline h-4 w-4 mr-2" /> +91 6388553560
        </p>
        <p className={`text-sm ${isDark ? "text-gray-300" : "text-gray-400"} mt-4`}>
          &copy; 2025 Praveen Gupta. All rights reserved.
        </p>
      </div>
    </motion.footer>
  );
};

export default Footer;