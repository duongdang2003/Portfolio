import logo from "./logo.svg";
import "./App.css";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Main from "./pages/Main";
import TillICollapse from "./components/TilICollapse";
import Grass from "./components/Grass";
import RuneFinder from "./components/RuneFinder";
import BlackHorizon from "./components/BlackHorizon";
import TS84 from "./components/TS84";
import Slapabot from "./components/Slapabot";

function App() {
  return (
    <BrowserRouter basename={process.env.PUBLIC_URL}>
      <Routes>
        <Route path="/" index element={<Main />} />
        <Route path="Rune Finder" element={<RuneFinder />} />
        <Route path="Til I Collapse" element={<TillICollapse />} />
        <Route path="Grass" element={<Grass />} />
        <Route path="Black Horizon" element={<BlackHorizon />} />
        <Route path="TS84" element={<TS84 />} />
        <Route path="Slapabot" element={<Slapabot />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
