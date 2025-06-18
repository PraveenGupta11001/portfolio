import { Link as ScrollLink } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/themeSlice";
import { motion } from "framer-motion";
import { Sun, Moon, Download, X, Menu } from "lucide-react";
import { useState } from "react";
import resumePdf from "../assets/resume.pdf"; // Adjust the path as necessary

const Navbar = () => {
  const dispatch = useDispatch();
  const isDark = useSelector((state) => state.theme.isDark);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  const navItems = [
    { id: "intro", label: "Home" },
    { id: "skills", label: "Skills" },
    { id: "projects", label: "Projects" },
    { id: "about", label: "About" },
    { id: "contact", label: "Contact" },
  ];

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <motion.nav
      initial={{ y: -100 }}
      animate={{ y: 0 }}
      transition={{ duration: 0.5 }}
      className={`sticky top-0 z-50 ${isDark ? "bg-gray-900" : "bg-white"} shadow-lg`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          <div className="flex-shrink-0">
            <ScrollLink
              to="intro"
              smooth={true}
              duration={500}
              className="text-2xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 cursor-pointer"
            >
              Praveen Gupta
            </ScrollLink>
          </div>
          <div className="hidden md:flex items-center space-x-8">
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                className={`${
                  isDark ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-purple-600"
                } px-3 py-2 text-sm font-medium transition duration-300 cursor-pointer`}
              >
                {item.label}
              </ScrollLink>
            ))}
            <a
              href={resumePdf}
              download="Praveen_Gupta_Resume.pdf"
              className={`flex items-center ${
                isDark ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-purple-600"
              } px-3 py-2 text-sm font-medium transition duration-300`}
            >
              <Download className="h-4 w-4 mr-1" /> Resume
            </a>
            <button
              onClick={() => dispatch(toggleTheme())}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
            >
              {isDark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-700" />}
            </button>
          </div>
          <div className="md:hidden flex items-center">
            <button
              onClick={toggleMobileMenu}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
            >
              {isMobileMenuOpen ? (
                <X className={`h-6 w-6 ${isDark ? "text-white" : "text-gray-700"}`} />
              ) : (
                <Menu className={`h-6 w-6 ${isDark ? "text-white" : "text-gray-700"}`} />
              )}
            </button>
          </div>
        </div>
      </div>
      {isMobileMenuOpen && (
        <motion.div
          initial={{ x: "100%" }}
          animate={{ x: 0 }}
          exit={{ x: "100%" }}
          transition={{ duration: 0.3 }}
          className={`md:hidden ${isDark ? "bg-gray-900" : "bg-white"} absolute top-16 left-0 w-full shadow-lg z-40`}
        >
          <div className="flex flex-col items-center py-4 space-y-4">
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                onClick={toggleMobileMenu}
                className={`${
                  isDark ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-purple-600"
                } text-lg font-medium transition duration-300 cursor-pointer`}
              >
                {item.label}
              </ScrollLink>
            ))}
            <a
              href={resumePdf}
              download="Praveen_Gupta_Resume.pdf"
              className={`flex items-center ${
                isDark ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-purple-600"
              } text-lg font-medium transition duration-300`}
              onClick={toggleMobileMenu}
            >
              <Download className="h-5 w-5 mr-2" /> Resume
            </a>
            <button
              onClick={() => {
                dispatch(toggleTheme());
                toggleMobileMenu();
              }}
              className="p-2 rounded-full hover:bg-gray-200 dark:hover:bg-gray-700 transition duration-300"
            >
              {isDark ? <Sun className="h-5 w-5 text-yellow-400" /> : <Moon className="h-5 w-5 text-gray-700" />}
            </button>
          </div>
        </motion.div>
      )}
    </motion.nav>
  );
};

export default Navbar;