const Card = ({ card }) => {
  if (!card) return null;
  return (
    <div>
      <img src={card.image} alt={`${card.value} of ${card.suit}`} />
    </div>
  );
};

export default Card;
