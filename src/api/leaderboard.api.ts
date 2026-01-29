import { apiClient } from "./client";

export async function getLeaderboard(
  sortBy = "score",
  order = "desc",
  page = 1,
) {
  const response = await apiClient.get(
    `/leaderboard/?sortBy=${sortBy}&order=${order}&page=${page}`,
  );
  return response.data;
}
