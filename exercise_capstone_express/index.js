// let check = "welcome nodejs 48";
// console.log(check)

import express from "express";
import rootRoutes from "./src/routes/rootRoutes.js";
import cors from "cors";

const app = express();
app.use(cors());
app.use(express.json());
app.use(express.static("."));
app.use(rootRoutes);

const port = 3000;
app.listen(port, () => {
  console.log(port);
});
