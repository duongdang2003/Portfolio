import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
export default function Foot() {
	return (
		<div className="mt-20 flex flex-col justify-center items-center bg-gray-700 text-gray-100 w-full p-5">
			<div className="text-4xl ">Contact me</div>
			<div className="flex">
				<div className="flex justify-center items-center p-5">
					<MailIcon sx={{ color: "#f0e3af", fontSize: "35px" }} />
					<div className="text-xl mx-2">duonghaidang01012003@gmail.com</div>
				</div>
				<div className="flex justify-center items-center p-5">
					<PhoneIcon sx={{ color: "#d9d9d9", fontSize: "35px" }} />
					<div className="text-xl mx-2">0765079531</div>
				</div>
			</div>
		</div>
	);
}
