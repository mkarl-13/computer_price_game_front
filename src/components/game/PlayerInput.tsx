import type { GameState } from "@/types/GameStateType";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { useState, useRef, useEffect } from "react";
import { postSubmit } from "@/api/game.api";

export const PlayerInput = ({
  gameId,
  setGameState,
  gameState,
}: {
  gameId: string;
  setGameState: React.Dispatch<React.SetStateAction<GameState | null>>;
  gameState: GameState;
}) => {
  const [guess, setGuess] = useState("");
  const round = gameState.rounds[gameState.currentRound];
  const inputGuess = useRef<HTMLInputElement>(null);

  useEffect(() => {
    inputGuess.current?.focus();
  }, [round]);

  function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    async function updateGameState() {
      try {
        const { gameState: updatedGameState } = await postSubmit(
          gameId,
          Number(guess),
        );
        setGameState(updatedGameState);
        setGuess("");
      } catch (error) {
        console.error("Error submitting guess: ", error);
      }
    }
    updateGameState();
    setGuess("");
  }

  return (
    <form onSubmit={handleForm} className="flex items-center gap-4">
      <Input
        onChange={(e) => setGuess(e.target.value)}
        value={guess}
        placeholder="Guess the price"
        ref={inputGuess}
      />
      <Button
        disabled={round.completed}
        variant={round.completed ? "secondary" : "default"}
      >
        Submit
      </Button>
    </form>
  );
};
