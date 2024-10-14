// para poder usar export/import en package.js poner lo de  "type": "module",
import express from "express"
import {pool} from "./db.js"

const app = express()

app.get("/probarCnn", async (req,res) => {
    const result = await pool.query("select * from clientes")
    res.json(result)
})

app.listen(3000)
console.log("server funcionando en 3000")