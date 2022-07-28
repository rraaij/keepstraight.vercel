import React from "react";
import { observer } from "mobx-react";
import { PlayerEnum, Score } from "../models/game";
import { SCORE_DATA } from "../assets/score-data";

const ScoreTable: React.FC<{ player: PlayerEnum }> = ({ player }) => {
  const getTotal = (score: Score): number => {
    return SCORE_DATA.filter(
      (s) => s.player === player && s.inning <= score.inning
    )
      .map((s) => s.score)
      .reduce((total, score) => total + score, 0);
  };
  return (
    <div className="flex flex-col px-2 border-x border-blue-200">
      <div className="flex flex-col">
        <table className="w-full text-xl flex-grow">
          <tbody className="bg-white h-40">
            {SCORE_DATA.filter((s) => s.player === player).map(
              (score, index) => (
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
                  <td className="px-1 text-right">{getTotal(score)}</td>
                </tr>
              )
            )}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default observer(ScoreTable);
