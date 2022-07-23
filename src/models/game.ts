export type Game = {
  setup: SetupInfo;
  scores: Score[];
};

export type SetupInfo = {
  playerOne?: string;
  playerTwo?: string;
  targetScore?: number;
  startingPlayer?: PlayerEnum;
};

export enum PlayerEnum {
  PLAYER_ONE = "PlayerOne",
  PLAYER_TWO = "PlayerTwo",
}

export type Score = {
  id: number;
  player: PlayerEnum;
  inning: number;
  score: number;
  foul: boolean;
};
