"use client";

import { motion } from "framer-motion";
import Image from "next/image";
import React, { useEffect } from "react";
import Link from "next/link";
import { BsArrowRight, BsLinkedin } from "react-icons/bs";
import { HiDownload } from "react-icons/hi";
import { FaGithubSquare } from "react-icons/fa";
import { useActiveSectionContext } from "@/context/active-section-context";
import { useInView } from "react-intersection-observer";
import { useSectionInView } from "@/lib/hooks";

export default function Intro() {
	// const { ref, inView } = useInView({ threshold: 0.5 });
	// const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

	// useEffect(() => {
	// 	if (inView && Date.now() - timeOfLastClick > 1000) {
	// 		setActiveSection("Home");
	// 	}
	// }, [inView, setActiveSection, timeOfLastClick]);

	const { ref } = useSectionInView("Home");

	return (
		<section
			ref={ref}
			id="home"
			className="mb: 28 max-w-[50rem] text-center sm:mb-0 scroll-mt-96">
			{/* Photo */}
			<div className="flex items-center justify-center">
				<div className="relative">
					<motion.div
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{ type: "tween", duration: 0.2 }}>
						<Image
							src="/UpscaledLeatherMe.webp"
							width={192}
							height={192}
							quality={95}
							alt="Alnafis Portrait"
							priority={true}
							className="h-24 w-24  rounded-full object-cover border-[0.35rem] border-white  shadow-xl sm:h-32 sm:w-32"
						/>
					</motion.div>

					<motion.span
						className=" absolute bottom-0 text-4xl"
						initial={{ opacity: 0, scale: 0 }}
						animate={{ opacity: 1, scale: 1 }}
						transition={{
							type: "spring",
							stiffness: 125,
							delay: 0.5,
							duration: 0.6,
						}}>
						😁
					</motion.span>
				</div>
			</div>

			{/* intro description */}
			<motion.h1
				className="mb-10 mt-4 px-4 text-2xl font-medium !leading-[1.5] sm:text-4xl"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}>
				<span className="font-bold">Hello, I'm Alnafis.</span> I'm a{" "}
				<span className="font-bold">software developer</span> as a{" "}
				<span className="font-bold">recent</span> graduate. I enjoy building{" "}
				<span className="italic">sites & apps</span>. My focus is{" "}
				<span className="underline">React (Next.js)</span>.
			</motion.h1>

			{/* Social Links */}
			<motion.div
				className="flex flex-col sm:flex-row items-center justify-center gap-2 px-4 text-lg font-medium"
				initial={{ opacity: 0, y: 100 }}
				animate={{ opacity: 1, y: 0 }}
				transition={{
					delay: 0.1,
				}}>
				<Link
					href="#contact"
					className="group bg-gray-900 text-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 hover:bg-gray-950 active:scale-105 transition">
					Contact me here{" "}
					<BsArrowRight className="opacity-70 group-hover:translate-x-1 transition" />
				</Link>

				<a
					className="group bg-white px-7 py-3 flex items-center gap-2 rounded-full outline-none focus:scale-110 hover:scale-110 active:scale-105 transition cursor-pointer border border-Black/20 dark:bg-white/10"
					href="/AlnafisChowdhury_Resume.pdf"
					download>
					Download CV{" "}
					<HiDownload className="opacity-60 group-hover:translate-y-1 transition" />
				</a>

				<a
					className="bg-white p-4 text-gray-700 hover:text-gray-950 flex items-center gap-2 rounded-full focus:scale-[1.15] hover:scale-[1.15] active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
					href="https://linkedin.com"
					target="_blank">
					<BsLinkedin />
				</a>

				<a
					className="bg-white p-4 text-gray-700 flex items-center gap-2 text-[1.35rem] rounded-full focus:scale-[1.15] hover:scale-[1.15] hover:text-gray-950 active:scale-105 transition cursor-pointer borderBlack dark:bg-white/10 dark:text-white/60"
					href="https://github.com"
					target="_blank">
					<FaGithubSquare />
				</a>
			</motion.div>
		</section>
	);
}
