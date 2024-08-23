import * as express from "express";
import { getprofile } from '../controllers/profile';

export const router = express.Router();

router.post("/user", getprofile);
