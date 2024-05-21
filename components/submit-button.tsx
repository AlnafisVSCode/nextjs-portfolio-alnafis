import React from "react";
import { useFormStatus } from "react-dom";
import { FaPaperPlane } from "react-icons/fa";

export default function Submitbutton() {
	const { pending } = useFormStatus();

	return (
		<button
			type="submit"
			className="group flex items-center gap-2 justify-center h-[3rem] w-[8rem] bg-gray-800 text-white rounded-full outline-none transition-all focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:bg-gray-950 disabled:scale-100 disabled:bg-opacity-70">
			{pending ? (
				<div className="h-5 w-5 animate-spin rounded-full border-b-2 border-white"></div>
			) : (
				<div></div>
			)}
			Submit{" "}
			<FaPaperPlane className="text-yellow-300  opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
		</button>
	);
}
