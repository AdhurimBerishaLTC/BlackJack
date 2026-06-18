import express from "express";
import { createGame } from "../controllers/gameController.js";

const router = express.Router();

router.post("/new", createGame);

export default router;
