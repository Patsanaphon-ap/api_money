import * as express from "express";
import { getExchangeRate, getHistory } from "../controllers/exchange";
export const router = express.Router();

router.get("/rate",getExchangeRate);
router.post("/history",getHistory);