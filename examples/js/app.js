let r = 5;

function setup() {
    createCanvas(800, 600)
}

// make it so circle doesnt grow above 50 pixels

function draw(){

    circle(mouseX, mouseY, r);

    if(mouseIsPressed){
        r ++
    }
}