const express = require('express')
const app = express()
const port = 3000
// Hi
app.get('/', (req, res) => {
  res.send('Hello Mahesh!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})