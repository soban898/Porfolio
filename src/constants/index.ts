import type {
  TNavLink,
  TService,
  TTechnology,
  TExperience,
  TProject,
} from "../types";

import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
} from "../assets";

import Nextjs from "../assets/tech/Nextjs.png"
import Express from "../assets/tech/Express.png"
import Golobe from "../assets/Golobe.png"
import Tasky from "../assets/Tasky.png"
import Aiapp from "../assets/Aiapp.png"
import zephy from "../assets/company/zephy1.png"

export const navLinks: TNavLink[] = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "work",
    title: "Work",
  },
  {
    id: "contact",
    title: "Contact",
  },
  {
    id: "resume",
    title: "Resume",
    
  },
];

const services: TService[] = [
  {
    title: "Web Developer",
    icon: web,
  },
  {
    title: "Frontend Developer",
    icon: mobile,
  },
  {
    title: "Backend Developer",
    icon: backend,
  },
  {
    title: "Problem Solver",
    icon: creator,
  },
];

const technologies: TTechnology[] = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Next JS",
    icon: Nextjs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "Express",
    icon: Express,
  },
];

const experiences: TExperience[] = [
  {
    title: "Frontend Developer",
    companyName: "Zephy Solutions",
    icon: zephy,
    iconBg: "#383E56",
    date: " July 2024 - Present",
    points: [
      " Developed responsive and user-friendly web interfaces using React.js.",
      "Collaborated with backend developers and designers to implement seamless UI/UX.",
      "Optimized components for maximum performance across a vast array of web-capable devices and browsers.",
      " Utilized REST APIs to fetch and display dynamic content.",
    ],
  },
];

// const testimonials: TTestimonial[] = [
//   {
//     testimonial:
//       "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
//     name: "Sara Lee",
//     designation: "CFO",
//     company: "Acme Co",
//     image: "https://randomuser.me/api/portraits/women/4.jpg",
//   },
//   {
//     testimonial:
//       "I've never met a web developer who truly cares about their clients' success like Rick does.",
//     name: "Chris Brown",
//     designation: "COO",
//     company: "DEF Corp",
//     image: "https://randomuser.me/api/portraits/men/5.jpg",
//   },
//   {
//     testimonial:
//       "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
//     name: "Lisa Wang",
//     designation: "CTO",
//     company: "456 Enterprises",
//     image: "https://randomuser.me/api/portraits/women/6.jpg",
//   },
// ];

const projects: TProject[] = [
  {
    name: "Golobe",
    description:
      "Full-stack hotel booking application built using the MERN stack. Implemented user authentication, and booking flow with  backend and frontend.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "mongodb",
        color: "green-text-gradient",
      },
      {
        name: "node.js",
        color: "pink-text-gradient",
      },
    ],
    image: Golobe,
    sourceCodeLink: "https://github.com/soban898/Golobe-frontend",
  },
  {
    name: "Tasky",
    description:
      " A task management web app built with React and Firebase. Features include real-time task updates, authentication, and a clean, responsive UI for daily productivity.",
tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "firebase",
        color: "green-text-gradient",
      },
    ],
    image: Tasky,
    sourceCodeLink: "https://github.com/soban898/Tasky",
  },
  {
    name: "Ai App",
    description:
      " Responsive and modern landing page for an AI-based app, built with React and JavaScript. Focused on performance, animations, and mobile-first design principles.",
    tags: [
      {
        name: "react",
        color: "blue-text-gradient",
      },
      {
        name: "css",
        color: "pink-text-gradient",
      },
    ],
    image: Aiapp,
    sourceCodeLink: "https://github.com/soban898/AI-App",
  },
];

export { services, technologies, experiences, projects };
