import type { Computer } from "@/types/Computer";
import { Card } from "@/components/ui/card";
import { Separator } from "@/components/ui/separator";
import { ComputerSpecs } from "./ComputerSpecs";
import { PlayerInput } from "./PlayerInput";

export const MyCard = ({
  computer,
  image,
  guessPrice,
  setGuessPrice,
  onSubmitGuess,
  score,
  hasWon,
}: {
  computer: Computer;
  image: string;
  guessPrice: number;
  setGuessPrice: React.Dispatch<React.SetStateAction<number>>;
  onSubmitGuess: () => void;
  score: number;
  hasWon: boolean;
}) => {
  return (
    <Card className="flex flex-col p-4">
      <div className="flex flex-row w-4xl">
        <div className="my-auto">
          <img
            src={image}
            className="rounded-lg max-w-sm h-auto aspect-square object-cover"
          />
        </div>
        <div className="ml-4">
          <ComputerSpecs computer={computer} hasWon={hasWon} />
        </div>
      </div>
      <Separator />
      <div className="flex flex-row justify-center -mb-4">
        <PlayerInput
          setGuessPrice={setGuessPrice}
          guessPrice={guessPrice}
          onSubmitGuess={onSubmitGuess}
          hasWon={hasWon}
        />
      </div>
      <h1 className="text-center text-lg">
        Current Score: <span className="font-semibold">{score}</span>
      </h1>
    </Card>
  );
};
