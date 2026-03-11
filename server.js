const express = require('express')
 
const app = express()
 
const PORT = 3000
 
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

app.get('/', (req, res) => {
    res.send("<h1>Home</h1>")
})

app.get('/', (req, res) => {
    res.send("<h1>About</h1>")
})

app.get('/', (req, res) => {
    res.send("<h1>Gis & Kimonos</h1>")
})

app.get('/', (req, res) => {
    res.send("<h1>Rashguards & Shorts</h1>")
})

app.get('/', (req, res) => {
    res.send("<h1>Gloves & Shin Pads</h1>")
})

app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})