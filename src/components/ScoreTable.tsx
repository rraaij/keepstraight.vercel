import React from "react";
import { PlayerEnum } from "../models/game.model";
import { useAppSelector } from "../store/store";
import {
  selectScoresForPlayer,
  selectTotalForPlayerAndInning,
} from "../store/game-slice";

const ScoreTable: React.FC<{ player: PlayerEnum }> = ({ player }) => {
  const scoresForPlayer = useAppSelector((state) =>
    selectScoresForPlayer(state, player)
  );
  const getTotal = (inning: number): number =>
    useAppSelector((state) =>
      selectTotalForPlayerAndInning(state, player, inning)
    );

  return (
    <div className="flex flex-col px-2 border-x border-blue-200">
      <div className="flex flex-col">
        <table className="w-full text-xl flex-grow">
          <tbody className="bg-white h-40">
            {scoresForPlayer.map((score, index) => (
              <tr key={index}>
                <td className="w-12 px-1 text-right">{score.inning}</td>
                <td className="px-1 text-right">{score.score}</td>
                <td className="px-1 text-center">
                  {score.foul && (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Foul
                    </span>
                  )}
                </td>
                <td className="px-1 text-right">{getTotal(score.inning)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoreTable;
