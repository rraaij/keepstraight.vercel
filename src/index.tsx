import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GameSetup from "./components/GameSetup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./components/Game";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="setup" element={<GameSetup />} />
        <Route path="game" element={<Game />} />
        {/*<Route path="correction" element={<Correction/>} />*/}
      </Route>
    </Routes>
  </BrowserRouter>
);
