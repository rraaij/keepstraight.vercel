"use client";

import Link from "next/link";
import { PlayerEnum } from "@/models/game.model";
import ScoreTableHeader from "@/app/game/components/ScoreTableHeader";
import ScoreTable from "@/app/game/components/ScoreTable";
import ScoreTableFooter from "@/app/game/components/ScoreTableFooter";
import UpdateScore from "@/app/game/components/UpdateScore";
import { useGameStore } from "@/store/game.store";
import { shallow } from "zustand/shallow";

const Game = () => {
  const { setupInfo, playerAtTable, isUpdateScoreVisible } = useGameStore(
    (state) => ({
      setupInfo: state.setup,
      playerAtTable: state.playerAtTable,
      isUpdateScoreVisible: state.isUpdateScoreVisible,
    }),
    shallow
  );

  return (
    <div className={"flex flex-column h-screen bg-blue-200"}>
      {/*HEADER*/}
      <div className="flex flex-row justify-content-between py-4 px-3">
        <Link href={"/setup"}>To Setup</Link>
        <div className="text-right">
          <p>
            target score: <strong>{setupInfo.targetScore}</strong>
          </p>
          <p>
            starting player:{" "}
            <strong>
              {setupInfo.startingPlayer === PlayerEnum.PLAYER_ONE
                ? setupInfo.playerOne
                : setupInfo.playerTwo}
            </strong>
          </p>
        </div>
      </div>

      {/*TABLE HEADERS*/}
      <div className="flex flex-row flex-wrap justify-content-between align-items-stretch">
        <div
          style={{ width: "50%" }}
          className="p-2 bg-white border-x-1 border-blue-200 flex flex-column justify-content-end"
        >
          <ScoreTableHeader
            player={PlayerEnum.PLAYER_ONE}
            playerName={setupInfo.playerOne}
            hasTurn={playerAtTable}
          />
        </div>
        <div
          style={{ width: "50%" }}
          className="p-2 bg-white border-x-1 border-blue-200 flex flex-column justify-content-end"
        >
          <ScoreTableHeader
            player={PlayerEnum.PLAYER_TWO}
            playerName={setupInfo.playerTwo}
            hasTurn={playerAtTable}
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
        {!isUpdateScoreVisible && <ScoreTableFooter />}
        {isUpdateScoreVisible && <UpdateScore />}
      </div>
    </div>
  );
};

export default Game;
