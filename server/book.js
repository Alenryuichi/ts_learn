const express = require('express');
const app = express();
const port = 3000;

let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: '1984', author: 'George Orwell' },
];

app.use(express.json());

app.get('/', (req, res) => {
  // res.send('Hello World!');
  res.redirect('/books');
});

// GET /books
app.get('/books', (req, res) => {
  res.json(books);
});

// GET /books/:id
app.get('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const book = books.find((book) => book.id === id);
  if (book) {
    res.json(book);
  } else {
    res.status(404).send('Book not found');
  }
});

// POST /books
app.post('/books', (req, res) => {
  const book = req.body;
  book.id = books.length + 1;
  books.push(book);
  res.status(201).json(book);
});

// PUT /books/:id
app.put('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex !== -1) {
    const book = req.body;
    book.id = id;
    books[bookIndex] = book;
    res.json(book);
  } else {
    res.status(404).send('Book not found');
  }
});

// DELETE /books/:id
app.delete('/books/:id', (req, res) => {
  const id = parseInt(req.params.id);
  const bookIndex = books.findIndex((book) => book.id === id);
  if (bookIndex !== -1) {
    books.splice(bookIndex, 1);
    res.status(204).send();
  } else {
    res.status(404).send('Book not found');
  }
});

app.listen(port, () => {
  console.log(`Server listening at http://localhost:${port}`);
});