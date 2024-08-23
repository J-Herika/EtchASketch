const containerEl = document.querySelector("#container");
const inputBtnEl = document.querySelector("#input-btn");
const resetBtnEl = document.querySelector("#reset-btn");

inputBtnEl.addEventListener("click", newCanvas);

resetBtnEl.addEventListener("click", resetCanva);

containerEl.addEventListener("mouseover", (event) => {
  drawSquares(event);
});

function resetCanva() {
  const restSquares = document.querySelectorAll(".drawing-square");
  restSquares.forEach(square => {
    square.style.backgroundColor = "pink"
  });
}

function drawSquares(event) {
  let targetedSquare = event.target;
  if (
    targetedSquare.className !== "grid-row" &&
    targetedSquare.id != "container"
  ) {
    targetedSquare.style.backgroundColor = "black";
  }
}

function newCanvas() {
  const NumberOfSquares = getNumberOfSquares();
  createSquares(NumberOfSquares);
}

function getNumberOfSquares() {
  let squares = parseInt(prompt("Enter the number of Squares you want"));
  squares > 100 ? (squares = 100) : console.log("Exceeded 200");
  return squares;
}

function createSquares(numOfSquares) {
  containerEl.replaceChildren();
  for (let i = 0; i < numOfSquares; i++) {
    let gridRow = document.createElement("div");
    gridRow.classList.toggle("grid-row");
    containerEl.append(gridRow);

    for (let i = 0; i < numOfSquares; i++) {
      let square = document.createElement("div");
      square.setAttribute("style", " background-color:pink;");
      square.classList.toggle("drawing-square");
      gridRow.append(square);
    }
  }
}
