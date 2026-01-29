import type { Computer } from "@/types/ComputerType";
import type { GameState } from "@/types/GameStateType";

export const ComputerSpecs = ({ gameState }: { gameState: GameState }) => {
  const round = gameState.rounds[gameState.currentRound];
  const computer: Computer = round.computer;

  return (
    <div>
      <ul className="text-lg space-y-2">
        <li>
          <span className="font-semibold">Case:</span> {computer.case?.name}
          {round.completed && (
            <span className="font-bold">
              {" | "}
              {computer.case.price} {"€"}
            </span>
          )}
        </li>
        <li>
          <span className="font-semibold">Motherboard:</span>
          {computer.motherboard?.name}
          {round.completed && (
            <span className="font-bold">
              {" | "}
              {computer.motherboard?.price} {"€"}
            </span>
          )}
        </li>
        <li>
          <span className="font-semibold">CPU:</span> {computer.cpu?.name}
          {round.completed && (
            <span className="font-bold">
              {" | "}
              {computer.cpu?.price} {"€"}
            </span>
          )}
        </li>
        <li>
          <span className="font-semibold">GPU:</span> {computer.gpu?.name}
          {round.completed && (
            <span className="font-bold">
              {" | "}
              {computer.gpu?.price} {"€"}
            </span>
          )}
        </li>
        <li>
          <span className="font-semibold">RAM:</span> {computer.ram?.name}{" "}
          {round.completed && (
            <span className="font-bold">
              {" | "} {computer.ram?.price} {"€"}
            </span>
          )}
        </li>
        <li>
          <span className="font-semibold">Storage:</span>{" "}
          {computer.storage?.name}{" "}
          {round.completed && (
            <span className="font-bold">
              {" | "} {computer.storage?.price} {"€"}
            </span>
          )}
        </li>
        <li>
          <span className="font-semibold">Cooling:</span>{" "}
          {computer.cooling?.name}{" "}
          {round.completed && (
            <span className="font-bold">
              {" | "} {computer.cooling?.price} {"€"}
            </span>
          )}
        </li>
        <li>
          <span className="font-semibold">PSU:</span> {computer.psu?.name}{" "}
          {round.completed && (
            <span className="font-bold">
              {" | "} {computer.psu?.price} {"€"}
            </span>
          )}
        </li>
      </ul>
    </div>
  );
};
