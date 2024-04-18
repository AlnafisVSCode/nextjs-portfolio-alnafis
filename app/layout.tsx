import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";

const inter = Inter({ subsets: ["latin"] });

export const metadata: Metadata = {
	title: "Alnafis | Personal Portfolio",
	description:
		"Alnafis Chowdhury is a software engineer based in London, United Kingdom.",
};

export default function RootLayout({
	children,
}: Readonly<{
	children: React.ReactNode;
}>) {
	return (
		<html lang="en" className="!scroll-smooth">
			<body
				className={
					"${inter.className} bg-gray-50 text-gray-950 relative h-[5000px] pt-28 sm:pt-36"
				}>
				<div
					className="bg-[#dddbc3] absolute
        top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
        sm:w-[68.75rem]
        "></div>
				<div
					className="bg-[#dbd7fb] absolute
        top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
        "></div>

				<Header />
				{children}
			</body>
		</html>
	);
}
