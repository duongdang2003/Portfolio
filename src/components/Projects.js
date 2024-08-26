import ProjectCard from "./ProjectCard";
import Pic1 from "../images/warthunder.jpg";
import Pic2 from "../images/zelda.jpg";
import Pic3 from "../images/blasphemous.jpg";
import Pic4 from "../images/stardew.jpg";
import MrBeeAndMsFla from "../images/MrBee&MsFla/gameplay.png";
import TilICollapse from "../images/TilICollapse/mainmenu.png";

export default function Projects() {
	return (
		<div>
			<div className="text-4xl text-center font-bold">PROJECTS</div>
			<div className="w-full grid grid-cols-2 gap-5 mt-10">
				<ProjectCard
					image={TilICollapse}
					name="Til I Collapse"
					genre="FPS, Boss Rush"
					platform="Windows"
					technology="Unity"
					member="1"
					shortDescription="A 1 week project that I try to combine controller from FPS and behaviour of boss from soul-like."
				/>
				<ProjectCard
					image={MrBeeAndMsFla}
					name="Mr Bee And Ms Fla"
					genre="Platform, Multiplayer"
					platform="Windows"
					technology="Unity"
					member="2"
					shortDescription="Project made for competition Topexbox Accelerator."
				/>
				<ProjectCard
					image={Pic4}
					name="Rune Finder"
					genre="Platform, Puzzle"
					platform="Window, OS"
					technology="Unity"
					member="1"
				/>
			</div>
		</div>
	);
}
