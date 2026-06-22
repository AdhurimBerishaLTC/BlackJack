const statusMessages = {
  player_bust: "You bust! Dealer wins.",
  dealer_bust: "Dealer bust! You win.",
  player_win: "You win!",
  dealer_win: "Dealer wins.",
  push: "It's a push",
};

const GameResult = ({ status }) => {
  if (status === "playing") return null;

  return (
    <p className="text-center text-2xl font-black text-yellow-300">
      {statusMessages[status]}
    </p>
  );
};

export default GameResult;
