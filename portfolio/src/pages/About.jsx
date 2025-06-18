import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Award } from "lucide-react";

const About = () => {
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
            About Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-lg ${isDark ? "bg-gray-700" : "bg-white"} shadow-lg`}
            >
              <h3 className={`text-2xl font-semibold ${isDark ? "text-gray-200" : "text-gray-800"}`}>Professional Summary</h3>
              <p className={`mt-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Full Stack Web Developer with 2+ years of experience in building responsive web applications using React JS, Tailwind CSS, FastAPI, and Django. Proficient in both frontend and backend development, RESTful APIs, cloud deployment, and modern databases. Experienced in data analysis, ETL pipelines, and LLM integration for intelligent application features. Skilled in Docker, Redis, Celery, Scrum, and Jira for efficient development workflows.
              </p>
            </motion.div>
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-lg ${isDark ? "bg-gray-700" : "bg-white"} shadow-lg`}
            >
              <h3 className={`text-2xl font-semibold ${isDark ? "text-gray-200" : "text-gray-800"}`}>Education</h3>
              <ul className={`mt-4 list-disc list-inside ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                <li>M.C.A. - Arunachal University of Studies - 65% (2023-2025)</li>
                <li>B.C.A. - MGKVP - 74% (2020-2023)</li>
                <li>XII - Mahatma JF Public School - 66.8% (2017-2019)</li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.2 }}
              className={`p-6 rounded-lg ${isDark ? "bg-gray-700" : "bg-white"} shadow-lg`}
            >
              <h3 className={`text-2xl font-semibold ${isDark ? "text-gray-200" : "text-gray-800"}`}>Certifications</h3>
              <ul className={`mt-4 list-none ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                <li className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-purple-500" /> DBT Fundamentals (accredible)
                </li>
                <li className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-purple-500" /> Snowflake Data Warehouse (credly)
                </li>
                <li className="flex items-center">
                  <Award className="h-5 w-5 mr-2 text-purple-500" /> HackerRank - Python, SQL, CSS, Problem Solving
                </li>
              </ul>
            </motion.div>
            <motion.div
              initial={{ y: 50 }}
              animate={{ y: 0 }}
              transition={{ duration: 0.5, delay: 0.4 }}
              className={`p-6 rounded-lg ${isDark ? "bg-gray-700" : "bg-white"} shadow-lg`}
            >
              <h3 className={`text-2xl font-semibold ${isDark ? "text-gray-200" : "text-gray-800"}`}>Hobbies</h3>
              <p className={`mt-4 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Reading, chess, evening walks, sci-fi movies
              </p>
            </motion.div>
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default About;