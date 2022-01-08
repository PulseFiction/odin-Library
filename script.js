const userTitle = document.querySelector('#title');
const userAuthor = document.querySelector('#author');
const userPages = document.querySelector('#pages');

const yesBox = document.querySelector('#yes');
const noBox = document.querySelector('#no');

const bookBtn = document.querySelector('.add__book');

let myLibrary = [];

const container = document.querySelector('.container');

bookBtn.addEventListener('click', addBookToLibrary);



function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
   // this.info = function() {
   //     return 
   // }
}

function addBookToLibrary() {
    const titleValue = userTitle.value;
    const authorValue = userAuthor.value;
    const pagesValue = userPages.value;
    let userBook = {}
    if (yesBox.checked === true) {
        userBook = new Book(titleValue, authorValue, pagesValue, 'Read')
    myLibrary.push(userBook)       
    } else {
        userBook = new Book(titleValue, authorValue, pagesValue, 'Not read')
    myLibrary.push(userBook)
    }

    console.log(myLibrary)
   
    
    const cardDiv = document.createElement('div');
    const newHeading = document.createElement('h2');
    const authParagraph = document.createElement('p');
    const pagesParagraph = document.createElement('p');
    const readDiv = document.createElement('div');
    const line = document.createElement('hr')

    cardDiv.classList.add('card');
    newHeading.classList.add('card__title');
    
    authParagraph.classList.add('card__author');
    pagesParagraph.classList.add('card__pages');


    if (userBook.read === 'Read') {
        readDiv.classList.add('card__read')
    } else {
        readDiv.classList.add('card__not-read')
    }
    
    newHeading.textContent = userBook.title;
    authParagraph.textContent = 'By ' + userBook.author;
    pagesParagraph.textContent = 'Pages: ' + userBook.pages;
    readDiv.textContent = userBook.read;
    
    cardDiv.appendChild(newHeading);
    cardDiv.appendChild(line);
    cardDiv.appendChild(authParagraph);
    cardDiv.appendChild(pagesParagraph);
    cardDiv.appendChild(readDiv)
    container.appendChild(cardDiv);
    
    

    cardDiv.addEventListener('click', () => {
        cardDiv.removeChild(newHeading);
        cardDiv.removeChild(line);
        cardDiv.removeChild(authParagraph);
        cardDiv.removeChild(pagesParagraph);
        cardDiv.removeChild(readDiv);
        container.removeChild(cardDiv)
    })
}




