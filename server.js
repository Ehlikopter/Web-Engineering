const express = require('express')
const app = express()
const port = 3000
const path = require('path')

// app configuration
app.use(express.static(path.join(__dirname, 'static')))

// app path routing
app.get('/', (req, res) => {
  res.sendFile(__dirname + '/html/index.html');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})