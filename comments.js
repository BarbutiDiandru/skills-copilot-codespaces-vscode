// Create web server
// npm install express
// npm install body-parser
// npm install cors

const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors');

const app = express();
app.use(cors());
app.use(bodyParser.json());

const comments = {};

app.get('/comments', (req, res) => {
  res.send(comments);
});

app.post('/comments', (req, res) => {
  const id = Math.floor(Math.random() * 100000000);
  comments[id] = {
    id,
    content: req.body.content
  };

  res.status(201).send(comments[id]);
});

app.listen(4001, () => {
  console.log('Listening on 4001');
});