import express from 'express';
import authRoutes from './auth-routes.js'

const router = express.Router();

//Mounting v1 Routes
router.use('/auth',authRoutes);

//exporting v1 router
export default router;