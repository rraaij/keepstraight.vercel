import { makeAutoObservable } from "mobx";
import { PlayerEnum, Score, ScoreUpdateInfo, SetupInfo } from "../models/game";

class Store {
  setup: SetupInfo = {};
  scores: Score[] = [];
  possibleRun: number = 0;
  playerTurn: PlayerEnum | undefined = undefined;

  constructor() {
    makeAutoObservable(this);
  }

  startGame(setupInfo: SetupInfo) {
    this.setup = setupInfo;
    this.scores = [];
    this.possibleRun = 15;
    this.playerTurn = setupInfo.startingPlayer;
  }

  rerack() {}

  updateScore(scoreUpdateInfo: ScoreUpdateInfo) {
    const lastInning = this.scores
      .filter((s) => s.player === this.playerTurn)
      .map((s) => s.inning)
      .sort((a, b) => b - a)[0];
    this.scores.push(<Score>{
      player: this.playerTurn,
      inning: lastInning + 1,
      score: this.possibleRun + scoreUpdateInfo.ballsOnTable,
      foul: scoreUpdateInfo.endedInFoul,
    });
  }
}
const store = new Store();
export default store;
