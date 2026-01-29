import type { Computer } from "./ComputerType";

export type GameState = {
  rounds: [
    {
      computer: Computer;
      guess: number;
      targetPrice: number;
      score: number;
      percentage: number;
      accuracy: number;
      completed: boolean;
    },
  ];
  hasLost: boolean;
  currentRound: number;
  bonusTime: number;
  created: Date;
  score: number;
};
