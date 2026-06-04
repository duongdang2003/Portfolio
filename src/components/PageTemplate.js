// components/ProjectTemplate.jsx
import { useEffect } from "react";
import FileDownloadIcon from "@mui/icons-material/FileDownload";
import SourceIcon from "@mui/icons-material/Source";
import ProjectImage from "./ProjectImage";
import ProjectVideo from "./ProjectVideo";

export default function PageTemplate({
	title,
	date,
	descriptionBlocks,
	images,
	video,
	videoNote,
	downloadLink,
	sourceLink,
}) {
	useEffect(() => {
		window.scrollTo(0, 0);
	}, []);

	return (
		<div>
			<img src={images[0].src} className="w-screen fixed z-0" />
			<div
				className="w-screen h-screen fixed z-10"
				style={{ backgroundColor: "rgb(1,1,1,0.3)" }}
			></div>

			<div className="flex justify-center p-10 pt-20">
				<div
					className="bg-white z-20 relative p-5 rounded-lg"
					style={{ width: "60%" }}
				>
					<div className="text-sm text-gray-400 pl-5">Published on {date}</div>
					<div className="text-5xl text-center p-5">{title}</div>

					<div className="p-5">
						{descriptionBlocks.map((block, i) => (
							<div key={i} className="pb-10">
								{block}
							</div>
						))}

						{images.map((img, i) => (
							<ProjectImage key={i} src={img.src} note={img.note} />
						))}
					</div>

					{video && <ProjectVideo src={video} note={videoNote} />}
					<hr />

					<div className="flex justify-center p-5">
						{downloadLink && (
							<a href={downloadLink} target="_blank" className="px-2">
								<button
									className="inline-flex items-center gap-2 rounded border border-[#1dad9a] px-6 py-2 text-sm font-semibold text-[#1dad9a] transition-all hover:shadow-lg"
								>
									<FileDownloadIcon /> Download Game
								</button>
							</a>
						)}
						{sourceLink && (
							<a href={sourceLink} target="_blank" className="px-2">
								<button
									className="inline-flex items-center gap-2 rounded border border-[#1dad9a] px-6 py-2 text-sm font-semibold text-[#1dad9a] transition-all hover:shadow-lg"
								>
									<SourceIcon /> View Source
								</button>
							</a>
						)}
					</div>
				</div>
			</div>
		</div>
	);
}
