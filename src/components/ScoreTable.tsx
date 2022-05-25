import React from "react";
import { observer } from "mobx-react";
import { PlayerEnum } from "../models/game";
import { Box, Flex, Heading } from "@chakra-ui/react";

interface ScoreTableProps {
  player: PlayerEnum;
  playerName: string | undefined;
}

const ScoreTable: React.FC<ScoreTableProps> = ({ player, playerName }) => {
  return (
    <Flex bg="gray.100" grow={0} shrink={0} basis="100%" h="400px">
      <Heading fontSize="xl">
        {player} : {playerName}{" "}
      </Heading>
    </Flex>
  );
};

export default observer(ScoreTable);
