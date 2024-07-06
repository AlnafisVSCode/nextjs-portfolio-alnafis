import React from "react";

export default function Footer() {
	return (
		<footer className="mb-10 px-4 text-center text-gray-500">
			<small className="mb-2 block text-xs  ">
				&copy; 2050 Alnafis. All right reserved.
			</small>
			<p className="text-xs">
				<span className="font-semibold">About This Website:</span> This website
				is built using Next.js, Tailwind CSS, and TypeScript, featuring the App
				Router and Server Actions. It also integrates Framer Motion, React Email
				& Resend, and is hosted on Vercel
			</p>
		</footer>
	);
}
