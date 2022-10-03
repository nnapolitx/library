function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

Book.prototype.logBook = function () {
    return `${this.title}, by ${this.author}. This book is ${this.pages} pages long, and you have ${this.read} it.`;
}

const arr = [];
const inputTitle = document.querySelector('#input-title');
const inputAuthor = document.querySelector('#input-author');
const inputPages = document.querySelector('#input-pages');
const inputStatus = document.querySelector ('#input-status');
const newBook = document.querySelector('#new-book');

console.log(inputTitle.textContent);

function enterBook(entry){
    entry = Object.create(Book)
    entry.title = inputTitle.value;
    entry.author = inputAuthor.value;
    entry.pages = inputPages.value;
    entry.read = inputStatus.value;
    arr.push(entry);
}

newBook.addEventListener('click', (e)=>{
    console.log('passed');
    enterBook(inputTitle);
});