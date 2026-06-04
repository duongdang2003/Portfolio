import { useEffect } from "react";
import ProjectImage from "./ProjectImage";
import ProjectVideo from "./ProjectVideo";
import ContentButton from "./ContentButton";
import VisibilityIcon from "@mui/icons-material/Visibility";

import Device from "../images/TS84/device.jpg";
import Inside from "../images/TS84/inside.png";
import Overview from "../images/TS84/overview.png";
import MobileApp from "../images/TS84/mobileapp.png";
import Demo from "../images/TS84/Demo.mp4";

const contentTextColor = "text-gray-200";
const imageDescriptionColor = "text-gray-400";

export default function TS84() {
  useEffect(() => {
    // window.scrollTo(0, 0);
  }, []);
  return (
    <div>
      <img src={Inside} className="w-screen fixed z-0" />
      <div
        className="w-screen h-screen fixed z-0 z-10"
        style={{ backgroundColor: "rgb(1,1,1,0.2)" }}
      ></div>
      <div className={`flex justify-center p-10 pt-10 ${contentTextColor}`}>
        <div
          className="bg-[rgba(0,0,0,0.05)] z-20 relative p-5 rounded-lg"
          style={{ width: "60%" }}
        >
          <div className="text-sm text-gray-400 pl-5">
            Published on October 7th 2025
          </div>
          <div className="text-5xl text-center p-5 text-white">TS84</div>
          <div className="p-5">
            <div className="pb-10 [text-indent:2rem]">
              <span className="font-bold text-white">Introduction: </span>
              The final thesis and my first VR project ever, TS84 is a VR
              application that focuses on building a safe, flexible, and
              low-cost training environment compared to using real bullets.
              Through a VR headset, soldiers can practice shooting, aiming, and
              simulated combat scenarios within customizable environments. There
              are three main components in TS84:
              <div className="py-3">
                <ul
                  className="list-disc list-inside pl-8"
                  style={{ listStyleType: "circle", textIndent: "0" }}
                >
                  <li>
                    <i>Application:</i> The main component running on the
                    headset that controls and interacts with all other modules.
                    This is where users select and enter their shooting range.
                  </li>
                  <li>
                    <i>Peripheral Devices:</i> A 3D-printed gun and a compact
                    electronic module powered by an ESP32. It communicates with
                    the headset via Bluetooth and uses a solenoid to create a
                    small recoil effect, providing a realistic shooting
                    experience.
                  </li>
                  <li>
                    <i>Mobile Application:</i> Allows the captain to create and
                    customize shooting ranges for training sessions.
                  </li>
                </ul>
              </div>
              <div>
                In this project I working on gun, UI for application and
                peripheral devices.
              </div>
            </div>

            <ProjectImage
              src={Overview}
              note="Overview of TS84"
              textColor={imageDescriptionColor}
              width="500px"
            />
            <div className="pb-10 [text-indent:2rem]">
              <span className="font-bold text-white">Design: </span>
              There are two types of shooting ranges: indoor and practical. In
              the indoor range, soldiers become familiar with the gun, practice
              aiming, and interact with the application. In the practical range,
              soldiers face moving robots in a real mountain environment, where
              obstacles are designed and placed by the captain through the
              mobile app.
            </div>
            <ProjectImage
              src={Inside}
              note="Inhouse shooting range"
              textColor={imageDescriptionColor}
            />
            <ProjectImage
              src={Inside}
              note="Pratical shooting range"
              textColor={imageDescriptionColor}
            />
            <div className="pb-10 [text-indent:2rem]">
              <span className="font-bold text-white">Gameplay: </span>
              To start a practical session, soldiers enter their ID to log in
              and choose the type of shooting range.
              <div className="py-3">
                <ul
                  className="list-disc list-inside pl-8"
                  style={{ listStyleType: "circle", textIndent: "0" }}
                >
                  <li>
                    In the indoor shooting range, there are several modes such
                    as target shooting, moving target shooting, and bubble
                    shooting. Soldiers simply choose a mode, set the time and
                    distance, then press start.
                  </li>
                  <li>
                    In the practical shooting range, soldiers connect to their
                    assigned range using the ID created by the captain on the
                    server. Once connected, they can join and begin training.
                  </li>
                </ul>
              </div>
            </div>

            <ProjectImage
              src={MobileApp}
              note="Pratical shooting range customize app"
              textColor={imageDescriptionColor}
            />
            <ProjectImage
              src={Device}
              note="Peripheral Device"
              textColor={imageDescriptionColor}
            />
            <div className="pb-10 [text-indent:2rem]">
              <span className="font-bold text-white">Under the hood: </span>
              Optimization was the most challenging aspect of this project due
              to the limited hardware power of the Meta Quest 3s and the
              realistic art direction. Therefore, all gun and obstacle models
              were carefully chosen to have as few vertices as possible. Some
              actions, such as pulling and releasing the gun bolt, were
              simulated through code to ensure smooth performance without
              relying on physics. Hit detection on targets uses pixel-based
              detection, meaning each target in the indoor shooting range only
              requires a color mask for scoring, eliminating the need to import
              a full target model with separate circles. Trees in the practical
              shooting range are rendered using GPU instancing and are disabled
              when the player is not looking at them. Lighting is baked to
              minimize real-time light computation and improve performance.
            </div>
            <ProjectVideo
              src={Demo}
              note="Demo gun and indoor shooting range"
              textColor={imageDescriptionColor}
            />
          </div>

          <hr />
          <div className="flex justify-center p-5">
            <ContentButton
              label="Read full report"
              icon={VisibilityIcon}
              href="https://docs.google.com/document/d/1bntC1XEm7shfgNzd6hXKOgIAyAiwKvkl/edit?usp=sharing&ouid=110034551069892308877&rtpof=true&sd=true"
              textColor="#1dad9a"
              borderColor="#1dad9a"
              hoverBgColor="#1dad9a"
              hoverTextColor="white"
            />
          </div>
        </div>
      </div>
    </div>
  );
}
