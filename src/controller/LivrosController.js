const livros = require("../models/Livro")

class LivroController {
    static listarLivros = (req, res) => {
        livros.find((error, livros) =>{
            res.status(200).json(livros)
        })
    }
}

module.exports = LivroController