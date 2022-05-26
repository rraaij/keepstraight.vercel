import React from "react";
import { Outlet } from "react-router-dom";
import { Link, Flex, VStack } from "@chakra-ui/react";

const App: React.FC = () => {
  return (
    <React.Fragment>
      <Flex as="nav" h="full" maxW={16} w="full" bg="gray.100">
        <VStack p={6} alignItems="center" w="full">
          <Link href="/setup">Setup</Link>
          <Link href="/game">Game</Link>
        </VStack>
      </Flex>
      <Flex
        as="main"
        h="full"
        flex={1}
        borderRightColor="gray.100"
        borderRightWidth={1}
      >
        <Outlet />
      </Flex>
    </React.Fragment>
  );
};

export default App;
