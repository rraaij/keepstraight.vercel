import React from "react";
import { Outlet } from "react-router-dom";
import { Link, Box, Center, Flex, Heading, VStack } from "@chakra-ui/react";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Center bg="gray.200">
        <Heading>Keepstraight</Heading>
      </Center>
      <Flex direction="row">
        <Box bg="gray.200" w="200px">
          <VStack>
            <Link href="/setup">Setup</Link>
            <Link href="/game">Game</Link>
          </VStack>
        </Box>
        <Box flex="1">
          <Outlet />
        </Box>
      </Flex>
    </React.Fragment>
  );
};

export default App;
