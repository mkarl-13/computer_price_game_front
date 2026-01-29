import type { GameState } from "@/types/GameStateType";

import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";

import { ComputerSpecs } from "./ComputerSpecs";
import { PlayerInput } from "./PlayerInput";

export const MyCard = ({
  setGameState,
  gameState,
  gameId,
}: {
  setGameState: React.Dispatch<React.SetStateAction<GameState | null>>;
  gameState: GameState;
  gameId: string;
}) => {
  return (
    <Card className="flex flex-col p-4">
      <div className="flex flex-row w-4xl">
        <div className="my-auto">
          <img
            src={gameState.rounds[gameState.currentRound].computer.case.image}
            className="rounded-lg max-w-sm h-auto aspect-square object-cover"
          />
        </div>
        <div className="ml-4">
          <ComputerSpecs gameState={gameState} />
        </div>
      </div>
      <Separator />
      <div className="flex flex-row justify-center -mb-4">
        <PlayerInput
          gameId={gameId}
          setGameState={setGameState}
          gameState={gameState}
        />
      </div>
      <h1 className="text-center text-lg">
        Score: <span className="font-semibold">{gameState.score}</span>
      </h1>
    </Card>
  );
};
