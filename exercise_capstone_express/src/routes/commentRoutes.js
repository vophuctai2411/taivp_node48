import express from "express";
import { addComment } from "../controllers/commentController.js";
import { middlewareToken } from "../config/jwt.js";

const commentRoutes = express.Router();

commentRoutes.post("/add-comment", middlewareToken, addComment);

export default commentRoutes;
