"use client";
import React, { useEffect, useRef } from "react";
import Sectionheadings from "./section-headings";
import { motion } from "framer-motion";
import { useInView } from "react-intersection-observer";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useSectionInView } from "@/lib/hooks";

export default function About() {
	const { ref } = useSectionInView("About");

	return (
		<motion.section
			ref={ref}
			className="md-28 max-w-[45rem] text-center leading-8 sm: mb-40 scroll-mt-32"
			initial={{ opacity: 0, y: 100 }}
			animate={{ opacity: 1, y: 0 }}
			transition={{ delay: 0.18 }}
			id="about">
			<Sectionheadings> About me</Sectionheadings>
			<div className="about-me">
				<p className="text-lg mb-3">
					After earning a degree in{" "}
					<strong className="text-lg">Software Engineering</strong>, I decided
					to follow my passion for Data. I pursued a master's degree in{" "}
					<strong className="text-lg">Big Data Science</strong> and full-stack
					web development. The aspect of programming I enjoy the most is
					problem-solving. I{" "}
					<span className="text-blue-500 underline">love</span> the feeling of
					finally figuring out a solution to a problem. My core stack includes{" "}
					<strong className="text-lg">React and Next.js</strong>. I'm also
					proficient in TypeScript. I'm always eager to learn new technologies
					and am currently seeking a full-time position as a software developer.
				</p>
				<p className="text-lg">
					When I'm not coding, I enjoy playing video games, watching movies, and
					spending time with my dog. I also take pleasure in learning new
					things. Currently, I'm delving into{" "}
					<strong className="text-lg">history and philosophy</strong> and
					learning how to play the guitar.
				</p>
			</div>
		</motion.section>
	);
}
