const express = require('express');
const cupboard = require('./routes');
const bodyParser = require('body-parser')

const app = express();

app.use(bodyParser.json())

app.get('/', (req, res) => {
  res.status(200).send('Hello World, I am Autochef!');
});

app.get('/cupboard', cupboard.getAll);
app.post('/cupboard', cupboard.create);
app.get('/cupboard/:id', cupboard.get);
app.put('/cupboard/:id', cupboard.update);
app.del('/cupboard/:id', cupboard.del);
 
module.exports = app;
