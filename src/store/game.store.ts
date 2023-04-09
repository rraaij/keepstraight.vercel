import { create } from "zustand";
import { Game, PlayerEnum, SetupInfo } from "@/models/game.model";

export const useGameStore = create<Game>((set) => ({
  setup: {
    playerOne: "Player 1",
    playerTwo: "Player 2",
    targetScore: 50,
    startingPlayer: PlayerEnum.PLAYER_ONE,
  },
  startGame: (setupInfo: SetupInfo) => {
    set({ setup: setupInfo });
  },
}));
