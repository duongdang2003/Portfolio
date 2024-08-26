import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import MiniFantasy from "./components/MiniFantasy";
import TillICollapse from "./components/TilICollapse";
import MrBeeAndMsFla from "./components/MrBeeAndMsFla";

function App() {
	return (
		<BrowserRouter>
			<Routes>
				<Route path="/" index element={<Main />} />
				<Route path="Mini Fantasy" element={<MiniFantasy />} />
				<Route path="Til I Collapse" element={<TillICollapse />} />
				<Route path="Mr Bee And Ms Fla" element={<MrBeeAndMsFla />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
