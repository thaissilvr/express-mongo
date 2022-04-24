const autores = require("../models/Autor")

class AutoresController {
    static listarAutores = (req, res) => {
        autores.find((error, autores) =>{
            res.status(200).json(autores)
        })
    }
    static listarAutorPorId = (req, res) => {
        const id = req.params.id;
        autores.findById(id, (err, autores) => {
            if(err) {
                res.status(400).send({message: `${err.message} - id do autor não localizado`})
            } else {
                res.status(200).send(autores)
            }
        })
    }
    static cadastrarAutor = (req, res) =>{
        const autor = new autores(req.body);
        autor.save((err) =>{
            if(err) {
                res.status(500).send({message: `${err} - falha ao cadastrar autor.`})
            } else {
                res.status(201).send(autor.toJSON())
            }
        })
    }

    static atualizarAutor = (req, res) =>{
        const id = req.params.id;
        autores.findByIdAndUpdate(id, {$set : req.body}, (err) =>{
            if(!err) {
                res.status(200).send({message: "autor atualizado com sucesso"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
    static excluirAutor = (req, res) => {
        const id = req.params.id;

        autores.findByIdAndDelete(id, (err) => {
            if(!err) {
                res.status(200).send({message: "autor removido com sucesso"})
            } else {
                res.status(500).send({message: err.message})
            }
        })
    }
}

module.exports = AutoresController