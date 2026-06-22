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

    const remaining = dealerResponse.data.remaining;

    let status = "playing";
    if (playerTotal === 21 && dealerTotal === 21) {
      status = "push";
    } else if (playerTotal === 21) {
      status = "player_win";
    } else if (dealerTotal === 21) {
      status = "dealer_win";
    }

    res.status(200).json({
      deckId,
      playerCards,
      dealerCards,
      playerTotal,
      dealerTotal,
      remaining,
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
    const remaining = response.data.remaining;

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
      remaining,
      status,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

const stand = async (req, res) => {
  try {
    const { deckId, playerCards, dealerCards, remaining: previousRemaining } =
      req.body;

    const playerTotal = calculateHand(playerCards);

    let updatedDealerCards = [...dealerCards];
    let dealerTotal = calculateHand(updatedDealerCards);
    let remaining = previousRemaining;

    while (dealerTotal < 17) {
      const response = await axios.get(
        `https://deckofcardsapi.com/api/deck/${deckId}/draw/?count=1`,
      );
      const card = response.data.cards[0];
      remaining = response.data.remaining;

      updatedDealerCards.push(card);

      dealerTotal = calculateHand(updatedDealerCards);
    }

    let status;

    if (dealerTotal > 21) {
      status = "dealer_bust";
    } else if (playerTotal > dealerTotal) {
      status = "player_win";
    } else if (playerTotal < dealerTotal) {
      status = "dealer_win";
    } else {
      status = "push";
    }

    res.status(200).json({
      deckId,
      playerCards,
      dealerCards: updatedDealerCards,
      playerTotal,
      dealerTotal,
      remaining,
      status,
    });
  } catch (error) {
    res.status(500).json({ message: error.message });
  }
};

export { createGame, hit, stand };
