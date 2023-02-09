// create rect. more then likely make an object over hard code

function setup(){
    createCanvas(800, 600)
    background("#ff4589")

}

let rectShape1 = {
    height: 300,
    width: 50,
    x: 100,
    y: 200,
    
}
// not sure about the refect, yet. 
function draw(){
    drawRect(rectShape1)
}

function drawRect(b){
    background(254, 89, 75)
    rect(b.x, b.y, b.width, b.height,)
    
    rect(b.x + 400, b.y, b.width, b.height,)
    if (keyIsDown(UP_ARROW)) {
        b.y += 10 
      }
}









//add draw function code