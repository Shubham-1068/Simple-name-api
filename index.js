require("dotenv").config();
const express = require("express");
const data = require("./data.json")

const port = process.env.PORT || 8000;

const app = express();

app.get("/", (req,res)=>{
    const result = `<b>${data.map((e)=>{
        return `<div>Name: ${e.name}, Age: ${e.age}</div>`
    }).join("")}</b>`

    res.send(result)
})

app.get("/user", (req,res)=>{
    res.json(data)
})

app.listen(port,()=>{console.log(`Server started at port: ${port}`)})