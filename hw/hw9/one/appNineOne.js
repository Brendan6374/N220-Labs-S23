let numInput = document.getElementById("number") 
let buttonthing = document.getElementById("button")

function getValue(){
    console.log(numInput.value)
    let resultes = isDivisable(numInput.value) 
  
  
 let tfdiv = document.getElementById("div").innerHTML= resultes 
 console.log(resultes)
 
}

function isDivisable(numInput){

 if(numInput % 7 == 0){
    return true;}

 return false;
}






