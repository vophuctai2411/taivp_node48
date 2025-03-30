import express from "express";
import userRoutes from "./userRoutes.js";
import imageRoutes from "./imageRoutes.js";
import authRoutes from "./authRoutes.js";

const rootRoutes = express.Router();

rootRoutes.use("/users", userRoutes);
rootRoutes.use("/images", imageRoutes);
rootRoutes.use("/auth", authRoutes);

export default rootRoutes;
