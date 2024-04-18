import React from "react";
import Sectionheadings from "./section-headings";
import { projectsData } from "@/lib/data";
import Project from "./project";

export default function Projects() {
	return (
		<section className="scroll-mt-28" id="projects">
			<Sectionheadings>My projects </Sectionheadings>

			<div className="">
				{projectsData.map((project, index) => (
					<React.Fragment key={index}>
						<Project {...project} />
					</React.Fragment>
				))}
			</div>
		</section>
	);
}
