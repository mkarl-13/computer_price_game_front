import { apiClient } from "./client";

export const getNewGame = async () => {
  const response = await apiClient.get("/game/");
  return response.data;
};

export const getGameState = async (gameId: string) => {
  const response = await apiClient.get(`/game/${gameId}`);
  return response.data;
};

export const postSubmit = async (gameId: string, guess: number) => {
  const response = await apiClient.post(`/game/round/submit`, {
    gameId,
    guess,
  });
  return response.data;
};

export const postNextComputer = async (gameId: string) => {
  const response = await apiClient.post(`/game/round/next`, {
    gameId,
  });
  return response.data;
};

export const postLeaderboard = async (gameId: string, username: string) => {
  const response = await apiClient.post(`/leaderboard`, {
    gameId,
    username,
  });
  return response.data;
};
