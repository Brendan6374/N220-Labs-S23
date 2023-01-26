// create the canuvs a define x
function setup(){
    createCanvas(800, 600)
    frameRate(60)
    x = 200
}

function draw(){
    console.log(frameCount)
}
// the circle constrution and color change 
function draw(){
    background(78, 80, 82)
    fill(45, 224, 25)
    circle(x, 300, 30)

    x += 5

    if(x > 500){
        x = 200 
    }
}
//having a if statment resets the circle at the end of the cycle 
