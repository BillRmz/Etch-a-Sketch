window.addEventListener("load", setDefaultGrid);

let actualColor = "black";

const gridContainer = document.querySelector("#grid-container");
const btnChangeRange = document.querySelector("#change-size");
const btnRandomColor = document.querySelector("#random-buttom");
const btnBlack = document.querySelector("#black-button");
const resetbtn = document.querySelector("#reset-buttom");

btnChangeRange.addEventListener("click", changeGridSize);
btnBlack.addEventListener("click", chooseBlack);
btnRandomColor.addEventListener("click", chooseRandom);
resetbtn.addEventListener("click", reset);

function changeGridSize() {
  let newSize = prompt("Enter new size < 65");
  newSize = parseInt(newSize);
  if (newSize < 1 || newSize > 64 || Number.isNaN(newSize)) {
    alert("Enter a number from 1-64 range");
    changeGridSize();
  } else {
    gridContainer.innerHTML = "";
    makeGrid(newSize);
  }
}

function setDefaultGrid() {
  makeGrid(16);
}

function makeGrid(size) {
  let rows = size * size;
  for (let i = 0; i < rows; i++) {
    const items = document.createElement("div");
    items.classList = "gridElement";
    items.addEventListener("mouseover", changeColor);
    gridContainer.style.gridTemplateColumns = `repeat(${size}, 1fr)`;
    gridContainer.appendChild(items);
  }
}

function changeColor(e) {
  if (actualColor === "black") {
    e.target.style.backgroundColor = `${actualColor}`;
  } else if (actualColor === "random") {
    let randomColor = "#ff0000";
    randomColor = RandomColor();
    e.target.style.backgroundColor = `${randomColor}`;
  }
}

function chooseRandom() {
  actualColor = "random";
}

function chooseBlack() {
  actualColor = "black";
}

function RandomColor() {
  const letters = "0123456789ABCDEF";
  let color = "#";
  for (var i = 0; i < 6; i++) {
    color += letters[Math.floor(Math.random() * 16)];
  }
  return color;
}

function reset() {
  let gridSquares = document.getElementsByClassName("gridElement");
  let i = gridSquares.length;
  while (i--) {
    gridSquares[i].style.backgroundColor = "white";
  }
}
