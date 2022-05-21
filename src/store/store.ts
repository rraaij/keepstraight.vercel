import { makeAutoObservable } from "mobx";
import { Score, Setup } from "../models/game";

class Store {
  setup: Setup | undefined = undefined;
  scores: Score[] = [];
  ballsOnTable: number = 0;

  constructor() {
    makeAutoObservable(this);
  }

  startGame(setupInfo: Setup) {
    this.setup = setupInfo;
    this.scores = [];
    this.ballsOnTable = 15;
  }
}
const store = new Store();
export default store;
