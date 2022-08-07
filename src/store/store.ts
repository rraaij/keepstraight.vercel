import { configureStore } from "@reduxjs/toolkit";
import { TypedUseSelectorHook, useDispatch, useSelector } from "react-redux";
import setupReducer from "./setup-slice";
import gameReducer from "./game-slice";

export const store = configureStore({
  reducer: {
    setup: setupReducer,
    game: gameReducer,
  },
});

/**
 * Typescript specifics for reduxjs/toolkit
 * (copied from website tutorial https://redux-toolkit.js.org/tutorials/typescript)
 */
// Infer the `RootState` and `AppDispatch` types from the store itself
export type RootState = ReturnType<typeof store.getState>;
// Inferred type: {posts: PostsState, comments: CommentsState, users: UsersState}
export type AppDispatch = typeof store.dispatch;

// HOOKS: Use throughout your app instead of plain `useDispatch` and `useSelector`
export const useAppDispatch: () => AppDispatch = useDispatch;
export const useAppSelector: TypedUseSelectorHook<RootState> = useSelector;

/*****************
 * OLD MOBX CODE
 * */
// import { makeAutoObservable } from "mobx";
// import { PlayerEnum, Score, ScoreUpdateInfo, SetupInfo } from "../models/game";
//
// class Store {
//   setup: SetupInfo = {};
//   scores: Score[] = [];
//   possibleRun: number = 0;
//   playerTurn: PlayerEnum | undefined = undefined;
//
//   constructor() {
//     makeAutoObservable(this);
//   }
//
//   startGame(setupInfo: SetupInfo) {
//     this.setup = setupInfo;
//     this.scores = [];
//     this.possibleRun = 15;
//     this.playerTurn = setupInfo.startingPlayer;
//   }
//
//   rerack() {}
//
//   updateScore(scoreUpdateInfo: ScoreUpdateInfo) {
//     const lastInning = this.scores
//       .filter((s) => s.player === this.playerTurn)
//       .map((s) => s.inning)
//       .sort((a, b) => b - a)[0];
//     this.scores.push(<Score>{
//       player: this.playerTurn,
//       inning: lastInning + 1,
//       score: this.possibleRun + scoreUpdateInfo.ballsOnTable,
//       foul: scoreUpdateInfo.endedInFoul,
//     });
//   }
// }
// const store = new Store();
// export default store;
