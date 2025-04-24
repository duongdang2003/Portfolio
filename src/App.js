import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import MiniFantasy from "./components/MiniFantasy";
import TillICollapse from "./components/TilICollapse";
import MrBeeAndMsFla from "./components/MrBeeAndMsFla";
import RuneFinder from "./components/RuneFinder";

function App() {
	return (
		<BrowserRouter basename={process.env.PUBLIC_URL}>
			<Routes>
				<Route path="/" index element={<Main />} />
				<Route path="Rune Finder" element={<RuneFinder />} />
				<Route path="Til I Collapse" element={<TillICollapse />} />
				<Route path="Mr Bee And Ms Fla" element={<MrBeeAndMsFla />} />
			</Routes>
		</BrowserRouter>
	);
}

export default App;
