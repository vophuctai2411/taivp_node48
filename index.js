// let check = "welcome nodejs 48";
// console.log(check)

import express from 'express';

const app = express();



// khai bao api don gian
// api route, function xu li api
app.get("/", (req, res)=> {
    res.send("welcome to node 48")
})

app.get("/test", (req, res)=> {
    res.send("test api 7899")
})


const port =3000;
app.listen(port, ()=> {console.log(port)})
