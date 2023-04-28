let element = document.getElementById("div");
element.addEventListener("click", colorClick);

function colorClick(event){
    let color = event.target.getAttribute("data-color");
    console.log(color)
    event.target.style.backgroundColor = color

}