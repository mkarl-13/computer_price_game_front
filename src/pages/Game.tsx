import type { GameState } from "@/types/GameStateType";

import { getGameState, getNewGame } from "@/api/game.api";
import { useEffect, useState } from "react";

import { MyCard } from "@/components/game/MyCard";
import { Header } from "@/components/layout/Header";
import { Results } from "@/components/game/Results";

import { Toaster } from "@/components/ui/sonner";

export function Game() {
  const [gameState, setGameState] = useState<GameState | null>(null);
  const [gameId, setGameId] = useState<string | null>(null);

  useEffect(() => {
    async function startGame() {
      const response = await getNewGame();
      setGameId(response.gameId);
    }
    startGame();
  }, []);

  useEffect(() => {
    async function fetchGameState() {
      if (!gameId) return;
      const response = await getGameState(gameId);
      setGameState(response);
    }
    fetchGameState();
  }, [gameId]);

  if (!gameId || !gameState) return <h1>Loading...</h1>;
  return (
    <>
      <div className="fixed w-full">
        <Header />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center h-screen">
        <MyCard
          setGameState={setGameState}
          gameState={gameState}
          gameId={gameId}
        />
        {gameState.rounds[gameState.currentRound].completed && (
          <Results
            gameState={gameState}
            gameId={gameId}
            setGameState={setGameState}
            setGameId={setGameId}
          />
        )}
      </div>
      <Toaster />
    </>
  );
}
