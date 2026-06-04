import { useEffect } from "react";
import ProjectImage from "./ProjectImage";
import ProjectVideo from "./ProjectVideo";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SourceIcon from "@mui/icons-material/Source";
import ContentButton from "./ContentButton";

import UI from "../images/Slapabot/weaponUI.jpg";
import GameplayPic from "../images/Slapabot/slapabot_gameplay.jpg";
import GameplayPic2 from "../images/Slapabot/slapabot_gameplay2.jpg";
import GameplayVideo from "../images/Slapabot/gameplay.mov";
import { SportsEsports } from "@mui/icons-material";

const contentTextColor = "text-gray-200";
const imageDescriptionColor = "text-gray-400";

export default function Slapabot() {
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <img
        src={GameplayPic}
        className="fixed left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-0"
      />
      <div
        className="w-screen h-screen fixed z-0 z-10"
        style={{ backgroundColor: "rgb(1,1,1,0.4)" }}
      ></div>
      <div className={`flex justify-center p-10 pt-20 ${contentTextColor}`}>
        <div
          className="bg-[rgba(0,0,0,0.3)] z-20 relative p-5 rounded-lg"
          style={{ width: "60%" }}
        >
          <div className="text-sm text-gray-400 pl-5">
            Published on 17th May 2026
          </div>
          <div className="text-5xl text-center p-5 text-white">Slapabot</div>
          <div className="p-5">
            <div className="pb-10 text-justify [text-indent:2rem]">
              <span className="font-bold text-white">Introduction: </span>A
              sci-fi-themed casual endless runner featuring Slapabot, a security
              robot at the Energinum Factory, chasing a thief who has stolen
              valuable Energinum. The game focuses on player reflexes and quick
              decision making.
            </div>
            <ProjectImage
              src={GameplayPic}
              note="Gameplay"
              textColor={imageDescriptionColor}
              width="300px"
            />
            <div className="pb-10 [text-indent:2rem]">
              <span className="font-bold text-white">Design: </span>
              The obstacles are designed to be roughly the same size, allowing
              players to react more easily and consistently. Each object is
              highlighted with a distinct color outline for quick recognition.
              To keep the gameplay accessible for casual players, the road is
              limited to two lanes. The game also features unlockable weapons
              that can be obtained from gacha chests. Each weapon comes with its
              own unique skill, providing different gameplay experiences and
              strategies.
            </div>
            <ProjectImage
              src={GameplayPic2}
              note="Gameplay 2"
              textColor={imageDescriptionColor}
              width="300px"
            />
            <div className="pb-10 [text-indent:2rem]">
              <span className="font-bold text-white">Gameplay: </span>
              Obstacles are highlighted with different outline colors: green for
              breakable objects, yellow for blockable objects, and red for
              unbreakable objects. Using simple swipe controls, players can
              swipe up to slash, swipe down to block, and swipe left or right to
              switch lanes. Player also has the energy bar which wil activate
              weapon skill the filled. The objective is to choose the correct
              action as obstacles approach and survive for as long as possible.
            </div>
            <ProjectImage
              src={UI}
              note="Weapon Inspect"
              textColor={imageDescriptionColor}
              width="300px"
            />
            <div className="pb-10 [text-indent:2rem]">
              <span className="font-bold text-white">Under the hood: </span>
              To optimize performance on mobile platforms, I minimized the use
              of MonoBehaviour components and replaced many of them with
              centralized systems responsible for handling updates and other
              recurring logic. For level design, I developed a ScriptableObject
              workflow that allows game designers to easily create, configure,
              and manage obstacle patterns while keeping the data lightweight
              and maintainable. I also implemented a flexible obstacle spawning
              system that supports pausing, resuming, clearing, and dynamically
              inserting special obstacles into the spawn queue. In addition, I
              designed and developed various core systems, including game flow
              management, weapon management, power up system,..., with a strong
              focus on scalability, maintainability, and performance.
            </div>
            <ProjectVideo
              src={GameplayVideo}
              note="Gameplay demo"
              textColor={imageDescriptionColor}
              width="300px"
            />
          </div>

          <hr />
          <div className="flex justify-center p-5">
            <ContentButton
              label="Play on itch"
              icon={SportsEsports}
              href="https://github.com/duongdang2003/Til-I-Collapse-Build"
              textColor="#62c6df"
              borderColor="#62c6df"
              hoverBgColor="#62c6df"
              hoverTextColor="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
