import React from "react";
import { PlayerEnum } from "@/models/game.model";
import ScoreTableHeader from "@/app/game/components/ScoreTableHeader";
import ScoreTable from "@/app/game/components/ScoreTable";
import ScoreTableFooter from "@/app/game/components/ScoreTableFooter";
import UpdateScore from "@/app/game/components/UpdateScore";
import Link from "next/link";

const Game = () => {
  const showUpdateScore = false;
  return (
    <div>
      <div className="flex flex-column m-auto h-screen">
        <div className="flex flex-column">
          <div className="flex flex-row bg-blue-200 py-4 justify-content-between px-3">
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
          <div className="flex flex-row border-x-1 border-blue-200">
            <ScoreTableHeader
              player={PlayerEnum.PLAYER_ONE}
              playerName={"Shane"}
              hasTurn={PlayerEnum.PLAYER_ONE}
            />
            <ScoreTableHeader
              player={PlayerEnum.PLAYER_TWO}
              playerName={"Earl"}
              hasTurn={PlayerEnum.PLAYER_ONE}
            />
          </div>
        </div>
        <div className="flex flex-row flex-grow-0 overflow-y-auto bg-gray-200 border-x-1 border-blue-200">
          <div className="flex-grow max-w-[50%]">
            {/*LEFT TABLE: player #1 name, scoretable*/}
            <ScoreTable player={PlayerEnum.PLAYER_ONE} />
          </div>
          <div className="flex-grow">
            {/*RIGHT TABLE: player #2 name, scoretable*/}
            <ScoreTable player={PlayerEnum.PLAYER_TWO} />
          </div>
        </div>
        {!showUpdateScore && <ScoreTableFooter />}
        {showUpdateScore && <UpdateScore />}
      </div>
    </div>
  );
};

export default Game;
