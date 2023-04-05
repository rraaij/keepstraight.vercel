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
          hasTurn === player ? "bg-amber-400" : "bg-white"
        }`}
      >
        {player}: {playerName}
      </div>
      <table className="w-full text-xl flex-grow">
        <thead className="bg-grey-50">
          <tr>
            <th className="font-medium text-gray-500 text-center text-sm">T</th>
            <th className="font-medium text-gray-500 text-center text-sm">#</th>
            <th className="font-medium text-gray-500 text-center text-sm">F</th>
            <th className="font-medium text-gray-500 text-right text-sm">S</th>
          </tr>
        </thead>
      </table>
    </div>
  );
};

export default ScoreTableHeader;
