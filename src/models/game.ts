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
  PLAYER_ONE = "Player 1",
  PLAYER_TWO = "Player 2",
}

export type Score = {
  player: PlayerEnum;
  inning: number;
  score: number;
  foul: boolean;
};

export type ScoreUpdateInfo = {
  ballsOnTable: number;
  endedInFoul: boolean;
};
