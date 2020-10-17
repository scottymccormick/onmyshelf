const express = require('express');
require('dotenv').config();

const app = express();
const PORT = process.env.PORT || 9001;

const mysqlConnection = require('./connection');
const testShelf = require('../test/shelf');

app.use(express.static('dist'));

app.get('/books', (req, res) => {
  const books = testShelf;
  res.send(books);
});

app.listen(PORT, () => {
  console.log('Listening on the port', PORT);
});