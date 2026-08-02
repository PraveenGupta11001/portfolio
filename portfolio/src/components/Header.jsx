import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Link as ScrollLink } from "react-scroll";
import { ArrowRight, BarChart2, CheckCircle, Code, Briefcase } from "lucide-react";

const Header = () => {
  const isDark = useSelector((state) => state.theme.isDark);

  const stats = [
    {
      value: "03+",
      label: "Years of Experience",
      icon: Briefcase,
    },
    {
      value: "10+",
      label: "SaaS Platforms & APIs",
      icon: Code,
    },
    {
      value: "80%",
      label: "Performance Gains",
      icon: BarChart2,
    },
    {
      value: "100%",
      label: "Pytest/Vitest Coverage",
      icon: CheckCircle,
    },
  ];

  return (
    <header className="relative pt-32 pb-16 overflow-hidden">
      {/* Background radial glow */}
      <div className="absolute top-0 left-1/4 -translate-y-1/2 w-[500px] h-[500px] bg-purple-500/10 dark:bg-purple-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="max-w-6xl mx-auto px-4 text-center md:text-left">
        {/* Available for Opportunities Badge */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5 }}
          className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full border text-xs font-mono mb-8 tracking-wider uppercase font-semibold"
          style={{
            borderColor: isDark ? "rgba(63, 63, 70, 0.4)" : "rgba(228, 228, 231, 0.8)",
            background: isDark ? "rgba(24, 24, 27, 0.6)" : "rgba(244, 244, 245, 0.8)",
            color: isDark ? "#a1a1aa" : "#71717a",
          }}
        >
          <span className="relative flex h-2 w-2">
            <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
            <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
          </span>
          Available for new opportunities
        </motion.div>

        {/* Main Title Displays */}
        <div className="space-y-3">
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.1 }}
            className={`text-5xl md:text-8xl font-black font-display tracking-tight leading-none ${isDark ? "text-white" : "text-zinc-950"
              }`}
          >
            SOFTWARE
          </motion.h1>
          <motion.h1
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.2 }}
            className={`text-5xl md:text-8xl font-black font-display tracking-tight leading-none text-transparent bg-clip-text bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500`}
          >
            ENGINEER
          </motion.h1>
        </div>

        {/* Core Tagline Description */}
        <motion.p
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.3 }}
          className={`mt-8 text-base md:text-lg max-w-2xl leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"
            }`}
        >
          Specializing in designing and shipping production-grade SaaS platforms, REST APIs, and LLM-powered agentic AI systems. Comfortable owning backend-to-frontend contracts from concept to CI/CD and deployment.
        </motion.p>

        {/* CTA Link Buttons */}
        <motion.div
          initial={{ opacity: 0, y: 25 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="mt-8 flex flex-col sm:flex-row items-center gap-4 justify-center md:justify-start"
        >
          <ScrollLink
            to="projects"
            smooth={true}
            duration={500}
            className="flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider text-white bg-zinc-950 dark:bg-white dark:text-zinc-950 rounded-full hover:opacity-90 transition duration-300 cursor-pointer shadow-lg w-full sm:w-auto justify-center"
          >
            Recent Projects <ArrowRight className="h-4 w-4" />
          </ScrollLink>
          <ScrollLink
            to="contact"
            smooth={true}
            duration={500}
            className={`flex items-center gap-2 px-6 py-3 text-sm font-semibold uppercase tracking-wider rounded-full border transition duration-300 cursor-pointer w-full sm:w-auto justify-center ${isDark
                ? "border-zinc-800 hover:bg-zinc-900 text-zinc-300"
                : "border-zinc-250 hover:bg-zinc-50 text-zinc-700"
              }`}
          >
            Get In Touch
          </ScrollLink>
        </motion.div>

        {/* Stats / Metric Box Grid */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.5 }}
          className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-4 md:gap-6"
        >
          {stats.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <div
                key={i}
                className={`p-6 rounded-2xl border text-left transition duration-300 ${isDark
                    ? "bg-zinc-900/50 border-zinc-800/80 hover:bg-zinc-900"
                    : "bg-white/50 border-zinc-200/80 hover:bg-white"
                  }`}
              >
                <div className="flex items-center justify-between gap-2 mb-4">
                  <Icon className="h-5 w-5 text-purple-500" />
                </div>
                <div className={`text-3xl md:text-4xl font-semibold font-display tracking-tight ${isDark ? "text-white" : "text-zinc-900"
                  }`}>
                  {stat.value}
                </div>
                <div className={`mt-1 text-xs md:text-sm font-medium ${isDark ? "text-zinc-500" : "text-zinc-400"
                  }`}>
                  {stat.label}
                </div>
              </div>
            );
          })}
        </motion.div>
      </div>
    </header>
  );
};

export default Header;