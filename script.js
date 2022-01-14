const userTitle = document.querySelector('#title');
const userAuthor = document.querySelector('#author');
const userPages = document.querySelector('#pages');
const yesBox = document.querySelector('#yes');
const noBox = document.querySelector('#no');
const bookBtn = document.querySelector('.add__book');

let myLibrary = [];

const container = document.querySelector('.container');

bookBtn.addEventListener('click', addBookToLibrary);

yesBox.addEventListener('click', () => yesBox.checked === true ? noBox.checked = false : yesBox.checked = false);
noBox.addEventListener('click', () => noBox.checked === true ? yesBox.checked = false : noBox.checked = false);



class Book {
    constructor(title, author, pages, read) {
        this.title = title
        this.author = author
        this.pages = pages
        this.read = read
    }
};



   
function addBookToLibrary() {
    const titleValue = userTitle.value;
    const authorValue = userAuthor.value;
    let pagesValue = userPages.value;
    
     if (pagesValue > 5000) {
        pagesValue = 5000;
    };

    
    let userBook = {}

    if (yesBox.checked === true) {
        userBook = new Book(titleValue, authorValue, pagesValue, 'Read')
        myLibrary.push(userBook)       
    } else {
        userBook = new Book(titleValue, authorValue, pagesValue, 'Not read')
        myLibrary.push(userBook)
    };

    console.log(myLibrary)


    /* New Elements */

    const cardDiv = document.createElement('div');
    const newHeading = document.createElement('h2');
    const line = document.createElement('hr')
    const authParagraph = document.createElement('p');
    const pagesParagraph = document.createElement('p');
    const buttonDiv = document.createElement('div');
    const readBtn = document.createElement('button');
    const removeBtn = document.createElement('button')
    

    /* Text contents */
    
    
    newHeading.textContent = userBook.title;
    authParagraph.textContent = 'By ' + userBook.author;
    pagesParagraph.textContent = 'Pages: ' + userBook.pages;
    readBtn.textContent = userBook.read;
    removeBtn.textContent = 'Remove'
    
    /* Appends */

    cardDiv.appendChild(newHeading);
    cardDiv.appendChild(line);
    cardDiv.appendChild(authParagraph);
    cardDiv.appendChild(pagesParagraph);
    cardDiv.appendChild(buttonDiv)
    container.appendChild(cardDiv);
    buttonDiv.appendChild(readBtn);
    buttonDiv.appendChild(removeBtn);
    
    
    /* Class Lists */

    cardDiv.classList.add('card');
    newHeading.classList.add('card__title');
    authParagraph.classList.add('card__author');
    pagesParagraph.classList.add('card__pages');
    buttonDiv.classList.add('button-container');
    removeBtn.classList.add('remove')

    if (userBook.read === 'Read') {
        readBtn.classList.add('card__read')
    } else {
        readBtn.classList.add('card__not-read')
    }



    if (newHeading.textContent.length > 50) {
        cardDiv.style.width = 36 + 'rem'
        line.style.width = 36 + 'rem'
        newHeading.style.fontSize = 8 + 'pt'
    } else if (newHeading.textContent.length > 20) {
        cardDiv.style.width = 28 + 'rem'
        line.style.width = 28 + 'rem'
        newHeading.style.fontSize = 12 + 'pt'
    } else if (newHeading.textContent.length > 10) {
        cardDiv.style.width = 25 + 'rem'
        line.style.width = 25 + 'rem'
        newHeading.style.fontSize = 15 + 'pt'
    }
    

    
    readBtn.addEventListener('click', () => {
        if (readBtn.textContent === 'Read') {
            readBtn.classList.remove('card__read')
            readBtn.classList.add('card__not-read')
            readBtn.textContent = 'Not Read'
        } else {
            readBtn.textContent = 'Read'
            readBtn.classList.remove('card__not-read')
            readBtn.classList.add('card__read')
        }
    })
    
    removeBtn.addEventListener('click', () => {
        container.removeChild(cardDiv)
    })
        
};




