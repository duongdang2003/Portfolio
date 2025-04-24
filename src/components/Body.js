import AboutMe from "./AboutMe";
import InformationFrame from "./InformationFrame";
import Skill from "./Skill";
import AboutMePic from "../images/4608264-200.png";
import SKillPic from "../images/skill.png";
import Projects from "./Projects";
import Me1 from "../images/Me/walk1.png";
import Me2 from "../images/Me/walk2.png";
import Me3 from "../images/Me/walk3.png";
import Me from "../images/Me/me.gif";
import Run from "../images/Knight/__Run.gif";
import Attack from "../images/Knight/__AttackCombo2hit.gif";

export default function Body() {
	return (
		<div style={{ width: "80%" }}>
			{/* <AboutMe />
			<Skill /> */}
			<InformationFrame title="ABOUT ME" content={AboutMe} image={Run} />
			<InformationFrame title="SKILL" content={Skill} image={Attack} />
			<Projects />
		</div>
	);
}
