import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faGamepad } from "@fortawesome/free-solid-svg-icons";
import ExtensionOutlinedIcon from "@mui/icons-material/ExtensionOutlined";
import ExtensionIcon from "@mui/icons-material/Extension";
import SportsEsportsIcon from "@mui/icons-material/SportsEsports";
import CodeIcon from "@mui/icons-material/Code";
import Person2Icon from "@mui/icons-material/Person2";
import { grey } from "@mui/material/colors";
import { useNavigate } from "react-router-dom";

export default function ProjectCard(props) {
	const navigate = useNavigate();
	return (
		<div>
			<div class="block rounded-lg bg-white shadow-xl h-full">
				<div
					class="relative overflow-hidden bg-cover bg-no-repeat"
					data-te-ripple-init
					data-te-ripple-color="light"
				>
					<img class="rounded-lg w-full" src={props.image} alt="" />
					<div>
						<div
							class="absolute bottom-0 left-0 right-0 top-0 h-full w-full overflow-hidden bg-[hsla(0,0%,98%,0.15)] bg-fixed opacity-0 transition duration-300 ease-in-out hover:opacity-100"
							onClick={() => navigate(props.name)}
						></div>
					</div>
				</div>

				<div class="p-5">
					<div class="flex flex-col">
						<div className="text-xs text-gray-400">29th July 2024</div>
						<h5 class="mb-2 text-2xl font-bold leading-tight mt-3">
							{props.name}
						</h5>
					</div>
					<div className="grid grid-cols-2 gap-2">
						<div>
							<div className="flex items-center">
								<ExtensionIcon sx={{ color: grey[700] }} />
								<p className="pl-1 pr-2 text-lg">Genre:</p>
								<p>{props.genre}</p>
							</div>
						</div>
						<div>
							<div className="flex items-center">
								<SportsEsportsIcon sx={{ color: grey[700] }} />
								<p className="pl-1 pr-2 text-lg">Platform:</p>
								<p>{props.platform}</p>
							</div>
						</div>
						<div>
							<div className="flex items-center">
								<CodeIcon sx={{ color: grey[700] }} />
								<p className="pl-1 pr-2 text-lg">Technology:</p>
								<p>{props.technology}</p>
							</div>
						</div>
						<div>
							<div className="flex items-center">
								<Person2Icon sx={{ color: grey[700] }} />
								<p className="pl-1 pr-2 text-lg">Member:</p>
								<p>{props.member}</p>
							</div>
						</div>
					</div>
					<div className="border-t my-4"></div>
					<p class="mb-4 text-base">{props.shortDescription}</p>
				</div>
			</div>
		</div>
	);
}
