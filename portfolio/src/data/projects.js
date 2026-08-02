export const projects = [
  {
    name: "PayPilot AI — Enterprise Payroll, HR & Employee Self-Service Platform",
    description:
      "Designed and implemented a secure dual-role authentication system with dedicated Employer and Employee portals, featuring role-based access control, and consolidated login flows into a unified React 19 glassmorphic modal. Integrated OAuth 2.0 PKCE authentication with Slack and Jira, enabling secure third-party connectivity.",
    link: "https://payroll-saas-omega.vercel.app",
    note: "Built an async SMTP email service using FastAPI BackgroundTasks for onboarding and OTP verification, and achieved 100% unit test coverage using TDD with Pytest and Vitest.",
  },
  {
    name: "DocuChat — Production RAG Document Intelligence System",
    description:
      "Designed and shipped a document search and Q&A system powered by LangChain and FastAPI. Implemented vector-based document ingestion (chunking, embedding, retrieval) enabling semantic search over large document corpora with sub-second query latency.",
    link: "https://ai-doc-chat-flax.vercel.app",
    note: "Architected the retrieval pipeline with context-window management and re-ranking strategies, achieving high-relevance answers on multi-page PDFs.",
  },
  {
    name: "WeConnect — Real-Time Chat Platform with Pub/Sub Architecture",
    description:
      "Built a scalable real-time messaging platform using FastAPI (WebSockets), Redis Pub/Sub, and React.js. Designed room-based message routing and presence management supporting concurrent connections with low-latency delivery.",
    link: "https://we-connect-teal.vercel.app",
    note: "Implemented persistent message history with PostgreSQL and async Celery workers for notification dispatch.",
  },

  // {
  //   name: "TailorTalk Booking",
  //   description:
  //     "AI-based booking assistant using FastAPI backend and Streamlit frontend. Integrated Google Calendar API and implemented structured flow handling for booking automation.",
  //   link: "https://tailortalk-booking.streamlit.app/",
  //   note: "Backend may take 50-60 seconds to respond due to free-tier limits.",
  // },
  // {
  //   name: "TaskMaster Scrum App",
  //   description:
  //     "Scrum-based task management system built with Django REST Framework and PostgreSQL. Implemented AI-based content moderation and deployed using automated pipelines.",
  //   link: "https://github.com/PraveenGupta11001/taskmaster-scrum-app",
  //   note: "Backend may take 50-60 seconds to respond due to free-tier limits.",
  // },
  // {
  //   name: "Personal Task Tracker",
  //   description:
  //     "Multi-user task management app built with React, Vite, and Tailwind CSS. Features include tasks, filters, search, dark/light mode, and persistent storage via localStorage.",
  //   link: "https://github.com/PraveenGupta11001/personal-task-tracker",
  //   note: "Backend may take 50-60 seconds to respond due to free-tier limits.",
  // },
];

