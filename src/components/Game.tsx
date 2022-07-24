import { FC, Fragment } from "react";
import { observer } from "mobx-react";
import store from "../store/store";

const Game: FC = () => {
  return (
    // SCORE TABLE
    <Fragment>
      <div className="flex flex-col m-auto p-3 h-screen">
        <div className="basis-1/6 text-center bg-amber-100">
          {/*HEADER: targetScore*/}
          <p>{store.setup?.targetScore}</p>
          <p>{store.setup?.startingPlayer}</p>
        </div>
        <div className="flex-grow flex flex-row py-3 bg-gray-200 border border-black">
          <div className="flex-grow bg-blue-400">
            {/*LEFT TABLE: player #1 name, scoretable*/}
            <p>{store.setup?.playerOne}</p>
          </div>
          <div className="flex-grow bg-green-400">
            {/*RIGHT TABLE: player #2 name, scoretable*/}
            <p>{store.setup?.playerTwo}</p>
          </div>
        </div>
        <div className="basis-1/6 text-center bg-amber-500">
          {/*ACTIONS: current run score, fouls, buttons <Rerack>, <Submit Score> and <Score Correction>*/}
          <p>{store.ballsOnTable}</p>
          <p>{store.scores.length}</p>
        </div>
      </div>
    </Fragment>
  );
};
export default observer(Game);
