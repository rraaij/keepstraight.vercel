import { FC, Fragment, useContext } from "react";
import { GameContext } from "../store/game-context";

const Game: FC = () => {
  const gameCtx = useContext(GameContext);

  return (
    <Fragment>
      // SCORE TABLE
      <div className="flex flex-col m-auto p-3 h-screen">
        <div className="basis-1/6 text-center bg-amber-100">
          {/*HEADER: targetScore*/}
          <p>{gameCtx.setup?.targetScore}</p>
          <p>{gameCtx.setup?.startingPlayer}</p>
        </div>
        <div className="flex-grow flex flex-row py-3 bg-gray-200 border border-black">
          <div className="flex-grow bg-blue-400">
            {/*LEFT TABLE: player #1 name, scoretable*/}
            <p>{gameCtx.setup?.playerOne}</p>
          </div>
          <div className="flex-grow bg-green-400">
            {/*RIGHT TABLE: player #2 name, scoretable*/}
            <p>{gameCtx.setup?.playerTwo}</p>
          </div>
        </div>
        <div className="basis-1/6 text-center bg-amber-500">
          {/*ACTIONS: current run score, fouls, buttons <Rerack>, <Submit Score> and <Score Correction>*/}
          <p>{gameCtx.ballsOnTable}</p>
          <p>{gameCtx.scores.length}</p>
        </div>
      </div>
    </Fragment>
  );
};
export default Game;
