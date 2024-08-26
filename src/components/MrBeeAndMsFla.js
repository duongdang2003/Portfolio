import ProjectImage from "./ProjectImage";
import ProjectVideo from "./ProjectVideo";
import { useEffect, useState } from "react";
import SourceIcon from "@mui/icons-material/Source";

import GamePlayVideo from "../images/MrBee&MsFla/gameplay.mp4";
import UI from "../images/MrBee&MsFla/mainmenu.png";
import Delta from "../images/MrBee&MsFla/delta1.png";
import GameplayPic from "../images/MrBee&MsFla/gameplay.png";
import { green } from "@mui/material/colors";

export default function MrBeeAndMsFla() {
	useEffect(() => {
		window.scrollTo(0, 0); // Scrolls to the top of the page
	}, []);
	return (
		<div>
			{/* background */}
			<img src={GameplayPic} className="w-screen fixed z-0" />
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
					<div className="text-5xl text-center p-5">Mr Bee and Ms Fla</div>
					<div className="p-5">
						{/* body */}
						<div className="pb-10">
							My first group project specifically 2 peoples. This is our product
							for competitive Topbox Accelerator and we place at 4th. Mr Bee and
							Ms Fla is a Platform game combine with Multiplayer telling about
							the journey to finding friends of two astronaunt Mr Bee and his
							coworker Ms Fla.
						</div>
						<ProjectImage src={GameplayPic} note="Gameplay" />
						<div className="pb-10">
							In this project, I worked as game designer and offline gameplay
							developer. The target of this game is finding 3 orbs which orb
							give player the ability such as dash, high jump and slow falling
							that player can find in the path. The special is that when a
							player trigger an orb both of them will be effected. With this
							mechanism, I want 2 player work well together and having good
							timing to trigger orb when facing with challenge.
						</div>
						<ProjectImage src={Delta} note="Delta scene" />

						<ProjectImage src={UI} note="Main menu" />
					</div>
					<ProjectVideo src={GamePlayVideo} note="Demo gameplay" />
					<hr />
					<div className="flex justify-center p-5">
						<a
							href="https://github.com/duongdang2003/MrBeeAndMsFla.git"
							target="_blank"
							className="flex justify-center items-center"
						>
							<button
								class={`inline-flex items-center gap-2 rounded border border-[#1fb800] px-6 py-2 text-sm font-semibold text-[#1fb800] transition-all hover:shadow-lg disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
							>
								<SourceIcon />
								View Source
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
// `inline-flex items-center gap-2 rounded border border-[${buttonColor}] px-6 py-2 text-sm font-semibold text-[${buttonColor}] transition-all hover:shadow-lg disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`
