const bookContainer = document.querySelector(".books-container");
const sumbitBtn = document.querySelector(".sumbitBtn");
const titleInput = document.querySelector(".inputTitle");
const autorInput = document.querySelector(".inputAutor");
const pagesInput = document.querySelector(".inputPages");
const readStateInput = document.querySelector(".inputReadState");
const imgInput = document.querySelector(".inputUrl");
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
let myLibrary = [
  {
    title: "El Martin Fierro",
    autor: "Jose Hernandez",
    pages: "92",
    readState: true,
    image:
      "http://www.cervantesvirtual.com/s3/BVMC_OBRAS/ff2/9ee/5a8/2b1/11d/fac/c70/021/85c/e60/64/mimes/imagenes/ff29ee5a-82b1-11df-acc7-002185ce6064_2.jpg",
  },
  {
    title: "Ficciones",
    autor: "Jorge Luis Borges",
    pages: "140",
    readState: true,
    image: "https://jackmoreno.files.wordpress.com/2018/11/ficciones.jpg",
  },
  {
    title: "El Señor De Los Anillos",
    autor: "J.R.R Tolkien",
    pages: "758",
    readState: false,
    image:
      "https://kbimages1-a.akamaihd.net/fbfdfad3-fd03-4202-9fad-019828ad2601/353/569/90/False/the-two-towers-the-lord-of-the-rings-book-2-1.jpg",
  },
  {
    title: "Fundacion",
    autor: "Isaac Asimov",
    pages: "1237",
    readState: true,
    image:
      "https://static.wikia.nocookie.net/asimov/images/d/da/Fundaci%C3%B3n.jpg/revision/latest/scale-to-width-down/267?cb=20180826004226&path-prefix=es",
  },
  {
    "title": "Klavierwerke. BWV 772-786",
    "autor": "Johann Sebastian Bach",
    "pages": "68",
    "readState": true,
    "image": "https://images-na.ssl-images-amazon.com/images/I/51w79UEKt4L.jpg"
  }
];
//printee los libros guardados
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

//crea un nevo objeto usando como prototipo la funcion book
function addBookToLibrary(title, autor, pages, readState, image) {
  //Tansforma el True/False de la checkbox en una string
  if (readState == true) {
    readState = true;
  } else {
    readState = false;
  }
  let add = new Book(title, autor, pages, readState, image);
  printBook(title, autor, pages, readState, image);
  myLibrary.push(add);
}
function printBook(title, autor, pages, readState, image) {
  let book = document.createElement("div");
  let div = document.createElement("div");
  let img = document.createElement("img");
  let h3 = document.createElement("h3");
  let h4 = document.createElement("h4");
  let h5 = document.createElement("h5");
  //add buton and it event listener
  let readBox = document.createElement("button");
  readBox.className = readState + " readStateBtn";
  if (readBox.className == "false readStateBtn") {
    readBox.textContent = "No Leído";
  } else {
    readBox.textContent = "Leído";
  }
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
  div.append(h3, h4, h5, readBox);
}
