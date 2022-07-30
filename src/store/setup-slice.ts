import { PlayerEnum, Score, SetupInfo } from "../models/game";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { RootState } from "./store";

interface SetupState {
  playerOne: string;
  playerTwo: string;
  targetScore: number;
  startingPlayer: PlayerEnum;
  scores: Score[];
  possibleRun: number;
  playerTurn: PlayerEnum;
}

const initialState = {
  playerOne: "player one",
  playerTwo: "player two",
  targetScore: 50,
  startingPlayer: PlayerEnum.PLAYER_ONE,
  scores: [],
  possibleRun: 15,
  playerTurn: PlayerEnum.PLAYER_ONE,
} as SetupState;

const setupSlice = createSlice({
  name: "setup",
  initialState,
  reducers: {
    startGame(state, action: PayloadAction<SetupInfo>) {
      const setupInfo: SetupInfo = action.payload;
      state.playerOne = setupInfo.playerOne;
      state.playerTwo = setupInfo.playerTwo;
      state.startingPlayer = setupInfo.startingPlayer;
      state.targetScore = setupInfo.targetScore;
    },
  },
});

export const { startGame } = setupSlice.actions;

export const selectSetupInfo = (state: RootState) => state.setup;

export default setupSlice.reducer;
