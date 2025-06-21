const express = require('express')

const app = express()
const port = 4000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) =>{
    res.send('basimtanveerdotcom')
})
app.get('/youtube', (req, res) =>{
    res.send('<h2>Basim Tanveer Jutt</h2>')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})