const express = require('express');
const app = express();
const PORT = process.env.PORT || 9001;


app.use(express.static('dist'));

app.get('/books', (req, res) => {
  const books = {
    shelf: 'MyShelf',
    books: [
      {
        id: 1,
        title: 'Dune',
        author: 'Frank Herbert'
      },
      {
        id: 2,
        title: 'Beloved',
        author: 'Toni Morrison'
      },
      {
        id: 3,
        title: 'How to Be an Antiracist',
        author: 'Ibram X. Kendi'
      },
      {
        id: 4,
        title: 'Red Storm Rising',
        author: 'Tom Clancy'
      }
    ]
  };
  res.send(books);
});

app.listen(PORT, () => {
  console.log('Listening on the port', PORT);
});