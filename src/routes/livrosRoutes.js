const express = require("express")
const LivroController = require("../controller/LivrosController")

const router = express.Router();

router
.get("/livros", LivroController.listarLivros)



module.exports = router