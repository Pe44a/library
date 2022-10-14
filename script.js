const body = document.querySelector('body');
const newBook = document.querySelector('#newBook');
const form = document.querySelector('.form');
const submitForm = document.querySelector('#submit-form');

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
          const div = document.createElement('div');
          body.appendChild(div);
          let titleDisplay = myLibrary.slice(-1)[0].title; 
          let authorDisplay = myLibrary.slice(-1)[0].author;
          let pagesDisplay = myLibrary.slice(-1)[0].pages;
          let haveYouReadTheBookDisplay = myLibrary.slice(-1)[0].haveYouReadTheBook;

          let lastBook = myLibrary.slice(-1);
          let text = document.createTextNode(titleDisplay + ' ' + authorDisplay + ' ' + pagesDisplay+ ' ' + haveYouReadTheBookDisplay);
          div.appendChild(text);
  }
  
    function submitFormData(e) {
      e.preventDefault();

      // Checks whether the checkbox is checked
      if(haveYouReadTheBookInput.checked) {
        haveYouReadTheBookInput.value = 'Yes';
      } else{
        haveYouReadTheBookInput.value = 'No';
      }
    
      addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, haveYouReadTheBookInput.value);

      displayBook();
      resetInputValues()
    
      form.classList.toggle('form-invisible');
    }