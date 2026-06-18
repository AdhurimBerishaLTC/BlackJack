import express from "express";
import { createGame, hit, stand } from "../controllers/gameController.js";

const router = express.Router();

router.post("/new", createGame);
router.post("/hit", hit);
router.post("/stand", stand);

export default router;
