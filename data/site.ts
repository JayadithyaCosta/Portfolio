import { IconType } from "react-icons";
import { CloudCog, LucideIcon } from "lucide-react";
import {
  SiFastapi,
  SiNestjs,
  SiNextdotjs,
  SiNodedotjs,
  SiPostgresql,
  SiPython,
  SiReact,
  SiSpring,
  SiTypescript
} from "react-icons/si";

export type Profile = {
  name: string;
  role: string;
  summary: string;
  location: string;
  email: string;
  phone: string;
  linkedin: string;
  calendly: string;
};

export type ExperienceItem = {
  company: string;
  role: string;
  period: string;
  highlights: string[];
};

export type Project = {
  slug: string;
  title: string;
  summary: string;
  role: string;
  timeline: string;
  stack: string[];
  architecture: string;
  decisions: string[];
  aiIntegration: string;
  awsModel: string;
  impact: string[];
  lessons: string;
  links: { label: string; href: string }[];
  featured?: boolean;
  deepDive?: boolean;
};

export type SkillGroup = {
  title: string;
  items: string[];
};

export type Certification = {
  title: string;
  issuer: string;
  year: string;
};

export const profile: Profile = {
  name: "Chathuranga Costa",
  role: "Senior Full-Stack Engineer (AI-Integrated Systems)",
  summary:
    "I design and ship production-grade full-stack platforms that combine robust APIs, scalable AWS infrastructure, and intelligent AI features. I lead cross-functional teams, enforce engineering quality, and deliver products that move from concept to reliable production outcomes.",
  location: "Kelaniya, Sri Lanka",
  email: "jayadithya18@gmail.com",
  phone: "+94 77 214 2508",
  linkedin: "https://linkedin.com/in/chathurangacosta",
  calendly: "https://calendly.com/chathuranga-costa"
};

type StackIcon = IconType | LucideIcon;

export const stackIcons: { label: string; icon: StackIcon }[] = [
  { label: "TypeScript", icon: SiTypescript },
  { label: "React", icon: SiReact },
  { label: "Next.js", icon: SiNextdotjs },
  { label: "NestJS", icon: SiNestjs },
  { label: "Node.js", icon: SiNodedotjs },
  { label: "FastAPI", icon: SiFastapi },
  { label: "Python", icon: SiPython },
  { label: "Spring", icon: SiSpring },
  { label: "PostgreSQL", icon: SiPostgresql },
  { label: "AWS", icon: CloudCog }
];

export const stats = [
  { label: "Years Building Products", value: "4+" },
  { label: "Production Domains", value: "Fintech, AI, CRM, HRM" },
  { label: "Core Focus", value: "APIs, Cloud, AI Integration" },
  { label: "Leadership", value: "Cross-functional Team Mentorship" }
];

export const experience: ExperienceItem[] = [
  {
    company: "Axceera",
    role: "Senior Fullstack Developer",
    period: "2025 - Present",
    highlights: [
      "Lead engineers, data scientists, and UI/UX designers while driving code quality and delivery standards.",
      "Architect FastAPI services with SQLAlchemy and Pydantic, including schedulers and background workers.",
      "Operate CI/CD via GitHub Actions and Cypress automation for frontend and backend validation.",
      "Deploy and maintain AWS-backed APIs using Lambda, EC2, and S3 with high-availability focus.",
      "Integrate GPT-style LLM features for intelligent workflows and near real-time data processing."
    ]
  },
  {
    company: "Axceera",
    role: "Fullstack Developer",
    period: "2024 - 2025",
    highlights: [
      "Collaborated across distributed teams to deliver integrated product increments.",
      "Built responsive frontend modules from Figma handoff with API-aligned implementation.",
      "Implemented Python/FastAPI backend endpoints and deployed services on AWS.",
      "Integrated LLM-style models into backend pipelines for enhanced user-facing features."
    ]
  },
  {
    company: "Avonet Labs",
    role: "Fullstack Developer",
    period: "2023 - 2024",
    highlights: [
      "Built CRM and HRM REST APIs and prioritized feature delivery with cross-functional stakeholders.",
      "Designed serverless deployments on AWS for scalable service execution.",
      "Delivered NestJS/Node.js services and integrated ML-backed processing paths."
    ]
  },
  {
    company: "Avonet Technologies",
    role: "Associate Fullstack Developer",
    period: "2022 - 2023",
    highlights: [
      "Developed React-based frontend features with strong JavaScript fundamentals.",
      "Created API layers and AWS Lambda functions with test-driven debugging using Jest.",
      "Resolved software defects rapidly to sustain release reliability."
    ]
  },
  {
    company: "Posienta Technology",
    role: "Fullstack Developer Intern",
    period: "2021 - 2022",
    highlights: [
      "Built interactive web experiences with React and service layers with Spring Boot + SQL.",
      "Designed and implemented REST APIs while improving team development practices."
    ]
  }
];

export const projects: Project[] = [
  {
    slug: "psha",
    title: "PSHA",
    summary:
      "Led delivery of a full-stack intelligent platform with robust scheduling, CI/CD quality gates, and LLM-powered backend capabilities.",
    role: "Technical Lead / Senior Full-Stack",
    timeline: "2025",
    stack: ["FastAPI", "React", "TypeScript", "MUI", "Docker", "PostgreSQL", "Gemini", "AWS"],
    architecture:
      "Service-oriented backend on FastAPI with scheduler workers, React client, containerized services, and PostgreSQL persistence. CI pipelines controlled release quality across frontend and backend.",
    decisions: [
      "Separated scheduler/background workloads from request-response API paths to preserve latency.",
      "Standardized code reviews and CI gates to reduce regression risk under rapid delivery.",
      "Created feature modules around business workflows for maintainable team scaling."
    ],
    aiIntegration:
      "Implemented Gemini/GPT-style inference flows for intelligent backend behavior and contextual output generation.",
    awsModel:
      "Hosted backend services and supporting infrastructure on AWS with reliability and scale monitoring.",
    impact: [
      "Improved team throughput through clear architecture ownership and code standards.",
      "Enabled intelligent product capabilities that improved automation and user response quality."
    ],
    lessons:
      "Pairing strong CI discipline with modular architecture allows teams to ship AI-assisted products without compromising stability.",
    links: [{ label: "Discuss Architecture", href: "mailto:jayadithya18@gmail.com?subject=PSHA%20Architecture" }],
    featured: true,
    deepDive: true
  },
  {
    slug: "greenhouse-ai",
    title: "Greenhouse AI",
    summary:
      "Built a serverless ML-driven platform to assess greenhouse metrics with cloud-native APIs and intelligent analysis.",
    role: "Full-Stack Engineer",
    timeline: "2024",
    stack: ["NestJS", "React", "TypeScript", "AWS", "ML/LLM"],
    architecture:
      "Serverless API services on AWS with a React dashboard, asynchronous analysis pipeline, and domain-specific inference adapters.",
    decisions: [
      "Used event-driven service boundaries to decouple ingestion from analysis workloads.",
      "Applied strict DTO and validation patterns to maintain API correctness.",
      "Designed the frontend around rapid insight retrieval with minimal interaction cost."
    ],
    aiIntegration:
      "Connected ML and LLM-like models for backend analysis enhancements and recommendation-oriented outputs.",
    awsModel:
      "Serverless Lambda-centric deployment model for elasticity and cost-aligned scaling.",
    impact: [
      "Reduced friction for accessing greenhouse performance indicators.",
      "Enabled scalable, cloud-native analysis workflows with low operational overhead."
    ],
    lessons:
      "For ML-integrated apps, explicit contracts between inference and application layers are essential for long-term reliability.",
    links: [{ label: "Explore Similar Work", href: "/contact" }],
    featured: true,
    deepDive: true
  },
  {
    slug: "share-app",
    title: "Share App",
    summary:
      "Delivered a multi-surface platform with CMS, super-admin capabilities, and AWS load-handled backend architecture.",
    role: "Full-Stack Engineer",
    timeline: "2024",
    stack: ["NestJS", "React", "React Native", "Next.js", "TypeScript", "Redux", "AWS", "Nx"],
    architecture:
      "Monorepo-driven multi-client platform with shared package boundaries, role-based CMS modules, and AWS service gateways.",
    decisions: [
      "Used Nx workspace strategy to share modules between web and mobile surfaces.",
      "Built role-centered authorization flows for admin and super-admin operations.",
      "Adopted serverless gateway patterns to support variable load behavior."
    ],
    aiIntegration:
      "Platform architecture kept extension points for intelligent automation in admin workflows.",
    awsModel:
      "Serverless AWS deployment with routing/gateway configuration for load handling.",
    impact: [
      "Improved operational control through centralized user and role management.",
      "Accelerated feature delivery by reusing shared packages across clients."
    ],
    lessons:
      "Monorepo governance and clear shared-module ownership are key to scaling multi-surface product development.",
    links: [{ label: "View Projects", href: "/projects" }],
    featured: true,
    deepDive: true
  },
  {
    slug: "rail-online",
    title: "Rail Online",
    summary:
      "Engineered train reservation workflows with payments, refund handling, and AWS-hosted API reliability.",
    role: "Full-Stack Engineer",
    timeline: "2023",
    stack: ["NestJS", "React", "Redux", "TypeScript", "Stripe", "AWS"],
    architecture:
      "API-driven booking platform with payment and refund orchestration, frontend transaction lifecycle tracking, and cloud deployment.",
    decisions: [
      "Designed booking and refund states explicitly to avoid transaction ambiguity.",
      "Integrated Stripe workflows with robust validation and failure handling.",
      "Separated payment concerns from booking domain modules for maintainability."
    ],
    aiIntegration:
      "No primary AI path; architecture focused on transactional reliability and payment integrity.",
    awsModel:
      "AWS-hosted backend APIs with deployment automation and stable service routing.",
    impact: [
      "Enabled digital reservation and refund workflows with reliable payment handling.",
      "Improved user trust via transparent transaction states."
    ],
    lessons:
      "Transaction-centric systems require explicit state modeling and resilient third-party integration boundaries.",
    links: [{ label: "Book a Call About This", href: "https://calendly.com/chathuranga-costa" }],
    featured: true,
    deepDive: true
  },
  {
    slug: "bbb",
    title: "BBB (Better Business Basics)",
    summary: "Built a LinkedIn-like platform for accountants with admin tools and quiz assessment flows.",
    role: "Full-Stack Engineer",
    timeline: "2023",
    stack: ["NestJS", "React", "TypeScript", "AWS"],
    architecture:
      "Social-product style modules with admin management capabilities and assessment workflows.",
    decisions: ["Focused on role-managed administration and controlled content workflows."],
    aiIntegration: "Planned extensibility for intelligent recommendation paths.",
    awsModel: "Deployed backend APIs using AWS services.",
    impact: ["Delivered role-based platform functions and assessment capability."],
    lessons: "Domain-specific communities require moderation and role clarity early.",
    links: [{ label: "See Contact", href: "/contact" }]
  },
  {
    slug: "isbar",
    title: "ISBAR",
    summary:
      "Delivered serverless NestJS/Python backend services and integrated ML-backed intelligence features.",
    role: "Full-Stack Engineer",
    timeline: "2024",
    stack: ["NestJS", "Python", "React", "Tailwind", "AWS", "ML"],
    architecture:
      "Serverless full-stack delivery with frontend interaction flows and backend inference orchestration.",
    decisions: ["Balanced rapid release with modular service boundaries for maintainability."],
    aiIntegration: "Integrated ML models into backend service pipelines.",
    awsModel: "Serverless AWS deployment for backend APIs.",
    impact: ["Enabled intelligent service behavior in a cloud-scalable architecture."],
    lessons: "Explicit service ownership speeds iteration in serverless ecosystems.",
    links: [{ label: "View Projects", href: "/projects" }]
  }
];

export const skills: SkillGroup[] = [
  {
    title: "Backend and APIs",
    items: ["FastAPI", "NestJS", "Node.js", "Spring Boot", "SQLAlchemy", "Pydantic", "REST API Design"]
  },
  {
    title: "Frontend and UX Delivery",
    items: ["React", "Next.js", "TypeScript", "React Native", "Redux", "MUI", "Responsive UI from Figma"]
  },
  {
    title: "Cloud and DevOps",
    items: ["AWS Lambda", "EC2", "S3", "Serverless Architecture", "GitHub Actions", "Cypress", "Docker"]
  },
  {
    title: "AI and Data",
    items: ["LLM Integration", "GPT-style Models", "Gemini Integration", "Machine Learning Workflows", "PostgreSQL"]
  }
];

export const certifications: Certification[] = [
  { title: "Python & Machine Learning", issuer: "DST BIT Mesra", year: "2021" },
  { title: "Practical Web Application Hacking", issuer: "DST BIT Mesra", year: "2021" }
];

export const education = {
  degree: "Bachelor of Science in Information Technology",
  school: "SLIIT",
  period: "2019 - 2023"
};
