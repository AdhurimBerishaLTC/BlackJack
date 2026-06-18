const calculateHand = (cards) => {
  let total = 0;
  let aces = 0;
  cards.forEach((card) => {
    if (card.value === "ACE") {
      aces++;
      total += 11;
    } else if (
      card.value === "KING" ||
      card.value === "QUEEN" ||
      card.value === "Jack"
    ) {
      total += 10;
    } else {
      total += Number(card.value);
    }
  });

  while (total > 21 && aces > 0) {
    total -= 10;
    aces--;
  }

  return total;
};

export default calculateHand;
