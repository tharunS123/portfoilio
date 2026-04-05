export const resumeData = {
  name: "Tharun Kumar Senthilkumar",
  location: "West Lafayette, IN 47906",
  email: "tharunsenthilkumar308@gmail.com",
  github: "https://www.github.com/tharunS123",
  education: [
    {
      institution: "Purdue University, College of Science",
      location: "West Lafayette, IN",
      degree: "Bachelor of Science",
      major: "Computer Science",
      expectedGraduation: "May 2028",
    },
  ],
  experience: [
    {
      organization: "The Data Mine – Purdue University",
      location: "Indianapolis, IN",
      roles: [
        {
          title: "Undergraduate Student Researcher",
          client: "Corteva Agriscience",
          startDate: null,
          endDate: null,
          description:
            "Developed an industry-focused chatbot using LangGraph, FastAPI, React/TypeScript, and OpenAI APIs. Built a retrieval pipeline that searched internal data using vector embeddings and returned relevant context for answer generation, while leveraging OpenAI to format responses into user-friendly outputs. Contributed to both backend and frontend development to deliver a full-stack application.",
          techStack: [
            "LangGraph",
            "FastAPI",
            "React",
            "TypeScript",
            "OpenAI APIs",
            "Vector Embeddings",
          ],
        },
        {
          title: "Undergraduate Data Science Researcher",
          client: "Dream Center Indianapolis",
          startDate: "Aug 2025",
          endDate: "Dec 2025",
          description:
            "Collaborated and analyzed program data for the Building Pathways to Prosperity initiative to measure its effectiveness in moving single mothers and ALICE families toward self-sufficiency. Highlighted the economic and social benefits of the program, including reduced reliance on government aid and long-term community impact.",
          techStack: ["Data Analysis", "Impact Research", "Data Visualization"],
        },
      ],
    },
  ],
  projects: [
    {
      name: "Easy Chat",
      association: "Purdue University – CS180",
      description:
        "A Java-based social networking application allowing users to interact with friends, create posts, and manage profiles. Uses a Client-Server architecture with Socket programming for communication.",
      techStack: ["Java", "Socket Programming", "Client-Server Architecture"],
      github: "https://www.github.com/tharunS123/Easy-Chat",
      icon: "💬",
      color: "cyan" as const,
    },
    {
      name: "Signalist",
      association: "Personal Project",
      description:
        "Web application providing users with a personalized and insightful view of the stock market. Delivers real-time market data, personalized news, and user-specific investment insights.",
      techStack: ["Next.js", "React", "Tailwind CSS", "AI"],
      github: "https://github.com/tharunS123/stockapp",
      icon: "📈",
      color: "purple" as const,
    },
    {
      name: "Swole Leveling",
      association: "HACKINDY Hackathon",
      description:
        "A gamified fitness app inspired by Solo Leveling. Features a rep-tracking XP system, interactive body-part exercise diagram, and an API-based workout library complete with animated GIF demonstrations.",
      techStack: ["Ionic", "React", "TypeScript"],
      github: null,
      icon: "💪",
      color: "pink" as const,
    },
  ],
  leadership: [
    {
      organization: "HACKINDY Hackathon — CS Indy Club",
      role: "Co-Developer",
      project: "Swole Leveling",
      description:
        "Co-developed a fitness app inspired by Solo Leveling. Built a rep-tracking XP system, body-part exercise diagram, and integrated an API-based workout library with GIFs.",
      techStack: ["Ionic", "React", "TypeScript"],
    },
    {
      organization: "FRC Team 2338 — Gear it Forward",
      role: "Software Captain",
      project: "FIRST Robotics Competition",
      description:
        "Led the software sub-team, programming the competition robot using WPILib and Limelight for Vision processing. Planned training and events for new team members.",
      techStack: ["WPILib", "Limelight", "Leadership"],
    },
  ],
  skills: {
    languages: ["Java", "Python", "C", "TypeScript", "JavaScript"],
    frameworks: ["React.js", "Next.js", "Angular", "FastAPI", "Ionic"],
    cloud: ["Azure", "LangGraph", "OpenAI APIs", "Git"],
    domains: ["Full Stack Dev", "Data Visualization", "Project Mgmt", "AI/ML"],
  },
  volunteerism: [
    {
      organization: "Gear it Forward — FIRST Robotics Team 2338",
      hours: 15,
      description:
        "Outreach events and WOW week, helping nearby teams with robot building and mock matches.",
      icon: "🤖",
    },
    {
      organization: "National Tech Honors Society (NTHS)",
      hours: 10,
      description:
        "Volunteered over the course of 2 academic years supporting tech education initiatives.",
      icon: "🏅",
    },
  ],
};

export type ResumeData = typeof resumeData;
