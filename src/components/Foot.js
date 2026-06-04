import FacebookIcon from "@mui/icons-material/Facebook";
import PhoneIcon from "@mui/icons-material/Phone";
import MailIcon from "@mui/icons-material/Mail";
import LinkedInIcon from "@mui/icons-material/LinkedIn";
import StorefrontIcon from "@mui/icons-material/Storefront";
import GitHubIcon from "@mui/icons-material/GitHub";

export default function Foot() {
  return (
    <div className="pt-5 flex flex-col justify-center items-center text-gray-100 w-full p-5 bg-gray-900">
      <div
        className="text-4xl mt-1 mb-5"
        style={{ fontFamily: "Space Grotesk" }}
      >
        My social
      </div>
      <div className="flex justify-center ">
        <a
          href="https://github.com/duongdang2003"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center py-2 px-5 bg-[rgb(44_47_62)] rounded-full shadow-xl border mx-2 hover:opacity-80 transition"
        >
          <GitHubIcon sx={{ color: "#d9d9d9", fontSize: "35px" }} />
          <div className="text-xl mx-3 text-[#d9d9d9]">Github</div>
        </a>
        <a
          href="https://duongdang2003.itch.io/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center py-2 px-5 bg-[rgb(44_47_62)] rounded-full shadow-xl border mx-2 hover:opacity-80 transition"
        >
          <StorefrontIcon sx={{ color: "#d9d9d9", fontSize: "35px" }} />
          <div className="text-xl mx-3 text-[#d9d9d9]">Itch.io</div>
        </a>

        <a
          href="https://www.linkedin.com/in/duong-hai-dang-7ba4591a8/"
          target="_blank"
          rel="noopener noreferrer"
          className="flex justify-center items-center py-2 px-5 bg-[rgb(44_47_62)] rounded-full shadow-xl border mx-2 hover:opacity-80 transition"
        >
          <LinkedInIcon sx={{ color: "#d9d9d9", fontSize: "35px" }} />
          <div className="text-xl mx-3 text-[#d9d9d9]">LinkedIn</div>
        </a>
        <div className="flex justify-center items-center py-2 px-5 bg-[rgb(44_47_62)] rounded-full shadow-xl border mx-2">
          <MailIcon sx={{ color: "#d9d9d9", fontSize: "35px" }} />
          <div className="text-xl mx-3">beac0n.devgame@gmail.com</div>
        </div>
      </div>
    </div>
  );
}
