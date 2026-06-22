import Card from "./Card";

const Hand = ({ label, cards, total }) => {
  return (
    <div>
      <h2>
        {label} <span>{total}</span>
      </h2>
      <div>
        {cards.map((card) => (
          <Card key={card.code} card={card} />
        ))}
      </div>
    </div>
  );
};

export default Hand;
