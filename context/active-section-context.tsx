"use client";

import React, { useState, createContext } from "react";
import { links } from "@/lib/data";
import { SectionName } from "@/lib/type";

type activeSectionContextProviderProps = { children: React.ReactNode };

type ActiveSectionType = {
	activeSection: SectionName;
	setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
	timeOfLastClick: number;
	setTimeOfLastClick: React.Dispatch<React.SetStateAction<number>>;
};

export const ActiveSectionContext =
	React.createContext<ActiveSectionType | null>(null);

export default function ActiveSectionContextProvider({
	children,
}: activeSectionContextProviderProps) {
	const [activeSection, setActiveSection] = useState<SectionName>("Home");

	const [timeOfLastClick, setTimeOfLastClick] = useState<number>(0); // Used to prevent double clicks when going past a section

	return (
		<ActiveSectionContext.Provider
			value={{
				activeSection,
				setActiveSection,
				timeOfLastClick,
				setTimeOfLastClick,
			}}>
			{children}
		</ActiveSectionContext.Provider>
	);
}

export function useActiveSectionContext() {
	const context = React.useContext(ActiveSectionContext);

	if (context === null) {
		throw new Error(
			"useActiveSectionContext must be used within a ActiveSectionContextProvider"
		);
	}

	return context;
}
