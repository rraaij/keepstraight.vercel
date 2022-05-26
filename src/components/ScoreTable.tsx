import React from "react";
import { observer } from "mobx-react";
import { PlayerEnum, Score } from "../models/game";
import {
  Center,
  Table,
  TableContainer,
  Tbody,
  Td,
  Th,
  Thead,
  Tr,
  VStack,
} from "@chakra-ui/react";
import { Scores } from "../scores";

interface ScoreTableProps {
  player: PlayerEnum;
  playerName: string | undefined;
}

const ScoreTable: React.FC<ScoreTableProps> = ({ player, playerName }) => {
  const getTotal = (score: Score): number => {
    return Scores.filter((s) => s.player === player && s.inning <= score.inning)
      .map((s) => s.score)
      .reduce((total, score) => total + score, 0);
  };
  return (
    <VStack>
      <Center>
        {player}: {playerName}
      </Center>
      <TableContainer>
        <Table size="sm" w={{ base: "140px", md: "220px", lg: "260px" }}>
          <Thead>
            <Tr>
              <Th p={0}>T</Th>
              <Th isNumeric p={0}>
                #
              </Th>
              <Th isNumeric p={0}>
                F
              </Th>
              <Th isNumeric p={0}>
                S
              </Th>
            </Tr>
          </Thead>
          <Tbody>
            {Scores.filter((s) => s.player === player).map((score, index) => (
              <Tr key={index}>
                <Td p={0}>{score.inning}</Td>
                <Td isNumeric p={0}>
                  {score.score}
                </Td>
                <Td isNumeric p={0}>
                  {score.foul ? 1 : 0}
                </Td>
                <Td isNumeric p={0}>
                  {getTotal(score)}
                </Td>
              </Tr>
            ))}
          </Tbody>
        </Table>
      </TableContainer>
    </VStack>
  );
};

export default observer(ScoreTable);
