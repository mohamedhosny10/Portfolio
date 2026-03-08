export const personalInfo = {
  name: "Mohamed Hosny Kamal",
  title: "Frontend Developer & Problem Solver",
  email: "mh.hosnyy10@gmail.com",
  phone: "+201115942564",
  whatsapp: "+201115942564",
  linkedin: "https://www.linkedin.com/in/mohammed-hosny10/",
  github: "https://github.com/mohamedhosny10",
  instagram: "https://www.instagram.com/mh.hosnyy/",
};

export const experience = [
  {
    id: 1,
    role: "Frontend Pro Track Intern",
    company: "EVA Pharma",
    companyUrl:
      "https://www.linkedin.com/company/eva-pharma/posts/?feedView=all",
    period: "July 2025 – August 2025",
    description: [
      "Built responsive frontends with Next.js, optimized for SEO, reducing page load time and improving mobile usability",
      "Leveraged Strapi CMS for structured content management and API development to support full-stack workflows",
      "Worked in an Agile team to deliver new features, structured code for maintainability, and prepared applications for production deployment",
    ],
    technologies: ["Next.js", "Strapi", "SEO", "Agile"],
  },
  {
    id: 2,
    role: "Internship",
    company: "Cultiv LLC",
    companyUrl:
      "https://www.linkedin.com/company/cultiv-bureau/posts/?feedView=all",
    period: "April 2025 – July 2025",
    description: [
      "Built and maintained responsive web interfaces with React.js and Next.js, using component-based architecture, dynamic routing, and state management",
      "Implemented RESTful APIs to fetch and update data, added error handling, and improved reliability of frontend–backend communication",
      "Worked on Bitrix24 CRM integration and collaborated with backend developers to improve API contracts and optimize performance",
    ],
    technologies: ["React.js", "Next.js", "RESTful APIs", "Bitrix24 CRM"],
  },
  {
    id: 3,
    role: "Software Engineer Freelancer",
    company: "Upwork",
    companyUrl: "https://www.linkedin.com/company/upwork/",
    period: "May 2024 – March 2025",
    description: [
      "Built 3 responsive web applications using React, Next.js, and Tailwind CSS, focusing on clean UI, reusable components, and mobile-first design",
      "Integrated front-end with RESTful APIs and applied state management (Redux/Context) to ensure smooth data handling and user interactions",
      "Improved performance with code-splitting, lazy loading, and image optimization, while maintaining testing coverage using Jest, Cypress, and React Testing Library",
    ],
    technologies: ["React", "Next.js", "Tailwind CSS", "Redux", "Jest"],
  },
];

export const education = [
  {
    id: 1,
    institution: "Information Technology Institute (ITI)",
    program: "ServiceNow, Computer Science",
    period: "February 2026 – May 2026",
    description: [
      "Specialized in ServiceNow platform development, with a focus on ITSM, custom application design, and automated workflows",
      "Gained hands-on experience in configuring ServiceNow instances, including tables, business rules, and client scripts",
      "Integrated ServiceNow with modern technologies like Supabase and developed responsive frontend solutions",
    ],
    logo: "/iti.jpg",
  },
  {
    id: 2,
    institution: "Ain Shams University",
    program: "Bachelor's degree, Computer Science",
    period: "September 2020 – August 2023",
    description: [
      "Focused on core computer science principles including algorithms, data structures, and software engineering",
      "Completed various academic projects involving system design and full-stack development",
      "Applied theoretical knowledge to practical problem-solving and software architecture",
    ],
    logo: "/Ain_Shams.png",
  },
];

export const skills = {
  "Core Frontend": ["HTML5", "CSS3", "JavaScript (ES6+)", "TypeScript"],
  Frameworks: ["React.js", "Next.js"],
  "State & Architecture": ["Redux", "Context API", "Component-Based Design"],
  Styling: ["Tailwind CSS", "Bootstrap", "SASS/SCSS", "Responsive Design"],
  "Backend & CMS": ["Strapi", "ServiceNow", "RESTful APIs"],
  Testing: ["Jest", "Cypress", "React Testing Library"],
  "Tools & Workflow": ["Git", "GitHub", "Agile", "Scrum"],
  Databases: ["Oracle", "MySQL", "SQL Server", "Supabase"],
};

export const projects = [
  {
    id: 1,
    name: "Loqta",
    description:
      "Community-driven lost & found system with secure authentication and automated email notifications",
    technologies: [
      "Next.js",
      "Supabase",
      "Gmail SMTP",
      "Tailwind CSS",
      "API Integration",
    ],
    github: "https://github.com/mohamedhosny10/Loqta",
    liveUrl: "https://loqtalf.vercel.app/",
    features: [
      "User-friendly platform for reporting and finding lost or stolen items",
      "Secure database management using Supabase",
      "Automated email alerts via Gmail SMTP for item owners",
      "Real-time item publishing with image uploads and location details",
      "Contact system that sends emails directly to the item owner, not the admin",
    ],
  },
  {
    id: 2,
    name: "TechUp Platform",
    description:
      "A web platform reflecting full web application workflow including authentication and data management",
    technologies: ["HTML", "CSS", "JavaScript", "Supabase"],
    github: "https://github.com/mohamedhosny10/First_project",
    liveUrl: "https://tech-up-hosny.vercel.app/pages/home.html",
    features: [
      "Integrated with Supabase for backend services",
      "Developed during the ITI program to demonstrate authentication and data management",
      "Responsive UI built with vanilla technologies",
    ],
  },
  {
    id: 3,
    name: "ITI H&M Solution",
    description:
      "A single-page application for managing pharmacy operations efficiently",
    technologies: ["AngularJS", "Supabase", "Bootstrap", "JavaScript"],
    github: "https://github.com/mohamedhosny10/Second-Proj",
    liveUrl: "https://second-proj-beta.vercel.app/pharmacy-app#!/",
    features: [
      "Modular architecture using AngularJS controllers, services, and directives",
      "Handles medicines, transactions, and system data efficiently",
      "Pharmacy Management System with Supabase integration",
    ],
  },
  {
    id: 4,
    name: "Smart Farm Dashboard",
    description:
      "IoT + AI plant health monitoring system with real-time environmental tracking",
    technologies: ["React", "Next.js", "Bootstrap", "IoT", "AI"],
    github: "https://github.com/mohamedhosny10/Smart_Farm",
    liveUrl: null,
    features: [
      "Real-time water quality monitoring",
      "Image-based plant health analysis",
      "Automated pollution alerts",
    ],
  },
  {
    id: 5,
    name: "Rwafi Platform",
    description: "Logistics & compliance system with Bitrix24 CRM integration",
    technologies: ["React", "Node.js", "Material-UI", "Bitrix24 CRM"],
    github: "https://github.com/mohamedhosny10/Rwafi-Website",
    liveUrl: "https://rwafi-website.vercel.app/",
    features: [
      "Role-based access control",
      "Service tracking system",
      "Financial management",
    ],
  },
  {
    id: 6,
    name: "Eva Digital Factory",
    description: "Full-stack web application with headless CMS",
    technologies: ["Next.js", "Strapi", "Tailwind CSS"],
    github: "https://github.com/mohamedhosny10/Eva-Digital-Factory",
    liveUrl: "https://eva-digital-factory.vercel.app/",
    features: [
      "Dynamic content management",
      "API integration",
      "Responsive UI",
    ],
  },
  {
    id: 7,
    name: "Banking System",
    description: "OOP-based banking application",
    technologies: ["Java", "OOP", "Algorithms"],
    github: "https://github.com/mohamedhosny10/Banking_System",
    liveUrl: null,
    features: [
      "User & account management",
      "Loan processing",
      "Transaction handling",
    ],
  },
];
