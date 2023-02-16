//create square div in HTML//
let divSquare = document.getElementById("square")


let square = {
    x: 100,
    y: 100,    
}


console.log("square")

divSquare.style.width = square.x + "px"
divSquare.style.height = square.y + "px" 
divSquare.style.backgroundColor = "#00ff00"


square.onclick = function() {
    divSquare.style.width = square.x * 1.1 + "px"
    divSquare.style.height = square.y * 1.1 +"px"   


}
/// size square in java///
///Sqaure will more then likely have to be object with variable height///




//add clicking interaction... by 10%

