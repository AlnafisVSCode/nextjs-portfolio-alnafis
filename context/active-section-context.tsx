"use client";

import React, { useState, createContext } from "react";
import { links } from "@/lib/data";

type SectionName = (typeof links)[number]["name"];
type activeSectionContextProviderProps = { children: React.ReactNode };

type ActiveSectionType = {
	activeSection: SectionName;
	setActiveSection: React.Dispatch<React.SetStateAction<SectionName>>;
};

export const ActiveSectionContext =
	React.createContext<ActiveSectionType | null>(null);

export default function ActiveSectionContextProvider({
	children,
}: activeSectionContextProviderProps) {
	const [activeSection, setActiveSection] = useState<SectionName>("Home");

	return (
		<ActiveSectionContext.Provider value={{ activeSection, setActiveSection }}>
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
