const bookContainer = document.querySelector(".books-container");
const sumbitBtn = document.querySelector(".sumbitBtn");
const titleInput = document.querySelector(".inputTitle");
const autorInput = document.querySelector(".inputAutor");
const pagesInput = document.querySelector(".inputPages");
const inputBtn = document.querySelector(".inputBtn");
const imgInput = document.querySelector(".inputUrl");
//change the text of the input button deppending in it class
inputBtn.addEventListener("click", () => {
  if (inputBtn.classList == "true readStateBtn inputBtn") {
    inputBtn.classList = "false readStateBtn inputBtn";
    inputBtn.textContent = "No Leído";
  } else {
    inputBtn.classList = "true readStateBtn inputBtn";
    inputBtn.textContent = "Leído";
  }
});
//took the values of the inputs and give its to the addBook function when it is clicked
sumbitBtn.addEventListener("click", () => {
  addBookToLibrary(
    titleInput.value,
    autorInput.value,
    pagesInput.value,
    inputBtn.classList,
    imgInput.value
  );
});
//Object array to store the books
let myLibrary = [];
checkLocalStorage();

//Print the stored books when the page is open.
myLibrary.forEach((element) => {
  printBook(
    element.title,
    element.autor,
    element.pages,
    element.readState,
    element.image
  );
});

//function prototype
function Book(title, autor, pages, readState, image) {
  this.title = title;
  this.autor = autor;
  this.pages = pages;
  this.readState = readState;
  this.image = image;
}

//create a new object using the Book prototype and store its in myLibrary
function addBookToLibrary(title, autor, pages, readState, image) {
  if (readState == "true readStateBtn inputBtn" || readState == true) {
    readState = "true readStateBtn";
  } else {
    readState = "false readStateBtn";
  }
  let add = new Book(title, autor, pages, readState, image);
  //add the book to the library and call Print Book Function
  myLibrary.push(add);
  addToLocalStorage(add);
  printBook(title, autor, pages, readState, image);
}
//  function that prints whenever a book is created
function printBook(title, autor, pages, readState, image) {
  let book = document.createElement("div");
  let div = document.createElement("div");
  let img = document.createElement("img");
  let h3 = document.createElement("h3");
  let h4 = document.createElement("h4");
  let h5 = document.createElement("h5");
  let readBox = document.createElement("button");
  let bin = document.createElement("img");

  bin.src =
    "https://w7.pngwing.com/pngs/249/291/png-transparent-rubbish-bins-waste-paper-baskets-computer-icons-google-plus-miscellaneous-logo-waste.png";
  bin.className = "bin";
  //get the grandpather and removeit. also calls Remove From Library to remove it from the array.
  bin.addEventListener("click", () => {
    let parent = bin.parentElement;
    parent.parentElement.remove();
    removeFromLibrary(title);
  });
  //depending tooks the value from the input btn  to print the input button.
  if (
    readState == "true readStateBtn inputBtn" ||
    readState == true ||
    readState == "true readStateBtn"
  ) {
    readBox.className = "true readStateBtn";
  } else {
    readBox.className = "false readStateBtn";
  }
  if (readBox.className == "false readStateBtn") {
    readBox.textContent = "No Leído";
  } else {
    readBox.textContent = "Leído";
  }
  //change the text of the input button deppending in it class
  readBox.addEventListener("click", function (e) {
    if (e.target.className == "true readStateBtn") {
      e.target.className = "false readStateBtn";
      e.target.textContent = "No Leído";
    } else {
      e.target.className = "true readStateBtn";
      e.target.textContent = "Leído";
    }
  });
  book.className = "book";
  div.className = "bookDiv";
  img.src = image;
  h3.textContent = title;
  h4.textContent = autor;
  h5.textContent = pages + " pags.";
  bookContainer.appendChild(book);
  book.append(img, div);
  div.append(h3, h4, h5, readBox, bin);
}

// Search one for one if the parameter is === to myLibrary.title. if it is it remove it
function removeFromLibrary(BookTitle) {
  myLibrary.forEach(function (book, index, object) {
    if (book.title == BookTitle) {
      object.splice(index, 1);
    }
  });
  localStorage.setItem("session", JSON.stringify(myLibrary));
}
//Store all the values of myLibrary objects
function addToLocalStorage(object) {
  let a = [];
  // Parse the serialized data back into an aray of objects
  a = JSON.parse(localStorage.getItem("session")) || [];
  // Push the new data (whether it be an object or anything else) onto the array
  a.push(object);
  // Re-serialize the array back into a string and store it in localStorage
  localStorage.setItem("session", JSON.stringify(a));
}
function checkLocalStorage() {
  if (JSON.parse(localStorage.getItem("session")) !== null) {
    myLibrary = JSON.parse(localStorage.getItem("session")) || [];
  }
}
