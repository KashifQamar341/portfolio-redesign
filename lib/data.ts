/**
 * Central content/config for the portfolio.
 * Update text, links, projects, and skills here — components read from this file
 * so content stays in one organized, easy-to-edit place.
 */

import type { LucideIcon } from 'lucide-react'
import {
  Mail,
  Cpu,
  Code2,
  Braces,
  Brain,
  Sparkles,
  Database,
  Boxes,
  LineChart,
} from 'lucide-react'
import {
  GitHubIcon,
  LinkedInIcon,
  InstagramIcon,
  FacebookIcon,
} from '@/components/icons/brand-icons'

/** Any component that renders an icon and accepts a className. */
export type IconType = React.ComponentType<{ className?: string; size?: number }>

/* -------------------------------------------------------------------------- */
/*  Profile                                                                    */
/* -------------------------------------------------------------------------- */

export const profile = {
  name: 'Kashif Qamar',
  initials: 'KQ',
  role: 'AI Student & Software Developer',
  // Short rotating phrases for the hero typing effect
  typingRoles: [
    'AI Student',
    'C++ Developer',
    'Python Learner',
    'Future ML Engineer',
    'Problem Solver',
  ],
  university: 'Aror University of Art, Architecture, Design & Heritage',
  shortUniversity: 'Aror University, Sukkur',
  program: 'BS Artificial Intelligence',
  yearSemester: '2nd Year · 3rd Semester',
  location: 'Sukkur, Pakistan',
  email: 'balochkashif283@gmail.com',
  // TODO: add your phone number here if you'd like it shown
  availability: 'Open to Internships & Entry-Level Roles',
  // Place your resume PDF at /public/resume/Kashif-Qamar-Resume.pdf
  // TODO: add your actual resume PDF to the public/resume folder
  resumeUrl: '/resume/Kashif-Qamar-Resume.pdf',
}

/* -------------------------------------------------------------------------- */
/*  Hero copy                                                                  */
/* -------------------------------------------------------------------------- */

export const heroContent = {
  kicker: 'BS Artificial Intelligence · Aror University, Sukkur',
  intro:
    "I'm an Artificial Intelligence student who learns by building. I've shipped a complete Hospital Management System in C++ and a GUI-based Resume Maker, and I'm now deepening my Python and machine learning skills. I'm looking for an internship or entry-level role where I can contribute, learn fast, and grow as an engineer.",
}

/* -------------------------------------------------------------------------- */
/*  Social links                                                               */
/* -------------------------------------------------------------------------- */

export type SocialLink = {
  label: string
  href: string
  icon: IconType
}

export const socials: SocialLink[] = [
  { label: 'GitHub', href: 'https://github.com/KashifQamar341', icon: GitHubIcon },
  {
    label: 'LinkedIn',
    href: 'https://www.linkedin.com/in/kashif-qamar-5aa5043b2',
    icon: LinkedInIcon,
  },
  {
    label: 'Instagram',
    href: 'https://www.instagram.com/kashifabloch26',
    icon: InstagramIcon,
  },
  {
    label: 'Facebook',
    href: 'https://www.facebook.com/share/p/14TBkqNfmXa/',
    icon: FacebookIcon,
  },
  { label: 'Email', href: 'mailto:balochkashif283@gmail.com', icon: Mail },
]

export const githubUrl = 'https://github.com/KashifQamar341'

/* -------------------------------------------------------------------------- */
/*  About                                                                      */
/* -------------------------------------------------------------------------- */

export const aboutContent = {
  paragraphs: [
    "I'm Kashif , a second-year BS Artificial Intelligence student at Aror University in Sukkur, Pakistan, currently in my third semester. I believe the fastest way to learn is to build, so I treat every concept I study as something to turn into working software.",
    'In my first semester I built a complete Hospital Management System in C++ — handling authentication, record management, and persistent file storage. I followed it up with a GUI-based Resume Maker that taught me event-driven design and clean interface structure.',
    "Right now I'm focused on Python and the fundamentals of machine learning, working toward building intelligent systems that solve real problems. I'm genuinely curious, comfortable with self-directed learning, and eager to contribute to a team as an intern or junior developer.",
  ],
  highlight:
    'Learning AI to build a smarter tomorrow — one real project at a time.',
  facts: [
    { label: 'University', value: 'Aror University, Sukkur' },
    { label: 'Program', value: 'BS Artificial Intelligence' },
    { label: 'Year · Semester', value: '2nd Year · 3rd Sem' },
    { label: 'Location', value: 'Sukkur, Pakistan' },
  ],
  stats: [
    { value: '3+', label: 'Projects Built' },
    { value: '3+', label: 'Languages' },
    { value: '3rd', label: 'Semester' },
    { value: '∞', label: 'Curiosity' },
  ],
}

/* -------------------------------------------------------------------------- */
/*  Education timeline                                                         */
/* -------------------------------------------------------------------------- */

export type EducationItem = {
  period: string
  title: string
  institution: string
  description: string
  status: 'current' | 'completed'
}

export const education: EducationItem[] = [
  {
    period: '2024 — Present',
    title: 'BS Artificial Intelligence',
    institution: 'Aror University of Art, Architecture, Design & Heritage, Sukkur',
    description:
      'Currently in my 3rd semester, studying core computer science, programming, and the foundations of artificial intelligence and machine learning. Building practical projects alongside coursework.',
    status: 'current',
  },
  {
    period: 'Completed',
    title: 'Intermediate (Pre-Engineering / Computer Science)',
    institution: 'TODO: add your college name',
    description:
      'Completed intermediate studies with a focus on mathematics and computer science, which built the foundation for my university degree in AI.',
    status: 'completed',
  },
]

/* -------------------------------------------------------------------------- */
/*  Technical skills (with proficiency for animated bars)                      */
/* -------------------------------------------------------------------------- */

export type Skill = {
  name: string
  level: string
  proficiency: number // 0 - 100
  icon: LucideIcon
}

export const skills: Skill[] = [
  { name: 'C++', level: 'Proficient · Shipped Project', proficiency: 80, icon: Cpu },
  { name: 'Java & Swing GUI', level: 'Intermediate · Resume Maker', proficiency: 62, icon: Code2 },
  { name: 'Python', level: 'Learning · Current Focus', proficiency: 40, icon: Braces },
  { name: 'OOP & Problem Solving', level: 'Strong · Cross-Language', proficiency: 76, icon: Boxes },
  { name: 'Data Structures & Algorithms', level: 'Building · Coursework', proficiency: 55, icon: Database },
  { name: 'Machine Learning', level: 'Upcoming · Next Goal', proficiency: 20, icon: LineChart },
]

/* Programming languages spotlight (C++, Python focus) */
export type Language = {
  name: string
  tagline: string
  proficiency: number
  points: string[]
  icon: LucideIcon
}

export const languages: Language[] = [
  {
    name: 'C++',
    tagline: 'My strongest language — used to ship a full system.',
    proficiency: 80,
    icon: Cpu,
    points: [
      'Object-oriented design and class architecture',
      'File I/O with fstream for persistent storage',
      'Console application development and input handling',
    ],
  },
  {
    name: 'Python',
    tagline: 'My current focus — the language I am growing into.',
    proficiency: 40,
    icon: Braces,
    points: [
      'Core syntax, functions, and data structures',
      'Scripting and automation fundamentals',
      'Stepping toward data analysis and machine learning',
    ],
  },
]

/* -------------------------------------------------------------------------- */
/*  AI & Machine Learning journey                                             */
/* -------------------------------------------------------------------------- */

export type JourneyStep = {
  phase: string
  title: string
  description: string
  status: 'done' | 'in-progress' | 'upcoming'
  icon: LucideIcon
}

export const aiJourney: JourneyStep[] = [
  {
    phase: 'Foundation',
    title: 'Programming & OOP',
    description:
      'Built a strong programming base with C++ and Java, focusing on object-oriented thinking and clean, structured code.',
    status: 'done',
    icon: Code2,
  },
  {
    phase: 'In Progress',
    title: 'Python & Data Foundations',
    description:
      'Currently learning Python deeply — syntax, libraries, and the data-handling skills that machine learning is built on.',
    status: 'in-progress',
    icon: Braces,
  },
  {
    phase: 'Next',
    title: 'Machine Learning Fundamentals',
    description:
      'Studying core ML concepts: supervised learning, model evaluation, and working with libraries like NumPy, pandas, and scikit-learn.',
    status: 'upcoming',
    icon: Brain,
  },
  {
    phase: 'Goal',
    title: 'Applied AI Projects',
    description:
      'Building real, useful AI applications — from classifiers to intelligent tools — that demonstrate end-to-end problem solving.',
    status: 'upcoming',
    icon: Sparkles,
  },
]

/* -------------------------------------------------------------------------- */
/*  Projects                                                                   */
/* -------------------------------------------------------------------------- */

export type Project = {
  title: string
  category: string
  description: string
  technologies: string[]
  image: string
  github?: string
  demo?: string
  featured: boolean
  comingSoon?: boolean
}

export const projects: Project[] = [
  {
    title: 'Hospital Management System',
    category: '1st Semester · C++ · Console App',
    description:
      'A complete console-based hospital management system written in C++. It features admin login and signup with file-based authentication, full patient record management (add, view, and remove), doctor-wise filtering, and a patient self-service portal — all backed by fstream for persistent storage.',
    technologies: ['C++', 'OOP', 'File I/O', 'fstream', 'Console UI'],
    image: '/projects/hospital-management-system.png',
    github: 'https://github.com/KashifQamar341/Hospital-Management-System',
    featured: true,
  },
  {
    title: 'Resume Maker',
    category: '2nd Semester · Java · GUI App',
    description:
      'A desktop Resume Maker built with Java Swing. Users enter their personal details, education, skills, and experience through a clean graphical interface, and the app formats and renders a professional resume layout. The project sharpened my skills in OOP, event handling, and layout management.',
    technologies: ['Java', 'Swing', 'OOP', 'Event Handling', 'JFrame'],
    image: '/projects/resume-maker.png',
    github: 'https://github.com/KashifQamar341/Resume_Maker-',
    featured: true,
  },
  {
    title: 'Portfolio Website',
    category: 'Personal · Next.js · TypeScript',
    description:
      'This portfolio — a fast, accessible, and fully responsive website built with Next.js, TypeScript, Tailwind CSS, and Framer Motion. Designed to present my work cleanly to recruiters with smooth animations and a premium dark interface.',
    technologies: ['Next.js', 'React', 'TypeScript', 'Tailwind CSS', 'Framer Motion'],
    image: '/projects/portfolio-website.png',
    github: 'https://github.com/KashifQamar341', // TODO: link this portfolio's repository once pushed
    demo: '#hero',
    featured: true,
  },
  // ---- Placeholders for future AI projects (easy to fill in later) ----
  {
    title: 'AI Project — Coming Soon',
    category: 'Future · AI / Machine Learning',
    description:
      'As my AI degree advances, this space will hold my first machine learning project — likely a classifier or data-driven tool built with Python. TODO: replace with your real project details, repo, and demo.',
    technologies: ['Python', 'NumPy', 'pandas', 'scikit-learn'],
    image: '/projects/portfolio-website.png', // TODO: replace with the real project image
    featured: false,
    comingSoon: true,
  },
  {
    title: 'AI Project — Coming Soon',
    category: 'Future · Deep Learning',
    description:
      'A planned deep learning project exploring neural networks for a real-world task. TODO: replace with your real project details, repo, and demo.',
    technologies: ['Python', 'TensorFlow', 'Deep Learning'],
    image: '/projects/portfolio-website.png', // TODO: replace with the real project image
    featured: false,
    comingSoon: true,
  },
]

/* -------------------------------------------------------------------------- */
/*  Navigation                                                                 */
/* -------------------------------------------------------------------------- */

export const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Education', href: '#education' },
  { label: 'Skills', href: '#skills' },
  { label: 'AI Journey', href: '#ai-journey' },
  { label: 'Projects', href: '#projects' },
  { label: 'Contact', href: '#contact' },
]

/* -------------------------------------------------------------------------- */
/*  EmailJS config (reused from existing portfolio)                            */
/*  These are public client-side keys — safe to expose.                        */
/* -------------------------------------------------------------------------- */

export const emailjsConfig = {
  publicKey: 'XihCYHnSgxdw9pAPa',
  serviceId: 'service_c2ho2zd',
  templateId: 'template_zakklfz',
}
