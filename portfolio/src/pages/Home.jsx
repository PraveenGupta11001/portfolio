import Header from "../components/Header";
import Footer from "../components/Footer";
import { motion } from "framer-motion";
import { useSelector } from "react-redux";
import { Mail, Phone, MapPin, Award } from "lucide-react";
import { useState } from "react";

const skills = [
  "Python", "JavaScript", "HTML", "CSS", "SQL", "Docker", "Redis", "Celery",
  "React JS", "Tailwind CSS", "FastAPI", "Django", "PostgreSQL", "MongoDB",
  "Firebase", "Snowflake", "DBT", "Azure Data Factory", "AWS S3", "Scrum", "Jira",
];

const projects = [
  {
    name: "WeConnect - AI Chat Service",
    description: "A real-time chat app built with React, Tailwind CSS, and Firebase Auth. The backend uses FastAPI with LLaMA 3, storing data in Firestore.",
    link: "https://we-connect-teal.vercel.app",
    note: "Backend may take 50-60 seconds to wake up due to free-tier limitations.",
  },
  {
    name: "DailyTodos - Task Manager",
    description: "A to-do app with React, Tailwind CSS, and Redux Toolkit. Features JWT authentication, a FastAPI backend, and PostgreSQL.",
    link: "https://daily-todos-alpha.vercel.app",
    note: "Backend may take 50-60 seconds to respond due to free-tier limits.",
  },
  {
    name: "Fraud Detection",
    description: "Analyzed 6.3M+ records with 99.99% accuracy using Python and machine learning techniques.",
    link: "https://www.kaggle.com/code/pg11001/fraud-detection-model",
  },
  {
    name: "HR Analytics",
    description: "Power BI dashboard analyzing employee attrition data to provide actionable insights.",
    link: "https://github.com/PraveenGupta11001/HR-Analytics-Dashboard",
  },
  {
    name: "Data Pipeline",
    description: "Developed a pipeline to transfer raw data from AWS S3 to Snowflake. Utilized Python for data download, chunking, and compression, followed by loading and processing in Snowflake for analysis.",
    link: "https://github.com/PraveenGupta11001/aws_s3_file_to_sf_load",
  },
  {
    name: "Udemy Clone",
    description: "Developed a platform featuring user login and signup functionalities using Django models, along with a homepage designed with HTML, CSS, and Bootstrap.",
    link: "https://pg11001.pythonanywhere.com/",
  },
  {
    name: "Vrinda Store Analysis",
    description: "Analyzed sales data using Excel to generate insights and dashboards. Examined monthly sales distribution, gender-based sales, and order status proportions.",
    link: "https://github.com/PraveenGupta11001/Vrinda-Store-Sales-Data-Analysis",
  },
];

const Home = () => {
  const isDark = useSelector((state) => state.theme.isDark);
  const [formData, setFormData] = useState({ name: "", email: "", message: "" });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Message sent! (Placeholder for actual submission)");
    setFormData({ name: "", email: "", message: "" });
  };

  return (
    <div className={isDark ? "bg-gray-800" : "bg-gray-100"}>
      <Header />
      {/* Intro Section */}
      <motion.section
        id="intro"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-20"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className={`text-4xl md:text-5xl font-bold ${isDark ? "text-white" : "text-gray-900"} mb-4`}>
            Welcome to My Portfolio
          </h1>
          <p className={`text-lg ${isDark ? "text-gray-300" : "text-gray-700"} max-w-2xl mx-auto`}>
            I'm Praveen Gupta, a Full Stack Web Developer with expertise in React, TailwindCSS, FastAPI, Django, MySQL, Postgres SQL and data analytics. Explore my skills and projects below!
          </p>
        </div>
      </motion.section>

      {/* Skills Section */}
      <motion.section
        id="skills"
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

      {/* Projects Section */}
      <motion.section
        id="projects"
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

      {/* About Section */}
      <motion.section
        id="about"
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
                Full Stack Web Developer with 2+ years of experience in building responsive web applications using React JS, Tailwind CSS, FastAPI, and Django. Skilled in Docker, Redis, Celery, Scrum, and Jira.
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
                  <a href="https://credentials.getdbt.com/155aee3e-52de-4a04-bdbd-f97e408801c5" target="_blank" rel="noopener noreferrer" className={`flex items-center ${isDark ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-purple-600"}`}>
                    <Award className="h-5 w-5 mr-2 text-purple-500" /> DBT Fundamentals (accredible)
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="https://www.credly.com/users/praveen-gupta.29e14c6c/badges" target="_blank" rel="noopener noreferrer" className={`flex items-center ${isDark ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-purple-600"}`}>
                    <Award className="h-5 w-5 mr-2 text-purple-500" /> Snowflake Data Warehouse (credly)
                  </a>
                </li>
                <li className="flex items-center">
                  <a href="https://www.hackerrank.com/profile/praweengupta1101" target="_blank" rel="noopener noreferrer" className={`flex items-center ${isDark ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-purple-600"}`}>
                    <Award className="h-5 w-5 mr-2 text-purple-500" /> HackerRank - Python, SQL, CSS, Problem Solving
                  </a>
                </li>
              </ul>
            </motion.div>
          </div>
        </div>
      </motion.section>

      {/* Contact Section */}
      <motion.section
        id="contact"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ duration: 1 }}
        className="py-12"
      >
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <h2 className={`text-3xl font-bold text-center ${isDark ? "text-white" : "text-gray-900"} mb-8`}>
            Contact Me
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            <motion.div
              initial={{ x: -100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-lg ${isDark ? "bg-gray-700" : "bg-white"} shadow-lg`}
            >
              <h3 className={`text-2xl font-semibold ${isDark ? "text-gray-200" : "text-gray-800"}`}>Get in Touch</h3>
              <p className={`mt-2 ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                Feel free to reach out for opportunities or collaborations!
              </p>
              <div className="mt-4 space-y-2">
                <a
                  href="mailto:praweengupta11001@gmail.com"
                  className={`flex items-center ${isDark ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-purple-600"}`}
                >
                  <Mail className="h-5 w-5 mr-2 text-purple-500" /> praweengupta11001@gmail.com
                </a>
                <a
                  href="tel:+916388553560"
                  className={`flex items-center ${isDark ? "text-gray-300 hover:text-purple-400" : "text-gray-700 hover:text-purple-600"}`}
                >
                  <Phone className="h-5 w-5 mr-2 text-purple-500" /> +91 6388553560
                </a>
                <p className={`flex items-center ${isDark ? "text-gray-300" : "text-gray-700"}`}>
                  <MapPin className="h-5 w-5 mr-2 text-purple-500" /> Varanasi, UP, India
                </p>
              </div>
            </motion.div>
            <motion.div
              initial={{ x: 100 }}
              animate={{ x: 0 }}
              transition={{ duration: 0.5 }}
              className={`p-6 rounded-lg ${isDark ? "bg-gray-700" : "bg-white"} shadow-lg`}
            >
              <form className="space-y-4" onSubmit={handleSubmit}>
                <div>
                  <label className={`block text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>Name</label>
                  <input
                    type="text"
                    name="name"
                    value={formData.name}
                    onChange={handleChange}
                    className={`mt-1 w-full p-2 rounded-md ${isDark ? "bg-gray-600 text-gray-300" : "bg-white text-gray-900"} border ${isDark ? "border-gray-500" : "border-gray-300"}`}
                    placeholder="Your Name"
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>Email</label>
                  <input
                    type="email"
                    name="email"
                    value={formData.email}
                    onChange={handleChange}
                    className={`mt-1 w-full p-2 rounded-md ${isDark ? "bg-gray-600 text-gray-300" : "bg-white text-gray-900"} border ${isDark ? "border-gray-500" : "border-gray-300"}`}
                    placeholder="Your Email"
                    required
                  />
                </div>
                <div>
                  <label className={`block text-sm font-medium ${isDark ? "text-gray-300" : "text-gray-700"}`}>Message</label>
                  <textarea
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    className={`mt-1 w-full p-2 rounded-md ${isDark ? "bg-gray-600 text-gray-300" : "bg-white text-gray-900"} border ${isDark ? "border-gray-500" : "border-gray-300"}`}
                    rows="4"
                    placeholder="Your Message"
                    required
                  ></textarea>
                </div>
                <button
                  type="button"
                  onClick={handleSubmit}
                  className="w-full px-4 py-2 text-white bg-gradient-to-r from-purple-500 to-pink-500 rounded-md hover:from-purple-600 hover:to-pink-600 transition duration-300"
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