import AboutMe from "./AboutMe";
import InformationFrame from "./InformationFrame";
import Skill from "./Skill";
import Projects from "./Projects";
import Run from "../images/Knight/__Run.gif";
import Attack from "../images/Knight/__AttackCombo2hit.gif";

export default function Body() {
  return (
    <div className="bg-[rgb(24_30_44)] flex justify-center text-white pb-10">
      <div style={{ width: "80%" }}>
        {/* <AboutMe />
    <Skill /> */}
        <InformationFrame title="ABOUT ME" content={AboutMe} image={Run} />
        <InformationFrame title="SKILL" content={Skill} image={Attack} />
        <Projects />
      </div>
    </div>
  );
}
