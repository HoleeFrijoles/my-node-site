const express = require('express')
 
const app = express()
 
const PORT = 3000
 
app.listen(PORT, () => {
    console.log(`Server running at http://localhost:${PORT}`)
})

/*
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
*/

app.get('/', (req, res) => {
  res.sendFile(__dirname + '/public/index.html')
})

app.get('/about', (req, res) => {
  res.sendFile(__dirname + '/public/about.html')
})

app.get('/contact', (req, res) => {
  res.sendFile(__dirname + '/public/contact.html')
})

app.get('/info', (req, res) => {
  res.sendFile(__dirname + '/public/info.html')
})