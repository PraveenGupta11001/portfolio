import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link as ScrollLink } from "react-scroll";

const Header = () => {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <motion.header
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 1 }}
      className={`py-20 ${isDark ? "bg-gray-900" : "bg-gradient-to-r from-gray-100 to-gray-300"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <motion.h1
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5 }}
          className={`text-4xl md:text-6xl font-bold ${isDark ? "text-white" : "text-gray-900"}`}
        >
          Praveen Gupta
        </motion.h1>
        <motion.p
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.2 }}
          className={`mt-4 text-lg md:text-xl ${isDark ? "text-gray-300" : "text-gray-700"}`}
        >
          Full Stack Web Developer | Data | ML/AI Enthusiast
        </motion.p>
        <motion.div
          initial={{ y: 50 }}
          animate={{ y: 0 }}
          transition={{ duration: 0.5, delay: 0.4 }}
          className="mt-6"
        >
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            spy={true}
            className="inline-block px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-full hover:from-purple-600 hover:to-pink-600 transition duration-300 cursor-pointer"
          >
            View My Projects
          </ScrollLink>
        </motion.div>
      </div>
    </motion.header>
  );
};

export default Header;