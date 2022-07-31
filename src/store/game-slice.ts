import { PlayerEnum, Score } from "../models/game";
import { createSelector, createSlice } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { SCORE_DATA } from "../assets/score-data";

interface GameState {
  scores: Score[];
  possibleRun: number;
  playerTurn: PlayerEnum;
}

const initialState = {
  scores: SCORE_DATA,
  possibleRun: 15,
  playerTurn: PlayerEnum.PLAYER_ONE,
} as GameState;

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    // updateScore() {}
    // rerack() {}
  },
});

// ACTIONS
// export const {} = gameSlice.actions;

// SELECTORS
export const selectGameInfo = (state: RootState) => state.game;

// export const selectScoresForPlayer = (
//   player: PlayerEnum
// ): ((state: RootState) => Score[]) => createSelector;

export default gameSlice.reducer;
