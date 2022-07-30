import { PlayerEnum, SetupInfo } from "../models/game";
import { createSlice, PayloadAction } from "@reduxjs/toolkit";

const initialState = {
  playerOne: "player one",
  playerTwo: "player two",
  targetScore: 50,
  startingPlayer: PlayerEnum.PLAYER_ONE,
  scores: [],
  possibleRun: 15,
  playerTurn: PlayerEnum.PLAYER_ONE,
};

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

export const selectSetupInfo = (state: { setup: SetupInfo }) => state.setup;

export const { startGame } = setupSlice.actions;

export default setupSlice.reducer;
