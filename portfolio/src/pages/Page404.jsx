import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link } from "react-router-dom";
import { AlertCircle } from "lucide-react";

const Page404 = () => {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div className={isDark ? "bg-gray-800" : "bg-gray-100"}>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20 flex flex-col items-center justify-center min-h-screen"
      >
        <motion.div
          initial={{ scale: 0 }}
          animate={{ scale: 1 }}
          transition={{ duration: 0.5 }}
          className="text-center"
        >
          <AlertCircle className={`h-24 w-24 mx-auto ${isDark ? "text-purple-400" : "text-purple-500"}`} />
          <h2 className={`text-4xl font-bold ${isDark ? "text-white" : "text-gray-900"} mt-4`}>Page Not Found</h2>
          <p className={`mt-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>Oops! The page you're looking for doesn't exist.</p>
          <Link
            to="/"
            className="mt-6 inline-block px-6 py-3 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:from-purple-600 hover:to-pink-600 transition duration-300"
          >
            Go Back Home
          </Link>
        </motion.div>
      </motion.section>
    </div>
  );
};

export default Page404;