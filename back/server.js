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

app.put('/clientes/:id', async (req, res) => {
    const {id} = req.params
    const {nome, email} = req.body
    const atualizarCliente = await pool.query('UPDATE Clientes SET nome = $1, email = $2, WHERE id = $3 * RETURNINGN',[nome, email, id])
    res.json(atualizarCliente.rows[0])
})



// =============================================== COLABORADORES =================================================================

app.get('/colaboradores', async (req,res) => {
    const colaboradores = await pool.query("SELECT * FROM Colaboradores")
    res.json(colaboradores.rows)
})

app.put('/colaboradores/:id', async (req, res) => {
    const {id} = req.params
    const {nome, email} = req.body
    const atualizarColaborador = await pool.query('UPDATE Colaboradores SET nome = $1, email = $2, WHERE id = $3 * RETURNINGN',[nome, email, id])
    res.json(atualizarColaborador.rows[0])
})

// =============================================== GERENCIAMENTO =================================================================

app.listen(PORT, () =>{
    console.log("API para MAIORES rodando em: http://localhost:3000")
})
