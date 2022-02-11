const express = require("express")
const { getAllSnacks, getSnack, createSnack, deleteSnack, editSnack} = require("../queries/snacks")
const snacks = express.Router()

snacks.get("/", async (req, res) => {
    console.log("GET /snacks")
    const snacks = await getAllSnacks()
    res.status(200).json(snacks)
})

snacks.get("/:id", async (req, res) => {
    console.log("GET /snacks/:id")
    const {id} = req.params
    const snack = await getSnack(id)
    res.status(200).json(snack)
})

snacks.post("/", async (req, res) => {
    console.log("POST /snacks")
    const snack = createSnack(req.body)
    res.status(200).json(snack)
})

snacks.delete("/:id", async (req, res) => {
    console.log("Delete /snacks/:id")
    const snack = await deleteSnack(req.params)
    res.status(200).json(snack) 
})

snacks.put('/:id', async (req, res) => {
    console.log("Put /:id")
    const song = await editSnack(req.params, req.body)
    res.status(200).json(song)
})

module.exports = snacks