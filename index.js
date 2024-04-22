const express = require('express')
const cors = require('cors');
const app = express()
const port = 3001

// Allow requests from localhost:3000
app.use(cors({ origin: 'http://localhost:3000' }));

app.get('/user-data', (req, res) => {
  res.send({
    id: 'a-user-uuid',
    name: 'John Smith',
    address: 'Lorem Ipsum 12, 1234 Fancy City, Country'
  })
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})