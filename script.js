const bookContainer = document.querySelector(".books-container")


let myLibrary  = []
function Book(title, autor, pages, readState) {
  this.title = title;
  this.autor = autor;
  this.pages = pages;
  this.readState = readState;
  this.sayInfo = function () {
 return title + " by " + autor + ", " + pages + " pages, " + readState
  };
}

function addBookToLibrary(title, autor, pages, readState) {
    let add = new Book(title, autor, pages, readState)   ;
    myLibrary.push(add) 
}

function printBooks(){
    myLibrary.forEach(element => {
       let e =document.createElement("div")
       e.className = "book"
      e.textContent = (element.title + " of " + element.autor + " it have's " + element.pages + " and you " + element.readState)
        bookContainer.appendChild(e)
    });

}
for( let i = 0; i < 10; i ++){
    addBookToLibrary("Ivan pedazo de imbecil","JOse larralde pibe","1500000000","no lo lei nunca en mi vida por suerte")
}