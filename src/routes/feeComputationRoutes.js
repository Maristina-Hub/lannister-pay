import { Router } from 'express';

import { FeesController } from '../controllers/feeComputationController.js';

const router = Router();

router.route("/fees")
      .post(FeesController.createFees);

export default router;

