import Card from "./Card";

const Hand = ({ label, cards, total, hideSecondCard }) => {
  return (
    <div className="bg-green-900/60 rounded-xl p-4 shadow-inner">
      <h2 className="text-xl font-semibold mb-2">
        {label}{" "}
        <span className="text-yellow-300">
          ({hideSecondCard ? "?" : total})
        </span>
      </h2>
      <div className="flex gap-2 flex-wrap">
        {cards.map((card, i) => (
          <Card
            key={card.code}
            card={card}
            faceDown={hideSecondCard && i === 1}
          />
        ))}
      </div>
    </div>
  );
};

export default Hand;
