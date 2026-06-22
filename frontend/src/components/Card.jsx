const Card = ({ card, faceDown }) => {
  if (faceDown) {
    return (
      <div className="w-20 h-28 rounded-lg shadow-md bg-blue-900 border-2 border-white flex items-center justify-center">
        <span className="text-2xl">🂠</span>
      </div>
    );
  }
  return (
    <img
      src={card.image}
      alt={`${card.value} of ${card.suit}`}
      className="w-20 rounded-lg shadow-md"
    />
  );
};

export default Card;
