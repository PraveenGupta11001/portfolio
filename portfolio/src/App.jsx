import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import loading from "./assets/loading.gif";
import { useState, useEffect } from "react";

export default function App() {
  const isDark = useSelector((state) => state.theme.isDark);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const timer = setTimeout(() => {
      setIsLoading(false);
    }, 1000);
    return () => clearTimeout(timer);
  }, []);

  if (isLoading) {
    return (
      <div className={`flex items-center justify-center min-h-screen ${isDark ? "bg-gray-800" : "bg-gray-100"}`}>
        <motion.img
          initial={{ opacity: 0 }}
          animate={{ opacity: 0.9 }}
          transition={{ duration: 0.5 }}
          src={loading}
          alt="Loading..."
          className="w-16 h-16"
        />
      </div>
    );
  }

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-full ${isDark ? "bg-gray-800" : "bg-gray-100"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
          <Footer />
          <ToastContainer
            position="bottom-right"
            autoClose={3000}
            hideProgressBar
            theme={isDark ? "dark" : "light"}
            toastClassName={isDark ? "bg-gray-700 text-gray-300" : "bg-white text-gray-900"}
          />
        </BrowserRouter>
      </div>
    </motion.div>
  );
}