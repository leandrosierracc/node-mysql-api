import {pool} from "../db.js"

export const getClientes = async (req,res) => {
    const [rows] = await pool.query("select * from clientes")
    res.json(rows)
}

export const getClienteById = async (req,res) => {
    const [rows] = await pool.query("select * from clientes where id = ?", [req.params.id])
    if (rows.length <= 0) {
        return res.status(404).json({
            "message": "Cliente no encontrado"
        })
    }
    res.json(rows[0])
}

export const crearCliente = async (req,res) => {
    const {nombre,edad,profesion} = req.body
    const [rows] = await pool.query("insert into clientes(nombre,edad,profesion) values (?,?,?)", [nombre,edad,profesion])
    // res.send("Dado de alta correctamente:")    
    res.send(rows)
}

export const updateCliente = (req,res) => {
    res.send("Actualizar cliente")
}

export const deleteCliente = (req,res) => {
    res.send("Borrar cliente")
}