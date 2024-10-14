// para poder usar export/import en package.js poner lo de  "type": "module",
import express from "express"

const app = express()

app.listen(3000)
console.log("server funcionando en 3000")