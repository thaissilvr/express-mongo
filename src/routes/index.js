const express = require("express")
const livrosRoutes = require("./livrosRoutes")
const autoresRoutes = require("./autoresRoutes")

const routes = (app) => {
    app.route("/").get((req, res) => {
        res.status(200).send({titulo: "Curso de Node"})
    })

    app.use(
        express.json(),
        livrosRoutes,
        autoresRoutes
    )
}

module.exports = routes