import { Router } from "express";
import { authController } from "./auth.controller";

const router = Router();

// Register user
router.post("/signup", authController.registerUser);
// Login User:
router.post("/login", authController.loginUser);

export const authRoute = router;
