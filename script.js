const bookContainer = document.querySelector(".books-container");
const addBookContainer = document.querySelector(".addbook-container");
const addBtn = document.querySelector(".bookBtn");
const inputContainers = document.querySelectorAll(".input");
const closeBtn = document.querySelector(".bookBtnX");
const sumbitBtn = document.querySelector(".sumbitBtn");
const titleInput = document.querySelector(".inputTitle");
const autorInput = document.querySelector(".inputAutor");
const pagesInput = document.querySelector(".inputPages");
const readStateInput = document.querySelector(".inputReadState");

//toma los valores de los input y les pasa la funcion addbook cuando es clickeado
sumbitBtn.addEventListener("mousedown", () => {
  addBookToLibrary(
    titleInput.value,
    autorInput.value,
    pagesInput.value,
    readStateInput.checked
  );
});
// saca el hidden
addBtn.addEventListener("mousedown", () => {
  addBookContainer.hidden = false;
});
// pone el hidden
closeBtn.addEventListener("mousedown", () => {
  addBookContainer.hidden = true;
});

/* // ni idea q era esto
inputContainers.forEach((element) => {
  element.setAttribute("type", "text");
  element.setAttribute("value", "Hello World!");
}); */

//array donde guardo toda la info
let myLibrary = [];

//function prototype
function Book(title, autor, pages, readState) {
  this.title = title;
  this.autor = autor;
  this.pages = pages;
  this.readState = readState;
  this.sayInfo = function () {
    return title + " by " + autor + ", " + pages + " pages, " + readState;
  };
}

//crea un nevo objeto usando como prototipo la funcion book
function addBookToLibrary(title, autor, pages, readState) {
  //Tansforma el True/False de la checkbox en una string
  if (readState == true) {
    readState = true
  } else {
    readState =  false
  }
  printBook(title, autor, pages, readState)
  let add = new Book(title, autor, pages, readState);
  myLibrary.push(add);
}
function printBook(title, autor, pages, readState){
 let e = document.createElement("div");
    let h3 = document.createElement("h3")
    let h4 = document.createElement("h4")
    let h5 = document.createElement("h5")
    let h6 = document.createElement("h6")
    let readBox = document.createElement("input")
    readBox.type = "checkbox"
    readBox.checked = readStateInput.checked
    e.className = "book";
    h3.textContent = title
    h4.textContent = autor
    h5.textContent = pages
    h6.textContent = readState
    bookContainer.appendChild(e);
    e.append(h3,h4,h5,h6,readBox)
}
