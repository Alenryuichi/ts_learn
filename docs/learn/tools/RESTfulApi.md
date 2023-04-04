RESTful API 是一种基于 REST（Representational State Transfer）架构风格的 Web API 设计规范，它使用 HTTP 协议中的 GET、POST、PUT、DELETE 等方法来实现对资源的操作。RESTful API 的设计原则包括以下几点：
1. 资源的标识

    RESTful API 中的每个资源都应该有一个唯一的标识符，通常使用 URL 来表示。   

2. 资源的操作

    RESTful API 中的每个资源都可以通过 HTTP 方法来进行操作，例如 GET、POST、PUT、DELETE 等。

3. 资源的表现

    RESTful API 中的每个资源都应该有一个清晰的表现形式，通常使用 JSON 或 XML 格式来表示。

4. 自描述消息

    RESTful API 中的每个消息都应该包含足够的信息，以便客户端能够理解它的含义。

5. 无状态通信

    RESTful API 中的每个请求都应该包含足够的信息，以便服务器能够理解它的含义，而不需要依赖于之前的请求。

通过遵循 RESTful API 的设计原则，可以使 API 更加清晰、易于理解和维护。RESTful API 已经成为 Web API 设计的主流规范，被广泛应用于各种 Web 应用程序和移动应用程序中。


以下是一个简单的 RESTful API 的示例代码，使用 Node.js 和 Express 框架实现：
```javascript
const express = require('express');
const app = express();
const port = 3000;

let books = [
  { id: 1, title: 'The Great Gatsby', author: 'F. Scott Fitzgerald' },
  { id: 2, title: 'To Kill a Mockingbird', author: 'Harper Lee' },
  { id: 3, title: '1984', author: 'George Orwell' },
];

app.use(express.json());

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
```
上述代码实现了一个简单的图书管理系统的 RESTful API，包括以下几个路由：
- GET /books：获取所有图书的列表
- GET /books/:id：获取指定 ID 的图书的详细信息
- POST /books：添加一本新的图书
- PUT /books/:id：更新指定 ID 的图书的信息
- DELETE /books/:id：删除指定 ID 的图书

这个示例代码使用了 Express 框架来实现路由和中间件，使用了 JSON 格式来表示图书的信息。希望这个示例代码能够帮助你理解 RESTful API 的基本实现方式。