import React from "react";
import { CgWorkAlt } from "react-icons/cg";
import { FaReact } from "react-icons/fa";
import { LuGraduationCap } from "react-icons/lu";
import corpcommentImg from "@/public/corpcomment.png";
import rmtdevImg from "@/public/rmtdev.png";
import wordanalyticsImg from "@/public/wordanalytics.png";

export const links = [
	{
		name: "Home",
		hash: "#home",
	},
	{
		name: "Experience",
		hash: "#experience",
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
		name: "Contact",
		hash: "#contact",
	},
] as const;

export const experiencesData = [
	{
		title: "Research Analyst",
		location: "London South Bank University",
		description: `
		Developing algorithmic models for data extraction to facilitate analysis and paper publication. Currently leading research on the top 100 UK organizations, analyzing their contributions to climate initiatives. Led initiatives to integrate AI into data extraction.    `,
		// icon: React.createElement(LuGraduationCap),
		icon: React.createElement(CgWorkAlt),

		date: "2024 - Present",
	},

	{
		title: "MSc Big Data Science",
		location: "Queen Mary, University of London",
		description:
			"I hold a Master of Science (MSc) in Big Data Science, during which I delved into the complexities of managing and analyzing vast amounts of data. My studies encompassed a wide range of topics including data mining, machine learning, cloud computing, and advanced analytics. ",
		icon: React.createElement(LuGraduationCap),
		date: "2022 - 2023",
	},
	{
		title: "IT Support Engineer",
		location: "Personaa - London, UK",
		description:
			"I have experience in providing technical support to end-users through various channels and expertise in setting up and maintaining network devices such as routers, switches, and firewalls to ensure network security and efficiency.",
		icon: React.createElement(FaReact),
		date: "2021 - 2024",
	},

	{
		title: "BEng Software Engineering",
		location: "University of Westminster - London, UK",
		description:
			"I hold a Bachelor of Engineering (BEng) in Sofware Engineering, where I developed a strong foundation in computer programming, software development, and computer systems. My studies included courses in data structures, algorithms, computer networks.",
		icon: React.createElement(LuGraduationCap),
		date: "2019 - 2022",
	},
] as const;

export const projectsData = [
	{
		title: "Biography App",
		description:
			"I worked as a full-stack developer on this startup project for 2 years. Users can give public feedback to companies.",
		tags: ["React", "Next.js", "MongoDB", "Tailwind", "Prisma"],
		imageUrl: corpcommentImg,
	},
	{
		title: "Retinopathy Diabetic Detection",
		description:
			"I developed a deep-learning algorithm that can detect diabetic retinopathy, improving diagnostics. The model underwent refinement through hyperparameter tuning.",
		tags: ["Deep learning", "Kaggle", "Python", "Transfer learning"],
		imageUrl: rmtdevImg,
	},
	{
		title: "Audio Classification Algorithm",
		description:
			"A public web app for quick analytics on text. It shows word count, character count and social media post limits.",
		tags: ["TensorFlow", "SVM", "SQL", "KNN", "GMM", "Python", "Flask"],
		imageUrl: wordanalyticsImg,
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
	"Prisma",
	"MongoDB",
	"Java",
	"GraphQL",
	"Apollo",
	"R",
	"PostgreSQL",
	"Python",
	"Django",
	"Framer Motion",
] as const;
