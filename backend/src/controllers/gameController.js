import axios from "axios";

const createGame = async (req, res) => {
  try {
    const response = await axios.get(
      "https://deckofcardsapi.com/api/deck/new/shuffle/?deck_count=1",
    );
    const deckId = response.data.deck_id;

    const playerResponse = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`,
    );

    const dealerResponse = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=2`,
    );

    const playerCards = playerResponse.data.cards;
    const dealerCards = dealerResponse.data.cards;

    res.status(200).json({ deckId, playerCards, dealerCards });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createGame };
