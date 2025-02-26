import express from "express";
import { createOrder } from "../controllers/orderController.js";

const orderRoutes = express.Router();

orderRoutes.post("/create", createOrder);

export default orderRoutes;
