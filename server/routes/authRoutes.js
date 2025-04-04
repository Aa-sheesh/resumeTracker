import express from 'express';
import { register, login, logout,deleteUser,getUserProfile } from '../controllers/authController.js';
import { verifyToken } from '../middlewares/auth.middleware.js';

const router = express.Router();
router.post('/auth/register', register);
router.post('/auth/login',login);
router.post('/auth/logout',verifyToken,logout);
router.delete('/auth/:id',verifyToken,deleteUser);
router.get("/auth/profile",verifyToken,getUserProfile);

export default router;