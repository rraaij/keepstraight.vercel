import React from "react";
import { observer } from "mobx-react";
import {
  Box,
  Button,
  Center,
  Container,
  Flex,
  Heading,
  HStack,
  Text,
  VStack,
} from "@chakra-ui/react";
import { PlayerEnum } from "../models/game";
import ScoreTable from "./ScoreTable";
import store from "../store/store";
import { GrCaretNext } from "react-icons/gr";

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
          <ScoreTable
            player={PlayerEnum.PLAYER_ONE}
            playerName={store.setup?.playerOne}
          />
          <ScoreTable
            player={PlayerEnum.PLAYER_TWO}
            playerName={store.setup?.playerTwo}
          />
        </HStack>
      </Container>
      {/* bottom score info and action buttons*/}
      <VStack py={2} w="full" borderTopColor="gray.100" borderTopWidth={1}>
        {/*<p>total score</p>*/}
        <HStack w="full" justifyContent="space-between">
          <Center w="50%">
            <VStack>
              <Text fontSize="lg">score: 44</Text>
              <Button
                type="button"
                variant="outline"
                colorScheme="blue"
                leftIcon={React.createElement(GrCaretNext)}
              >
                RERACK
              </Button>
            </VStack>
          </Center>
          <Center w="50%">
            <VStack>
              <Text fontSize="lg">score: 29</Text>
              <Button
                type="button"
                variant="solid"
                colorScheme="blue"
                leftIcon={React.createElement(GrCaretNext)}
              >
                UPDATE SCORE
              </Button>
            </VStack>
          </Center>
        </HStack>
        {/*<p>action buttons</p>*/}
      </VStack>
    </Flex>
  );
};
export default observer(Game);
