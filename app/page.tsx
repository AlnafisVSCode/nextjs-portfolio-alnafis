import About from "@/components/about";
import Header from "@/components/header";
import Intro from "@/components/intro";
import Projects from "@/components/projects";
import SectionDiv from "@/components/section";
import Skills from "@/components/skills";
import Skillsz from "@/components/skills";

export default function Home() {
	return (
		<main className="flex flex-col items-center px-4">
			<Intro />
			<SectionDiv />
			<About />
			<Projects />
			<Skills />
		</main>
	);
}
