let buttonRed=document.getElementById("button1");
let buttonYellow=document.getElementById("button2");
let buttonGreen=document.getElementById("button3");
let lightRed=document.getElementById("button4");
let lightYellow=document.getElementById("button5");
let lightGreen=document.getElementById("button6");
function redlightAction(){
    buttonRed.style.backgroundColor="red";
    lightRed.style.backgroundColor="red";
    buttonGreen.style.backgroundColor="black";
    lightYellow.style.backgroundColor="black";
    buttonYellow.style.backgroundColor="black";
    lightGreen.style.backgroundColor="black";
}
function yellowlightAction(){
    buttonRed.style.backgroundColor="black";
    lightRed.style.backgroundColor="black";
    buttonGreen.style.backgroundColor="black";
    lightYellow.style.backgroundColor="yellow";
    buttonYellow.style.backgroundColor="yellow";
    lightGreen.style.backgroundColor="black";
}
function greenlightAction(){
    buttonRed.style.backgroundColor="black";
    lightRed.style.backgroundColor="black";
    buttonGreen.style.backgroundColor="green";
    lightYellow.style.backgroundColor="black";
    buttonYellow.style.backgroundColor="black";
    lightGreen.style.backgroundColor="green";
}