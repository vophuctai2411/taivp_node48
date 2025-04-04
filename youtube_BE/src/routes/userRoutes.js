import express from "express";
import connect from "../../db.js";
import {
  getUsers,
  createUser,
  uploadAvatar,
  uploadAvatarCloud,
  uploadMultipleImgs,
} from "../controllers/userController.js";
import { uploadCloud } from "../config/upload.cloud.js";
import { upload } from "../config/upload.js";
import { middlewareToken } from "../config/jwt.js";

const userRoutes = express.Router();

userRoutes.get("/get-users", getUsers);

userRoutes.post("/create-user", middlewareToken, createUser);

userRoutes.post("/upload-avatar", upload.single("avatar"), uploadAvatar);

userRoutes.post(
  "/upload-multiple-imgs",
  upload.array("imgs"),
  uploadMultipleImgs
);

userRoutes.post(
  "/upload-avatar-cloud",
  uploadCloud.single("avatar"),
  uploadAvatarCloud
);

export default userRoutes;
