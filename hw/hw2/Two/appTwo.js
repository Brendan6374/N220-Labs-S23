function setup() {
    createCanvas(400, 300);
    x = mouseX
    y = mouseY
}
//connect the circle to the mouse 
function draw(){
      
    
    circle (mouseX, mouseY, 20)
    fill(224, 46, 43)
 if (mouseX < 200) {
    fill(52, 67, 235)
}

}
// connect the mouse to the if statment so that it changes every time it crosses 