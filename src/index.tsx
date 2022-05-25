import ReactDOM from "react-dom/client";
import App from "./App";
import GameSetup from "./components/GameSetup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import { ChakraProvider, HStack } from "@chakra-ui/react";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <BrowserRouter>
      <HStack h="100vh" spacing={0}>
        <Routes>
          <Route path="/" element={<App />}>
            <Route path="setup" element={<GameSetup />} />
            <Route path="game" element={<Game />} />
            {/*<Route path="correction" element={<Correction/>} />*/}
          </Route>
        </Routes>
      </HStack>
    </BrowserRouter>
  </ChakraProvider>
);
