import type { Metadata } from "next";
import { Inter } from "next/font/google";
import "./globals.css";
import Header from "@/components/header";
import ActiveSectionContextProvider from "@/context/active-section-context";
import { Toaster } from "react-hot-toast";
import Footer from "@/components/footer";
import ThemeSwitcher from "@/components/themeSwitcher";
import ThemeContextProvider from "@/context/theme-context";

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
					"${inter.className} bg-gray-50 text-gray-950 relative pt-28 sm:pt-36 dark:bg-gray-900 dark:text-gray-50 transition-colors dark:text-opacity-85"
				}>
				<div
					className="bg-[#dddbc3] absolute
        top-[-6rem] -z-10 right-[11rem] h-[31.25rem] w-[31.25rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] dark:bg-[#946263] md:right-[9rem] lg:right-[6rem] xl:right-[3rem] 2xl:right-[1rem]
        "></div>
				<div
					className="bg-[#dbd7fb] absolute
        top-[-1rem] -z-10 left-[-35rem] h-[31.25rem] w-[50rem] rounded-full blur-[10rem]
        sm:w-[68.75rem] md:left-[-33rem] lg:left-[-28rem] xl:left-[-15rem] 2xl:left-[-5rem]
        dark:bg-[#676394]"></div>

				<ThemeContextProvider>
					{" "}
					<ActiveSectionContextProvider>
						<Header />
						{children}
						<Toaster position="top-right" />
						<Footer />
					</ActiveSectionContextProvider>
					<ThemeSwitcher />
				</ThemeContextProvider>
			</body>
		</html>
	);
}
