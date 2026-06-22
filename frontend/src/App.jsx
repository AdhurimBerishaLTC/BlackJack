import { useState } from "react";
import { hitCard, standCard, startNewGame } from "./api/gameApi";

const App = () => {
  const [game, setGame] = useState(null);
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState(null);

  const handleStartGame = async () => {
    try {
      setLoading(true);
      setError(null);
      const response = await startNewGame();
      setGame(response);
      console.log("Game started:", response);
    } catch (error) {
      console.error("Error starting game:", error);
      setError("Failed to start game. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleHit = async () => {
    if (!game) return;

    try {
      setLoading(true);
      setError(null);
      const response = await hitCard(game);
      setGame(response);
      console.log("Hit successful:", response);
    } catch (error) {
      console.error("Error hitting:", error);
      setError("Failed to hit. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleStand = async () => {
    if (!game) return;

    try {
      setLoading(true);
      setError(null);
      const response = await standCard(game);
      setGame(response);
      console.log("Stand successful:", response);
    } catch (error) {
      console.error("Error standing:", error);
      setError("Failed to stand. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div>
      <h1>Blackjack Game</h1>

      {error && <p>{error}</p>}

      {!game && (
        <button onClick={handleStartGame} disabled={loading}>
          {loading ? "Starting game..." : "Start Game"}
        </button>
      )}

      {game && (
        <div>
          {/* Player's hand */}
          {/* Action buttons */}
        </div>
      )}
    </div>
  );
};

export default App;
