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

let allBtns;

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

function shelfBook(bk){
    
    console.log('pass')
    const newBook = document.createElement('ul')
    newBook.classList.add('.book')
    bookshelf.appendChild(newBook)

    const title = document.createElement('li')
    const author = document.createElement('li')
    const pages = document.createElement('li')
    const read = document.createElement('li')
    const remove = document.createElement('li')
    
    let v = Object.values(bk);
    console.log(v);
    title.textContent=v[0];
    author.textContent=v[1];
    pages.textContent=v[2];

    newBook.appendChild(title);
    newBook.appendChild(author);
    newBook.appendChild(pages);

    if (v[3]===true){
        read.textContent='Read';
        newBook.appendChild(read);
        read.appendChild(checkmark);
    } else {
        read.textContent='Not Read';
        newBook.appendChild(read)
        read.appendChild(xbox);
    }
    
    newBook.appendChild(remove);
    const rembtn = document.createElement('button')
    rembtn.setAttribute('id', 'remove')
    rembtn.textContent = 'Remove?'
    remove.appendChild(rembtn)
    
    allBtns=document.querySelectorAll('#remove')

    removeButtonEvent()
    console.log('done')
}

addBookBtn.addEventListener('click', (e) => {
    addBooktoLibrary(e)
    shelfBook(library.at(-1))
    console.log(library.at(-1))
});

function removeButtonEvent(){
    for (let j=0; j<library.length+1; j++){//Need to remove +1 after removing example//
        allBtns[j].addEventListener('click', (e)=>{
            console.log(e)
        })
    }
}

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