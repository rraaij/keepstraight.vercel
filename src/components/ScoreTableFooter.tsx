import { Button } from "@material-tailwind/react";
import React, { FC } from "react";
import { useAppSelector } from "../store/store";
import { PlayerEnum } from "../models/game.model";
import {
  selectCurrentScoreForPlayer,
  selectGameInfo,
} from "../store/game-slice";

const ScoreTableFooter: FC<{
  showScoreUpdate: () => void;
  rerack: () => void;
}> = ({ showScoreUpdate, rerack }) => {
  const gameInfo = useAppSelector(selectGameInfo);

  const getCurrentScore = (player: PlayerEnum): number =>
    useAppSelector((state) => selectCurrentScoreForPlayer(state, player));

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
        <span className="font-bold text-2xl pl-2">{gameInfo?.possibleRun}</span>
      </p>
      <div className="flex flex-row pt-4">
        <div className="flex-grow px-3">
          <Button
            type="button"
            variant="filled"
            size="lg"
            fullWidth
            onClick={rerack}
          >
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
            onClick={showScoreUpdate}
          >
            update score
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ScoreTableFooter;
