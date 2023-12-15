import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import PreSnapImg from "@/public/Presnap2.jpg";
import ExtensionImg from "@/public/extension.jpg";
import FoodrightImg from "@/public/foodright.jpg";

export const links = [
  {
    name: "Home",
    hash: "#home",
  },
  {
    name: "About",
    hash: "#about",
  },
  {
    name: "Projects",
    hash: "#projects",
  },
  {
    name: "Skills",
    hash: "#skills",
  },
  {
    name: "Experience",
    hash: "#experience",
  },
  {
    name: "Contact",
    hash: "#contact",
  },
] as const;

export const experiencesData = [
  {
    title: "Began Journey",
    location: "Kyle, TX",
    description:
      "I began studying and taking courses on Javascript, HTML, CSS, and many other front-end development tools.",
    icon: React.createElement(LuGraduationCap),
    date: "2020",
  },
  {
    title: "Front-End Developer",
    location: "Kyle, TX",
    description:
      "I worked as a front-end developer for 1 year while freelancing.",
    icon: React.createElement(CgWorkAlt),
    date: "2021 - 2022",
  },
  {
    title: "Front-end Developer",
    location: "Autsin, TX",
    description:
      "I'm now a Front-end developer working at PreSnap. My stack includes React, Next.js, TypeScript, Tailwind, Bootstrap and many other things. I'm open to full-time opportunities.",
    icon: React.createElement(FaReact),
    date: "2022 - present",
  },
] as const;

export const projectsData = [
  {
    title: "PreSnap",
    description:
      "I am currently working as a software engineer at this startup for over a year. Users can subscribe and review top level football film.",
    tags: ["React", "Next.js", "Tailwind"],
    imageUrl: PreSnapImg,
  },
  {
    title: "Twitch/Chrome Extension",
    description:
      "Created both a Twitch.tv extension and a Google Chrome Extension that allowed viewers to answer questions given by the streamer.",
    tags: ["React", "Bootstrap", "Flask", "WebSockets"],
    imageUrl: ExtensionImg,
  },
  {
    title: "FoodRight",
    description:
      "A web app for users to specify the macros they want within a meal and use stripe checkout to order.",
    tags: ["React", "Next.js", "SupaBase", "BootStrap", "Stripe"],
    imageUrl: FoodrightImg,
  },
] as const;

export const skillsData = [
  "HTML",
  "CSS",
  "JavaScript",
  "TypeScript",
  "React",
  "Next.js",
  "Node.js",
  "Git",
  "Tailwind",
  "Bootstrap",
  "Redux",
  "GraphQL",
  "Express",
  "PostgreSQL",
  "Framer Motion",
] as const;
