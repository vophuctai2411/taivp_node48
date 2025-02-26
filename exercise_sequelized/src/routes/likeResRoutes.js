import express from "express";
import {
  dislikeRestaurant,
  likeRestaurant,
  likeByUserAndRes,
} from "../controllers/likeResController.js";

const likeResRoutes = express.Router();

likeResRoutes.post("/create-likeRes", likeRestaurant);
likeResRoutes.post("/dislike", dislikeRestaurant);
likeResRoutes.get("/:user_id/:res_id", likeByUserAndRes);

export default likeResRoutes;
