import { useEffect } from "react";
import ProjectImage from "./ProjectImage";
import ProjectVideo from "./ProjectVideo";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SourceIcon from "@mui/icons-material/Source";

import MainMenu from "../images/BlackHorizon/mainmenu.png";
import Background from "../images/BlackHorizon/mainmenu.png";

import GameplayPic from "../images/BlackHorizon/gameplay.png";
import GameplayPic2 from "../images/BlackHorizon/gameplay2.png";
import GameplayVideo from "../images/BlackHorizon/Gameplay.mp4";
import GameplayVideo2 from "../images/BlackHorizon/Gameplay2.mp4";


export default function BlackHorizon() {
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
                        Published on 1st March 2025
                    </div>
                    <div className="text-5xl text-center p-5">Black Horizon</div>
                    <div className="p-5">
                        <div className="pb-10">
                            My first game using procedural generation to create map 
                        </div>
                        <ProjectImage src={MainMenu} note="Main menu" />
                        <ProjectImage src={GameplayPic} note="Gameplay" />
                        <ProjectImage src={GameplayPic2} note="Armor" />

                    </div>
                    <ProjectVideo src={GameplayVideo} note="Gameplay" />
                    <ProjectVideo src={GameplayVideo2} note="Gameplay 2" />

                    <hr />
                    {/* <div className="flex justify-center p-5">
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
                    </div> */}
                </div>
            </div>
        </div>
    );
}
