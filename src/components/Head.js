import Programmer from "../images/programmer.png";
import MyLife from "../images/mylife.png";

export default function Head() {
	return (
		<div className="lg h-screen" style={{ width: "80%" }}>
			<div className="grid grid-cols-5 gap-2 h-screen">
				<div className="col-span-3 flex flex-col justify-center items-center h-full">
					<div className="w-full text-5xl py-10 text-left">Hello!</div>
					<div className="text-4xl py-10">
						I'm <span className="font-bold">Dang</span>, a student who is
						passionate about games and loves bringing innovation and creativity
						into game design and development.
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
	);
}
