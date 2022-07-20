export type Game = {
  setup: Setup;
  scores: Score[];
};

export type Setup = {
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
