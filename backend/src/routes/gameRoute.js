import express from "express";
import { createGame, hit } from "../controllers/gameController.js";

const router = express.Router();

router.post("/new", createGame);
router.post("/hit", hit);

export default router;
