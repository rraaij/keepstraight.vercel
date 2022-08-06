import { Button } from "@material-tailwind/react";
import React, { FC, useState } from "react";
import { selectSetupInfo } from "../store/setup-slice";
import { useAppSelector } from "../store/store";
import UpdateScore from "./UpdateScore";
import { PlayerEnum } from "../models/game.model";
import { selectCurrentScoreForPlayer } from "../store/game-slice";

// ACTIONS: current run score, fouls, buttons <Rerack>, <Submit Score> and <Score Correction>
const ScoreTableFooter: FC = () => {
  const [showUpdateScore, setShowUpdateScore] = useState<boolean>(false);

  const setupInfo = useAppSelector(selectSetupInfo);

  const getCurrentScore = (player: PlayerEnum): number =>
    useAppSelector((state) => selectCurrentScoreForPlayer(state, player));

  const cancelUpdateHandler = () => {
    setShowUpdateScore((prevValue) => !prevValue);
  };
  const updateScoreHandler = () => {
    // console.log(">>> UPDATE SCORE", scoreUpdateInfo);
    // store.updateScore(scoreUpdateInfo);
    setShowUpdateScore((prevValue) => !prevValue);
  };

  if (showUpdateScore) {
    return (
      <UpdateScore
        cancelUpdate={cancelUpdateHandler}
        updateScore={updateScoreHandler}
      />
    );
  }

  return (
    <div className="text-center bg-blue-200 py-4">
      <div className="flex flex-row">
        <div className="flex-grow text-right pr-3 font-bold text-2xl">
          <p>{getCurrentScore(PlayerEnum.PLAYER_ONE)}</p>
          <p></p>
        </div>
        <div className="flex-grow text-right pr-3 font-bold text-2xl">
          <p>{getCurrentScore(PlayerEnum.PLAYER_TWO)}</p>
        </div>
      </div>
      <p>
        Possible Run:
        <span className="font-bold text-2xl pl-2">
          {setupInfo?.targetScore}
        </span>
      </p>
      <div className="flex flex-row pt-4">
        <div className="flex-grow px-3">
          <Button type="button" variant="filled" size="lg" fullWidth>
            rerack
          </Button>
        </div>
        <div className="flex-grow px-3">
          <Button
            type="button"
            variant="filled"
            size="lg"
            fullWidth
            color="red"
            onClick={updateScoreHandler}
          >
            update score
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ScoreTableFooter;
