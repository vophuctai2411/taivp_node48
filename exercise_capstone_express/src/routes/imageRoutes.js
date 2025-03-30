import express from "express";
import {
  createImage,
  listImage,
  updateImage,
  deleteImage,
  getImageType,
  createImageType,
  findImageByName,
  findImageAndUserById,
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

imageRoutes.post("/create-image", createImage);
imageRoutes.get("/get-image-types", getImageType);
imageRoutes.put("/update-image/:imageId", updateImage);
imageRoutes.delete("/delete-image/:imageId", deleteImage);
imageRoutes.post("/create-image-type", createImageType);

export default imageRoutes;
