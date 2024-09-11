
const express = require('express')
const client = require('./express.js')
const app = express()

app.use(express.json())

app.post('/', async (req, res) => {
    const name = req.body;
    console.log(name)
    // const data = await client.rPush("dommyuser3", JSON.stringify(name))
    const data = await client.set("dommyuser4", `${name}`)
    console.log("inserted")
    // console.log(data)
})

app.listen(3000, () => {
    console.log("connected.")
})
