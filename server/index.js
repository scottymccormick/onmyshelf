import express from 'express';
import session from 'express-session';
import bodyParser from 'body-parser';
import path from 'path';
import './config.js';

const app = express();
const PORT = process.env.PORT || 9001;

import mysqlConnection from './connection.js';
import testShelf from '../test/shelf.js';

app.use(express.static('dist'));
app.use(session({
  secret: process.env.SESSION_SECRET,
  resave: true,
  saveUninitialized: true
}));
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.get('/books', (req, res) => {
  const books = testShelf;
  res.send(books);
});

app.get('/users', (req, res) => {
  const user = mysqlConnection.query(`SELECT username FROM user`, function(error, results, fields) {
    if (error) {
      console.log('error on users request', error.message);
      res.status(500).send('mysql error');
      return;
    }
    res.send(results);
  });
});

app.listen(PORT, () => {
  console.log('Listening on the port', PORT);
});