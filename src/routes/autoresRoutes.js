const express = require("express")
const AutoresController = require("../controller/AutoresController")

const router = express.Router();

router
.get("/autores", AutoresController.listarAutores)
.get("/autores/:id", AutoresController.listarAutorPorId)
.post("/autores", AutoresController.cadastrarAutor)
.put("/autores/:id", AutoresController.atualizarAutor)
.delete("/autores/:id", AutoresController.excluirAutor)

module.exports = router