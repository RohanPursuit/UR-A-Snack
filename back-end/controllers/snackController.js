const express = require("express")
const snacks = express.Router()

snacks.get("/", (req, res) => {
    console.log("GET /snacks")
    const snacks = {id: 1, name: "Some snack", id: 2, name: "another snack"}
    response.status(200).json(snacks)
})

snacks.get("/:id", (req, res) => {
    console.log("GET /snacks/:id")
    const snack = {id: 1, name: "Some snack"}
    response.status(200).json(snack)
})

module.exports = snacks