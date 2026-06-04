import { useState, useEffect } from "react";

export default function InformationFrame(props) {
  return (
    <div className="w-full grid grid-cols-10 gap-2 mb-20">
      <div className="col-span-2 flex flex-col items-center">
        <div
          className="text-3xl text-center font-electronic-highway-sign mb-5"
          style={{ fontFamily: "Space Grotesk" }}
        >
          {props.title}
        </div>
        <img
          src={props.image}
          style={{ width: "250px", imageRendering: "pixelated" }}
        />
      </div>
      <div className="col-span-8 flex flex-col row-span-2">
        <props.content />
      </div>
    </div>
  );
}
