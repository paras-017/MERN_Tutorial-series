const express = require('express')
require('dotenv').config()
const app = express()
const port = process.env.PORT || 8000

app.get('/', (req, res) => {
  res.send('Hello World! my Friend')
})

app.listen(port, () => {
  console.log(`Example app listening on port http://localhost:${port}`)
})