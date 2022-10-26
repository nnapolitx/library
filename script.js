let library = []
//inputs
const inputTitle = document.querySelector('#input-title')
const inputAuthor = document.querySelector('#input-author')
const inputPages = document.querySelector('#input-pages')
const inputStatus = document.querySelector('#input-status')
const addBookBtn = document.querySelector('#new-book')
const bookshelf = document.querySelector('.bookshelf')
//getting elements from the "scoreboard"
const bookNumber = document.querySelector('.book-number')
const booksRead = document.querySelector('.books-read')
const removeAll = document.querySelector('#remove-all')
//all future remove buttons
let allBtns;
//all error messages
const titleError = document.querySelector('.title-error')
const authorError = document.querySelector('.auth-error')
const pageError = document.querySelector('.page-error')

bookNumber.textContent=library.length
let readCounter=0
booksRead.textContent=readCounter


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
    const newBook = document.createElement('ul')
    newBook.classList.add('.book')
    bookshelf.appendChild(newBook)

    const title = document.createElement('li')
    const author = document.createElement('li')
    const pages = document.createElement('li')
    const read = document.createElement('li')
    const readText = document.createElement('span')
    const remove = document.createElement('li')

    const checkmark = document.createElement('img')
    checkmark.classList.add('.checkmark')
    checkmark.src = 'img/check.png'
    const xbox = document.createElement('img')
    xbox.classList.add('.xbox')
    xbox.src = 'img/xbox.png'

    let v = Object.values(bk);
    title.textContent = v[0];
    author.textContent = v[1];
    pages.textContent = v[2];

    newBook.setAttribute('id', v[0])

    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(pages);
    newBook.appendChild(read);

    if (v[3] === true) {
        readText.textContent = 'Read';
        read.appendChild(readText);
        read.appendChild(checkmark);
        checkmark.addEventListener('click', changeReadStatus)
        readCounter+=1
    } else {
        readText.textContent = 'Not Read';
        read.appendChild(readText);
        read.appendChild(xbox);
        xbox.addEventListener('click', changeReadStatus)
    }

    newBook.appendChild(remove);
    const rembtn = document.createElement('button')
    rembtn.setAttribute('id', v[0])
    rembtn.textContent = 'Remove?'
    remove.appendChild(rembtn)

    allBtns = document.querySelectorAll('.bookshelf button')
    booksRead.textContent=readCounter
    bookNumber.textContent=library.length
    removeButtonEvent()
}

addBookBtn.addEventListener('click', (e) => {

    titleError.textContent=''
    authorError.textContent=''
    pageError.textContent=''
    inputTitle.style.backgroundColor='white'
    inputAuthor.style.backgroundColor='White'
    inputPages.style.backgroundColor='White'

    if (inputTitle.value === '' || inputAuthor.value === ''
        || inputPages.value === '' || inputPages === NaN){
            
            if (inputTitle.value === ''){
                titleError.textContent='*Please enter a valid title*'
                inputTitle.style.backgroundColor='#ff000049'
            }
            if (inputAuthor.value === ''){
                authorError.textContent='*Please enter a valid author name*'
                inputAuthor.style.backgroundColor='#ff000049'
            }
            if (inputPages.value === NaN || inputPages.value===''){
                pageError.textContent='*Please enter a number using digits*'
                inputPages.style.backgroundColor='#ff000049'
            }
            return
        } else{
            addBooktoLibrary(e)
            shelfBook(library.at(-1))
            inputTitle.value = ''
            inputAuthor.value = ''
            inputPages.value = ''
            inputStatus.checked=undefined
        }
})

removeAll.addEventListener('click', (e) => {
    console.log('removeall event')
    while (bookshelf.firstChild) {
        bookshelf.removeChild(bookshelf.lastChild)
    }
    library = []
    readCounter=0
    booksRead.textContent=readCounter
    bookNumber.textContent=library.length
})

function removeButtonEvent() {
    for (let j = library.length-1; j < library.length; j++) {
        allBtns[j].addEventListener('click', (e) => {
            console.log(e.target.id)
            let titleAtt = e.target.id
            deleteBook(titleAtt)
        })
    }
}

function findBook(b) {
    let indexNum = library.map(object => object.title).indexOf(b)
    return indexNum;
}

function deleteBook(b) {
    let i = findBook(b);
    const eraseNode = document.getElementById(b)
    if (library[i].read===true) {
        readCounter-=1
        booksRead.textContent=readCounter
    }

    eraseNode.remove()
    library.splice(i, 1);
    bookNumber.textContent=library.length
    return library;
}

function changeReadStatus(e){
    let getsListItem = e.target.parentElement
    let iDforBookobj = getsListItem.parentElement

    let i = findBook(iDforBookobj.id)

    if (library[i].read === true){
        library[i].read = false
        readCounter-=1
        booksRead.textContent=readCounter
        let readStatusText = e.target.previousElementSibling
        readStatusText.textContent='Not Read'
        e.target.src='img/xbox.png'
        e.target.setAttribute('class', '.xbox')
    } else {
        library[i].read = true
        readCounter+=1
        booksRead.textContent=readCounter
        let readStatusText = e.target.previousElementSibling
        readStatusText.textContent='Read'
        e.target.src='img/check.png'
        e.target.setAttribute('class', '.checkmark')
    }
}


//Currently: Considering changing style


//----Bugs to fix----


// ----THINGS TO DO----