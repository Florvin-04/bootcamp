const { books } = require("./books");
const express = require("express");
const fs = require("fs");
const app = express();

app.use(express.json());

app.get("/", (req, res) => {
  res.send("Hello");
});

app.get("/home", (req, res) => {
  fs.readFile("index.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

app.get("/about", (req, res) => {
  fs.readFile("about.html", function (err, data) {
    res.writeHead(200, { "Content-Type": "text/html" });
    res.write(data);
    res.end();
  });
});

app.get("/api/books", (req, res) => {
  res.send(books);
});

app.get("/api/books/:id", (req, res) => {
  const bookId = req.params.id;
  const book = books.filter((book) => book.id == Number(bookId));

  console.log(book[0]);

  if (book.length != 0) {
    res.send(book);
  } else {
    res.status(404);
    res.send("Book Not Found");
  }
});

app.put("/api/books", (req, res) => {
  const newBook = {
    id: books.length,
    title: req.body.title,
  };
  console.log(req.body);
  books.push(newBook);
  res.send(newBook);
});

app.put("/api/books/:id", (req, res) => {
  let book = false;
  for (let i = 0; i < books.length; i++) {
    if (books[i].id == Number(req.params.id)) {
      book = books[i];
      break;
    }
  }

  console.log(book);

  if (book) {
    console.log(req.body);
    book.title = req.body.title;
    book.genre = req.body.genre;
    res.send(book);
  } else {
    res.status(404);
    res.send("Book not found!");
  }

    // const bookId = req.params.id;
    // const book = books.filter((book) => book.id == Number(bookId));

    // if (book.length != 0) {
    //   book[0].req.body.title;
    //   book[0].req.body.genre;

    //   res.send(book[0]);
    // } else {
    //   res.status(404);
    //   res.send("Book Not Found");
    // }
});

const port = 5000;
app.listen(port, () => console.log("Server is listening on port", port));
