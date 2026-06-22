import { useState } from "react";
import { hitCard, standCard, startNewGame } from "./api/gameApi";
import Hand from "./components/Hand";
import GameControls from "./components/GameControls";
import GameResult from "./components/GameResult";

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
    } catch (error) {
      console.error("Error standing:", error);
      setError("Failed to stand. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="min-h-screen bg-green-800 text-white flex flex-col items-center">
      <h1 className="text-4xl font-black mb-8 tracking-wide">Blackjack Game</h1>

      {error && (
        <p className="bg-red-600 text-white px-4 py-2 rounded mb-4">{error}</p>
      )}

      {!game && (
        <button
          onClick={handleStartGame}
          disabled={loading}
          className="bg-yellow-500 hover:bg-yellow-400 cursor-pointer text-black font-semibold px-6 py-3 rounded-lg shadow disabled:opacity-50 disabled:cursor-not-allowed transition"
        >
          {loading ? "Starting game..." : "Start Game"}
        </button>
      )}

      {game && (
        <div className="w-full max-w-2xl flex flex-col gap-8">
          <Hand
            label="Dealer Hand"
            cards={game.dealerCards}
            total={game.dealerTotal}
            hideSecondCard={game.status === "playing"}
          />
          <Hand
            label="Player Hand"
            cards={game.playerCards}
            total={game.playerTotal}
          />
          {loading && (
            <p className="text-center text-lg font-semibold text-yellow-300 animate-pulse">
              Dealing…
            </p>
          )}
          {game.status === "playing" && (
            <GameControls
              onHit={handleHit}
              onStand={handleStand}
              disabled={loading}
            />
          )}
          <GameResult status={game.status} />

          {game.status !== "playing" && (
            <button
              onClick={handleStartGame}
              disabled={loading}
              className="mx-auto bg-yellow-500 hover:bg-yellow-400 text-black font-semibold cursor-pointer px-6 py-3 rounded-lg shadow disabled:opacity-50 disabled:cursor-not-allowed transition"
            >
              {loading ? "Starting..." : "Play Again"}
            </button>
          )}
        </div>
      )}
    </div>
  );
};

export default App;
