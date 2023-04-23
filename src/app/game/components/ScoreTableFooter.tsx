"use client";

import { FC } from "react";
import { PlayerEnum } from "@/models/game.model";
import { Button } from "primereact/button";
import { useGameStore } from "@/store/game.store";
import { shallow } from "zustand/shallow";

const ScoreTableFooter = () => {
  const getCurrentScore = (player: PlayerEnum): number => {
    // TODO: ophalen uit ScoreTable class.
    return 1;
  };
  const { possibleRun, rerack, showUpdateScore, scoreTable } = useGameStore(
    (state) => ({
      possibleRun: state.possibleRun,
      rerack: state.rerack,
      showUpdateScore: state.showUpdateScore,
      scoreTable: state.scoreTable,
    }),
    shallow
  );

  return (
    <div className="text-center bg-blue-200 py-2">
      <div className="flex flex-row flex-wrap justify-content-between align-items-stretch flex-grow-1">
        <div
          style={{ width: "50%" }}
          className={"p-2 border-x-1 border-blue-200"}
        >
          <div className="text-right pr-3 font-bold text-2xl">
            <p>{scoreTable.getCurrentScore(PlayerEnum.PLAYER_ONE)}</p>
          </div>
        </div>
        <div
          style={{ width: "50%" }}
          className={"p-2 border-x-1 border-blue-200"}
        >
          <div className="text-right pr-3 font-bold text-2xl">
            <p>{scoreTable.getCurrentScore(PlayerEnum.PLAYER_TWO)}</p>
          </div>
        </div>
      </div>

      <p>
        Possible Run:
        <span className="font-bold text-2xl pl-2">{possibleRun}</span>
      </p>

      <div className="flex flex-row flex-wrap justify-content-between align-items-stretch flex-grow-1">
        <div style={{ width: "50%" }} className={"p-3"}>
          <Button type="button" onClick={() => rerack()}>
            rerack
          </Button>
        </div>
        <div style={{ width: "50%" }} className={"p-3"}>
          <Button
            type="button"
            color="red"
            onClick={() => showUpdateScore(true)}
          >
            update score
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ScoreTableFooter;
