import Image from "next/image";
import React from "react";

export default function Intro() {
	return (
		<section>
			<div className="flex items-center justify-center">
				<div className="relative">
					<Image
						src="/Upscaled Leather Me.jpg"
						width={192}
						height={192}
						quality={95}
						alt="Alnafis Portrait"
						priority={true}
						className="h-24 w-24  rounded-full object-cover border-[0.35rem] border-white  shadow-xl sm:h-32 sm:w-32"
					/>

					<span className=" absolute bottom-0 text-4xl">😁</span>
				</div>
			</div>
		</section>
	);
}
