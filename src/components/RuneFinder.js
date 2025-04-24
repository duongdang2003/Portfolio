import { useEffect } from "react";
import ProjectImage from "./ProjectImage";
import ProjectVideo from "./ProjectVideo";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SourceIcon from "@mui/icons-material/Source";

import MainMenu from "../images/RuneFinder/mainmenu.png";
import GameplayPic from "../images/RuneFinder/gameplay.png";
import Background from "../images/RuneFinder/background.png";
import GameplayVideo from "../images/RuneFinder/Gameplay.mp4";

export default function RuneFinder() {
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
					<div className="text-5xl text-center p-5">Rune Finder</div>
					<div className="p-5">
						<div className="pb-10">
							2 day project for game jam Kenny. It's a foundation for Mr Bee And
							Ms Fla
						</div>
						<ProjectImage src={GameplayPic} note="Gameplay" />

						<ProjectImage src={MainMenu} note="Main menu" />
					</div>
					<ProjectVideo src={GameplayVideo} note="Gameplay" />
					<hr />
					<div className="flex justify-center p-5">
						<a
							href="https://github.com/duongdang2003/Rune-Finder-Build"
							target="_blank"
							className="px-2"
						>
							<button
								class={`inline-flex items-center gap-2 rounded border border-[#1dad9a] px-6 py-2 text-sm font-semibold text-[#1dad9a] transition-all hover:shadow-lg disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
							>
								<FileDownloadIcon />
								Download Game
							</button>
						</a>
						<a
							href="https://github.com/duongdang2003/Rune-Finder-Source"
							target="_blank"
							className="px-2"
						>
							<button
								class={`inline-flex items-center gap-2 rounded border border-[#1dad9a] px-6 py-2 text-sm font-semibold text-[#1dad9a] transition-all hover:shadow-lg disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none`}
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
