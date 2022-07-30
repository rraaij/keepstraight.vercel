import ReactDOM from "react-dom/client";
import App from "./App";
import "./index.css";
import Game from "./components/Game";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Setup from "./components/Setup";
import { ThemeProvider } from "@material-tailwind/react";
import { Provider } from "react-redux";
import { store } from "./store/store";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <Provider store={store}>
    <ThemeProvider value={{}}>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="setup" element={<Setup />} />
            <Route path="game" element={<Game />} />
          </Route>
        </Routes>
      </BrowserRouter>
    </ThemeProvider>
  </Provider>
);
