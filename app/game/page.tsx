import React from "react";
import ScoreTableHeader from "@/app/game/components/ScoreTableHeader";
import { PlayerEnum, SetupInfo } from "@/models/game.model";
import ScoreTable from "@/app/game/components/ScoreTable";
import ScoreTableFooter from "@/app/game/components/ScoreTableFooter";
import UpdateScore from "@/app/game/components/UpdateScore";

const Game = () => {
  const setupInfo: SetupInfo = {
    playerOne: "Player 1",
    playerTwo: "Player 2",
    startingPlayer: PlayerEnum.PLAYER_ONE,
    targetScore: 50,
  };
  const gameInfo = {
    playerTurn: PlayerEnum.PLAYER_ONE,
  };
  const showUpdateScore = true;

  const switchUpdateHandler = () => console.log("switchUpdateHandler");
  const rerackHandler = () => console.log("rerackHandler");
  const updateScoreHandler = () => console.log("updateScoreHandler");

  return (
    <div className="flex flex-column m-auto h-screen">
      <div className="flex flex-column">
        <div className="flex flex-row bg-blue-200 py-4 justify-content-between px-3">
          {/*<IconButton*/}
          {/*  size="lg"*/}
          {/*  onClick={() => {*/}
          {/*    navigate("/setup", { replace: true });*/}
          {/*  }}*/}
          {/*>*/}
          {/*  <TiArrowBackOutline className="font-bold text-4xl" />*/}
          {/*</IconButton>*/}
          <p>IconButton &gt; navigate to /setup</p>
          <div className="text-left">
            <p>
              target score: <strong>{setupInfo?.targetScore}</strong>
            </p>
            <p>
              starting player: <strong>{setupInfo?.startingPlayer}</strong>
            </p>
          </div>
        </div>
        <div className="flex flex-row border-x-1 border-blue-200">
          <ScoreTableHeader
            player={PlayerEnum.PLAYER_ONE}
            playerName={setupInfo?.playerOne}
            hasTurn={gameInfo.playerTurn}
          />
          <ScoreTableHeader
            player={PlayerEnum.PLAYER_TWO}
            playerName={setupInfo?.playerTwo}
            hasTurn={gameInfo.playerTurn}
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
      {!showUpdateScore && (
        <ScoreTableFooter
          showScoreUpdate={switchUpdateHandler}
          rerack={rerackHandler}
        />
      )}
      {showUpdateScore && (
        <UpdateScore
          cancelUpdate={switchUpdateHandler}
          updateScore={updateScoreHandler}
        />
      )}
    </div>
  );
};

export default Game;
