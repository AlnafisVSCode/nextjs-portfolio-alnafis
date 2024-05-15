import React from "react";
import {
	Html,
	Body,
	Head,
	Heading,
	Hr,
	Preview,
	Container,
	Section,
	Text,
} from "@react-email/components";
import { Tailwind } from "@react-email/tailwind";

type ContactFormEmailProps = {
	message: string;
	senderEmail: string;
};

const ContactFormEmail: React.FC<ContactFormEmailProps> = ({
	message,
	senderEmail,
}) => (
	<Html>
		<Head />
		<Preview>New Message from Portfolio</Preview>
		<Tailwind>
			<Body className="bg-gray-100 text-black font-sans">
				<Container className="max-w-4xl mx-auto">
					<Section className="bg-white shadow-lg border-gray-300 border p-6 rounded-lg my-10">
						<Heading className="text-xl font-bold mb-4">
							You received the following message from the contact form:
						</Heading>
						<Text className="mb-2 text-gray-800">{message}</Text>
						<Hr className="my-4 border-t-2" />
						<Text className="font-medium text-gray-900">
							Sender Email: {senderEmail}
						</Text>
					</Section>
				</Container>
			</Body>
		</Tailwind>
	</Html>
);

export default ContactFormEmail;
