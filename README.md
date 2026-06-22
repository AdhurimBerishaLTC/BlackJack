# Blackjack

A full-stack blackjack game built with React and Express. The backend deals cards via the [Deck of Cards API](https://deckofcardsapi.com/) and enforces standard rules (hit, stand, dealer stands on 17, natural blackjack on the deal).

## Features

- Start a new game with a shuffled deck
- Hit and stand
- Dealer hole card hidden during play
- Natural blackjack detection on the initial deal
- Win / loss / bust / push outcomes
- Play again without refreshing

## Tech stack

| Layer    | Tech                                      |
|----------|-------------------------------------------|
| Frontend | React, Vite, Tailwind CSS, Axios          |
| Backend  | Node.js, Express, Axios                   |
| Cards    | [deckofcardsapi.com](https://deckofcardsapi.com/) |

## Installation

1. Clone the repository

   ```bash
   git clone https://github.com/AdhurimBerishaLTC/BlackJack.git
   ```

2. Install dependencies for frontend and backend

   ```bash
   cd frontend
   npm install

   cd backend
   npm install
   ```

3. Set up environment variables (see below)

## Environment Variables

This project requires a few environment variables to run properly.

- For the **backend**, create a `.env` file.
- For the **frontend**, create a `.env` file.

### backend `.env` variables include:

- `PORT` — 4000


### frontend `.env` variables include:

- `VITE_API_URL` — http://localhost:4000/api/game - (Must include /api/game - that's where the routes are mounted)

4. Run the development servers

   ```bash
   # Backend
   npm run dev

   # Frontend
   npm run dev
   ```
