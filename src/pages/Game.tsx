import type { Computer } from "@/types/Computer";
import { Header } from "@/components/Header";
import { MyCard } from "@/components/MyCard";
import { useState, useEffect } from "react";
import { Results } from "@/components/Results";

export function Game() {
  const [computer, setComputer] = useState<Computer | null>(null);
  const [actualPrice, setActualPrice] = useState(0);
  const [image, setImage] = useState("");
  const [guessPrice, setGuessPrice] = useState(0);
  const [hasWon, setHasWon] = useState(false);
  const [difference, setDifference] = useState(0);
  const [percentageOff, setPercentageOff] = useState(0);
  const [score, setScore] = useState(0);
  const [guessedPrice, setGuessedPrice] = useState(0);
  const [scoreIncrease, setScoreIncrease] = useState(0);
  const [hasLoss, setHasLoss] = useState(false);

  function getComputer() {
    fetch(`${import.meta.env.VITE_API_URL}/api/computer`)
      .then((response) => response.json())
      .then((data) => {
        setComputer(data.computer);
        setActualPrice(data.totalPrice);
        setImage(data.image);
      });
  }

  useEffect(() => {
    getComputer();
  }, []);

  if (!computer) {
    return;
  }

  function onSubmitGuess() {
    const newDifference = Math.abs(guessPrice - actualPrice);
    const newPercentageOff = Math.min(
      parseFloat(((newDifference / actualPrice) * 100).toFixed(2)),
      100,
    );
    let newScore = score;
    let increase = 0;

    if (newPercentageOff <= 25) {
      increase = parseInt(Math.max(0, 1000 - newPercentageOff * 10).toFixed(0));
      newScore = score + increase;
    }

    setScoreIncrease(increase);
    setGuessedPrice(guessPrice);
    setDifference(newDifference);
    setPercentageOff(newPercentageOff);
    setScore(newScore);
    setHasWon(true);
    if (newPercentageOff > 25) {
      setHasLoss(true);
    }
    console.log(newScore);
  }

  function resetGame() {
    setGuessedPrice(0);
    setDifference(0);
    setPercentageOff(0);
    setHasWon(false);
    getComputer();
  }

  function restartGame() {
    setGuessedPrice(0);
    setDifference(0);
    setPercentageOff(0);
    setHasWon(false);
    setScore(0);
    setHasLoss(false);
    getComputer();
  }

  return (
    <>
      <div className="fixed w-full">
        <Header />
      </div>
      <div className="flex flex-col gap-4 justify-center items-center h-screen">
        <MyCard
          computer={computer}
          image={image}
          guessPrice={guessPrice}
          setGuessPrice={setGuessPrice}
          onSubmitGuess={onSubmitGuess}
          score={score}
          hasWon={hasWon}
        />
        {hasWon && (
          <Results
            actualPrice={actualPrice}
            guessedPrice={guessedPrice}
            difference={difference}
            percentageOff={percentageOff}
            score={score}
            resetGame={resetGame}
            scoreIncrease={scoreIncrease}
            hasLoss={hasLoss}
            restartGame={restartGame}
          />
        )}
      </div>
    </>
  );
}
