export default function ProjectImage(props) {
	return (
		<div className="w-full flex flex-col justify-center items-center pb-10">
			<div style={{ width: "600px" }}>
				<img className="w-full" src={props.src} />
				<div className="text-center text-gray-600 text-lg p-2 italic">
					{props.note}
				</div>
			</div>
		</div>
	);
}
