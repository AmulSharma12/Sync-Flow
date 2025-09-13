import express from "express";
import { authController } from '../../controllers/index.js'
const router = express.Router();

//defining auth Routes
router.get('/register',authController.register);

//exporting auth routes
export default router;
