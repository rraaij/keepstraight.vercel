import { Score, PlayerEnum } from "@/models/game.model";
import { FC } from "react";

const ScoreTable: FC<{ player: PlayerEnum }> = ({ player }) => {
  const scoresForPlayer: Score[] = [];

  return (
    <div className="flex flex-col px-2 border-x border-blue-200">
      <div className="flex flex-col">
        <table className="w-full text-xl flex-grow">
          <tbody className="bg-white">
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
                <td className="px-1 text-right">{score.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoreTable;
