import express from "express";
import {
  listImage,
  deleteImage,
  findImageByName,
  findImageAndUserById,
  findCommentByImageId,
  isSaveImage,
  findImageByUserId,
  insertImage,
} from "../controllers/imageController.js";

import { middlewareToken } from "../config/jwt.js";

const imageRoutes = express.Router();

imageRoutes.get("/list-image", middlewareToken, listImage);
imageRoutes.get("/find-image-by-name", middlewareToken, findImageByName);
imageRoutes.get(
  "/find-image-and-user-by-id/:id",
  middlewareToken,
  findImageAndUserById
);
imageRoutes.get(
  "/find-comment-by-image-id/:id",
  middlewareToken,
  findCommentByImageId
);
imageRoutes.get("/is-save-image/:id", middlewareToken, isSaveImage);
imageRoutes.get(
  "/find-image-by-userid/:userid",
  middlewareToken,
  findImageByUserId
);
imageRoutes.delete("/delete-image/:imageId", middlewareToken, deleteImage);
imageRoutes.post("/create-image", middlewareToken, insertImage);

export default imageRoutes;
