import ProjectCard from "./ProjectCard";
import Grass from "../images/Grass/thumbnail.png";
import Slapabot from "../images/Slapabot/slapabot_background.png";
import TS84 from "../images/TS84/inside.png";

export default function Projects() {
  return (
    <div>
      <div
        className="text-4xl text-center font-bold text-white"
        style={{ fontFamily: "Space Grotesk" }}
      >
        PROJECTS
      </div>
      <div className="w-full grid grid-cols-2 gap-5 mt-10">
        <ProjectCard
          image={TS84}
          name="TS84"
          genre="VR Simulation"
          platform="VR"
          technology="Unity"
          member="2"
          shortDescription="A VR application focused on gun shooting training for the Vietnamese military."
          publishDate="October 7th 2025"
        />
        <ProjectCard
          image={Slapabot}
          name="Slapabot"
          genre="Endless Runner"
          platform="Web mobile, Mobile"
          technology="Unity"
          member="2"
          shortDescription="A 3D casual endless runner focused on quick player reflexes."
          publishDate="May 17th 2026"
        />
        <ProjectCard
          image={Grass}
          name="Grass"
          genre="Puzzle"
          platform="Windows"
          technology="Unity"
          member="1"
          shortDescription="Project made for SEEE JAM 2025 in 7 days."
          publishDate="September 24th 2025"
        />
        {/* <ProjectCard
          image={BlackHorizon}
          name="Black Horizon"
          genre="Platform, Puzzle"
          platform="Window"
          technology="Unity"
          member="2"
          shortDescription="Project made for game jam Kenny."
        /> */}
      </div>
    </div>
  );
}
