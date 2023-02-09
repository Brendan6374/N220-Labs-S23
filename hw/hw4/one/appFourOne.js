
//define object(TBD) {Write parameters here}
let someShape = {
    height: 23,
    width: 23,
    color: "#FF0000",
    x: 25,
    y: 25,
    r: 25,
}

function setup(){
    createCanvas(800, 600)

}
//that wil become one singlur object

function draw(){
    drawShape(someShape)
}

function drawShape(b){
    
   circle(b.x + 275, b.y + 275, b.r + 375,)
    circle(b.x + 175, b.y + 275, b.r + 50,)
    circle(b.x + 375, b.y + 275, b.r + 50,)
    rect(b.x + 125, b.y + 325, b.width + 275, b.height ,)



}

