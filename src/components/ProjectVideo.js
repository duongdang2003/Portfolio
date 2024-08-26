export default function ProjectVideo(props) {
	return (
		<div className="w-full flex flex-col justify-center items-center pb-10">
			<div style={{ width: "600px" }}>
				<video style={{ width: "600px" }} controls autoplay>
					<source src={props.src} type="video/mp4" />
				</video>
				<div className="text-center text-gray-600 text-lg p-2 italic">
					{props.note}
				</div>
			</div>
		</div>
	);
}
