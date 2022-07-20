import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Game from "./components/Game";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Setup from "./components/Setup";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<App />}>
        <Route path="setup" element={<Setup />} />
        <Route path="game" element={<Game />} />
        {/*<Route path="correction" element={<Correction/>} />*/}
      </Route>
    </Routes>
  </BrowserRouter>
);
