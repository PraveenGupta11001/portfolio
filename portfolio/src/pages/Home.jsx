import Header from "../components/Header";
import { motion, AnimatePresence } from "framer-motion";
import { useSelector } from "react-redux";
import * as Icons from "lucide-react";
import { useState } from "react";
import { toast } from "react-toastify";
import emailjs from '@emailjs/browser';

import { skills } from "../data/skills";
import { projects } from "../data/projects";
import { experiences } from "../data/experience";

const SERVICE_ID = import.meta.env.VITE_SERVICE_ID;
const TEMPLATE_ID = import.meta.env.VITE_TEMPLATE_ID;
const PUBLIC_KEY = import.meta.env.VITE_PUBLIC_KEY;

// Component to dynamically resolve and render Lucide Icons for Skills
const SkillIcon = ({ iconName, className }) => {
  let normalized = iconName;
  if (iconName === "Code2") normalized = "Code";
  if (iconName === "SearchCode") normalized = "Search";
  if (iconName === "Link2") normalized = "Link";

  const IconComponent = Icons[normalized] || Icons[iconName] || Icons.Cpu;
  return <IconComponent className={className} />;
};

const Home = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });
  const [activeFilter, setActiveFilter] = useState("All");

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.message) {
      toast.warning("Please fill out all fields.");
      return;
    }

    emailjs.send(
      SERVICE_ID,
      TEMPLATE_ID,
      formData,
      PUBLIC_KEY
    )
      .then((result) => {
        toast.success("Message sent successfully!");
        setFormData({ name: "", email: "", message: "" });
      })
      .catch((error) => {
        toast.error("Failed to send message. Please try again.");
        console.error("EmailJS Error:", error);
      });
  };

  // Maps nested skill categories to display filters
  const getFilterCategory = (skillCategory) => {
    const cat = skillCategory.toLowerCase();
    if (cat.includes("language")) return "Languages";
    if (cat.includes("backend") || cat.includes("security") || cat.includes("auth") || cat.includes("async") || cat.includes("queue") || cat.includes("cache")) return "Backend";
    if (cat.includes("frontend") || cat.includes("react") || cat.includes("css") || cat.includes("ui")) return "Frontend";
    if (cat.includes("llm") || cat.includes("agent") || cat.includes("ai") || cat.includes("retrieval") || cat.includes("orchestration") || cat.includes("interaction")) return "AI & GenAI";
    if (cat.includes("container") || cat.includes("ci/cd") || cat.includes("pipeline") || cat.includes("cloud") || cat.includes("observability") || cat.includes("logging") || cat.includes("database") || cat.includes("warehouse")) return "Cloud & DevOps";
    if (cat.includes("integration") || cat.includes("automation")) return "Integrations";
    return "Other";
  };

  const filters = ["All", "Languages", "Backend", "Frontend", "AI & GenAI", "Cloud & DevOps", "Integrations"];

  const filteredSkills = skills.filter(skill => {
    if (activeFilter === "All") return true;
    return getFilterCategory(skill.category) === activeFilter;
  });

  return (
    <div className={`transition-colors duration-500 pb-20 ${isDark ? "bg-zinc-950 text-zinc-300" : "bg-neutral-50 text-zinc-700"}`}>
      <Header />

      {/* Projects Section */}
      <motion.section
        id="projects"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-16 md:py-24"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center md:text-left mb-12">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase font-semibold text-purple-500">
              Portfolio
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold font-display tracking-tight mt-1 ${isDark ? "text-white" : "text-zinc-950"
              }`}>
              RECENT PROJECTS
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 md:gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.4, delay: index * 0.1 }}
                className={`p-6 rounded-3xl border transition-all duration-300 relative group overflow-hidden flex flex-col justify-between ${isDark
                    ? "bg-zinc-900 border-zinc-800/80 hover:bg-zinc-900/60 hover:border-zinc-700"
                    : "bg-white border-zinc-200 hover:shadow-lg hover:border-zinc-300"
                  }`}
              >
                {/* Visual hover border glow */}
                <div className="absolute top-0 left-0 w-full h-[3px] bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none" />

                <div>
                  <div className="flex justify-between items-start mb-4">
                    <span className="text-[10px] font-mono tracking-widest uppercase font-semibold text-zinc-550 dark:text-zinc-400">
                      {project.link.includes("saas") || project.link.includes("payroll") ? "SaaS & HR Tech" : "AI & WebSockets"}
                    </span>
                    {project.link !== "#" && (
                      <a
                        href={project.link}
                        target="_blank"
                        rel="noopener noreferrer"
                        className={`p-2 rounded-full cursor-pointer transition ${isDark
                            ? "bg-zinc-800 text-zinc-300 hover:text-white"
                            : "bg-zinc-100 text-zinc-650 hover:bg-zinc-200"
                          }`}
                        title="View Site"
                      >
                        <Icons.ArrowUpRight className="h-4 w-4" />
                      </a>
                    )}
                  </div>

                  <h3 className={`text-xl font-bold font-display tracking-tight mb-2 ${isDark ? "text-white" : "text-zinc-950"
                    }`}>
                    {project.name.split(" — ")[0]}
                  </h3>

                  <p className={`text-sm leading-relaxed mb-6 ${isDark ? "text-zinc-400" : "text-zinc-600"
                    }`}>
                    {project.description}
                  </p>
                </div>

                {project.note && (
                  <div className={`mt-auto p-4 rounded-2xl border text-xs leading-relaxed ${isDark
                      ? "bg-zinc-950/60 border-zinc-850 text-purple-300/80"
                      : "bg-purple-50/40 border-purple-100/60 text-purple-700/80 font-medium"
                    }`}>
                    <strong className="uppercase font-semibold tracking-wider mr-1 block sm:inline">Execution Notes:</strong>
                    {project.note}
                  </div>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>

      {/* Experience Section */}
      <motion.section
        id="experience"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-900"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase font-semibold text-purple-500">
              Milestones
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold font-display tracking-tight mt-1 ${isDark ? "text-white" : "text-zinc-950"
              }`}>
              WORK EXPERIENCE
            </h2>
          </div>

          <div className="space-y-4">
            {experiences.map((exp, index) => {
              const [isOpen, setIsOpen] = useState(index === 0); // Default open first item

              return (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ duration: 0.4, delay: index * 0.1 }}
                  onClick={() => setIsOpen(!isOpen)}
                  className={`p-6 rounded-3xl border cursor-pointer transition-all duration-300 ${isDark
                      ? "bg-zinc-900 border-zinc-800 hover:border-zinc-700"
                      : "bg-white border-zinc-200 hover:border-zinc-300 shadow-sm"
                    }`}
                >
                  <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3">
                    <div>
                      <h3 className={`text-xl font-bold font-display ${isDark ? "text-white" : "text-zinc-950"
                        }`}>
                        {exp.role}
                      </h3>
                      <p className="text-sm font-semibold text-purple-500 mt-0.5">
                        {exp.company}
                      </p>
                    </div>

                    <div className="flex items-center gap-3 self-start sm:self-auto">
                      <span className={`text-xs font-semibold font-mono px-3 py-1 rounded-full border ${isDark
                          ? "bg-zinc-950 border-zinc-800/80 text-zinc-400"
                          : "bg-zinc-50 border-zinc-200 text-zinc-500"
                        }`}>
                        {exp.duration}
                      </span>
                      <div className={`p-1.5 rounded-full border transition duration-300 ${isDark ? "border-zinc-800 bg-zinc-950 text-zinc-400" : "border-zinc-200 bg-zinc-50 text-zinc-500"
                        }`}>
                        {isOpen ? <Icons.ChevronUp className="h-4 w-4" /> : <Icons.ChevronDown className="h-4 w-4" />}
                      </div>
                    </div>
                  </div>

                  <AnimatePresence initial={false}>
                    {isOpen && (
                      <motion.div
                        initial={{ opacity: 0, height: 0 }}
                        animate={{ opacity: 1, height: "auto" }}
                        exit={{ opacity: 0, height: 0 }}
                        transition={{ duration: 0.3 }}
                        className="overflow-hidden"
                      >
                        <ul className="mt-5 space-y-3 border-t pt-5 border-zinc-100 dark:border-zinc-800/80">
                          {exp.points.map((point, i) => (
                            <li key={i} className="flex gap-3 text-sm leading-relaxed">
                              <span className="text-purple-500 font-bold block select-none">•</span>
                              <span className={isDark ? "text-zinc-400" : "text-zinc-600"}>{point}</span>
                            </li>
                          ))}
                        </ul>
                      </motion.div>
                    )}
                  </AnimatePresence>
                </motion.div>
              );
            })}
          </div>
        </div>
      </motion.section>

      {/* Skills Section ("Premium Tools") */}
      <motion.section
        id="skills"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-900"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase font-semibold text-purple-500">
              Stack
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold font-display tracking-tight mt-1 ${isDark ? "text-white" : "text-zinc-950"
              }`}>
              PREMIUM TOOLS
            </h2>
          </div>

          {/* Interactive filter tabs */}
          <div className="flex flex-wrap items-center justify-center gap-2 mb-10">
            {filters.map((filter) => (
              <button
                key={filter}
                onClick={() => setActiveFilter(filter)}
                className={`px-4 py-2 rounded-full text-xs font-semibold uppercase tracking-wider transition cursor-pointer border ${activeFilter === filter
                    ? isDark
                      ? "bg-white border-white text-zinc-950 animate-pulse"
                      : "bg-zinc-950 border-zinc-950 text-white"
                    : isDark
                      ? "bg-zinc-900 border-zinc-850 hover:border-zinc-700 text-zinc-400"
                      : "bg-white border-zinc-200 hover:border-zinc-300 text-zinc-650"
                  }`}
              >
                {filter}
              </button>
            ))}
          </div>

          {/* Tools Grid */}
          <motion.div
            layout
            className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 gap-4"
          >
            <AnimatePresence mode="popLayout">
              {filteredSkills.map((skill) => (
                <motion.div
                  layout
                  key={skill.name}
                  initial={{ opacity: 0, scale: 0.9 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0, scale: 0.9 }}
                  transition={{ duration: 0.2 }}
                  className={`p-5 rounded-2xl border text-center relative group transition duration-300 ${isDark
                      ? "bg-zinc-900/50 border-zinc-800/80 hover:bg-zinc-900 hover:border-zinc-700"
                      : "bg-white border-zinc-200 hover:shadow-md hover:border-zinc-300"
                    }`}
                >
                  <div className="flex items-center justify-center mb-3">
                    <div className="p-3 rounded-xl bg-purple-500/10 text-purple-500 group-hover:scale-110 transition duration-300">
                      <SkillIcon iconName={skill.icon} className="h-5 w-5" />
                    </div>
                  </div>
                  <h4 className={`text-sm font-bold font-display tracking-tight ${isDark ? "text-white" : "text-zinc-950"
                    }`}>
                    {skill.name}
                  </h4>
                  <p className="text-[10px] text-zinc-555 dark:text-zinc-405 mt-1 uppercase font-semibold tracking-wider font-mono">
                    {skill.category}
                  </p>
                </motion.div>
              ))}
            </AnimatePresence>
          </motion.div>
        </div>
      </motion.section>

      {/* About Section */}
      <motion.section
        id="about"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-900 bg-zinc-900/5 dark:bg-zinc-950/20"
      >
        <div className="max-w-6xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase font-semibold text-purple-500">
              Biography
            </span>
            <h2 className={`text-4xl md:text-5xl font-bold font-display tracking-tight mt-1 ${isDark ? "text-white" : "text-zinc-950"
              }`}>
              ABOUT ME & HISTORY
            </h2>
          </div>

          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-start">
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`p-8 rounded-3xl border ${isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"
                }`}
            >
              <h3 className={`text-2xl font-bold font-display mb-4 ${isDark ? "text-white" : "text-zinc-950"
                }`}>
                Professional Summary
              </h3>
              <p className={`text-sm leading-relaxed ${isDark ? "text-zinc-400" : "text-zinc-600"
                }`}>
                Full-stack and AI engineer with ~3 years of experience designing and shipping production-grade SaaS platforms, REST APIs, and LLM-powered systems. Specialise in Python (FastAPI, Django), React/Next.js, and agentic AI workflows (LangChain, LangGraph, RAG). Built and optimised multi-tenant backends serving live customers, delivered up to 80% API performance gains, and architected OAuth 2.0 integrations with CRMs, payment platforms, and developer tools. Comfortable owning systems end-to-end — from solution design and database schema to CI/CD pipelines and production monitoring.
              </p>
            </motion.div>

            <div className="space-y-6">
              {/* Education Grid Card */}
              <motion.div
                initial={{ x: 30, opacity: 0 }}
                animate={{ x: 0, opacity: 1 }}
                transition={{ duration: 0.5 }}
                className={`p-6 rounded-3xl border ${isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"
                  }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icons.GraduationCap className="h-6 w-6 text-purple-500" />
                  <h3 className={`text-xl font-bold font-display ${isDark ? "text-white" : "text-zinc-950"
                    }`}>
                    Education
                  </h3>
                </div>
                <div className="space-y-4">
                  <div>
                    <h4 className={`text-sm font-semibold ${isDark ? "text-zinc-200" : "text-zinc-850"}`}>
                      Master of Computer Applications (MCA)
                    </h4>
                    <p className="text-xs text-zinc-550 dark:text-zinc-500 mt-0.5">
                      Arunachal University of Studies
                    </p>
                  </div>
                  <div>
                    <h4 className={`text-sm font-semibold ${isDark ? "text-zinc-200" : "text-zinc-850"}`}>
                      Bachelor of Computer Applications (BCA)
                    </h4>
                    <p className="text-xs text-zinc-550 dark:text-zinc-500 mt-0.5">
                      Mahatma Gandhi Kashi Vidhypeeth University
                    </p>
                  </div>
                </div>
              </motion.div>

              {/* Certifications Card */}
              <motion.div
                initial={{ y: 30, opacity: 0 }}
                animate={{ y: 0, opacity: 1 }}
                transition={{ duration: 0.5, delay: 0.2 }}
                className={`p-6 rounded-3xl border ${isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"
                  }`}
              >
                <div className="flex items-center gap-3 mb-4">
                  <Icons.Award className="h-6 w-6 text-purple-500" />
                  <h3 className={`text-xl font-bold font-display ${isDark ? "text-white" : "text-zinc-950"
                    }`}>
                    Certifications
                  </h3>
                </div>
                <ul className="space-y-3.5">
                  <li className="flex items-center">
                    <a
                      href="https://credentials.getdbt.com/155aee3e-52de-4a04-bdbd-f97e408801c5"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-sm font-medium ${isDark ? "text-zinc-400 hover:text-purple-400" : "text-zinc-650 hover:text-purple-600"
                        }`}
                    >
                      <Icons.ExternalLink className="h-4 w-4 mr-2.5 text-zinc-450" /> DBT Fundamentals (Accredible)
                    </a>
                  </li>
                  <li className="flex items-center">
                    <a
                      href="https://www.credly.com/users/praveen-gupta.29e14c6c/badges"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-sm font-medium ${isDark ? "text-zinc-400 hover:text-purple-400" : "text-zinc-650 hover:text-purple-600"
                        }`}
                    >
                      <Icons.ExternalLink className="h-4 w-4 mr-2.5 text-zinc-455" /> Snowflake Data Warehouse (Credly)
                    </a>
                  </li>
                  <li className="flex items-center">
                    <a
                      href="https://www.hackerrank.com/profile/praweengupta1101"
                      target="_blank"
                      rel="noopener noreferrer"
                      className={`flex items-center text-sm font-medium ${isDark ? "text-zinc-400 hover:text-purple-400" : "text-zinc-650 hover:text-purple-600"
                        }`}
                    >
                      <Icons.ExternalLink className="h-4 w-4 mr-2.5 text-zinc-455" /> HackerRank - Python, SQL, Problem Solving
                    </a>
                  </li>
                </ul>
              </motion.div>
            </div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-16 md:py-24 border-t border-zinc-200 dark:border-zinc-900"
      >
        <div className="max-w-4xl mx-auto px-4">
          <div className="text-center mb-12">
            <span className="text-[11px] font-mono tracking-[0.25em] uppercase font-semibold text-purple-500">
              Get In Touch
            </span>
            <h2 className={`text-4xl md:text-6xl font-black font-display tracking-tight leading-none text-center ${isDark ? "text-white" : "text-zinc-950"
              }`}>
              LET'S WORK
            </h2>
            <h2 className="text-4xl md:text-6xl font-black font-display tracking-tight leading-none text-center text-transparent bg-clip-text bg-gradient-to-r from-purple-500 to-indigo-500 mt-2">
              TOGETHER
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 gap-8 items-start mt-12">
            {/* Contact Details */}
            <motion.div
              initial={{ x: -30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-3xl border h-full justify-between flex flex-col ${isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"
                }`}
            >
              <div>
                <h3 className={`text-2xl font-bold font-display mb-4 ${isDark ? "text-white" : "text-zinc-950"
                  }`}>
                  Connection Hub
                </h3>
                <p className={`text-sm leading-relaxed mb-6 ${isDark ? "text-zinc-400" : "text-zinc-650"
                  }`}>
                  Reach out for enterprise consulting, high-growth employment opportunities, or AI collaborations. Let's build something state-of-the-art.
                </p>
              </div>

              <div className="space-y-4">
                <a
                  href="mailto:praweengupta11001@gmail.com"
                  className={`flex items-center text-sm font-medium transition duration-300 ${isDark ? "text-zinc-300 hover:text-purple-400" : "text-zinc-700 hover:text-purple-600"
                    }`}
                >
                  <Icons.Mail className="h-5 w-5 mr-3 text-purple-500" /> praweengupta11001@gmail.com
                </a>
                <a
                  href="tel:+916388553560"
                  className={`flex items-center text-sm font-medium transition duration-300 ${isDark ? "text-zinc-300 hover:text-purple-400" : "text-zinc-700 hover:text-purple-600"
                    }`}
                >
                  <Icons.Phone className="h-5 w-5 mr-3 text-purple-500" /> +91 6388553560
                </a>
                <p className={`flex items-center text-sm ${isDark ? "text-zinc-300" : "text-zinc-700"}`}>
                  <Icons.MapPin className="h-5 w-5 mr-3 text-purple-500" /> Varanasi, UP, India
                </p>
              </div>
            </motion.div>

            {/* Contact Form Details */}
            <motion.div
              initial={{ x: 30, opacity: 0 }}
              animate={{ x: 0, opacity: 1 }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-3xl border ${isDark ? "bg-zinc-900 border-zinc-800" : "bg-white border-zinc-200"
                }`}
            >
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className={`block text-xs font-mono uppercase tracking-wider font-semibold mb-1 ${isDark ? "text-zinc-400" : "text-zinc-550"
                    }`}>
                    Name
                  </label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`w-full p-3 text-sm rounded-xl border focus:outline-none focus:ring-1 focus:ring-purple-500 transition duration-300 ${isDark
                        ? "bg-zinc-950 border-zinc-800 text-zinc-300 focus:border-zinc-700"
                        : "bg-white border-zinc-200 text-zinc-900"
                      }`}
                    placeholder="E.g. Praveen Gupta"
                    required
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono uppercase tracking-wider font-semibold mb-1 ${isDark ? "text-zinc-400" : "text-zinc-550"
                    }`}>
                    Email Address
                  </label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`w-full p-3 text-sm rounded-xl border focus:outline-none focus:ring-1 focus:ring-purple-500 transition duration-300 ${isDark
                        ? "bg-zinc-950 border-zinc-800 text-zinc-300 focus:border-zinc-700"
                        : "bg-white border-zinc-200 text-zinc-900"
                      }`}
                    placeholder="E.g. praveen@example.com"
                    required
                  />
                </div>

                <div>
                  <label className={`block text-xs font-mono uppercase tracking-wider font-semibold mb-1 ${isDark ? "text-zinc-400" : "text-zinc-550"
                    }`}>
                    Message
                  </label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    rows="4"
                    className={`w-full p-3 text-sm rounded-xl border focus:outline-none focus:ring-1 focus:ring-purple-500 transition duration-300 ${isDark
                        ? "bg-zinc-950 border-zinc-800 text-zinc-300 focus:border-zinc-700"
                        : "bg-white border-zinc-200 text-zinc-900"
                      }`}
                    placeholder="Describe your project, timeline, and goals..."
                    required
                  ></textarea>
                </div>

                <button
                  type="submit"
                  className="w-full py-3.5 text-xs font-mono uppercase tracking-wider text-white bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 rounded-xl hover:opacity-90 transition duration-300 cursor-pointer shadow-md font-semibold"
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

export default Home;