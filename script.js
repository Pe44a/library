let myLibrary = [];

function book(title, author, pages, haveYouReadTheBook) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveYouReadTheBook = haveYouReadTheBook;
    }

    function addBookToLibrary(title, author, pages, haveYouReadTheBook) {
      const newBook = new book(title, author, pages, haveYouReadTheBook);
      myLibrary.push(newBook);
    }
