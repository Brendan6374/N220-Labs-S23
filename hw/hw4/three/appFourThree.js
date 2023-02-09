function setup(){
    createCanvas(800, 600)
    frameRate(60)
    x = 200
}

function draw(){
    console.log(frameCount)
}
// the circle constrution and color change 

let someCir = {
     
    x: 200,
    y: 300,
    color: (45, 224, 25), 
    r: 30,
}

function draw(){
    background(78, 80, 82) 
    drawCir(someCir)
    
 
}

function drawCir(b){
    circle(b.x, b.y, b.r)
    b.x += 5

    if(b.x > 500){
        b.x = 200
    }
}





 
