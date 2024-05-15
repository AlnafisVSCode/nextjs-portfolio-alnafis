"use server";
import { error } from "console";
import { Resend } from "resend";
import { validateString } from "@/lib/utils";
import Contactform from "@/emails/contact-form";
import React from "react";

const resend = new Resend(process.env.RESEND_API_KEY);

export const sendEmail = async (formData: FormData) => {
	// console.log(formData.get("Running on server side"));
	// console.log(formData.get("senderEmail"));
	// console.log(formData.get("message"));
	const message = formData.get("message");
	const senderEmail = formData.get("senderEmail");

	// server side validation
	if (!validateString(senderEmail, 500)) {
		return {
			error: "Invalid Sender Email",
		};
	}
	if (!validateString(message, 5000)) {
		return {
			error: "Invalid Message",
		};
	}

	try {
		await resend.emails.send({
			from: "Homie Portfolio<onboarding@resend.dev>",
			to: "alnafischowdhury@gmail.com",
			subject: "New message from your portfolio",
			reply_to: senderEmail as string,
			react: React.createElement(Contactform, {
				message: message as string,
				senderEmail: senderEmail as string,
			}),
		});
	} catch (err) {
		console.error(err);
		return {
			error: "Failed to send email",
		};
	}
};
