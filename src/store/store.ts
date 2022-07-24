import { makeAutoObservable } from "mobx";
import { Score, SetupInfo } from "../models/game";

class Store {
  setup: SetupInfo | undefined = undefined;
  scores: Score[] = [];
  ballsOnTable: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  startGame(setupInfo: SetupInfo) {
    this.setup = setupInfo;
    this.scores = [];
    this.ballsOnTable = 15;
  }
}
const store = new Store();
export default store;
