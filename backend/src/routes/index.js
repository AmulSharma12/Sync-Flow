import express from 'express'
import v1Routes from './v1/index.js';
const router = express.Router();

//Mounting v1 Routes
router.use('/v1',v1Routes);

//exporting router
export default router;
