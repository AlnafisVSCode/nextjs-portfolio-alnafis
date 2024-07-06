"use client";

import { projectsData } from "@/lib/data";
import { motion, useScroll, useTransform } from "framer-motion";
import Image from "next/image";
import { useRef } from "react";
import { FaExternalLinkAlt } from "react-icons/fa";
import { FiExternalLink } from "react-icons/fi";
import { GoLinkExternal } from "react-icons/go";

type ProjectProps = (typeof projectsData)[number];

export default function Project({
	title,
	description,
	tags,
	imageUrl,
	githubUrl,
}: ProjectProps) {
	const ref = useRef<HTMLDivElement>(null);
	const { scrollYProgress } = useScroll({
		target: ref,
		offset: ["0 1", "1.33 1"],
	});

	const scaleProgress = useTransform(scrollYProgress, [0, 1], [0.8, 1]);
	const opacityProgress = useTransform(scrollYProgress, [0, 1], [0.5, 1]);

	return (
		<motion.div
			ref={ref}
			style={{ scale: scaleProgress, opacity: opacityProgress }}
			className="group mb-3 sm:mb-8 last:mb-0">
			<section className="bg-gray-100 max-w-[42rem] border border-black/5 rounded-lg overflow-hidden sm:pr-8 relative sm:h-[20rem] hover:bg-gray-200 transition sm:group-even:pl-8 dark:bg-white/20 dark:hover:bg-white/25">
				<div className="pt-4 pb-8 px-5 sm:pl-10 sm:pr-2 sm:pt-10 sm:max-w-[50%] flex flex-col h-full sm:group-even:ml-[18rem]">
					<a href={githubUrl} target="_blank" rel="noopener noreferrer">
						<h3 className="text-2xl font-bold inline-block mr-2">{title}</h3>
						<FiExternalLink className="inline-block text-sm" />{" "}
						{/* Add the icon here */}
					</a>
					<p className="mt-4 leading-relaxed text-gray-700 dark:text-white/70 text-sm">
						{description}
					</p>
					<ul className="flex flex-wrap mt-4 gap-2 sm:mt-auto">
						{tags.map((tag, index) => (
							<li
								className="bg-black/[0.7] px-3 py-1 text-[0.7rem] uppercase tracking-wider text-white rounded-full"
								key={index}>
								{tag}
							</li>
						))}
					</ul>
				</div>
				<Image
					src={imageUrl}
					alt="The Project I worked on"
					quality={95}
					className="absolute hidden sm:block top-8 -right-40 w-[28.25rem] rounded-t-lg shadow-2xl transition group-hover:scale-[1.04] group-hover:-transalate-x-3 group-hover:transalate-y-3 group-hover:-rotate-2 group-even:group-hover:transalate-x-3 group-even:group:hover:transalate-y-3 group-even:group-hover:rotate-2 group-even:right-[initial] group-even:-left-40"
				/>
			</section>
		</motion.div>
	);
}
