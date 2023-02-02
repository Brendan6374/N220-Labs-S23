function setup(){
    createCanvas(800, 600)
}

function draw(){
    translate(100, 100)
    circle(res.x, res.y, 10)
    
}
//circle told to make in instructions 

//not sure if this is suppose to be here.. or if its done right at all 
function polarPoint(r){

    x = r * Math.sin(mouseX)
    y = r * Math.cos(mouseX)
    createVector(x,y)
}
