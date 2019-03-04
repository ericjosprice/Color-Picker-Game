var numCells = 6;
var colors = generateRandomColor(numCells);
var cells = document.querySelectorAll("td");
var pickedColor = pickColor();
var pickedColorDisplay = document.querySelector("#RGB");
var feedBack = document.getElementById("message");
var reset = document.getElementById("reset");
var easy = document.getElementById("easy");
var hard = document.getElementById("hard");


pickedColorDisplay.textContent=pickedColor;

for(i=0; i<colors.length; i++){
    cells[i].style.backgroundColor=colors[i];
    cells[i].addEventListener("click", function(){
        var clicked = this.style.backgroundColor;
        if( clicked === pickedColor){
            feedBack.textContent = "YOU GOT IT!!!";
            reset.textContent = "PLAY AGAIN?"
            return changeColor();
        } else{
        feedBack.textContent = "Try again, Idiot!!!";
        //this.classList.toggle("clicked"); why didnt this work? does element.style have a higher specificity?
        this.style.backgroundColor="black";
        }
    });
};

function changeColor(){
    for(i=0; i<cells.length; i++){
        cells[i].style.backgroundColor=pickedColor;
        document.getElementById("jumbotron").style.backgroundColor=pickedColor;
    };
};

//pick random color from array of colors
function pickColor(){
    var random = Math.floor(Math.random()*colors.length);
    return colors[random];
};

function generateRandomColor(num){
    var arr = [];
    for(i=0; i<num;i++){
        arr.push(generateRandomRGB());
    }
    return arr;
}

function generateRandomRGB(){
    var r = Math.floor(Math.random()*256);
    var g = Math.floor(Math.random()*256);
    var b = Math.floor(Math.random()*256);
return "rgb(" + r + ", " + g + ", " + b + ")";    
}



reset.addEventListener("click", function(){
    //remove play again if playing for more than 1 time
    reset.textContent="NEW COLORS";
    // generate new colors
    colors = generateRandomColor(numCells);
    //select random color from array
    pickedColor = pickColor();
    //update the jumbotron
    pickedColorDisplay.textContent=pickedColor;
    document.getElementById("jumbotron").style.backgroundColor="lightblue";
    //remove message span
    feedBack.textContent="";
    //update cells with newely generated colors
    for(i=0; i<colors.length; i++){
        cells[i].style.backgroundColor=colors[i];
    }
});

easy.addEventListener("click", function(){
    // generate new colors
    numCells = 3;
    colors = generateRandomColor(numCells);
    //select random color from array
    pickedColor = pickColor();
    //update the jumbotron
    pickedColorDisplay.textContent=pickedColor;
    //remove message span
    feedBack.textContent="";
    // toggle selected class for difficulty easy and hard
    hard.classList.remove("selected");
    easy.classList.add("selected");
    //update cells with newely generated colors
    for(i=0; i<cells.length; i++){
        if(colors[i]){
            cells[i].style.backgroundColor=colors[i];
        }
        else{
            cells[i].style.display="none";
        }
        
    }
});

hard.addEventListener("click", function(){
    // generate new colors
    numCells=6;
    colors = generateRandomColor(numCells);
    //select random color from array
    pickedColor = pickColor();
    //update the jumbotron
    pickedColorDisplay.textContent=pickedColor;
    //remove message span
    feedBack.textContent="";
    // toggle difficulty button class
    hard.classList.add("selected");
    easy.classList.remove("selected");
    //update cells with newely generated colors
    for(i=0; i<cells.length; i++){
        cells[i].style.backgroundColor=colors[i];
        cells[i].style.display="table-cell";
    }
});

