import express from "express";
import { register, login } from "../controllers/authController.js";
import { middlewareToken } from "../config/jwt.js";

const authRoutes = express.Router();

authRoutes.post("/register", register);
authRoutes.post("/login", middlewareToken, login);

export default authRoutes;
