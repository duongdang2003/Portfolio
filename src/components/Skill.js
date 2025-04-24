export default function Skill() {
	return (
		<div>
			<div className="grid grid-cols-10 gap-2 text-xl">
				{/* engine */}
				<div className="font-bold">Engine</div>
				<div className="col-span-9">Unity</div>

				<div className="font-bold">Langues</div>
				<div className="col-span-9">C#, HTML, CSS, Javascript</div>

				<div className="font-bold">Tools</div>
				<div className="col-span-9">Asprite, Blender, Gimp, GitHub, GitLab</div>
			</div>
		</div>
	);
}
