import Body from "../components/Body";
import Foot from "../components/Foot";
import Head from "../components/Head";
import "../index.css";

export default function Main() {
  return (
    <div className="h-screen flex flex-col items-center font-roboto bg-gray-800">
      <Head />
      <Body />
      <Foot />
    </div>
  );
}
