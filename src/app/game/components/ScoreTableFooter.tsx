"use client";

import { FC } from "react";
import { PlayerEnum } from "@/models/game.model";
import { Button } from "primereact/button";

const ScoreTableFooter = () => {
  const getCurrentScore = (player: PlayerEnum): number => {
    return 1;
  };

  return (
    <div className="text-center bg-blue-200 py-2">
      <div className="flex flex-row flex-wrap justify-content-between align-items-stretch flex-grow-1">
        <div
          style={{ width: "50%" }}
          className={"p-2 border-x-1 border-blue-200"}
        >
          <div className="text-right pr-3 font-bold text-2xl">
            <p>{getCurrentScore(PlayerEnum.PLAYER_ONE)}</p>
          </div>
        </div>
        <div
          style={{ width: "50%" }}
          className={"p-2 border-x-1 border-blue-200"}
        >
          <div className="text-right pr-3 font-bold text-2xl">
            <p>{getCurrentScore(PlayerEnum.PLAYER_TWO)}</p>
          </div>
        </div>
      </div>

      <p>
        Possible Run:
        <span className="font-bold text-2xl pl-2">50</span>
      </p>

      <div className="flex flex-row flex-wrap justify-content-between align-items-stretch flex-grow-1">
        <div style={{ width: "50%" }} className={"p-3"}>
          <Button type="button" onClick={() => {}}>
            rerack
          </Button>
        </div>
        <div style={{ width: "50%" }} className={"p-3"}>
          <Button type="button" color="red" onClick={() => {}}>
            update score
          </Button>
        </div>
      </div>
    </div>
  );
};
export default ScoreTableFooter;
