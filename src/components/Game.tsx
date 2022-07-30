import React, { FC, useState } from "react";
import ScoreTable from "./ScoreTable";
import ScoreTableHeader from "./ScoreTableHeader";
import { PlayerEnum, ScoreUpdateInfo } from "../models/game";
import { IconButton } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import { SCORE_DATA } from "../assets/score-data";
import ScoreTableFooter from "./ScoreTableFooter";
import UpdateScore from "./UpdateScore";
import { selectSetupInfo } from "../store/setup-slice";
import { useAppSelector } from "../store/store";

const Game: FC = () => {
  const [showUpdateScore, setShowUpdateScore] = useState<boolean>(false);
  const navigate = useNavigate();

  const setupInfo = useAppSelector(selectSetupInfo);

  console.log(">>> GAME", setupInfo);

  const getCurrentScore = (player: PlayerEnum): number =>
    SCORE_DATA.filter((s) => s.player === player)
      .map((s) => s.score)
      .reduce((total, score) => total + score, 0);

  const cancelUpdateHandler = () => {
    setShowUpdateScore((prevValue) => !prevValue);
  };
  const updateScoreHandler = (scoreUpdateInfo: ScoreUpdateInfo) => {
    console.log(">>> UPDATE SCORE", scoreUpdateInfo);
    // store.updateScore(scoreUpdateInfo);
    setShowUpdateScore((prevValue) => !prevValue);
  };

  return (
    <div className="flex flex-col m-auto h-screen">
      {/*HEADER: targetScore*/}
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
          />
          <ScoreTableHeader
            player={PlayerEnum.PLAYER_TWO}
            playerName={setupInfo?.playerTwo}
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

      {/*ACTIONS: current run score, fouls, buttons <Rerack>, <Submit Score> and <Score Correction>*/}
      {!showUpdateScore && (
        <ScoreTableFooter
          currentScores={[
            getCurrentScore(PlayerEnum.PLAYER_ONE),
            getCurrentScore(PlayerEnum.PLAYER_TWO),
          ]}
          updateScoreHandler={cancelUpdateHandler}
        />
      )}
      {showUpdateScore && (
        <UpdateScore
          cancelUpdate={cancelUpdateHandler}
          updateScore={updateScoreHandler}
        />
      )}
    </div>
  );
};
export default Game;
