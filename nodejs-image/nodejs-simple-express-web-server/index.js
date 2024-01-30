const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('This express web application was executed by Docker container!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})