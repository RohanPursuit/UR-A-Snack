const express = require("express")
const snacks = express.Router()

snacks.get("/", (req, res) => {
    console.log("GET /snacks")
    const snacks = [
        {id: 1, name: "Some snack"}, {id: 2, name: "another snack"},
    ]
    res.status(200).json(snacks)
})

snacks.get("/:id", (req, res) => {
    console.log("GET /snacks/:id")
    const {id} = req.params
    const snack = {id: 1, name: "Some snack"}
    res.status(200).json(snack)
})

snacks.post("/", (req, res) => {
    console.log("POST /snacks")
    console.log(req.body)
    const snack = req.body
    res.status(200).json(snack)
})

snacks.delete("/", (req, res) => {
    console.log("Delete /snacks")
    const snack = {id: 1, name: "Some snack"}
    res.status(200).json(snack) 
})

snacks.put('/:id', (req, res) => {
    console.log("Put /:id")
    const {id} = req.params
    const song = {id: 3, name: "Edited another snack"}
    res.status(200).json(song)
})

module.exports = snacks