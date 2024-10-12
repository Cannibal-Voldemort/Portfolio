import {
  FaTwitter,
  FaGithub,
  FaLinkedin,
  FaInstagram,
} from "react-icons/fa6";

import projectImage1 from "../assets/project1.jpeg";
import projectImage2 from "../assets/project2.jpeg";
import projectImage3 from "../assets/project3.jpeg";


export const NAVIGATION_LINKS = [
  { label: "Projects", href: "#projects" },
  { label: "Bio", href: "#bio" },
  { label: "Skills", href: "#skills" },
  { label: "Work Experience", href: "#work" },
  { label: "Education", href: "#education" },
  { label: "Contact", href: "#contact" },
];

export const Aboutme = {
  name: "Aman Kumar Singh",
  greet: "Hello there! 👋🏻",
  description:
    "I am a passionate full stack developer with a knack for creating beautiful and functional user interfaces. I like transforming ideas into engaging web experiences.",
};

export const PROJECTS = [
  {
    id: 1,
    name: "Personal Portfolio",
    description:
      "A personal portfolio website built with React and Tailwind CSS to showcase my skills, projects, and contact information.",
    image: projectImage1,
    githubLink: "",
  },
  {
    id: 2,
    name: "E-Commerce Platform",
    description:
      "An e-commerce web application developed using Next.js and Stripe for payment integration, featuring a comprehensive product catalog, shopping cart, and checkout system.",
    image: projectImage2,
    githubLink: "",
  },
  {
    id: 3,
    name: "Task Management Tool",
    description:
      "A task management application built with React and Redux for efficient task tracking and team collaboration, including features like project boards, task assignment, and progress tracking.",
    image: projectImage3,
    githubLink: "",
  },
];

export const BIO = [
      "I am a full stack Developer"
];

export const EXPERIENCES = [
  {
    title: "Frontend developer",
    company: "InternPe",
    duration: "July 2023 - Aug 2023",
    description:
      ""
  },
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology in Information Technology",
    institution: "College of Engineering Roorkee",
    duration: "Sept 2020 - July 2024",
    description:
    "Focused on web development, programming languages, and database management. Actively involved in coding clubs and hackathons, where I developed several web applications using HTML, CSS, JavaScript, and React. Graduated with 7.2 CGPA.",
  },
];

export const SOCIAL_MEDIA_LINKS = [
  {
    href: "https://www.linkedin.com/in/aman-singh-a67b29205/",
    icon: <FaLinkedin fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://github.com/Cannibal-Voldemort",
    icon: <FaGithub fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://www.instagram.com/orewa.aman/",
    icon: <FaInstagram fontSize={25} className="hover:opacity-80" />,
  },
  {
    href: "https://x.com/",
    icon: <FaTwitter fontSize={25} className="hover:opacity-80" />,
  },
  
];