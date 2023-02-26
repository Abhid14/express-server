const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!asdadadad')
})
app.get('/user/yash', (req, res) => {
    // data fetch from sql

    res.send('Hello World from yash!')// send 
  })

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})