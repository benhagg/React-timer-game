import React, { createContext, useState } from "react";

export const ScoreBoardCxt = createContext({
  totalScore: 0,
  games: 0,
  updateTotalScore: () => {}, // Default placeholder
  incrementGames: () => {}, // Default placeholder
});

export default function ScoreBoardProvider({ children }) {
  const [totalScore, setTotalScore] = useState(0);
  const [games, setGames] = useState(0);

  // Function to update total score
  const updateTotalScore = (score) => {
    score = parseInt(score);
    setTotalScore((prevScore) => prevScore + score);
  };

  // Function to increment games
  const incrementGames = () => {
    setGames((prevGames) => prevGames + 1);
  };

  const contextValue = {
    totalScore,
    games,
    updateTotalScore, // Provide the updated function
    incrementGames, // Provide the increment function
  };

  return (
    <ScoreBoardCxt.Provider value={contextValue}>
      {children}
    </ScoreBoardCxt.Provider>
  );
}
