let modChang = 6;
var colors = [];
var squares = document.querySelectorAll(".square");
var pickedColor = pickColor();
var colorDisplay = document.getElementById("colorDisplay");
var messageDisplay = document.querySelector("#message");
let resetButton = document.querySelector("#rest");
let easyBtn = document.querySelector("#easy");
let hardBtn = document.querySelector("#hard");
let h1 = document.querySelector("h1");

resetMod();
setupModeBtn();

colorDisplay.textContent = pickedColor;

for(var i = 0; i < squares.length; i++ ){
    //add inital colors to squares
    
    squares[i].addEventListener("click", function(){
        var clickedColor = this.style.backgroundColor;

        if(clickedColor === pickedColor){
            messageDisplay.textContent = "Correct!";
            changeColor(clickedColor);
            resetButton.textContent = "Play Again?";
            h1.style.backgroundColor = pickedColor;
        }else{
            this.style.backgroundColor = "#232323";
            messageDisplay.textContent = "Try Again!";
        }
    });

}

function setupModeBtn() {
    easyBtn.addEventListener("click", function(){
        easyBtn.classList.add("selected");
        hardBtn.classList.remove("selected");
        modChang = 3;
        resetMod();
    });
    
    hardBtn.addEventListener("click", function(){
        easyBtn.classList.remove("selected");
        hardBtn.classList.add("selected");
        modChang = 6;
        resetMod();
    });

    resetButton.addEventListener("click", function(){
        resetMod();
    });
}

function resetMod() {
    colors = generateRandomColor(modChang);
    pickedColor = pickColor();
    colorDisplay.textContent = pickedColor;
    resetButton.textContent = "New Color";
    h1.style.backgroundColor = "steelblue";
    messageDisplay.textContent = "";
    for(var i = 0; i < squares.length; i++ ){
        if(colors[i]){
            squares[i].style.display = "block";
            squares[i].style.backgroundColor = colors[i];
        }else {
            squares[i].style.display = "none";
        }
    }
}

function changeColor(color) {
    for(var i = 0; i<squares.length; i++){
        squares[i].style.backgroundColor = color;
    }
}

function pickColor() {
    return colors[Math.floor(Math.random() * colors.length)];
}

function generateRandomColor(num) {
    let arr = [];
    for(let i = 0; i < num; i++) {
        arr.push(randomColor());
    }
    return arr;
}

function randomColor() {
    //pick r g b from 0 - 255
    let r = Math.floor(Math.random()*256);
    let g = Math.floor(Math.random()*256);
    let b = Math.floor(Math.random()*256);
    return "rgb("+ r + ", " + g + ", " + b +")";
}