const bookContainer = document.querySelector(".books-container");
 const sumbitBtn = document.querySelector(".sumbitBtn");
const titleInput = document.querySelector(".inputTitle");
const autorInput = document.querySelector(".inputAutor");
const pagesInput = document.querySelector(".inputPages");
const readStateInput = document.querySelector(".inputReadState");
const imgInput = document.querySelector(".inputUrl")
//toma los valores de los input y les pasa la funcion addbook cuando es clickeado
sumbitBtn.addEventListener("mousedown", () => {
  addBookToLibrary(
    titleInput.value,
    autorInput.value,
    pagesInput.value,
    readStateInput.checked,
    imgInput.value
  );
});




//array donde guardo toda la info
let myLibrary = [{}];

//function prototype
function Book(title, autor, pages, readState,image) {
  this.title = title;
  this.autor = autor;
  this.pages = pages;
  this.readState = readState;
  this.sayInfo = function () {
    return title + " by " + autor + ", " + pages + " pages, " + readState;
  };
}

//crea un nevo objeto usando como prototipo la funcion book
function addBookToLibrary(title, autor, pages, readState,image) {
  //Tansforma el True/False de la checkbox en una string
  if (readState == true) {
    readState = true;
  } else {
    readState = false;
  }
  printBook(title, autor, pages, readState,image);
  let add = new Book(title, autor, pages, readState,image);
  myLibrary.push(add);
}
function printBook(title, autor, pages, readState,image) {
  let e = document.createElement("div");
  let div = document.createElement("div")
  let img = document.createElement("img");
  let h3 = document.createElement("h3");
  let h4 = document.createElement("h4");
  let h5 = document.createElement("h5");
  let readBox = document.createElement("button");
  readBox.className = readState + " readStateBtn"
  if(readBox.className == "false readStateBtn"){
    readBox.textContent = "No Leído"
  }
  else{
    readBox.textContent = "Leído"
  }
  readBox.addEventListener('click', function (e) {
    if(e.target.className == "true readStateBtn"){
    e.target.className = "false readStateBtn"
    e.target.textContent = "No Leído"}
    else{
      e.target.className = "true readStateBtn"
      e.target.textContent = "Leído"
    }
  })
  e.className = "book";
  div.className = "bookDiv"
  img.src = image
  h3.textContent = title;
  h4.textContent = autor;
  h5.textContent = pages + " pags.";
  bookContainer.appendChild(e);
  e.append(img,div);
  div.append(h3, h4, h5, readBox)
  
}
