let library = []
const inputTitle = document.querySelector('#input-title')
const inputAuthor = document.querySelector('#input-author')
const inputPages = document.querySelector('#input-pages')
const inputStatus = document.querySelector('#input-status')
const addBookBtn = document.querySelector('#new-book')
const bookshelf = document.querySelector('.bookshelf')

let allBtns;

function Book(title, author, pages, read) {
    this.title = title
    this.author = author
    this.pages = pages
    this.read = read
}

function addBooktoLibrary(bk) {
    bk = Object.create(Book)
    bk.title = inputTitle.value
    bk.author = inputAuthor.value
    bk.pages = inputPages.value
    bk.read = inputStatus.checked
    library.push(bk)
}

function shelfBook(bk) {
    console.log('pass')
    const newBook = document.createElement('ul')
    newBook.classList.add('.book')
    bookshelf.appendChild(newBook)

    const title = document.createElement('li')
    const author = document.createElement('li')
    const pages = document.createElement('li')
    const read = document.createElement('li')
    const remove = document.createElement('li')

    const checkmark = document.createElement('img')
    checkmark.classList.add('.checkmark')
    checkmark.src = 'img/check.png'
    const xbox = document.createElement('img')
    xbox.classList.add('.xbox')
    xbox.src = 'img/xbox.png'

    let v = Object.values(bk);
    console.log(v);
    title.textContent = v[0];
    author.textContent = v[1];
    pages.textContent = v[2];

    newBook.setAttribute('id', v[0])

    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(pages);

    if (v[3] === true) {
        read.textContent = 'Read';
        newBook.appendChild(read);
        read.appendChild(checkmark);
    } else {
        read.textContent = 'Not Read';
        newBook.appendChild(read)
        read.appendChild(xbox);
    } 
    
    newBook.appendChild(remove);
    const rembtn = document.createElement('button')
    rembtn.setAttribute('id', v[0])
    rembtn.textContent = 'Remove?'
    remove.appendChild(rembtn)

    allBtns = document.querySelectorAll('.bookshelf button')

    removeButtonEvent()
    console.log('done')
}

addBookBtn.addEventListener('click', (e) => {
    addBooktoLibrary(e)
    shelfBook(library.at(-1))
    console.log(library.at(-1))
});

function removeButtonEvent() {
    for (let j = library.length; j < library.length + 1; j++) {
        allBtns[j].addEventListener('click', (e) => {
            console.log(e.target.id)
            let tit = e.target.id
            deleteBook(tit)
        })
    }
}

function findBook(b) {
    let indexNum = library.map(object => object.title).indexOf(b);
    console.log(indexNum)
    return indexNum;
}

// deletes only from array
function deleteBook(b) {
    let i = findBook(b);
    const eraseNode = document.getElementById(b)
    console.log(eraseNode)
    eraseNode.remove()

    library.splice(i, 1);
    return library;
}

//----Bugs to fix----
//Since the button on the form is a reset button, does not check for numbers on the 'pages' input

// ----THINGS TO DO----
//Need add an eventListener to the check and x img's so that they change back and forth
//Need to create a read/not read list, book list, delete all button
//Need to change style of EVERYTHING, this project is ugly.
//Change the button on the form to a normal button and write a function that checks for parameters