const body = document.querySelector('body');
const newBook = document.querySelector('#new-book');
const form = document.querySelector('.form');
const submitForm = document.querySelector('#submit-form');
const bookCards = document.querySelector('.libray');

// Input values
let titleInput = document.querySelector('#title');
let authorInput = document.querySelector('#author');
let pagesInput = document.querySelector('#pages');
let readInput = document.querySelector('#yes');


let myLibrary = [];

function book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    }

    //Toggle input form
    newBook.addEventListener('click', () => {
        form.classList.toggle('form-invisible');
    });

    submitForm.addEventListener('click', submitFormData);

    function addBookToLibrary(title, author, pages, read) {
      const newBook = new book(title, author, pages, read);
      myLibrary.push(newBook);
    }

    function resetInputValues() {
      titleInput.value = null;
      authorInput.value = null;
      pagesInput.value = null;
      readInput.value = null;
    }

    function clearBookCards() {
      document.querySelectorAll('.book').forEach(e => e.remove());
    } 


    function createBook() {
      //Clears out book cards to eliminate duplication 
      clearBookCards()
      for (let i = 0; i < myLibrary.length; i++) {
        displayBook(myLibrary[i]);
      }
    }


  function displayBook(book) {
    
    // Book div
    const bookDiv = document.createElement('div');
    bookDiv.classList.add('book');
    bookDiv.setAttribute('id', myLibrary.indexOf(book))
    bookCards.appendChild(bookDiv);

    // Text divs
    let titleDisplay = document.createElement('div');
    titleDisplay.textContent = book.title;
    bookDiv.appendChild(titleDisplay);

    let authorDisplay = document.createElement('div');
    authorDisplay.textContent = book.author;
    bookDiv.appendChild(authorDisplay);

    let pagesDisplay = document.createElement('div');
    pagesDisplay.textContent = book.pages;
    bookDiv.appendChild(pagesDisplay);

    //Button
    let readDisplay = document.createElement('button');
    readDisplay.classList.add('read-book');
    readDisplay.textContent = book.read;
    bookDiv.appendChild(readDisplay);

    // Checks whether the book have been read, if so adds appropriate class
    if(book.read === 'Have read') {
      readDisplay.classList.toggle('have-read');
    } else {
      readDisplay.classList.toggle('have-not-read');
    }

    //Changes text and buttons class according to situation
    readDisplay.addEventListener('click', function() {

      if(readDisplay.classList.contains('have-read')) {
        readDisplay.classList.toggle('have-read');
        readDisplay.classList.toggle('have-not-read');
          readDisplay.textContent = 'Not read';
          book.read = 'Not read';
      } else {
        readDisplay.classList.toggle('have-read');
        readDisplay.classList.toggle('have-not-read');
          readDisplay.textContent = 'Have read';
          book.read = 'Have read';
      }
    });  
   }
  
    function submitFormData(e) {
      e.preventDefault();

      // Checks whether the checkbox is checked
      if(readInput.checked) {
        readInput.value = 'Have read';
      } else{
        readInput.value = 'Not read';
      }
    
      addBookToLibrary(titleInput.value, authorInput.value, pagesInput.value, readInput.value);

      createBook();
      resetInputValues()
    
      form.classList.toggle('form-invisible');
    }