import { useSelector } from "react-redux";
import { Mail, Phone, Github, Code, Linkedin } from "lucide-react";

const Footer = () => {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <footer className={`py-6 ${isDark ? "bg-gray-900" : "bg-gray-200"}`}>
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col items-center space-y-4">
          <div className="flex space-x-6">
            <a
              href="mailto:praweengupta11001@gmail.com"
              className={`${
                isDark ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-purple-600"
              } transition duration-300`}
              title="Email"
            >
              <Mail className="h-6 w-6" />
            </a>
            <a
              href="tel:+916388553560"
              className={`${
                isDark ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-purple-600"
              } transition duration-300`}
              title="Phone"
            >
              <Phone className="h-6 w-6" />
            </a>
            <a
              href="https://github.com/PraveenGupta11001?tab=repositories"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDark ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-purple-600"
              } transition duration-300`}
              title="GitHub"
            >
              <Github className="h-6 w-6" />
            </a>
            <a
              href="http://www.linkedin.com/in/praveen-gupta-b783791b4"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDark ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-purple-600"
              } transition duration-300`}
              title="LinkedIn"
            >
              <Linkedin className="h-6 w-6" />
            </a>
            <a
              href="https://leetcode.com/u/praweengupta11001/"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDark ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-purple-600"
              } transition duration-300`}
              title="LeetCode"
            >
              <Code className="h-6 w-6" />
            </a>
            <a
              href="https://www.hackerrank.com/profile/praweengupta1101"
              target="_blank"
              rel="noopener noreferrer"
              className={`${
                isDark ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-purple-600"
              } transition duration-300`}
              title="HackerRank"
            >
              <Code className="h-6 w-6" />
            </a>
          </div>
          <p className={`text-sm ${isDark ? "text-gray-400" : "text-gray-600"}`}>
            &copy; {new Date().getFullYear()} Praveen Gupta. All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;