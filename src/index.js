// para poder usar export/import en package.js poner lo de  "type": "module",
import express from "express"
import indexRoute from "./routes/indexRoutes.js"
import clientRoute from "./routes/clientesRoutes.js"

const app = express()

app.use(express.json()); // sirve para q entienda datos en json
app.use(indexRoute)
app.use(clientRoute)



app.listen(3000)
console.log("server funcionando en 3000")