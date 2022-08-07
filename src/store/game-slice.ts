import { PlayerEnum, Score, ScoreUpdateInfo } from "../models/game.model";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";
import { SCORE_DATA } from "../assets/score-data";

interface GameState {
  scores: Score[];
  possibleRun: number;
  playerTurn: PlayerEnum;
}

const initialState = {
  scores: [],
  possibleRun: 15,
  playerTurn: PlayerEnum.PLAYER_ONE,
} as GameState;

const gameSlice = createSlice({
  name: "game",
  initialState,
  reducers: {
    updateScore(state, action: PayloadAction<ScoreUpdateInfo>) {
      const info: ScoreUpdateInfo = action.payload;
      const currentScore = state.scores
        .filter((s) => s.player === state.playerTurn)
        .map((s) => s.score)
        .reduce((total, score) => total + score, 0);
      const currentInning =
        state.scores.filter((s) => s.player === state.playerTurn).length > 0
          ? Math.max(
              ...state.scores
                .filter((s) => s.player === state.playerTurn)
                .map((s) => s.inning)
            )
          : 0;
      const score = {
        player: state.playerTurn,
        inning: currentInning + 1,
        score: state.possibleRun - info.ballsOnTable,
        total: currentScore + (state.possibleRun - info.ballsOnTable),
        foul: info.endedInFoul,
      } as Score;
      state.scores.push(score);
      state.possibleRun = info.ballsOnTable;
      state.playerTurn =
        state.playerTurn === PlayerEnum.PLAYER_ONE
          ? PlayerEnum.PLAYER_TWO
          : PlayerEnum.PLAYER_ONE;
    },
    rerack(state) {
      state.possibleRun += 14;
    },
  },
});

// ACTIONS
export const { updateScore, rerack } = gameSlice.actions;

// SELECTORS
export const selectGameInfo = (state: RootState) => state.game as GameState;

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
