let myLibrary =[];
const inputTitle = document.querySelector('#input-title');
const inputAuthor = document.querySelector('#input-author');
const inputPages = document.querySelector('#input-pages');
const inputStatus = document.querySelector('#input-status');
const newBook = document.querySelector('#new-book');
const bookShelf = document.querySelector('.book-container');

const title = document.createElement('div');
title.classList.add('.title');
const author = document.createElement('div');
author.classList.add('.author');
const pages = document.createElement('div');
pages.classList.add('.pages');
const stat = document.createElement('div');
stat.classList.add('.status');
const remove = document.createElement('div');
remove.classList.add('.remove');

function Book (title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
}

function addBooktoLibrary(bk) {
    bk = Object.create(Book);
    bk.title = inputTitle.value;
    bk.author = inputAuthor.value;
    bk.pages = inputPages.value;
    bk.read = inputStatus.checked;
    myLibrary.push(bk);
    shelfBook(bk);
}

newBook.addEventListener('click', (e) => {
    addBooktoLibrary(e);
});

function shelfBook(e) {
    let v = Object.values(e);
    console.log(v);
}

function findBook(b) {
    let indexNum = arr.map(object=>object.title).indexOf(b);
    return indexNum;
}

function deleteBook(b) {
    let i = findBook(b);
    arr.splice(i,1);
    return myLibrary;
}