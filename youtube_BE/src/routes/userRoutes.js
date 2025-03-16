import express from "express";
import connect from "../../db.js";
import {
  getUsers,
  createUser,
  uploadAvatarCloud,
} from "../controllers/userController.js";
import { uploadCloud } from "../config/upload.cloud.js";
import { middlewareToken } from "../config/jwt.js";

const userRoutes = express.Router();

userRoutes.get("/get-users", getUsers);

userRoutes.post("/create-user", middlewareToken, createUser);

userRoutes.post(
  "/upload-avatar-cloud",
  uploadCloud.single("avatar"),
  uploadAvatarCloud
);

export default userRoutes;
