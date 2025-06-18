import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const projects = [
  {
    name: "WeConnect - AI Chat Service",
    description: "A real-time chat app built with React, Tailwind CSS, and Firebase Auth. The backend uses FastAPI with LLaMA 3, storing data in Firestore (MongoDB-style NoSQL).",
    link: "https://we-connect-teal.vercel.app",
    note: "Backend may take 50-60 seconds to wake up due to free-tier limitations.",
  },
  {
    name: "DailyTodos - Task Manager",
    description: "A to-do app with React, Tailwind CSS, and Redux Toolkit. Features JWT authentication, a FastAPI backend, and PostgreSQL, with AI-powered task suggestions.",
    link: "https://daily-todos-alpha.vercel.app",
    note: "Backend may take 50-60 seconds to respond due to free-tier limits.",
  },
  {
    name: "Fraud Detection",
    description: "Analyzed 6.3M+ records with 99.99% accuracy using Python and machine learning techniques.",
    link: "#",
  },
  {
    name: "Sales Dashboard",
    description: "E-commerce analytics dashboard built with Excel and Python for data processing.",
    link: "#",
  },
  {
    name: "HR Analytics",
    description: "Power BI dashboard analyzing employee attrition data to provide actionable insights.",
    link: "#",
  },
  {
    name: "Placement Predictor",
    description: "Machine learning model predicting student placements based on CGPA and other features.",
    link: "#",
  },
];

const Projects = () => {
  const isDark = useSelector((state) => state.theme.isDark);

  return (
    <div className={isDark ? "bg-gray-800" : "bg-gray-100"}>
      <motion.section
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center ${isDark ? "text-white" : "text-gray-900"} mb-8`}>
            Projects
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, index) => (
              <motion.div
                key={project.name}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.1 }}
                className={`p-6 rounded-lg ${isDark ? "bg-gray-700" : "bg-white"} shadow-lg`}
              >
                <h3 className={`text-xl font-semibold ${isDark ? "text-gray-200" : "text-gray-800"}`}>{project.name}</h3>
                <p className={`mt-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>{project.description}</p>
                {project.link !== "#" && (
                  <a
                    href={project.link}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="mt-4 inline-block text-purple-500 hover:text-purple-600"
                  >
                    View Project
                  </a>
                )}
                {project.note && (
                  <p className={`mt-2 text-sm ${isDark ? "text-gray-400" : "text-gray-500"}`}>{project.note}</p>
                )}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Projects;