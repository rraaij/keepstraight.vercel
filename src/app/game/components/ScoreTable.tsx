import { Score, PlayerEnum } from "@/lib/game.model";
import { FC } from "react";
import { SCORE_DATA } from "../../../../public/assets/score-data";
import { useGameStore } from "@/lib/game.store";
import { Column } from "primereact/column";
import { DataTable } from "primereact/datatable";

const ScoreTable: FC<{ player: PlayerEnum }> = ({ player }) => {
  const scoresForPlayer: Score[] = useGameStore((state) =>
    state.scoreTable.getScoresForPlayer(player)
  );

  const foulTemplate = (score: Score) => {
    return score.foul ? (
      <span className="px-2 inline-flex text-xs leading-5 font-semibold border-round-xl bg-red-100 text-red-800">
        F
      </span>
    ) : (
      <></>
    );
  };

  return (
    <div className="flex flex-col border-x border-blue-200 bg-white w-full">
      <div className="flex flex-col w-full">
        <DataTable
          value={scoresForPlayer}
          size={"small"}
          style={{ width: "100%" }}
          scrollable
          scrollHeight={"calc(100vh - 312px)"}
        >
          <Column
            field="inning"
            header="#"
            align={"right"}
            style={{ width: "auto" }}
          ></Column>
          <Column
            field="score"
            header="S"
            align={"right"}
            style={{ width: "auto" }}
          ></Column>
          <Column
            field="foul"
            body={foulTemplate}
            header="F"
            align={"right"}
            style={{ width: "auto" }}
          ></Column>
          <Column
            field="total"
            header="T"
            align={"right"}
            style={{ width: "auto" }}
          ></Column>
        </DataTable>
      </div>
    </div>
  );
};

export default ScoreTable;
