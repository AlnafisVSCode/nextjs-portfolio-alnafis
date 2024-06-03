import React from "react";

type childrenprops = { children: React.ReactNode };

export default function Sectionheadings({ children }: childrenprops) {
	return (
		<h2 className=" fade-in-constant text-3xl font-medium capitalize mb-8 text-center">
			{children}
		</h2>
	);
}
