const express = require('express');
const app = express();

const port = 8080;


app.use(express.static('public'))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/login', (req, res) => {
  console.log(req.query);
})

app.get('/params', (req, res) => {
  console.log(req.query);
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})