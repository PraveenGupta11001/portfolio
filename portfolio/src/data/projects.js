export const projects = [
  {
    name: "WeConnect - AI Chat & Social Platform",
    description:
      "A real-time chat and AI chatbot platform built with React, Tailwind CSS, and Firebase OAuth. Backend uses FastAPI with Redis, Celery, and LLaMA 70B model (via Groq) for AI chat. Features include friend circles, Webot AI assistant, JWT-protected routes, and CI/CD. Data stored in Firestore NoSQL.",
    link: "https://we-connect-teal.vercel.app",
    note: "Backend may take 50-60 seconds to wake up due to free-tier limitations.",
  },
  {
    name: "TailorTalk Booking",
    description:
      "AI-based booking assistant with Streamlit frontend and FastAPI backend (Render). Uses LangGraph for flow control and Google Calendar API for account-based booking. Works without LLMs by using string filtering and matching via /chat API.",
    link: "https://tailortalk-booking.streamlit.app/",
    note: "Backend may take 50-60 seconds to respond due to free-tier limits.",
  },
  {
    name: "TaskMaster Scrum App",
    description:
      "Full-stack Scrum-based task manager with Django DRF backend and Next.js frontend. PostgreSQL database hosted on Render, frontend on Vercel. Includes LLM integration for content moderation, abusive word detection, and AI suggestions. CI/CD pipelines implemented.",
    link: "https://github.com/PraveenGupta11001/taskmaster-scrum-app",
    note: "Backend may take 50-60 seconds to respond due to free-tier limits.",
  },
  // {
  //   name: "Personal Task Tracker",
  //   description:
  //     "Multi-user task management app built with React, Vite, and Tailwind CSS. Features include tasks, filters, search, dark/light mode, and persistent storage via localStorage.",
  //   link: "https://github.com/PraveenGupta11001/personal-task-tracker",
  // },
  // {
  //   name: "Artistly - Art Marketplace",
  //   description:
  //     "Responsive artist marketplace built with Next.js and Tailwind CSS. Lets event organizers onboard, filter, and view performing artists. Includes artist profiles, dashboards, dark/light theme, and React Context for state management.",
  //   link: "https://artistly-silk.vercel.app",
  // },
  // {
  //   name: "DailyTodos - Task Manager",
  //   description:
  //     "To-do app with React, Tailwind CSS, and Redux Toolkit. Backend uses FastAPI with JWT authentication and PostgreSQL. Deployed on Vercel (frontend) and Render (backend).",
  //   link: "https://daily-todos-alpha.vercel.app",
  //   note: "Backend may take 50-60 seconds to respond due to free-tier limits.",
  // },
  // {
  //   name: "Fraud Detection",
  //   description:
  //     "Analyzed 6.3M+ transaction records with 99.99% accuracy using Python and machine learning algorithms.",
  //   link: "https://www.kaggle.com/code/pg11001/fraud-detection-model",
  // },
  // {
  //   name: "HR Analytics",
  //   description:
  //     "Power BI dashboard analyzing employee attrition and engagement data to provide actionable business insights.",
  //   link: "https://github.com/PraveenGupta11001/HR-Analytics-Dashboard",
  // },
  // {
  //   name: "Data Pipeline",
  //   description:
  //     "Automated pipeline to transfer raw data from AWS S3 to Snowflake. Used Python for downloading, chunking, compressing, and loading data for analysis.",
  //   link: "https://github.com/PraveenGupta11001/aws_s3_file_to_sf_load",
  // },
  // {
  //   name: "Udemy Clone",
  //   description:
  //     "Web app with user authentication using Django models. Designed responsive homepage with HTML, CSS, and Bootstrap.",
  //   link: "https://pg11001.pythonanywhere.com/",
  // },
  // {
  //   name: "Vrinda Store Analysis",
  //   description:
  //     "Sales data analysis using Excel to create dashboards. Insights include monthly sales trends, gender-based purchasing behavior, and order status distribution.",
  //   link: "https://github.com/PraveenGupta11001/Vrinda-Store-Sales-Data-Analysis",
  // },
];
