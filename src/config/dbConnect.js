const mongoose = require("mongoose")

mongoose.connect("mongodb+srv://alura:123@alura.vxumy.mongodb.net/alura-node");

const db = mongoose.connection

module.exports = db