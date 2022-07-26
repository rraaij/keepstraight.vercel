import React, { FC } from "react";
import { observer } from "mobx-react";
import store from "../store/store";
import ScoreTable from "./ScoreTable";
import ScoreTableHeader from "./ScoreTableHeader";
import { PlayerEnum } from "../models/game";
import { Button, IconButton } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";
import { SCORE_DATA } from "../assets/score-data";

const Game: FC = () => {
  const navigate = useNavigate();

  const getCurrentScore = (player: PlayerEnum): number =>
    SCORE_DATA.filter((s) => s.player === player)
      .map((s) => s.score)
      .reduce((total, score) => total + score, 0);

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
              target score: <strong>{store.setup?.targetScore}</strong>
            </p>
            <p>
              starting player: <strong>{store.setup?.startingPlayer}</strong>
            </p>
          </div>
        </div>
        <div className="flex flex-row border-x border-blue-200">
          <ScoreTableHeader
            player={PlayerEnum.PLAYER_ONE}
            playerName={store.setup?.playerOne}
          />
          <ScoreTableHeader
            player={PlayerEnum.PLAYER_TWO}
            playerName={store.setup?.playerTwo}
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
      <div className="text-center bg-blue-200 py-4">
        {/*ACTIONS: current run score, fouls, buttons <Rerack>, <Submit Score> and <Score Correction>*/}
        <div className="flex flex-row">
          <div className="flex-grow text-right pr-3 font-bold text-2xl">
            <p>{getCurrentScore(PlayerEnum.PLAYER_ONE)}</p>
            <p></p>
          </div>
          <div className="flex-grow text-right pr-3 font-bold text-2xl">
            <p>{getCurrentScore(PlayerEnum.PLAYER_TWO)}</p>
          </div>
        </div>
        <p>
          #Balls on the table:
          <span className="font-bold text-2xl pl-2">{store.ballsOnTable}</span>
        </p>
        <div className="flex flex-row pt-4">
          <div className="flex-grow px-3">
            <Button type="button" variant="filled" size="lg" fullWidth>
              <span className="font-bold">correction</span>
            </Button>
          </div>
          <div className="flex-grow px-3">
            <Button
              type="button"
              variant="filled"
              size="lg"
              fullWidth
              color="red"
            >
              update score
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
};
export default observer(Game);
