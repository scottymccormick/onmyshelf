const express = require('express');
const app = express();
const PORT = process.env.PORT || 9001;


app.use(express.static('dist'));

app.get('/books', (req, res) => {
  const books = {
    shelf: 'MyShelf',
    books: [
      {
        title: 'Dune'
      },
      {
        title: 'Beloved'
      }
    ]
  };
  res.send(books);
});

app.listen(PORT, () => {
  console.log('Listening on the port', PORT);
});