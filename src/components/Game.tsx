import React, { useContext } from "react";
import { GameContext } from "../store/game-context";

const Game: React.FC = () => {
  const gameCtx = useContext(GameContext);

  return (
    <React.Fragment>
      <p>{gameCtx.setup?.playerOne}</p>
      <p>{gameCtx.setup?.playerTwo}</p>
      <p>{gameCtx.setup?.targetScore}</p>
      <p>{gameCtx.setup?.startingPlayer}</p>
      <p>{gameCtx.ballsOnTable}</p>
      <p>{gameCtx.scores.length}</p>
    </React.Fragment>
  );
};
export default Game;
