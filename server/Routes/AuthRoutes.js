import { Router } from "express";
import { signup } from "../Controllers/AuthController.js";

const authRoutes = Router();

authRoutes.post("/signup", signup);

export default authRoutes;