import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";

const skills = [
  "Python", "JavaScript", "HTML", "CSS", "SQL", "Docker", "Redis", "Celery",
  "React JS", "Tailwind CSS", "FastAPI", "Django", "PostgreSQL", "MongoDB",
  "Firebase", "Snowflake", "DBT", "Azure Data Factory", "AWS S3", "Scrum", "Jira",
];

const Home = () => {
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
            Technical Skills
          </h2>
          <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 gap-4">
            {skills.map((skill, index) => (
              <motion.div
                key={skill}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ duration: 0.3, delay: index * 0.05 }}
                className={`p-4 rounded-lg text-center ${isDark ? "bg-gray-700 text-gray-300" : "bg-white text-gray-700"} shadow-md`}
              >
                {skill}
              </motion.div>
            ))}
          </div>
        </div>
      </motion.section>
    </div>
  );
};

export default Home;