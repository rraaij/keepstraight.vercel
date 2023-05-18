"use client";

import { FC } from "react";
import { PlayerEnum } from "@/lib/game.model";
import { shallow } from "zustand/shallow";
import { useGameStore } from "@/lib/game.store";

const ScoreTableHeader: FC<{
  player: PlayerEnum;
}> = ({ player }) => {
  const { setupInfo, playerAtTable } = useGameStore(
    (state) => ({
      setupInfo: state.setup,
      playerAtTable: state.playerAtTable,
    }),
    shallow
  );

  return (
    <div className="flex-grow px-2 pt-2">
      <div
        className={`text-center text-2xl font-extrabold p-2 ${
          playerAtTable === player ? "bg-yellow-200" : "bg-white"
        }`}
      >
        {player === PlayerEnum.PLAYER_ONE
          ? setupInfo.playerOne
          : setupInfo.playerTwo}
      </div>
    </div>
  );
};

export default ScoreTableHeader;
