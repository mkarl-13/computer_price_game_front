import type { Computer } from "@/types/Computer";
export const ComputerSpecs = ({
  computer,
  hasWon,
}: {
  computer: Computer;
  hasWon: boolean;
}) => {
  return (
    <div>
      <ul className="text-lg space-y-2">
        <li>
          <span className="font-semibold">Case:</span> {computer.case?.name}
          {hasWon && (
            <span className="font-bold">
              {" | "}
              {computer.case.price} {"€"}
            </span>
          )}
        </li>
        <li>
          <span className="font-semibold">Motherboard:</span>
          {computer.motherboard?.name}
          {hasWon && (
            <span className="font-bold">
              {" | "}
              {computer.motherboard?.price} {"€"}
            </span>
          )}
        </li>
        <li>
          <span className="font-semibold">CPU:</span> {computer.cpu?.name}
          {hasWon && (
            <span className="font-bold">
              {" | "}
              {computer.cpu?.price} {"€"}
            </span>
          )}
        </li>
        <li>
          <span className="font-semibold">GPU:</span> {computer.gpu?.name}
          {hasWon && (
            <span className="font-bold">
              {" | "}
              {computer.gpu?.price} {"€"}
            </span>
          )}
        </li>
        <li>
          <span className="font-semibold">RAM:</span> {computer.ram?.name}{" "}
          {hasWon && (
            <span className="font-bold">
              {" | "} {computer.ram?.price} {"€"}
            </span>
          )}
        </li>
        <li>
          <span className="font-semibold">Storage:</span>{" "}
          {computer.storage?.name}{" "}
          {hasWon && (
            <span className="font-bold">
              {" | "} {computer.storage.price} {"€"}
            </span>
          )}
        </li>
        <li>
          <span className="font-semibold">Cooling:</span>{" "}
          {computer.cooling?.name}{" "}
          {hasWon && (
            <span className="font-bold">
              {" | "}
              {computer.cooling?.price} {"€"}
            </span>
          )}
        </li>
        <li>
          <span className="font-semibold">PSU:</span> {computer.psu?.name}{" "}
          {hasWon && (
            <span className="font-bold">
              {" | "}
              {computer.psu?.price} {"€"}
            </span>
          )}
        </li>
      </ul>
    </div>
  );
};
