const body = document.querySelector('body');
const newBook = document.querySelector('#newBook');
const form = document.querySelector('.form');
const submitForm = document.querySelector('#submit-form');
const bookCards = document.querySelector('.libray')

// Input values
let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author');
let pagesInput = document.querySelector('#pages');
let haveYouReadTheBookInput = document.querySelector('#yes');


let myLibrary = [];

function book(title, author, pages, haveYouReadTheBook) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.haveYouReadTheBook = haveYouReadTheBook;
    }

    newBook.addEventListener('click', () => {
        form.classList.toggle('form-invisible');
    });

    submitForm.addEventListener('click', submitFormData)

    function addBookToLibrary(title, author, pages, haveYouReadTheBook) {
      const newBook = new book(title, author, pages, haveYouReadTheBook);
      myLibrary.push(newBook);
    }

    function resetInputValues() {
      titleInput.value = null;
      authorInput.value = null;
      pagesInput.value = null;
      haveYouReadTheBookInput.value = null;
    }

    function displayBook() {

          // Book div
          const book = document.createElement('div');
          book.classList.add('book')
          bookCards.appendChild(book);

          // Text divs
          let titleDisplay = document.createElement('div');
          titleDisplay.textContent = myLibrary.slice(-1)[0].title;
          book.appendChild(titleDisplay);

          let authorDisplay = document.createElement('div');
          authorDisplay.textContent = myLibrary.slice(-1)[0].author;
          book.appendChild(authorDisplay);

          let pagesDisplay = document.createElement('div');
          pagesDisplay.textContent = myLibrary.slice(-1)[0].pages;
          book.appendChild(pagesDisplay);

          let haveYouReadTheBookDisplay = document.createElement('div');
          haveYouReadTheBookDisplay.textContent = myLibrary.slice(-1)[0].haveYouReadTheBook;
          book.appendChild(haveYouReadTheBookDisplay);
  }
  
    function submitFormData(e) {
      e.preventDefault();

      // Checks whether the checkbox is checked
      if(haveYouReadTheBookInput.checked) {
        haveYouReadTheBookInput.value = 'Have read';
      } else{
        haveYouReadTheBookInput.value = 'Not read';
      }
    
      addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, haveYouReadTheBookInput.value);

      displayBook();
      resetInputValues()
    
      form.classList.toggle('form-invisible');
    }