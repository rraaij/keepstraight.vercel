import React, { SyntheticEvent, useContext, useRef, useState } from "react";

import { GameContext } from "../store/game-context";
import { PlayerEnum, Setup } from "../models/game";
import { useNavigate } from "react-router-dom";
import {
  Button,
  Container,
  FormControl,
  FormLabel,
  Heading,
  HStack,
  Input,
  Radio,
  RadioGroup,
  VStack,
} from "@chakra-ui/react";
import { GrWaypoint } from "react-icons/gr";

const GameSetup: React.FC = () => {
  const gameCtx = useContext(GameContext);
  const navigate = useNavigate();

  const playerOneInputRef = useRef<HTMLInputElement>(null);
  const playerTwoInputRef = useRef<HTMLInputElement>(null);
  const targetScoreInputRef = useRef<HTMLInputElement>(null);
  const [selectedStartingPlayer, setSelectedStartingPlayer] =
    useState<PlayerEnum>(PlayerEnum.PLAYER_ONE);

  const startingPlayerHandler = (value: string) => {
    setSelectedStartingPlayer(() => value as PlayerEnum);
  };

  const submitHandler = (event: React.FormEvent) => {
    event.preventDefault();

    const setupInfo: Setup = {
      playerOne: playerOneInputRef.current!.value,
      playerTwo: playerTwoInputRef.current!.value,
      targetScore: parseInt(targetScoreInputRef.current!.value),
      startingPlayer: selectedStartingPlayer,
    };
    gameCtx.startGame(setupInfo);
    navigate("/game", { replace: true });
  };

  return (
    <Container maxW="container.md" py={10}>
      <Heading fontSize="5xl">Game Setup</Heading>
      <form onSubmit={submitHandler}>
        <VStack spacing={4} align="flex-start">
          <FormControl>
            <FormLabel htmlFor="player-one">Player One</FormLabel>
            <Input type="text" id="player-one" ref={playerOneInputRef} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="player-two">Player Two</FormLabel>
            <Input type="text" id="player-two" ref={playerTwoInputRef} />
          </FormControl>
          <FormControl>
            <FormLabel htmlFor="target-score">Target Score</FormLabel>
            <Input type="number" id="target-score" ref={targetScoreInputRef} />
          </FormControl>
          <FormControl as="fieldset">
            <FormLabel htmlFor="starting-player">Starting player</FormLabel>
            <RadioGroup
              defaultValue={PlayerEnum.PLAYER_ONE}
              onChange={startingPlayerHandler}
            >
              <HStack spacing="24px">
                <Radio value={PlayerEnum.PLAYER_ONE}>Player One</Radio>
                <Radio value={PlayerEnum.PLAYER_TWO}>Player Two</Radio>
              </HStack>
            </RadioGroup>
          </FormControl>
          <Button
            variant="outline"
            type="submit"
            rounded="full"
            rightIcon={React.createElement(GrWaypoint)}
          >
            Start Game
          </Button>
        </VStack>
      </form>
    </Container>
  );
};

export default GameSetup;
