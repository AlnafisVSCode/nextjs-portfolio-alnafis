"use client";

import React from "react";
import Sectionheadings from "./section-headings";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";

export default function Contact() {
	const { ref } = useSectionInView("Contact");

	return (
		<motion.section
			id="contact"
			ref={ref}
			className="mb-20 sm:mb-28 w-[min(100%,38rem)] text-center 
      "
			initial={{ opacity: 0 }}
			whileInView={{ opacity: 1 }}
			transition={{ duration: 1 }}
			viewport={{ once: true }}>
			<Sectionheadings>Contact Me</Sectionheadings>

			<p className="text-gray-800 -mt-4">
				Please contact me directly at{" "}
				<a className="underline" href="mailto:alnafischowdhury@gmail.com">
					alnafischowdhury@gmail.com
				</a>{" "}
				or through the form below.
			</p>

			<form
				className="mt-10 flex flex-col "
				action={async (formData) => {
					await sendEmail(formData);
				}}
				// console.log(formData.get("Running on client side!!"));
				// console.log(formData.get("senderEmail!"));
				// console.log(formData.get("message!¬!"));
			>
				<input
					type="email"
					required
					maxLength={600}
					className="h-14 px-4 rounded-lg border border-black/10"
					placeholder="Email"
					name="senderEmail"
				/>
				<textarea
					className="h-52 my-3 rounded-lg border border-black/10 p-4"
					placeholder="Your Message"
					name="message"
					required
					maxLength={4000}></textarea>
				<button
					type="submit"
					className="group flex items-center gap-2 justify-center h-[3rem] w-[8rem] bg-gray-800 text-white rounded-full outline-none transition-all focus:scale-[1.15] hover:scale-[1.15] active:scale-105 hover:bg-gray-950">
					Submit{" "}
					<FaPaperPlane className="text-yellow-300  opacity-80 transition-all group-hover:translate-x-1 group-hover:-translate-y-1" />{" "}
				</button>
			</form>
		</motion.section>
	);
}
