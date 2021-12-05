canvas=document.getElementById("myCanvas");
ctx=canvas.getContext("2d");

var roverWidth = 75;
var roverHeight = 50;
var roverX = 400;
var roverY = 275
var canvasBackground="marsSurface.PNG";
var roverPng ="rover.png" ; 

function add(){
    marsSurface=new Image();
    marsSurface.onload=uploadBackground();
    marsSurface.src=canvasBackground;

    roverImage= new Image();
    roverImage.onload=uploadRover();
    roverImage.src=roverPng;
}

function uploadBackground(){
    ctx.drawImage(marsSurface, 0,0, canvas.width, canvas.height);
}

function uploadRover() {
    ctx.drawImage(roverImage, roverX,roverY, roverWidth, roverHeight);
}

window.addEventListener("keydown",Key_down);

function Key_down(e){
    keyPressed=e.keyCode;
    console.log(keyPressed);

    if(keyPressed=='37'){
        left();
        console.log("left");
    }

    if(keyPressed == '38'){
        up();
        console.log("up");
    }

    if(keyPressed == '39'){
        right();
        console.log("right");
    }

    if(keyPressed == '40'){
        down();
        console.log("down");
    }
    
}

function left() {
    if (roverX>=0){
        roverX=roverX-10;
        console.log("Left pressed, X= "+roverX+ "Y= "+roverY);

        uploadBackground();
        uploadRover();
    }
}

function up() {
    if (roverY>=0){
        roverY=roverY-10;
        console.log("Up pressed,X= "+roverX+  "Y= "+roverY);

        uploadBackground();
        uploadRover();
    }
}

function right(){
    if(roverX<=750){
        roverX=roverX+10;
        console.log(" Right pressed , X= "+roverX+  "Y= "+roverY);

        uploadBackground();
        uploadRover();
    }
}

function down(){
    if(roverY<=500){
        roverY=roverY+10;
        console.log(" Down pressed , X= "+roverX+  "Y= "+roverY);

        uploadBackground();
        uploadRover();
    }
}