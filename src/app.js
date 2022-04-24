const express = require("express")
const db = require("./config/dbConnect")
const livros = require("./models/Livro")
const routes = require("./routes/index")


db.on("error", console.log.bind(console, "Error de conexão"))
db.once("open", () => {
    console.log("Conexão com o banco feita com sucesso")
})

const app = express()
app.use(express.json())
routes(app);

// const livros = [
//     {id:1, "titulo": "Senhor dos Aneis"},
//     {id:2, "titulo": "O Hobbit"},
// ]

app.get("/livros/:id", (req, res) =>{
    const index = buscaLivro(re.params.id);
    res.status(200).json(livros)
})
app.post("/livros", (req, res) =>{
    livros.push(req.body);
    res.status(201).send("Livro cadastrado com sucesso")
})
app.put("/livros/:id", (req, res) =>{
    const index = buscaLivro(re.params.id);
    livros[index].titulo = req.body.titulo;
    res.status(200).json(livros)
})
app.delete("/livros/:id", (req, res) =>{
    const { id } = req.params
    const index = buscaLivro(id);
    livros.splice(index, 1)
    res.status(200).json(`Livro ${id} removido com sucesso`)
})
function buscaLivro(id) {
    return livros.findIndex(livro => livro.id == id)
}

module.exports = app