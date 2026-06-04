import MyLife from "../images/mylife.gif";

export default function Head() {
  return (
    <div
      className="bg-[rgb(24_30_44)] flex justify-center text-white"
      style={{ fontFamily: "Space Grotesk" }}
    >
      <div className="lg h-screen bg-[rgb(24_30_44)]" style={{ width: "80%" }}>
        <div className="grid grid-cols-5 gap-2 h-screen">
          <div className="col-span-3 flex flex-col justify-center items-center h-full">
            <div className="w-full text-5xl py-10 text-left">Hello!</div>
            <div className="text-4xl py-10">
              I'm <span className="font-bold">Dang</span>, a guy passionate
              about game design and development.
            </div>
          </div>
          <div className="col-span-2 flex justify-center items-center">
            <img
              src={MyLife}
              style={{ width: "400px", imageRendering: "pixelated" }}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
