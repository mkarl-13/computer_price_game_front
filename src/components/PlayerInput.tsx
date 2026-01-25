import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";

export const PlayerInput = ({
  guessPrice,
  setGuessPrice,
  onSubmitGuess,
  hasWon,
}: {
  guessPrice: number;
  setGuessPrice: React.Dispatch<React.SetStateAction<number>>;
  onSubmitGuess: () => void;
  hasWon: boolean;
}) => {
  function handleForm(e: React.FormEvent<HTMLFormElement>) {
    e.preventDefault();
    onSubmitGuess();
    setGuessPrice(0);
  }

  return (
    <form onSubmit={handleForm} className="flex items-center gap-4">
      <Input
        onChange={(e) => setGuessPrice(Number(e.target.value))}
        value={guessPrice}
        placeholder="Guess the price"
      />
      <Button variant={hasWon ? "secondary" : "default"} disabled={hasWon}>
        Submit
      </Button>
    </form>
  );
};
