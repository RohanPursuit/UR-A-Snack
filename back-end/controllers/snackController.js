const express = require("express")
const { getAllSnacks, getSnack, createSnack, deleteSnack, editSnack} = require("../queries/snacks")
const snacks = express.Router()

snacks.get("/", async (req, res) => {
    console.log("GET /snacks")
    const snacks = await getAllSnacks()
    res.status(200).json({
        "success":true,
        "payload": snacks,
      })
})

snacks.get("/:id", async (req, res) => {
    console.log("GET /snacks/:id")
    const {id} = req.params
    const snack = await getSnack(id)
    if(snack.received === 0){
        return res.status(404).json({
            "success":false,
            "payload": "item not found",
          })
    }
    res.status(200).json({
        "success":true,
        "payload": snack,
      })
})

snacks.post("/", async (req, res) => {
    console.log("POST /snacks")
    const {body} = req
    if(!body.image) {
        body.image = "https://dummyimage.com/400x400/6e6c6e/e9e9f5.png&text=No+Image"
    }

    body.name = body.name.split(' ').map(el => {
        if(el.length > 2){
            return el[0].toUpperCase() + el.slice(1).toLowerCase()
        }
        return el
    }).join(" ")
    
    const snack = await createSnack(body)
    if(!snack.name){
       return res.status(422).json({error: "Some error"})
    }
    res.status(200).json({
        "success":true,
        "payload": snack,
      })
})

snacks.delete("/:id", async (req, res) => {
    console.log("Delete /snacks/:id")
    const snack = await deleteSnack(req.params.id)
    if(snack.received === 0){
        return res.status(404).json({
            "success":false,
            "payload": "item not found",
          })
    }
    res.status(200).json({
        "success":true,
        "payload": snack,
      })
})

snacks.put('/:id', async (req, res) => {
    console.log("Put /:id")
    const song = await editSnack(req.params.id, req.body)
    res.status(200).json(song)
})

module.exports = snacks