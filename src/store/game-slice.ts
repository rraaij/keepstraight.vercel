import { PlayerEnum, Score } from "../models/game.model";
import { createSlice } from "@reduxjs/toolkit";
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
// export const selectGameInfo = (state: RootState) => state.game as GameState;

export const selectScoresForPlayer = (
  state: RootState,
  player: PlayerEnum
): Score[] => state.game.scores.filter((s) => s.player === player);

export const selectTotalForPlayerAndInning = (
  state: RootState,
  player: PlayerEnum,
  inning: number
): number =>
  state.game.scores
    .filter((s) => s.player === player && s.inning <= inning)
    .map((s) => s.score)
    .reduce((total, score) => total + score, 0);

export const selectCurrentScoreForPlayer = (
  state: RootState,
  player: PlayerEnum
): number =>
  state.game.scores
    .filter((s) => s.player === player)
    .map((s) => s.score)
    .reduce((total, score) => total + score, 0);

export default gameSlice.reducer;
