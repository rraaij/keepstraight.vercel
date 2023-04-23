import { FC } from "react";
import { PlayerEnum } from "@/models/game.model";

const ScoreTableHeader: FC<{
  player: PlayerEnum;
  playerName: string | undefined;
  hasTurn: PlayerEnum;
}> = ({ player, playerName, hasTurn }) => {
  return (
    <div className="flex-grow px-2 pt-2">
      <div
        className={`text-center text-2xl font-extrabold p-2 ${
          hasTurn === player ? "bg-yellow-200" : "bg-white"
        }`}
      >
        {playerName}
      </div>
    </div>
  );
};

export default ScoreTableHeader;
