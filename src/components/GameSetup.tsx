import React, { SyntheticEvent, useContext, useRef, useState } from "react";

import { GameContext } from "../store/game-context";
import classes from "./GameSetup.module.css";
import { PlayerEnum, Setup } from "../models/game";
import { useNavigate } from "react-router-dom";

const GameSetup: React.FC = () => {
  const gameCtx = useContext(GameContext);
  const navigate = useNavigate();

  const playerOneInputRef = useRef<HTMLInputElement>(null);
  const playerTwoInputRef = useRef<HTMLInputElement>(null);
  const targetScoreInputRef = useRef<HTMLInputElement>(null);
  const [selectedStartingPlayer, setSelectedStartingPlayer] =
    useState<PlayerEnum>(PlayerEnum.PLAYER_ONE);

  const startingPlayerHandler = (event: SyntheticEvent) => {
    setSelectedStartingPlayer(
      () => (event.target as HTMLInputElement).value as PlayerEnum
    );
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
    <React.Fragment>
      <h3>Game Setup</h3>
      <h6 className="mb-2 text-muted">Enter some info to get started!</h6>
      <form onSubmit={submitHandler}>
        <label htmlFor="player-one">Player One</label>
        <input type="text" id="player-one" ref={playerOneInputRef} />
        <label htmlFor="player-two">Player Two</label>
        <input type="text" id="player-two" ref={playerTwoInputRef} />
        <label htmlFor="target-score">Target Score</label>
        <input type="number" id="target-score" ref={targetScoreInputRef} />
        <label htmlFor="starting-player">Starting player</label>
        <div>
          <label>Player One</label>
          <input
            type="radio"
            value={PlayerEnum.PLAYER_ONE}
            checked={selectedStartingPlayer === PlayerEnum.PLAYER_ONE}
            onChange={startingPlayerHandler}
          />
        </div>
        <div>
          <label>Player Two</label>
          <input
            type="radio"
            value={PlayerEnum.PLAYER_TWO}
            checked={selectedStartingPlayer === PlayerEnum.PLAYER_TWO}
            onChange={startingPlayerHandler}
          />
        </div>
        <button color="danger" className={classes.setupButton}>
          Start Game
        </button>
      </form>
    </React.Fragment>
  );
};

export default GameSetup;
