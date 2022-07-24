import { FC } from "react";
import { observer } from "mobx-react";
import store from "../store/store";
import ScoreTable from "./ScoreTable";
import { PlayerEnum } from "../models/game";
import { IconButton } from "@material-tailwind/react";
import { useNavigate } from "react-router-dom";
import { TiArrowBackOutline } from "react-icons/ti";

const Game: FC = () => {
  const navigate = useNavigate();
  return (
    <div className="flex flex-col m-auto h-screen">
      {/*HEADER: targetScore*/}
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
      <div className="flex flex-row flex-grow overflow-y-auto bg-gray-200 border-x border-blue-200">
        <div className="flex-grow">
          {/*LEFT TABLE: player #1 name, scoretable*/}
          <ScoreTable
            player={PlayerEnum.PLAYER_ONE}
            playerName={store.setup?.playerOne}
          />
        </div>
        <div className="flex-grow">
          {/*RIGHT TABLE: player #2 name, scoretable*/}
          <ScoreTable
            player={PlayerEnum.PLAYER_TWO}
            playerName={store.setup?.playerTwo}
          />
        </div>
      </div>
      <div className="text-center bg-blue-200 py-4">
        {/*ACTIONS: current run score, fouls, buttons <Rerack>, <Submit Score> and <Score Correction>*/}
        <p>#Balls on the table: {store.ballsOnTable}</p>
        <p>length: {store.scores.length}</p>
      </div>
    </div>
  );
};
export default observer(Game);
