"use client";

import React, { useContext, useState, useEffect } from "react";
import Sectionheading from "./section-headings";
import {
	VerticalTimeline,
	VerticalTimelineElement,
} from "react-vertical-timeline-component";
import "react-vertical-timeline-component/style.min.css";
import { experiencesData } from "@/lib/data";
import { useSectionInView } from "@/lib/hooks";
import { useTheme } from "@/context/theme-context";

export default function Experience() {
	const { ref } = useSectionInView("Experience");
	const { theme } = useTheme();
	const [visibleElements, setVisibleElements] = useState<number[]>([]);

	useEffect(() => {
		const timers = experiencesData.map(
			(_, index) =>
				setTimeout(() => {
					setVisibleElements((prev) => [...prev, index]);
				}, index * 200) // Delay each element by 200ms
		);

		return () => timers.forEach((timer) => clearTimeout(timer));
	}, []);

	return (
		<section id="experience" ref={ref} className="scroll-mt-28 mb-28 sm:mb-40 ">
			<Sectionheading>My Experience </Sectionheading>
			<VerticalTimeline lineColor="">
				{experiencesData.map((experience, index) => (
					<React.Fragment key={index}>
						<VerticalTimelineElement
							visible={true}
							className={`fade-in ${
								visibleElements.includes(index) ? "visible" : ""
							}`}
							contentStyle={{
								background:
									theme === "light" ? "#f3f4f6" : "rgba(255, 255, 255, 0.05)",
								boxShadow: "none",
								border: "1px solid rgba(0, 0, 0, 0.05)",
								textAlign: "left",
								padding: "1.3rem 2rem",
							}}
							contentArrowStyle={{
								borderRight:
									theme === "light"
										? "0.4rem solid #9ca3af"
										: "0.4rem solid rgba(255, 255, 255, 0.5)",
							}}
							date={experience.date}
							icon={experience.icon}
							iconStyle={{
								background:
									theme === "light" ? "white" : "rgba(255, 255, 255, 0.15)",
								fontSize: "1.5rem",
							}}>
							<h3 className="font-semibold capitalize">{experience.title}</h3>
							<p className="font-normal !mt-0">{experience.location}</p>
							<p
								className="!mt-1 !font-normal text-gray-400"
								style={{ fontSize: "12px" }}>
								{experience.description}
							</p>
						</VerticalTimelineElement>
					</React.Fragment>
				))}
			</VerticalTimeline>
		</section>
	);
}
