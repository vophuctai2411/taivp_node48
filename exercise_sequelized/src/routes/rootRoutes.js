import express from "express";
import likeResRoutes from "./likeResRoutes.js";
import rateResRoutes from "./rateResRoutes.js";
import orderRoutes from "./orderRoutes.js";

const rootRoutes = express.Router();

rootRoutes.use("/likeRes", likeResRoutes);
rootRoutes.use("/rateRes", rateResRoutes);
rootRoutes.use("/order", orderRoutes);

export default rootRoutes;
