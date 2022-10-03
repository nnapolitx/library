function Book(title, author, pages, read) {
    this.title = title;
    this.author = author;
    this.pages = pages;
    this.read = read;
    this.index = index;
}

Book.prototype.removeBook = function () {
    //
}

const arr = [];

const inputTitle = document.querySelector('#input-title');
const inputAuthor = document.querySelector('#input-author');
const inputPages = document.querySelector('#input-pages');
const inputStatus = document.querySelector('#input-status');
const newBook = document.querySelector('#new-book');

function enterBook(entry) {
    entry = Object.create(Book)
    entry.title = inputTitle.value;
    entry.author = inputAuthor.value;
    entry.pages = inputPages.value;
    entry.read = inputStatus.checked;
    entry.index = arr.length;
    arr.push(entry);
}

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
