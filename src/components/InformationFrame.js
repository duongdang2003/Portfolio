import { useState, useEffect } from "react";

export default function InformationFrame(props) {
	// const [index, setIndex] = useState(0);
	// const listLength = props.imageList.length;
	// useEffect(() => {
	// 	const animation = setInterval(() => {
	// 		setIndex((prevIndex) => (prevIndex + 1) % listLength);
	// 	}, 300);

	// 	return () => clearInterval(animation);
	// }, [listLength]);
	return (
		<div className="w-full grid grid-cols-10 gap-2 mb-20">
			<div className="col-span-2 flex flex-col items-center">
				<div className="text-3xl text-center font-electronic-highway-sign mb-5">
					{props.title}
				</div>
				<img
					src={props.image}
					style={{ width: "150px", imageRendering: "pixelated" }}
				/>
			</div>
			<div className="col-span-8 flex flex-col row-span-2">
				<props.content />
			</div>
		</div>
	);
}
