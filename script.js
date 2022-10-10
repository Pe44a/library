const body = document.querySelector('body');


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

    for (var i = 0; i < myLibrary.length; i++) {
        const div = document.createElement('div');
        body.appendChild(div);
        let text = document.createTextNode(myLibrary[i].title + ' ' + myLibrary[i].author + ' ' + myLibrary[i].pages+ ' ' + myLibrary[i].haveYouReadTheBook);
        div.appendChild(text);
    }

    