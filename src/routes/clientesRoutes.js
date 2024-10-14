import {Router} from "express"
import {getClientes,crearCliente,updateCliente,deleteCliente} from "../controllers/clientesControllers.js"

const router = Router()

router.get("/getCLientes",getClientes)
router.post("/crearCliente",crearCliente)
router.put("/updateCliente",updateCliente)
router.delete("/deleteCliente",deleteCliente)

export default router;