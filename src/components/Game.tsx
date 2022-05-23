import React from "react";
import { observer } from "mobx-react";
import { Center, Container, Flex, Spacer } from "@chakra-ui/react";
import { PlayerEnum } from "../models/game";
import ScoreTable from "./ScoreTable";
import store from "../store/store";

const Game: React.FC = () => {
  return (
    <Container maxW="container.lg" py={10}>
      <Center>{store.setup?.targetScore}</Center>
      <Flex>
        <Center w="49%">
          <ScoreTable player={PlayerEnum.PLAYER_ONE} playerName={store.setup?.playerOne} />
        </Center>
        <Spacer />
        <Center w="49%">
          <ScoreTable player={PlayerEnum.PLAYER_TWO} playerName={store.setup?.playerTwo} />
        </Center>
      </Flex>
    </Container>
  );
};
export default observer(Game);
