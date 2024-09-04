import { Router } from "express";
import { login, logout, signup } from "../Controllers/AuthController.js";
import { loginValidation, signupValidation } from "../Middlewares/AuthMiddleware.js";

const authRoutes = Router();

authRoutes.post("/signup", signupValidation, signup);
authRoutes.post("/login", loginValidation, login);
authRoutes.get("/logout", logout);

export default authRoutes;