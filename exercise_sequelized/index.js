import express from 'express';
import rootRoutes from './src/routes/rootRoutes.js';
import cors from "cors"

const app = express();
app.use(cors())
app.use(express.json());
app.use(express.static("."));
app.use(rootRoutes);

// khai bao api don gian
// api route, function xu li api
app.get("/", (req, res)=> {
    res.send("welcome to node 48")
})

const port =3000;
app.listen(port, ()=> {console.log(port)})
