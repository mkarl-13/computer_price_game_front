import type { Player } from "@/types/PlayerType";
import { getLeaderboard } from "@/api/leaderboard.api";
import { Header } from "@/components/layout/Header";
import { useEffect, useState } from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import { Button } from "@/components/ui/button";
import { LeaderboardPagination } from "@/components/leaderboard/LeaderboardPagination";
import { ArrowUpDown } from "lucide-react";
import { DEFAULT_LIMIT } from "@/config/leaderboard";

export function Leaderboard() {
  const [leaderboard, setLeaderboard] = useState<Player[]>([]);
  const [page, setPage] = useState(1);
  const [sortBy, setSortBy] = useState("score");
  const [order, setOrder] = useState<"asc" | "desc">("desc");
  const [totalPages, setTotalPages] = useState(1);
  const [emptyRows, setEmptyRows] = useState(0);

  useEffect(() => {
    getLeaderboard(sortBy, order, page).then((res) => {
      setLeaderboard(res[0]);
      setTotalPages(res[1]);
      setEmptyRows(Math.abs(leaderboard.length - DEFAULT_LIMIT));
    });
  }, [sortBy, order, page, leaderboard]);

  function handleHeadClick(field: string) {
    setSortBy(field);
    setOrder(order === "asc" ? "desc" : "asc");
  }

  return (
    <>
      <Header />
      <div className="flex flex-col items-center justify-center w-full min-h-screen -m-17 gap-4">
        <Table className="mx-auto w-6xl min-h-200">
          <TableHeader>
            <TableRow className="hover:bg-transparent">
              <TableHead onClick={() => handleHeadClick("score")}>
                <Button variant="ghost">
                  Rank (Score)
                  <ArrowUpDown />
                </Button>
              </TableHead>
              <TableHead>Username</TableHead>
              <TableHead onClick={() => handleHeadClick("score")}>
                <Button variant="ghost">
                  Score
                  <ArrowUpDown />
                </Button>
              </TableHead>
              <TableHead onClick={() => handleHeadClick("accuracy")}>
                <Button variant="ghost">
                  Accuracy
                  <ArrowUpDown />
                </Button>
              </TableHead>
              <TableHead onClick={() => handleHeadClick("wins")}>
                <Button variant="ghost">
                  Wins
                  <ArrowUpDown />
                </Button>
              </TableHead>
              <TableHead onClick={() => handleHeadClick("date")}>
                <Button variant="ghost">
                  Date
                  <ArrowUpDown />
                </Button>
              </TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {leaderboard.map((player: Player) => (
              <TableRow key={player.id}>
                <TableCell>{player.player_rank}</TableCell>
                <TableCell>{player.username}</TableCell>
                <TableCell>{player.score}</TableCell>
                <TableCell>{player.accuracy}</TableCell>
                <TableCell>{player.wins}</TableCell>
                <TableCell>
                  {new Date(player.date).toLocaleDateString("fr-FR", {
                    day: "2-digit",
                    month: "2-digit",
                    year: "numeric",
                    hour: "2-digit",
                    minute: "2-digit",
                  })}
                </TableCell>
              </TableRow>
            ))}
            {emptyRows > 0 &&
              page === totalPages &&
              Array.from({ length: emptyRows }, (_, index) => (
                <TableRow key={index}>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell>&nbsp;</TableCell>
                  <TableCell>&nbsp;</TableCell>
                </TableRow>
              ))}
          </TableBody>
        </Table>
        <LeaderboardPagination
          setPage={setPage}
          page={page}
          totalPages={totalPages}
        />
      </div>
    </>
  );
}
