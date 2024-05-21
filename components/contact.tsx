"use client";

import React from "react";
import Sectionheadings from "./section-headings";
import { FaPaperPlane } from "react-icons/fa";
import { motion } from "framer-motion";
import { useSectionInView } from "@/lib/hooks";
import { sendEmail } from "@/actions/sendEmail";
import { useFormStatus } from "react-dom";
import Submitbutton from "./submit-button";
import toast from "react-hot-toast";

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

			<p className="text-gray-800 -mt-4 dark:text-white/75">
				Please contact me directly at{" "}
				<a className="underline" href="mailto:alnafischowdhury@gmail.com">
					alnafischowdhury@gmail.com
				</a>{" "}
				or through the form below.
			</p>

			<form
				className="mt-10 flex flex-col dark:text-black"
				action={async (formData) => {
					const { data, error } = await sendEmail(formData);

					if (error) {
						toast.error(error);
						return;
					}

					toast.success("Email sent successfully!");
				}}

				// console.log(formData.get("Running on client side!!"));
				// console.log(formData.get("senderEmail!"));
				// console.log(formData.get("message!¬!"));
				// console.log(formData.get("message!¬!"));
			>
				<input
					type="email"
					required
					maxLength={600}
					className="h-14 px-4 rounded-lg borderBlack dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-80 transition-all dark:outline-none"
					placeholder="Email"
					name="senderEmail"
				/>
				<textarea
					className="h-52 my-3 rounded-lg borderBlack p-4 dark:bg-white dark:bg-opacity-80 dark:focus:bg-opacity-80 transition-all dark:outline-none"
					placeholder="Your Message"
					name="message"
					required
					maxLength={4000}></textarea>
				<Submitbutton />
			</form>
		</motion.section>
	);
}
