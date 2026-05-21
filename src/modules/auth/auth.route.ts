import { Router } from "express";
import { authController } from "./auth.controller";

const router = Router();

// Register user
router.use("/signup", authController.registerUser);
// Login User:
router.use("/login", authController.loginUser);

export const authRoute = router;
