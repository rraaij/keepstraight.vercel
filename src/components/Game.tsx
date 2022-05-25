import React from "react";
import { observer } from "mobx-react";
import {
  Box,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  VStack,
} from "@chakra-ui/react";
import { PlayerEnum } from "../models/game";
import ScoreTable from "./ScoreTable";
import store from "../store/store";

const Game: React.FC = () => {
  return (
    <Flex w="full" h="full" flexDirection="column">
      {/* top info header*/}
      <Box borderBottomColor="gray.100" borderBottomWidth={1}>
        <Center bg="gray.100" w="full">
          <Heading>Keepstraight</Heading>
        </Center>
        <Center py={4}>targetscore: {store.setup?.targetScore}</Center>
      </Box>
      {/* scoretables*/}
      <Container flex={1} overflowY="auto">
        <HStack justifyContent="space-between">
          {/*<Box border="1px solid gray" overflowY="auto">*/}
          <ScoreTable
            player={PlayerEnum.PLAYER_ONE}
            playerName={store.setup?.playerOne}
          />
          {/*</Box>*/}
          {/*<Box border="1px solid gray" overflowY="auto">*/}
          <ScoreTable
            player={PlayerEnum.PLAYER_TWO}
            playerName={store.setup?.playerTwo}
          />
          {/*</Box>*/}
        </HStack>
      </Container>
      {/* bottom score info and action buttons*/}
      <VStack py={2} borderTopColor="gray.100" borderTopWidth={1}>
        <p>total score</p>
        <p>action buttons</p>
      </VStack>
    </Flex>
  );
};
export default observer(Game);
