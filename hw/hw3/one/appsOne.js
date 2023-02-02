function setup() {
    createCanvas(800, 600)
    background(20, 227, 213)
   
}

function draw(){
    car(100, 100)
    car(0, 0)
    car(-100, -100) 
    car(mouseX - 300, mouseY - 200)
}
//maps out the cars and the connect on to the mouse 


function car(x, y){
    fill(0)
    stroke(0)
    circle(x + 550, y + 400, 50)
    circle(x + 250, y + 400, 50)


    fill(227, 20, 20)
    stroke(227, 20, 20)
    rect(x + 200, y + 200, 400, 200)


    fill(193, 215, 217)
    stroke(193, 215, 217)
    rect(x + 550, y + 250, 50, 50)
}
//holds the could that makes the car... The variables are needed to move the indivdual images

 





