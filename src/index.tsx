import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GameSetup from "./components/GameSetup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import { ChakraProvider, Container } from "@chakra-ui/react";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <Container as="nav" minW="container.lg" h="full">
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="setup" element={<GameSetup />} />
            <Route path="game" element={<Game />} />
            {/*<Route path="correction" element={<Correction/>} />*/}
          </Route>
        </Routes>
      </Container>
    </BrowserRouter>
  </ChakraProvider>
);
