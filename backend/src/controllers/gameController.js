import axios from "axios";
import calculateHand from "../utils/calculateHand.js";

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

    const playerTotal = calculateHand(playerCards);
    const dealerTotal = calculateHand(dealerCards);

    let status = "playing";

    res.status(200).json({
      deckId,
      playerCards,
      dealerCards,
      playerTotal,
      dealerTotal,
      status,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const hit = async (req, res) => {
  try {
    const { deckId, playerCards, dealerCards } = req.body;
    const response = await axios.get(
      `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`,
    );
    const card = response.data.cards[0];

    const updatedPlayerCards = [...playerCards, card];

    const playerTotal = calculateHand(updatedPlayerCards);
    const dealerTotal = calculateHand(dealerCards);

    let status = "playing";

    if (playerTotal > 21) {
      status = "player_bust";
    }

    res.status(200).json({
      deckId,
      playerCards: updatedPlayerCards,
      dealerCards,
      playerTotal,
      dealerTotal,
      status,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createGame, hit };
