import React from "react";
import Link from "next/link";
import { PlayerEnum } from "@/models/game.model";
import ScoreTableHeader from "@/app/game/components/ScoreTableHeader";
import ScoreTable from "@/app/game/components/ScoreTable";
import ScoreTableFooter from "@/app/game/components/ScoreTableFooter";
import UpdateScore from "@/app/game/components/UpdateScore";

const Game2 = () => {
  const showUpdateScore = true;

  return (
    <div className={"bg-gray-200 flex flex-column h-screen"}>
      <div className="flex flex-row justify-content-between bg-blue-200 py-4 px-3">
        <Link href={"/setup"}>To Setup</Link>
        <div className="text-left">
          <p>
            target score: <strong>50</strong>
          </p>
          <p>
            starting player: <strong>{PlayerEnum.PLAYER_TWO}</strong>
          </p>
        </div>
      </div>
      <div
        className={
          "flex flex-row flex-wrap justify-content-between align-items-stretch flex-grow-1"
        }
      >
        <div
          style={{ width: "50%" }}
          className={"p-3 bg-white bg-gray-200 border-x-1 border-blue-200"}
        >
          {/*LEFT TABLE: player #1 name, scoretable*/}
          <ScoreTableHeader
            player={PlayerEnum.PLAYER_ONE}
            playerName={"Shane"}
            hasTurn={PlayerEnum.PLAYER_ONE}
          />
          <ScoreTable player={PlayerEnum.PLAYER_ONE} />
        </div>
        <div
          style={{ width: "50%" }}
          className={"p-3 bg-white bg-gray-200 border-x-1 border-blue-200"}
        >
          {/*RIGHT TABLE: player #2 name, scoretable*/}
          <ScoreTableHeader
            player={PlayerEnum.PLAYER_TWO}
            playerName={"Earl"}
            hasTurn={PlayerEnum.PLAYER_ONE}
          />
          <ScoreTable player={PlayerEnum.PLAYER_TWO} />
        </div>
      </div>
      <div className={"mt-auto"}>
        {!showUpdateScore && <ScoreTableFooter />}
        {showUpdateScore && <UpdateScore />}
      </div>
    </div>
  );
};

export default Game2;
