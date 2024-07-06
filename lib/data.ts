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
		title: "DR Detection",
		description:
			"Engineered a Diabetic Retinopathy deep-learning algorithm capable of detecting DR, thereby enhancing diagnostic accuracy. The model was meticulously refined through extensive hyperparameter tuning.",
		tags: ["Deep learning", "Kaggle", "Python", "Transfer learning"],
		imageUrl: corpcommentImg,
		githubUrl:
			"https://github.com/AlnafisVSCode/Retinopathy-Detection-Algorithm.", // Add your GitHub URL here
	},
	{
		title: "Biography App",
		description:
			"A portfolio showcasing my expertise in data science, software engineering, and web development with React and Next.js, along with my personal interests and continuous learning journey.",
		tags: ["React", "Next.js", "Vercel", "Tailwind", "TypeScript"],
		imageUrl: rmtdevImg,
		githubUrl: "https://github.com/AlnafisVSCode/next-Biography-Alnafis", // Add your GitHub URL here
	},
	{
		title: "Audio Classification",
		description:
			"The Audio Classification Algorithm discerns indoor and outdoor sounds, enhancing context understanding for applications like smart devices and surveillance systems",
		tags: ["TensorFlow", "SVM", "SQL", "KNN", "GMM", "Python", "Flask"],
		imageUrl: wordanalyticsImg,
		githubUrl: "https://github.com/AlnafisVSCode", // Add your GitHub URL here
	},
] as const;

export const skillsData = [
	"HTML",
	"CSS",
	"JavaScript",
	"TypeScript",
	"React",
	"Next.js",
	"Git",
	"Tailwind",
	"MongoDB",
	"Java",
	"R",
	"PostgreSQL",
	"Python",
	"Framer Motion",
] as const;
