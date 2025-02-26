import express from "express";
import {
  rateRestaurant,
  rateByUserAndRes,
} from "../controllers/rateResController.js";

const rateResRoutes = express.Router();

rateResRoutes.post("/create-rateRes", rateRestaurant);
rateResRoutes.get("/:user_id/:res_id", rateByUserAndRes);

export default rateResRoutes;
