import React from "react";
import { observer } from "mobx-react";
import {Box, Center, Flex, HStack, Spacer} from "@chakra-ui/react";
import { PlayerEnum } from "../models/game";
import ScoreTable from "./ScoreTable";
import store from "../store/store";

const Game: React.FC = () => {
  return (
    <Flex direction="column" py={10} border="1px solid red">
      {/* top info header*/}
      <Center>targetscore: {store.setup?.targetScore}</Center>
      {/* scoretables*/}
      <HStack minH={400} border="1px solid gray">
        <Box w="49%">
          <ScoreTable
            player={PlayerEnum.PLAYER_ONE}
            playerName={store.setup?.playerOne}
          />
        </Box>
        <Spacer />
        <Box w="49%">
          <ScoreTable
            player={PlayerEnum.PLAYER_TWO}
            playerName={store.setup?.playerTwo}
          />
        </Box>
      </HStack>
      {/* bottom score info and action buttons*/}
        <Box h={200} border="1px solid green">
            <p>total score</p>
            <p>action buttons</p>
        </Box>
    </Flex>
  );
};
export default observer(Game);
