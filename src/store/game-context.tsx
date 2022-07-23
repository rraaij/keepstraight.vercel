import React, { ReactNode, useState } from "react";
import { Score, SetupInfo } from "../models/game";

type GameContextObj = {
  setup: SetupInfo | undefined;
  scores: Score[];
  ballsOnTable: number;
  startGame: (setupInfo: SetupInfo) => void;
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
  const [gameSetup, setSetupInfo] = useState<SetupInfo>({});
  const [gameScores, setGameScores] = useState<Score[]>([]);
  const [nrOfBalls, setNrOfBalls] = useState<number>(0);

  const startGameHandler = (setupInfo: SetupInfo) => {
    setSetupInfo(() => setupInfo);
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
