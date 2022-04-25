const express = require("express")
const LivroController = require("../controller/LivrosController")

const router = express.Router();

router
.get("/livros", LivroController.listarLivros)
.get("/livros/busca", LivroController.listarLivroPorEditora)
.get("/livros/:id", LivroController.listarLivrosPorId)
.post("/livros", LivroController.cadastrarLivro )
.put("livros/:id", LivroController.atualizarLivro)
.delete("livros/:id", LivroController.excluirLivro)

module.exports = router