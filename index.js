// let check = "welcome nodejs 48";
// console.log(check)

import express from 'express';
import connect from './db.js';
import rootRoutes from './src/routes/rootRoutes.js';

const app = express();
app.use(express.json())

app.use(rootRoutes)

// khai bao api don gian
// api route, function xu li api
app.get("/", (req, res)=> {
    res.send("welcome to node 48")
})

app.get("/test/:id", (req, res)=> {
    const id = req.params.id
    res.send("test api "+ id)
})

app.get("/get-query", (req, res)=>{
    const query = req.query;
    res.send(query)
})

app.get("/get-header", (req, res)=>{
    const header = req.headers;
    res.send(header)
})

app.post("/get-body", (req, res)=>{
    const body = req.body;
    console.log(body)
    res.send(body)
})

// app.get("/get-users", async (req, res)=>{
//     try {
//     const [data] = await connect.query(`
//         SELECT * FROM users
//     `)
//     return res.send(data)
//     }catch(error){
//         return res.send(`Error: ${error}`)
//     }
// })

// app.post("/create-users", async (req, res)=>{
//     try {
//         const queryString = `INSERT INTO users (full_name, email, pass_word) VALUES
//         (?, ?, ?)`;
//         const body = req.body;
//         const {full_name, email, pass_word} = body;
//         const [data] = await connect.execute(queryString, [full_name, email, pass_word])
    
//     return res.send(data)
//     }catch(error){
//         return res.send(`Error: ${error}`)
//     }
// })

const port =3000;
app.listen(port, ()=> {console.log(port)})
