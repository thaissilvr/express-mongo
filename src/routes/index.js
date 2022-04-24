const express = require("express")
const livrosRoutes = require("./livrosRoutes")

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({titulo: "Curso de Node"})
    })

    app.use(
        express.json(),
        livrosRoutes
    )
}

module.exports = routes