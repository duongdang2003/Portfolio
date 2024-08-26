import Background from "../images/MiniFantasy/p3.png";
import UI from "../images/MiniFantasy/p1.png";
import ProjectImage from "./ProjectImage";
import { useEffect } from "react";

export default function MiniFantasy() {
	useEffect(() => {
		window.scrollTo(0, 0); // Scrolls to the top of the page
	}, []);
	return (
		<div>
			<img src={Background} className="w-screen fixed z-0" />
			<div
				className="w-screen h-screen fixed z-0 z-10"
				style={{ backgroundColor: "rgb(1,1,1,0.3)" }}
			></div>
			<div className="flex justify-center p-10 pt-20 ">
				<div
					className="bg-white z-20 relative p-5 rounded-lg"
					style={{ width: "60%" }}
				>
					<div className="text-sm text-gray-400 pl-5">
						Published on 30th July 2024
					</div>
					<div className="text-5xl text-center p-5">Mini Fantasy</div>
					<div className="p-5">
						<div>
							Named the same as the sprite package, Minifantasy is my first
							top-down game. Take place in a fantasy world where a monster
							called Orc exists and your mission is to control a hero to kill
							all the orcs in an abandoned place. I used some basic physical
							like velocity, force, collider, and A*. I also use UI Canvas to
							create a shop and health flask, allowing player healing when in
							low health.
						</div>
						<ProjectImage src={Background} note="Main" />
						<div>
							Named the same as the sprite package, Minifantasy is my first
							top-down game. Take place in a fantasy world where a monster
							called Orc exists and your mission is to control a hero to kill
							all the orcs in an abandoned place. I used some basic physical
							like velocity, force, collider, and A*.
						</div>
						<ProjectImage src={UI} note="Shop UI" />
					</div>
					<hr />
					<div className="flex justify-center p-5">
						<a
							href="https://github.com/duongdang2003/Minifantasy"
							target="_blank"
						>
							<button class="group relative min-h-[50px] w-40 overflow-hidden border border-red-300 bg-white text-red-300 shadow-2xl transition-all before:absolute before:left-0 before:top-0 before:h-0 before:w-1/4 before:bg-red-300 before:duration-500 after:absolute after:bottom-0 after:right-0 after:h-0 after:w-1/4 after:bg-red-300 after:duration-500 hover:text-white hover:before:h-full hover:after:h-full">
								<span class="top-0 flex h-full w-full items-center justify-center before:absolute before:bottom-0 before:left-1/4 before:z-0 before:h-0 before:w-1/4 before:bg-red-300 before:duration-500 after:absolute after:right-1/4 after:top-0 after:z-0 after:h-0 after:w-1/4 after:bg-red-300 after:duration-500 hover:text-white group-hover:before:h-full group-hover:after:h-full"></span>
								<span class="absolute bottom-0 left-0 right-0 top-0 z-10 flex h-full w-full items-center justify-center group-hover:text-white">
									View source
								</span>
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
