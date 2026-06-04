import { useEffect } from "react";
import ProjectImage from "./ProjectImage";
import ProjectVideo from "./ProjectVideo";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import ContentButton from "./ContentButton";

import Thumbnail from "../images/Grass/thumbnail.png";
import Gameplay from "../images/Grass/gameplay.png";
import Overview from "../images/Grass/main view.png";

const contentTextColor = "text-gray-100";
const imageDescriptionColor = "text-gray-300";

export default function Grass() {
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <img src={Overview} className="w-screen fixed z-0" />
      <div
        className="w-screen h-screen fixed z-0 z-10"
        style={{ backgroundColor: "rgb(1,1,1,0.2)" }}
      ></div>
      <div className={`flex justify-center p-10 pt-5 ${contentTextColor}`}>
        <div
          className="bg-[rgba(0,0,0,0.1)] z-20 relative p-5 rounded-lg"
          style={{ width: "60%" }}
        >
          <div className="text-sm text-gray-300 pl-5">
            Published on September 24th 2025
          </div>
          <div className="text-5xl text-center p-5 text-white">Grass</div>
          <div className="p-5">
            <div className="pb-2 [text-indent:2rem]">
              <span className="font-bold text-white">Introduction: </span>A
              short puzzle game I made for SEEE JAM 2025 in 1 week with theme
              Rymth of the Boom.
            </div>
            <div className="pb-5 [text-indent:2rem]">
              <span className="font-bold text-white">Story: </span>You are a
              recent graduate, carrying within you the ambition to start a
              business and prove yourself. Having been entrusted with a small
              piece of land by your family, you are determined to turn it into
              the foundation for writing your own success story as a leading
              supplier of clean, organic produce.
            </div>

            <ProjectImage
              src={Thumbnail}
              note="Thumbnail"
              textColor={imageDescriptionColor}
              width="500px"
            />
            <div className="pb-10 [text-indent:2rem]">
              <span className="font-bold text-white">Gameplay: </span>
              You have a 10x10 field and must grow enough crops to meet customer
              orders within a time limit. Each crop grows at a different speed
              and spreads in unique patterns when ripe. Plan your planting
              carefully, or one crop may overgrow and block others. You’ll also
              get 3 tools to help manage the field and balance your harvest.
            </div>
            <ProjectImage
              src={Overview}
              note="Gameplay view"
              textColor={imageDescriptionColor}
            />

            <div className="pb-10 [text-indent:2rem]">
              <span className="font-bold text-white">Design: </span>
              If we translate “Rhythm of the Boom” as “explosion”, people might
              associate it with a physical explosion, but if we take it as
              “boom”, it becomes a metaphor for rapid growth like “population
              boom.” In this game, the concept shifts from population to plant
              growth boom if not managed well, plants spread uncontrollably,
              overtaking others and causing a “population boom.” The game is a
              puzzle centered on plant spreading mechanics. Its visuals use a
              low-poly art style for a calm, lightweight look suitable for HTML
              builds. The music is nature-inspired and gentle to maintain focus.
              The main character, inspired by my father a plant lover with a
              messy side represents youthful energy and vitality, symbolizing
              the lively, untamed spirit of nature.
            </div>
            <ProjectImage
              src={Gameplay}
              note="Gameplay on Itch"
              textColor={imageDescriptionColor}
            />
            <div className="pb-10 [text-indent:2rem]">
              <span className="font-bold text-white">Under the hood: </span>
              There isn’t much tech behind this project. I just use GPU instance
              to render a 10×10 grid of soil blocks. Since this game is mainly
              about clicking, I removed all Rigidbody and Collider components
              from the soil blocks. Instead, I store the position of each soil
              block in a dictionary. When the user clicks on a soil block, I use
              a raycast to get the world position and look it up in the
              dictionary.
            </div>

            <ProjectVideo
              src="https://www.youtube.com/watch?v=UmM9rgTWLWg"
              note="Game trailer"
              textColor={imageDescriptionColor}
            />
          </div>

          <hr />
          <div className="flex justify-center p-5">
            <ContentButton
              label="Play on Itch"
              icon={SportsEsportsIcon}
              href="https://duongdang2003.itch.io/grass01"
              textColor="#7ed021ff"
              borderColor="#7ed021ff"
              hoverBgColor="#7ed021ff"
              hoverTextColor="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
