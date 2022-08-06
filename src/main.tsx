import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Game from "./pages/Game";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Setup from "./pages/Setup";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  /** todo: conditional default route: Game if game is in progress, else Setup.
   * (using state and Redux? see example: https://stackoverflow.com/questions/73254978/how-can-i-conditionally-set-default-route-in-react-router-dom-v6
   */
  <Provider store={store}>
    <ThemeProvider value={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route index element={<Setup />} /> // default route
            <Route path="setup" element={<Setup />} />
            <Route path="game" element={<Game />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
