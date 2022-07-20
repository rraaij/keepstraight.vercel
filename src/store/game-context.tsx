import React, { ReactNode, useState } from "react";
import { Game, Score, Setup } from "../models/game";

type GameContextObj = {
  setup: Setup | undefined;
  scores: Score[];
  ballsOnTable: number;
  startGame: (setupInfo: Setup) => void;
};

export const GameContext = React.createContext<GameContextObj>({
  setup: undefined,
  scores: [],
  ballsOnTable: 0,
  startGame: (setupInfo) => {},
});

const GameContextProvider: React.FC<{ children: ReactNode }> = ({
  children,
}) => {
  const [gameSetup, setGameSetup] = useState<Setup>({});
  const [gameScores, setGameScores] = useState<Score[]>([]);
  const [nrOfBalls, setNrOfBalls] = useState<number>(0);

  const startGameHandler = (setupInfo: Setup) => {
    setGameSetup(() => setupInfo);
    setGameScores(() => []);
    setNrOfBalls(() => 15);
  };

  const contextValue: GameContextObj = {
    setup: gameSetup,
    scores: gameScores,
    ballsOnTable: nrOfBalls,
    startGame: startGameHandler,
  };

  return (
    <GameContext.Provider value={contextValue}>{children}</GameContext.Provider>
  );
};

export default GameContextProvider;
