import { Router } from 'express';

import { ComputeTransactionFeeController } from '../controllers/computeTransactionFeeController.js';

const router = Router();

router.route("/compute-transaction-fee")
       .post(ComputeTransactionFeeController.createTransactionFeeDetail);

export default router;
