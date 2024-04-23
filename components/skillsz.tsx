"use client";

import React from "react";
import Sectionheadings from "./section-headings";
import { skillsData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { animate, delay, motion } from "framer-motion";

const fadeInAnimationVariants = {
	initial: { opacity: 0, y: 100 },

	animate: (index: number) => ({
		opacity: 1,
		y: 0,
		transition: { delay: 0.05 * index },
	}),
};

export default function Skillsz() {
	const { ref } = useSectionInView("Skills");

	return (
		<section
			ref={ref}
			className="mb-28 max-w-[53rem]
    scroll-mt-28 text center sm:mb-40">
			<Sectionheadings>MY SKILLS</Sectionheadings>

			<ul className="flex flex-wrap justify-center gap-2 text-lg text-gray-600">
				{skillsData.map((skill, index) => (
					<motion.li
						key={index}
						variants={fadeInAnimationVariants}
						initial="initial"
						animate="animate"
						viewport={{ once: true }}
						custom={index}
						className="bg-white border border-black/[0.1] rounded-xl px-5 py-3">
						{skill}
					</motion.li>
				))}
			</ul>
		</section>
	);
}
