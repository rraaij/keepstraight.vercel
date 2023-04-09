import { create } from "zustand";
import {
  Game,
  PlayerEnum,
  ScoreTable,
  ScoreUpdateInfo,
  SetupInfo,
} from "@/models/game.model";
import { SCORE_DATA } from "../../public/assets/score-data";

export const useGameStore = create<Game>((set) => ({
  setup: {
    playerOne: "Player 1",
    playerTwo: "Player 2",
    targetScore: 50,
    startingPlayer: PlayerEnum.PLAYER_ONE,
  },
  scoreTable: new ScoreTable([]),
  playerAtTable: PlayerEnum.PLAYER_ONE,
  possibleRun: 14,
  isUpdateScoreVisible: false,

  startGame: (setupInfo: SetupInfo) => {
    set({ setup: setupInfo, playerAtTable: setupInfo.startingPlayer });
  },

  rerack: () => {
    set((state) => ({ possibleRun: state.possibleRun + 14 }));
  },

  showUpdateScore: (show: boolean) => {
    set({ isUpdateScoreVisible: show });
  },

  updateScore: (scoreUpdateInfo: ScoreUpdateInfo) => {
    set((state) => ({
      scoreTable: state.scoreTable.submitScore(
        state.playerAtTable,
        state.possibleRun,
        scoreUpdateInfo
      ),
      possibleRun: scoreUpdateInfo.ballsOnTable,
      playerAtTable:
        state.playerAtTable === PlayerEnum.PLAYER_ONE
          ? PlayerEnum.PLAYER_TWO
          : PlayerEnum.PLAYER_ONE,
    }));
  },
}));
