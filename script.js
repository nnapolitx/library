function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
}

const arr = [];

const inputTitle = document.querySelector('#input-title');
const inputAuthor = document.querySelector('#input-author');
const inputPages = document.querySelector('#input-pages');
const inputStatus = document.querySelector('#input-status');
const newBook = document.querySelector('#new-book');
const bookShelf = document.querySelector('.book-container');

function enterBook(entry) {
    entry = Object.create(Book)
    entry.title = inputTitle.value;
    entry.author = inputAuthor.value;
    entry.pages = inputPages.value;
    entry.read = inputStatus.checked;
    entry.index = arr.length;
    arr.push(entry);
    addBookToLibrary(entry);
}

function addBookToLibrary(e){
    console.log(e);
    let divArr = Object.values(e);
    console.log(divArr);
    
    for (let i=0; i<4; i++){
        const row = document.createElement('div');
        row.classList.add('.row');
        bookShelf.appendChild(row);
        row.textContent=divArr[i];
    }

}

newBook.addEventListener('click', (e) => {
    console.log('passed');
    enterBook(e);
});

function findBook(b) {
    let indexNum = arr.map(object=>object.title).indexOf(b);
    return indexNum;
}

function deleteBook(b) {
    let i = findBook(b);
    arr.splice(i,1);
    return arr;
}

/* //This funciton inputs the book based on input to the form, however, instructions from T.O.P. indicate I need to write a fucntion that loops through the array.

newBook.addEventListener('click', (e) => {
    console.log('passed');
    enterBook(e);

    const bookContainer = document.querySelector('.book-container');

    const title = document.createElement('div');
    title.classList.add('.title-row');
    const author = document.createElement('div');
    author.classList.add('.author-row');
    const pages = document.createElement('div');
    pages.classList.add('.pages-row');
    const status = document.createElement('div');
    status.classList.add('.status-row');
    const remove = document.createElement('div');
    remove.classList.add('.remove-row');

    bookContainer.appendChild(title);
    bookContainer.appendChild(author);
    bookContainer.appendChild(pages);
    bookContainer.appendChild(status);
    bookContainer.appendChild(remove);

    title.textContent = inputTitle.value;
    author.textContent = inputAuthor.value;
    pages.textContent = inputPages.value;
    status.textContent = inputStatus.checked;  
});
*/