let library =[]
const inputTitle = document.querySelector('#input-title')
const inputAuthor = document.querySelector('#input-author')
const inputPages = document.querySelector('#input-pages')
const inputStatus = document.querySelector('#input-status')
const addBookBtn = document.querySelector('#new-book')
const bookshelf = document.querySelector('.bookshelf')

const checkmark = document.createElement('img')
checkmark.classList.add('.checkmark')
checkmark.src = 'img/check.png'
const xbox = document.createElement('img')
xbox.classList.add('.xbox')
xbox.src = 'img/xbox.png'



function Book (title, author, pages, read){
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBooktoLibrary(bk){
    bk = Object.create(Book)
    bk.title = inputTitle.value
    bk.author = inputAuthor.value
    bk.pages = inputPages.value
    bk.read = inputStatus.checked
    library.push(bk)
}

addBookBtn.addEventListener('click', (e) => {
    addBooktoLibrary(e)
    shelfBook(library.at(-1))
});

function findBook(b) {
    let indexNum = library.map(object=>object.title).indexOf(b);
    return indexNum;
}

//deletes based on title, but will need to change
function deleteBook(b) {
    let i = findBook(b);
    library.splice(i,1);
    return library;
}

function shelfBook(bk){
    
        console.log('pass')
        const newBook = document.createElement('div')
        newBook.classList.add('.book')
        newBook.innerHTML = bk.title
        bookshelf.appendChild(newBook)
        console.log('done')

}

/*


    

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
    title.textContent=v[0];
    author.textContent=v[1];
    pages.textContent=v[2];

    bookShelf.appendChild(title);
    bookShelf.appendChild(author);
    bookShelf.appendChild(pages);

    if (v[3]===true){
        stat.textContent='Read';
        bookShelf.appendChild(stat);
        stat.appendChild(checkmark);
    } else {
        stat.textContent='Not Read';
        bookShelf.appendChild(stat)
        stat.appendChild(xbox);
    }
    
    bookShelf.appendChild(remove);
}

*/