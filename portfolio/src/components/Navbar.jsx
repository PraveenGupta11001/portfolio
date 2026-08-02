import { Link as ScrollLink } from "react-scroll";
import { useDispatch, useSelector } from "react-redux";
import { toggleTheme } from "../features/themeSlice";
import { motion, AnimatePresence } from "framer-motion";
import { Sun, Moon, Download, X, Menu } from "lucide-react";
import { useState } from "react";
import resumePdf from "../assets/resume.pdf";

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

  return (
    <>
      <motion.nav
        initial={{ y: -100, x: "-50%" }}
        animate={{ y: 0, x: "-50%" }}
        transition={{ duration: 0.5, type: "spring", stiffness: 100 }}
        className={`fixed top-5 left-1/2 -translate-x-1/2 z-50 w-[92%] lg:w-auto px-4 lg:px-6 py-2.5 rounded-full backdrop-blur-md border shadow-lg transition-all duration-300 ${isDark
          ? "bg-zinc-950/80 border-zinc-800/80 text-zinc-300"
          : "bg-white/80 border-zinc-200/80 text-zinc-700"
          }`}
      >
        <div className="flex items-center justify-between gap-6 lg:gap-12 h-10">
          {/* Logo Name */}
          <ScrollLink
            to="intro"
            smooth={true}
            duration={500}
            className="text-lg font-bold font-display text-transparent bg-clip-text bg-gradient-to-r from-purple-400 to-pink-600 dark:from-purple-300 dark:to-pink-500 cursor-pointer tracking-tight"
          >
            Praveen Gupta
          </ScrollLink>

          {/* Desktop Nav Items */}
          <div className="hidden lg:flex items-center gap-6">
            {navItems.map((item) => (
              <ScrollLink
                key={item.id}
                to={item.id}
                smooth={true}
                duration={500}
                spy={true}
                activeClass="text-purple-500 dark:text-purple-400"
                className={`text-xs font-semibold uppercase tracking-wider transition duration-300 cursor-pointer ${isDark ? "hover:text-white" : "hover:text-black"
                  }`}
              >
                {item.label}
              </ScrollLink>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="hidden lg:flex items-center gap-4">
            <a
              href={resumePdf}
              download="Praveen_Gupta_Resume.pdf"
              className={`flex items-center gap-1.5 text-xs font-semibold uppercase tracking-wider px-3.5 py-1.5 rounded-full transition duration-300 ${isDark
                ? "bg-zinc-800 hover:bg-zinc-700 text-zinc-200"
                : "bg-zinc-100 hover:bg-zinc-250 text-zinc-800"
                }`}
            >
              <Download className="h-3.5 w-3.5" /> Resume
            </a>
            <button
              onClick={() => dispatch(toggleTheme())}
              className={`p-2 rounded-full transition duration-300 ${isDark ? "hover:bg-zinc-800 text-yellow-400" : "hover:bg-zinc-100 text-gray-700"
                }`}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
          </div>

          {/* Mobile Actions & Menu Trigger */}
          <div className="lg:hidden flex items-center gap-2">
            <button
              onClick={() => dispatch(toggleTheme())}
              className={`p-2 rounded-full transition duration-300 ${isDark ? "text-yellow-400" : "text-gray-700"
                }`}
            >
              {isDark ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
              className="p-2 rounded-full hover:bg-zinc-800/10 dark:hover:bg-zinc-800 transition duration-300"
            >
              {isMobileMenuOpen ? (
                <X className={`h-5 w-5 ${isDark ? "text-white" : "text-gray-800"}`} />
              ) : (
                <Menu className={`h-5 w-5 ${isDark ? "text-white" : "text-gray-800"}`} />
              )}
            </button>
          </div>
        </div>
      </motion.nav>

      {/* Mobile Drawer Menu */}
      <AnimatePresence>
        {isMobileMenuOpen && (
          <motion.div
            initial={{ opacity: 0, y: -20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.2 }}
            className={`fixed top-20 left-1/2 -translate-x-1/2 z-40 w-[92%] p-6 rounded-3xl border shadow-xl backdrop-blur-lg lg:hidden ${isDark
              ? "bg-zinc-950/95 border-zinc-800 text-zinc-300"
              : "bg-white/95 border-zinc-200 text-zinc-700"
              }`}
          >
            <div className="flex flex-col items-center gap-5 w-full">
              {navItems.map((item) => (
                <ScrollLink
                  key={item.id}
                  to={item.id}
                  smooth={true}
                  duration={500}
                  onClick={() => setIsMobileMenuOpen(false)}
                  className={`text-sm font-semibold uppercase tracking-wider transition duration-300 cursor-pointer ${isDark ? "hover:text-white" : "hover:text-black"
                    }`}
                >
                  {item.label}
                </ScrollLink>
              ))}
              <hr className={`w-full ${isDark ? "border-zinc-800" : "border-zinc-250"}`} />
              <a
                href={resumePdf}
                download="Praveen_Gupta_Resume.pdf"
                className={`flex items-center justify-center gap-1.5 w-full text-sm font-semibold uppercase tracking-wider py-3 rounded-full text-center transition duration-300 ${isDark
                  ? "bg-zinc-900 hover:bg-zinc-850 text-white"
                  : "bg-zinc-150 hover:bg-zinc-200 text-zinc-800"
                  }`}
                onClick={() => setIsMobileMenuOpen(false)}
              >
                <Download className="h-4 w-4" /> Download Resume
              </a>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </>
  );
};

export default Navbar;