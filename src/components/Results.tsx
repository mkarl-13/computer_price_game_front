import { Card } from "@/components/ui/card";
import { Button } from "@/components/ui/button";
import { Separator } from "@/components/ui/separator";

export const Results = ({
  actualPrice,
  difference,
  percentageOff,
  score,
  guessedPrice,
  resetGame,
  scoreIncrease,
  hasLoss,
  restartGame,
}: {
  actualPrice: number;
  difference: number;
  percentageOff: number;
  score: number;
  guessedPrice: number;
  resetGame: () => void;
  scoreIncrease: number;
  hasLoss: boolean;
  restartGame: () => void;
}) => {
  return (
    <>
      {!hasLoss && (
        <Card className="flex flex-col p-4">
          <div className="flex flex-col gap-4 w-4xl">
            <h1 className="font-semibold text-center text-xl">Nice job!</h1>
            <div className="flex flex-row justify-center gap-2 text-lg">
              <div className="w-full text-right">
                <h1>
                  You guessed a price of{" "}
                  <span className="font-semibold">{guessedPrice}€</span>
                </h1>
                <h1>
                  Actual price:{" "}
                  <span className="font-semibold">{actualPrice}€</span>
                </h1>
                <h1>
                  You gained{" "}
                  <span className="font-semibold">{scoreIncrease}</span> points.
                </h1>
              </div>
              <Separator orientation="vertical" />
              <div className="w-full">
                <h1>
                  You were <span className="font-semibold">{difference}€</span>{" "}
                  away from the target price.
                </h1>
                <h1>
                  You were{" "}
                  <span className="font-semibold">{percentageOff}%</span> off
                  the target price.
                </h1>
                <h1>
                  Your score is <span className="font-semibold">{score}</span>
                </h1>
              </div>
            </div>
            <Button
              onClick={() => {
                resetGame();
              }}
              className="self-center w-xs"
            >
              Next Computer
            </Button>
          </div>
        </Card>
      )}

      {hasLoss && (
        <Card className="flex flex-col p-4">
          <div className="flex flex-col gap-4 w-4xl">
            <h1 className="font-semibold text-center text-xl">You lost!</h1>
            <div className="flex flex-row justify-center gap-2 text-lg">
              <div className="w-full text-right">
                <h1>
                  You guessed a price of{" "}
                  <span className="font-semibold">{guessedPrice}€</span>
                </h1>
                <h1>
                  Actual price:{" "}
                  <span className="font-semibold">{actualPrice}€</span>
                </h1>
              </div>
              <Separator orientation="vertical" />
              <div className="w-full">
                <h1>
                  You were <span className="font-semibold">{difference}€</span>{" "}
                  away from the target price.
                </h1>
                <h1>
                  You were{" "}
                  <span className="font-semibold">{percentageOff}%</span> off
                  the target price.
                </h1>
              </div>
            </div>
            <h1 className="font-semibold text-center text-lg">
              Your score is <span className="font-semibold">{score}</span>
            </h1>
            <Button
              onClick={() => {
                restartGame();
              }}
              className="self-center w-xs"
            >
              New Game
            </Button>
          </div>
        </Card>
      )}
    </>
  );
};
