var numOfSq = 6;
var colors = [];
var pickedColor = pickColor();
var h1 = document.querySelector("h1");
var squares = document.querySelectorAll(".square");
var title = document.getElementById("title");
var msg = document.querySelector("#message");
var resetbtn = document.querySelector("#reset");
var modeButtons = document.querySelectorAll(".mode");

init();
function init() {
  //mode button event listeners
  setupModeButtons();
  setupSquares();
  reset();
}

function setupModeButtons() {
  for (var i = 0; i < modeButtons.length; i++) {
    modeButtons[i].addEventListener("click", function () {
      modeButtons[0].classList.remove("selected");
      modeButtons[1].classList.remove("selected");
      this.classList.add("selected");
      this.textContent === "Easy" ? (numOfSq = 3) : (numOfSq = 6);
      reset();
    });
  }
}

function setupSquares() {
  for (var i = 0; i < squares.length; i++) {
    //listeners
    squares[i].addEventListener("click", function () {
      //get color of clicked square
      var clickedColor = this.style.backgroundColor;
      //compare click to pick
      if (clickedColor == pickedColor) {
        msg.textContent = "Correct!";
        changeColors(clickedColor);
        h1.style.backgroundColor = clickedColor;
        resetbtn.textContent = "Play Again?";
      } else {
        this.style.backgroundColor = "#232323";
        msg.textContent = "Try Again!";
      }
    });
  }
}

function reset() {
  colors = generateRandomColors(numOfSq);
  //pick a new random color
  pickedColor = pickColor();
  //change color display to match picked color
  title.textContent = pickedColor;
  //change colors of square
  for (var i = 0; i < squares.length; i++) {
    if (colors[i]) {
      squares[i].style.display = "block";
      squares[i].style.backgroundColor = colors[i];
    } else {
      squares[i].style.display = "none";
    }
  }
  h1.style.backgroundColor = "steelblue";
  msg.textContent = "";
  resetbtn.textContent = "New Colors";
}

resetbtn.addEventListener("click", function () {
  reset();
});

function changeColors(color) {
  //loop through all squares
  for (var i = 0; i < squares.length; i++) {
    //change each color
    squares[i].style.backgroundColor = color;
  }
}

function pickColor() {
  var random = Math.floor(Math.random() * colors.length);
  return colors[random];
}

function generateRandomColors(num) {
  //make an array
  var arr = [];
  //repeat num times
  for (var i = 0; i < num; i++) {
    //get random color and push into array
    arr.push(randomColor());
  }
  //return the array
  return arr;
}

function randomColor() {
  //pick a "red" from 0 to 255
  var r = Math.floor(Math.random() * 256);
  //pick a "blue" from 0 to 255
  var g = Math.floor(Math.random() * 256);
  //pick a "green" from 0 to 255
  var b = Math.floor(Math.random() * 256);
  return `rgb(${r}, ${g}, ${b})`;
}
