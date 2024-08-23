import * as express from "express";
import { gettransfer,getReceiverProfile } from '../controllers/transfer';

export const router = express.Router();

router.post("/receiverprofile",getReceiverProfile);
router.post("/transfer", gettransfer);
