import type { GameState } from "@/types/GameStateType";

import { useState, useRef, useEffect } from "react";

import {
  postNextComputer,
  getNewGame,
  getGameState,
  postLeaderboard,
} from "@/api/game.api";

import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";
import { Input } from "@/components/ui/input";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
  DialogTrigger,
  DialogFooter,
  DialogClose,
} from "@/components/ui/dialog";
import { toast } from "sonner";

export const Results = ({
  gameState,
  gameId,
  setGameState,
  setGameId,
}: {
  gameState: GameState;
  gameId: string;
  setGameState: React.Dispatch<React.SetStateAction<GameState | null>>;
  setGameId: React.Dispatch<React.SetStateAction<string | null>>;
}) => {
  const round = gameState.rounds[gameState.currentRound];
  const distance = Math.abs(round.guess - round.targetPrice);
  const hasLost = gameState.hasLost;

  const [username, setUsername] = useState("");
  const [isSubmitted, setIsSubmitted] = useState(false);

  const inputRefRestart = useRef<HTMLButtonElement>(null);
  const inputRefNext = useRef<HTMLButtonElement>(null);

  const handleNext = () => {
    const update = async () => {
      const newState = await postNextComputer(gameId);
      setGameState(newState);
    };
    update();
  };

  const handleNew = () => {
    const update = async () => {
      const newGame = await getNewGame();
      const newState = await getGameState(newGame.gameId);
      setGameState(newState);
      setGameId(newGame.gameId);
    };
    update();
  };

  const handleLeaderboard = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const update = async () => {
      if (!username) {
        toast.error("Please enter a username");
        return;
      }

      await postLeaderboard(gameId, username);
      setIsSubmitted(true);
    };
    update();
  };

  useEffect(() => {
    if (!inputRefRestart.current) return;
    inputRefRestart.current.focus();
  }, [hasLost]);

  useEffect(() => {
    if (round.completed === true) {
      if (!inputRefNext.current) return;
      inputRefNext.current.focus();
    }
  }, [round.completed]);

  return (
    <>
      {!hasLost && (
        <Card className="flex flex-col p-4">
          <div className="flex flex-col gap-4 w-4xl">
            <h1 className="font-semibold text-center text-xl">Nice job!</h1>
            <div className="flex flex-row justify-center gap-2 text-lg">
              <div className="w-full text-right">
                <h1>
                  You guessed a price of{" "}
                  <span className="font-semibold">{round.guess}€</span>
                </h1>
                <h1>
                  Actual price:{" "}
                  <span className="font-semibold">{round.targetPrice}€</span>
                </h1>
                <h1>
                  You gained{" "}
                  <span className="font-semibold">{round.score}</span> points.
                </h1>
              </div>
              <Separator orientation="vertical" />
              <div className="w-full">
                <h1>
                  You were <span className="font-semibold">{distance}€</span>{" "}
                  away from the target price.
                </h1>
                <h1>
                  You were{" "}
                  <span className="font-semibold">{round.percentage}%</span> off
                  the target price.
                </h1>
                <h1>
                  Your score is{" "}
                  <span className="font-semibold">{gameState.score}</span>
                </h1>
              </div>
            </div>
            <Button
              className="self-center w-xs"
              onClick={handleNext}
              ref={inputRefRestart}
            >
              Next Computer
            </Button>
          </div>
        </Card>
      )}
      {hasLost && (
        <Card className="flex flex-col p-4">
          <div className="flex flex-col gap-4 w-4xl">
            <h1 className="font-semibold text-center text-xl">You lost!</h1>
            <div className="flex flex-row justify-center gap-2 text-lg">
              <div className="w-full text-right">
                <h1>
                  You guessed a price of{" "}
                  <span className="font-semibold">{round.guess}€</span>
                </h1>
                <h1>
                  Actual price:{" "}
                  <span className="font-semibold">{round.targetPrice}€</span>
                </h1>
              </div>
              <Separator orientation="vertical" />
              <div className="w-full">
                <h1>
                  You were <span className="font-semibold">{distance}€</span>{" "}
                  away from the target price.
                </h1>
                <h1>
                  You were{" "}
                  <span className="font-semibold">{round.percentage}%</span> off
                  the target price.
                </h1>
              </div>
            </div>
            <h1 className="font-semibold text-center text-lg">
              Your score is{" "}
              <span className="font-semibold">{gameState.score}</span>
            </h1>
            <div className="flex flex-row justify-center gap-4">
              <Button
                className="self-center w-xs"
                onClick={handleNew}
                ref={inputRefRestart}
              >
                New Game
              </Button>
              <Dialog>
                <DialogTrigger asChild>
                  <Button
                    className="self-center w-xs"
                    disabled={isSubmitted || gameState.score === 0}
                    variant={
                      isSubmitted || gameState.score === 0
                        ? "secondary"
                        : "default"
                    }
                  >
                    Submit to Leaderboard
                  </Button>
                </DialogTrigger>
                <DialogContent className="sm:max-106.25">
                  <form onSubmit={handleLeaderboard}>
                    <DialogHeader>
                      <DialogTitle>Enter your username</DialogTitle>
                      <DialogDescription>
                        Enter the name that you want others to see you as.
                      </DialogDescription>
                    </DialogHeader>
                    <DialogFooter>
                      <Input
                        placeholder="Username"
                        value={username}
                        onChange={(e) => setUsername(e.target.value)}
                      />
                      <DialogClose asChild>
                        <Button variant="outline">Cancel</Button>
                      </DialogClose>
                      <DialogClose asChild>
                        <Button type="submit">Submit</Button>
                      </DialogClose>
                    </DialogFooter>
                  </form>
                </DialogContent>
              </Dialog>
            </div>
          </div>
        </Card>
      )}
    </>
  );
};
