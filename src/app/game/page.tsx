import React from "react";
import Link from "next/link";
import { PlayerEnum } from "@/models/game.model";
import ScoreTableHeader from "@/app/game/components/ScoreTableHeader";
import ScoreTable from "@/app/game/components/ScoreTable";
import ScoreTableFooter from "@/app/game/components/ScoreTableFooter";
import UpdateScore from "@/app/game/components/UpdateScore";

const Game = () => {
  const showUpdateScore = false;

  return (
    <div className={"flex flex-column h-screen bg-blue-200"}>
      {/*HEADER*/}
      <div className="flex flex-row justify-content-between py-4 px-3">
        <Link href={"/setup"}>To Setup</Link>
        <div className="text-right">
          <p>
            target score: <strong>50</strong>
          </p>
          <p>
            starting player: <strong>{PlayerEnum.PLAYER_TWO}</strong>
          </p>
        </div>
      </div>

      {/*TABLE HEADERS*/}
      <div className="flex flex-row flex-wrap justify-content-between align-items-stretch flex-grow-1">
        <div
          style={{ width: "50%" }}
          className="p-2 bg-white border-x-1 border-blue-200 flex flex-column justify-content-end"
        >
          <ScoreTableHeader
            player={PlayerEnum.PLAYER_ONE}
            playerName={"Shane"}
            hasTurn={PlayerEnum.PLAYER_ONE}
          />
        </div>
        <div
          style={{ width: "50%" }}
          className="p-2 bg-white border-x-1 border-blue-200 flex flex-column justify-content-end"
        >
          <ScoreTableHeader
            player={PlayerEnum.PLAYER_TWO}
            playerName={"Earl"}
            hasTurn={PlayerEnum.PLAYER_ONE}
          />
        </div>
      </div>

      {/*TABLE CONTENTS*/}
      <div className="flex flex-row flex-grow-1 overflow-y-auto bg-white">
        <div
          style={{ width: "50%" }}
          className={"p-2 border-x-1 border-blue-200"}
        >
          <ScoreTable player={PlayerEnum.PLAYER_ONE} />
        </div>
        <div
          style={{ width: "50%" }}
          className={"p-2 border-x-1 border-blue-200"}
        >
          <ScoreTable player={PlayerEnum.PLAYER_TWO} />
        </div>
      </div>

      {/*FOOTER*/}
      <div className={"mt-auto"}>
        {!showUpdateScore && <ScoreTableFooter />}
        {showUpdateScore && <UpdateScore />}
      </div>
    </div>
  );
};

export default Game;
