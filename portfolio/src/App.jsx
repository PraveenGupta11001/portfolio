import { BrowserRouter } from "react-router-dom";
import { useSelector } from "react-redux";
import { motion } from "framer-motion";
import Navbar from "./components/Navbar";
import Footer from "./components/Footer";
import AppRoutes from "./routes/AppRoutes";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
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
      <div className={`flex flex-col items-center justify-center min-h-screen ${isDark ? "bg-zinc-950" : "bg-neutral-50"}`}>
        <div className="relative flex items-center justify-center">
          {/* Outer glowing pulsing ring */}
          <motion.div
            animate={{
              rotate: 360,
              scale: [1, 1.08, 1],
            }}
            transition={{
              rotate: { repeat: Infinity, duration: 1.8, ease: "linear" },
              scale: { repeat: Infinity, duration: 2, ease: "easeInOut" }
            }}
            className="w-16 h-16 rounded-full border-[3px] border-transparent border-t-purple-500 border-l-pink-500 shadow-md"
          />
          {/* Inner counter-rotating ring */}
          <motion.div
            animate={{
              rotate: -360,
            }}
            transition={{
              repeat: Infinity,
              duration: 1.2,
              ease: "linear"
            }}
            className="absolute w-10 h-10 rounded-full border-2 border-transparent border-t-indigo-500 border-r-purple-500 opacity-80"
          />
          {/* Center core light spot */}
          <div className="absolute w-2 h-2 bg-gradient-to-r from-purple-400 to-pink-500 rounded-full shadow-[0_0_12px_rgba(168,85,247,0.8)]" />
        </div>

        {/* Loading text with micro-pulsing */}
        <motion.div
          initial={{ opacity: 0.3 }}
          animate={{ opacity: [0.3, 0.75, 0.3] }}
          transition={{ repeat: Infinity, duration: 1.5, ease: "easeInOut" }}
          className="mt-6 text-[10px] font-mono tracking-[0.25em] uppercase font-semibold text-zinc-500 dark:text-zinc-400"
        >
          Initializing Portfolio
        </motion.div>
      </div>
    );
  }


  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      transition={{ duration: 0.5 }}
      className={`w-full min-h-screen transition-colors duration-500 ${isDark ? "bg-zinc-950" : "bg-neutral-50"}`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <BrowserRouter>
          <Navbar />
          <AppRoutes />
          <Footer />
          <ToastContainer
            position="top-right"
            autoClose={3000}
            hideProgressBar
            theme={isDark ? "dark" : "light"}
            toastClassName={isDark ? "bg-zinc-900 border border-zinc-800 text-zinc-300" : "bg-white text-gray-900"}
          />
        </BrowserRouter>
      </div>
    </motion.div>
  );
}