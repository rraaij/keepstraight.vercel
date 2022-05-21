import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import GameSetup from "./components/GameSetup";
import { BrowserRouter, Route, Routes } from "react-router-dom";
import Game from "./components/Game";
import { Box, ChakraProvider, Flex, VStack } from "@chakra-ui/react";
import theme from "./theme";

ReactDOM.createRoot(document.getElementById("root") as HTMLElement).render(
  <ChakraProvider theme={theme}>
    <Flex bg="gray.100" align="center" justify="center">
      <Box bg="white" p={6} rounded="md" w={96}>
        <BrowserRouter>
          <VStack as="nav">
            <Routes>
              <Route path="/" element={<App />}>
                <Route path="setup" element={<GameSetup />} />
                <Route path="game" element={<Game />} />
                {/*<Route path="correction" element={<Correction/>} />*/}
              </Route>
            </Routes>
          </VStack>
        </BrowserRouter>
      </Box>
    </Flex>
  </ChakraProvider>
);
