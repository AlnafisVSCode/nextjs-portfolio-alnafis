import { useActiveSectionContext } from "@/context/active-section-context";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import { SectionName } from "./type";

export function useSectionInView(sectionName: SectionName) {
	const { ref, inView } = useInView({ threshold: 0.5 });
	const { setActiveSection, timeOfLastClick } = useActiveSectionContext();

	useEffect(() => {
		if (inView && Date.now() - timeOfLastClick > 1000) {
			setActiveSection(sectionName);
		}
	}, [inView, setActiveSection, timeOfLastClick, sectionName]);

	return {
		ref,
	};
}
