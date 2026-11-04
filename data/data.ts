import { HeroData, CareerData, ContactData, EducationData, ProjectsData, TechData, SkillsData, WhatIDoData, ValueData } from "./types";

export const hero: HeroData = {
  greeting: "Hey, I'm Faizal Abror",
  title: "Building fast & interactive web experiences.",
  subtitle: "I am a Software Engineer focusing on fullstack web development who thrives on turning complex technical challenges into seamless digital experiences. With a strong foundation in pixel-perfect user interfaces and end-to-end systems, I adapt rapidly to new techs and paradigms to deliver exceptional web solutions.",
  description: "Available remote full-time or contract",
  workLocation: "Anywhere",
  workTimeZone: "Any timezone",
  cta: [{ button1: "View Projects", button2: "Contact Me" }],
  photo: "/me/faizal-abror.jpg",
};

export const career: CareerData = {
  title: "Career Journey",
  subtitle: "A visual timeline of key milestones and experiences over the years.",
  generalSkills: [
    {
      title: "Chief, Vice Chief",
      year: "2017 - 2024",
      place: ["Quranic Education Center for Children", "Islamic Youth Society", "Community Youth Development"],
      description: "Acted as the primary point of contact for members, resolving internal challenges and fostering a positive, productive environment for all participants.",
      skills: ["Leadership", "Persuasion", "Public Speaking", "Controlling Emotion"],
    },
    {
      title: "Fruit Hawker",
      year: "2017",
      place: ["Self-Employed"],
      description: "Operated as an independent fruit hawker, responsible for sourcing, transporting, and directly selling melons to customers through daily field engagement and negotiation.",
      skills: ["Negotiation", "Persuasion", "Analytical Thinking"],
    },
    {
      title: "Property Broker",
      year: "2021 - Present",
      place: ["Self-Employed"],
      description: "Lobbying many property agents in the interest of my client in order to help sell land at the best price.",
      skills: ["Negotiation", "Persuasion", "Analytical Thinking"],
    },
    {
      title: "Food Server",
      year: "2021 - 2025",
      place: ["R.M. Padang Endah Jaya"],
      description: "Maintained a clean, organized dining area to ensure a pleasant atmosphere. Streamlined serving processes during peak hours, reducing customer wait times and assisting inventory management.",
      skills: ["Negotiation", "Communication", "Persuasion"],
    },
    {
      title: "Self-Music-Producer",
      year: "2022 - 2025",
      place: ["Self-Employed"],
      description: "Bridged the gap between creative vision and technical execution by applying structured problem-solving from initial arrangement and sound design to final mixdown.",
      skills: ["Analytical Thinking", "Critical Thinking", "Songwriting", "Arrangement", "Quality Monitoring"],
    },
    {
      title: "Software Engineer - Fullstack Engineer",
      year: "2019 - Present",
      place: ["Anantha Production"],
      description: "Developing scalable software solutions in a remote environment and collaborating with the teams to deliver high-quality products.",
      skills: ["Analytical Thinking", "Critical Thinking", "Disciplined"],
    },
  ],
  deepSkills: [
    {
      title: "Frontend Web Developer",
      year: "2019 - Present",
      place: ["Self-Employed", "Ahademy Code"],
      description: "Crafting modern, responsive, and user-centric web experiences with cutting-edge frameworks.",
      skills: ["HTML", "Tailwind", "JavaScript", "TypeScript", "React", "Next.js", "Shadcn", "Framer Motion", "TanStack Query"],
    },
  ],
};

export const contact: ContactData = {
  title: "Let's build something together.",
  description: "Whether you're looking for a developer to join your team, or just want to chat about React, Next.js, and web dev — I'm all ears.",
  link: [
    {
      email: "azizamad0208@gmail.com",
      linkedin: "https://www.linkedin.com/in/faizal-abror-126969302",
      github: "https://github.com/aziz-lgtm",
    },
  ],
};

export const education: EducationData = {
  title: "Training",
  subtitle: "Training programs that shaped my technical expertise.",
  journey: [
    {
      title: "Web Development",
      institution: "Self-Learning",
      year: "2019",
      description: "Engaged deeply with frontend web development especially in JavaScript ",
      skills: ["JavaScript", "HTML", "CSS",],
    },
    {
      title: "Web Development Bootcamp",
      institution: "Ahademy Code",
      year: "February 2026 - Present",
      description: "Pursuing a comprehensive Software Engineering program with a heavy focus on Frontend Development.",
      skills: ["HTML", "CSS", "Tailwind CSS", "JavaScript", "TypeScript", "React", "Radix UI", "Next.js", "Figma", "Git"],
    },
  ],
};

export const projects: ProjectsData = {
  title: "Selected Projects",
  subtitle: "A showcase of key projects built during my bootcamp and professional journey.",
  listOfProjects: [
    
    {
      title: "Fullstack Web App for Anantha Production",
      status: "On Working",
      role: "Fullstack Engineer",
      description: "A modern, responsive web application built for a digital transformation agency",
      stack: ["Tailwind CSS", "React", "TypeScript", "Framer Motion", "Node.js", "Express.js", "PostgreSQL", "Python"],
      see: "https://challenge-8-aziz-lgtm.vercel.app",
    },
    {
      title: "Social Media App",
      status: "Completed",
      role: "Frontend Engineer",
      description: "A social media application designed to let users share photos, view dynamic feeds, and engage seamlessly with interactive content.",
      stack: ["Tailwind CSS", "TypeScript", "React", "Shadcn", "Framer Motion", "Next.js"],
      see: "https://socialitagram-git-main-aziz-lgtms-projects.vercel.app/",
      seeFigma: "https://www.figma.com/design/5qL4zS8bo8geBn2aJfa239/Social-Media",
    },
    {
      title: "Movie Explorer App",
      status: "Completed",
      role: "Frontend Engineer",
      description: "A dynamic web app for discovering media content, featuring real-time search, movie detail previews, category filtering, and bookmarking.",
      stack: ["Tailwind CSS", "TypeScript", "React", "Framer Motion", "Shadcn"],
      see: "https://faizalflix.vercel.app",
      seeFigma: "https://www.figma.com/design/PjR3Adxi8eZbS2cmdPuG52/Movie-Explorer-App",
    },

    {
      title: "Book Library App",
      status: "Completed",
      role: "Frontend Engineer",
      description: "An intuitive library management and book browsing platform designed to help users explore literature, search by categories, and check availability.",
      stack: ["Tailwind CSS", "TypeScript", "React", "Shadcn", "Framer Motion", "Next.js"],
      see: "https://book-hub-dusky.vercel.app/",
    },
    
    {
      title: "Company Profile",
      status: "Completed",
      role: "Frontend Engineer",
      description: "A modern, responsive company profile web application built for a digital transformation agency, highlighting key IT services and testimonials.",
      stack: ["Tailwind CSS", "React", "TypeScript", "Framer Motion"],
      see: "https://challenge-8-aziz-lgtm.vercel.app",
      seeFigma: "https://www.figma.com/design/AmMiYJmlPXNrKmMDDwTw1B/Company-Profile",
    },
  ],
};

export const tech: TechData = {
  title: "Tech Stacks",
  subtitle: "An overview of the key technologies, tools, and frameworks I specialize in.",
};

export const skillsData: SkillsData = {
  frontend: [
    { name: "Tailwind" },
    { name: "React" },
    { name: "TypeScript" },
    { name: "Radix UI" },
    { name: "Shadcn" },
  ],
  backend: [
    { name: "Node.js" },
    { name: "PostgreSQL" },
    { name: "Express.js" },
    { name: "Python" },
  ],
  tools: [
    { name: "Git" },
    { name: "Figma" },
  ],
};

export const whatIDoData: WhatIDoData = {
  title: "What I Do",
  categories: [
    {
      id: "core-activity",
      title: "Core Activity",
      points: [
        "Continuously upgrading web development skills, actively building applications using React, Next.js, and TypeScript.",
        "Mastering full-stack architecture by building end-to-end web solutions with Supabase and relational databases.",
        "Integrating generative AI models and LLM APIs into web interfaces to create intelligent user workflows.",
      ],
    },
    {
      id: "weekend-activity",
      title: "Weekend Activity",
      points: [
        "Working behind the scenes as a property broker, researching target markets and connecting major clients.",
        "Studying Japanese, Turkish, Arabic, and Russian as a long-term goal to consume local content natively.",
      ],
    },
  ],
  certificates: [
    {
      id: "frontend-engineer",
      title: "Frontend Engineer",
      issuer: "Ahademy Code",
      description: "Certified in Frontend Engineering by Ahademy Code.",
      year: "2026",
      pdfLink: "https://drive.google.com/file/d/1yqnSxd1t82raTeRrnWORLFOozCQrDTbG/view?usp=drive_link",
    },
  ],
};

export const whyMe: ValueData = {
  title: "Why Work With Me",
  description: [
    "Less back-and-forth between design and development phases.",
    "Strong ownership, clear communication, and strict adherence to deadlines without micromanagement.",
    "Changes ship with confidence, catching broken builds before reaching main production.",
    "Lightning-fast page speeds for every user with optimized SEO architecture.",
    "Ready to integrate smoothly with your backend systems from day one.",
  ],
};

export const whatYouWillGet: ValueData = {
  title: "What You Will Get",
  description: [
    "Pixel-accurate design implementation matching your Figma prototypes.",
    "Robust automated testing workflows.",
    "Continuous Integration (CI) configured on every repository.",
    "Lighthouse performance scores of 90+ on mobile devices.",
    "Clean, production-ready REST API integrations.",
  ],
};