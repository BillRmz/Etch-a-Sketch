window.addEventListener("load", setDefaultGrid);

let actualColor = "black";

const btnChangeRange = document.querySelector("#change-size");
const gridContainer = document.querySelector("#grid-container");
const btnRandomColor = document.querySelector("#random-buttom");
const btnBlack = document.querySelector("#black-button");

btnChangeRange.addEventListener("click", changeGridSize); 
btnBlack.addEventListener("click", chooseBlack);
btnRandomColor.addEventListener("click", chooseRandom);



function changeGridSize() {
  let newSize = prompt("Enter new size");
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
    items.className = "gridElement";
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
