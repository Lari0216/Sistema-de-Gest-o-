import express from "express"
import pool from "../back/db.js"
import cors from "cors"

const PORT = 3000
const app = express ()

app.use(cors())
app.use(express.json())

app.get('/clientes', async (req,res) => {
    const clientes = await pool.query("SELECT * FROM Clientes")
    res.json(clientes.rows)
})

app.post('/clientes', async (req, res) => {
    const novoCliente = await 
})

app.listen(PORT, () =>{
    console.log("API para MAIORES rodando em: http://localhost:3000")
})
