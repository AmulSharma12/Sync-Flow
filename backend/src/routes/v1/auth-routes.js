import express from "express";
import { authController } from "../../controllers/index.js";
import { authValidator } from "../../validators/index.js";
import { validateRequest } from "../../middlewares/validate-request.js";
const router = express.Router();

//defining auth Routes
router.post(
  "/register",
  authValidator.registerValidator,
  validateRequest,
  authController.register
);

//exporting auth routes
export default router;
