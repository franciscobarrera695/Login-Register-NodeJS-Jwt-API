import { Router } from "express";
import { login,register,profile,verifyEmail } from "../controllers/auth.controllers.js";
import { verifyToken } from "../middlewares/verifyToken.js";
const router = Router()

router.post('/login',login)
router.post('/register',register)
router.get('/profile',verifyToken,profile)
router.get('/verify/:token',verifyEmail)
export default router