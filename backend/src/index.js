import express from "express";
import cors from "cors";
import gameRoute from "./routes/gameRoute.js";

const app = express();

const PORT = process.env.PORT || 4000;

app.use(express.json());
app.use(cors());

app.use("/api/game", gameRoute);

app.get("/", (req, res) => {
  res.send("Blackjack API is running");
});

app.listen(PORT, () => {
  console.log(`Server is running on port ${PORT}`);
});
