import React, { FC, useState } from "react";
import ScoreTable from "../components/ScoreTable";
import ScoreTableHeader from "../components/ScoreTableHeader";
import { PlayerEnum, ScoreUpdateInfo } from "../models/game.model";
import { IconButton } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import ScoreTableFooter from "../components/ScoreTableFooter";
import UpdateScore from "../components/UpdateScore";
import { selectSetupInfo } from "../store/setup-slice";
import { useAppDispatch, useAppSelector } from "../store/store";
import { rerack, selectGameInfo, updateScore } from "../store/game-slice";

const Game: FC = () => {
  const [showUpdateScore, setShowUpdateScore] = useState<boolean>(false);
  const dispatch = useAppDispatch();
  const navigate = useNavigate();
  const setupInfo = useAppSelector(selectSetupInfo);
  const gameInfo = useAppSelector(selectGameInfo);

  const rerackHandler = () => dispatch(rerack());
  const switchUpdateHandler = () =>
    setShowUpdateScore((prevValue) => !prevValue);
  const updateScoreHandler = (
    info:
      | ScoreUpdateInfo
      | {
          ballsOnTable: string;
          endedInFoul: string;
        }
  ) => {
    dispatch(
      updateScore({
        ballsOnTable:
          typeof info.ballsOnTable === "string"
            ? parseInt(info.ballsOnTable, 10)
            : info.ballsOnTable,
        endedInFoul: info.endedInFoul === "true",
      })
    );
    switchUpdateHandler();
  };

  return (
    <div className="flex flex-col m-auto h-screen">
      <div className="flex flex-col">
        <div className="flex flex-row bg-blue-200 py-4 justify-between px-3">
          <IconButton
            size="lg"
            onClick={() => {
              navigate("/setup", { replace: true });
            }}
          >
            <TiArrowBackOutline className="font-bold text-4xl" />
          </IconButton>
          <div className="text-left">
            <p>
              target score: <strong>{setupInfo?.targetScore}</strong>
            </p>
            <p>
              starting player: <strong>{setupInfo?.startingPlayer}</strong>
            </p>
          </div>
        </div>
        <div className="flex flex-row border-x border-blue-200">
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
      <div className="flex flex-row flex-grow overflow-y-auto bg-gray-200 border-x border-blue-200">
        <div className="flex-grow">
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
