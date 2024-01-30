const express = require('express')
// Package required to handle SIGINT and SIGTERM 
const process=require('process')

const app = express()
const port = 3000

// Instructions for processing of SIGINT and SIGTERM:
// Why is this necessary? -> The app does not finish when Ctrl+C at PowerShell,
// so to stop the corresponding process   >> docker kill <containerid> is necessary
// According to node.js doc https://nodejs.org/api/process.html, SIGTERM is not 
// supported on Windows
// The express package is already in node_modules, so 'npm install' is not required
// > SIGTERM signal is sent at docker console by performing "docker stop <container-id>"
process.on('SIGINT', ()=> {
    console.log('Application is being interrupted...')
    process.exit(0)
})

app.get('/', (req, res) => {
  res.send('This express web application was executed by Docker container!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})