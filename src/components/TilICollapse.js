import { useEffect } from "react";
import ProjectImage from "./ProjectImage";
import ProjectVideo from "./ProjectVideo";
import FileDownloadIcon from "@mui/icons-material/FileDownload";

import MainMenu from "../images/TilICollapse/mainmenu.png";
import GameplayPic from "../images/TilICollapse/gameplay.png";
import GameplayPic2 from "../images/TilICollapse/gameplay2.png";
import GameplayVideo from "../images/TilICollapse/Gameplay.mp4";

export default function TillICollapse() {
	useEffect(() => {
		window.scrollTo(0, 0); // Scrolls to the top of the page
	}, []);
	return (
		<div>
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
					<div className="text-5xl text-center p-5">Til I Collapse</div>
					<div className="p-5">
						<div className="pb-10">
							A project answer for my question about how soul-like looks like
							with FPS. Inspired by Elden Ring boss, I tried to create a boss
							that has the same behavior as boss in soul-like but with the view
							of FPS. This is a Boss Rush game so the rule is very easy. The
							player will be dropped into a boss area, defeat the boss , and
							come to the next level.
						</div>
						<ProjectImage src={GameplayPic} note="Gameplay" />
						<div className="pb-10">
							Just a prototype but now I basically understand why there are not
							a lot of games like that in the market. It loses the nature of the
							soul-like series the difficulty. Imagine how combat look like when
							you can shoot the boss from a long distance. The melee attacks
							from the boss become useless when not need to come close to deal
							damage and are easy to dodge from range attack. So with my
							experiment, I still love traditional soul-like than mixing with
							FPS :D
						</div>
						<ProjectImage src={GameplayPic2} note="Gameplay 2" />
						<div className="pb-10">
							Under the hood, about the boss in this game, I use models and
							animations from Mixamo for better animation. For easy-to-manage
							boss behavior I'm using state pattern to create my own boss state
							machine and combine with Unity Animation State Machine to perform
							boss skill, I also using object pooling to optimize VFXs and
							objects.
						</div>
						<ProjectImage src={MainMenu} note="Main menu" />
					</div>
					<ProjectVideo src={GameplayVideo} note="Mutant skill" />
					<hr />
					<div className="flex justify-center p-5">
						<a
							href="https://github.com/duongdang2003/Til-I-Collapse-Build"
							target="_blank"
						>
							<button
								class={`inline-flex items-center gap-2 rounded border border-[#1dad9a] px-6 py-2 text-sm font-semibold text-[#1dad9a] transition-all hover:shadow-lg disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
							>
								<FileDownloadIcon />
								View Source
							</button>
						</a>
					</div>
				</div>
			</div>
		</div>
	);
}
