import React from "react";
import store from "../store/store";
import { observer } from "mobx-react";

const Game: React.FC = () => {
  return (
    <React.Fragment>
      <p>{store.setup?.playerOne}</p>
      <p>{store.setup?.playerTwo}</p>
      <p>{store.setup?.targetScore}</p>
      <p>{store.setup?.startingPlayer}</p>
      <p>{store.ballsOnTable}</p>
      <p>{store.scores.length}</p>
    </React.Fragment>
  );
};
export default observer(Game);
