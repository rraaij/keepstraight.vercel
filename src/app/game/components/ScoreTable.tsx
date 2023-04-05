import { Score, PlayerEnum } from "@/models/game.model";
import { FC } from "react";
import { SCORE_DATA } from "../../../../public/assets/score-data";

const ScoreTable: FC<{ player: PlayerEnum }> = ({ player }) => {
  const scoresForPlayer: Score[] = SCORE_DATA.filter(
    (s) => s.player === player
  );

  return (
    <div className="flex flex-col px-2 border-x border-blue-200 bg-white">
      <div className="flex flex-col">
        <table className="w-full text-xl flex-grow overflow-scroll">
          <tbody>
            {scoresForPlayer.map((score, index) => (
              <tr key={index}>
                <td className="px-2 text-right text-sm">{score.inning}</td>
                <td className="px-2 text-right text-sm">{score.score}</td>
                <td className="px-2 text-center">
                  {score.foul && (
                    <span className="px-2 inline-flex text-xs leading-5 font-semibold rounded-full bg-red-100 text-red-800">
                      Foul
                    </span>
                  )}
                </td>
                <td className="px-2 text-right text-sm">{score.total}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default ScoreTable;
