let numString = document.getElementById("number")
let resDiv = document.getElementById("div")
let resDivTwo = document.getElementById("divTwo")
let sum = 0



function getValue(){
    
    let myArray = numString.value.split(",")
    console.log(numString.value)
    for (let i = 0; i < myArray.length; i++){
        let itemAtIndex = Number(myArray[i])
        sum += itemAtIndex
        console.log(itemAtIndex) 
    }

    let average = sum / myArray.length 

  console.log(sum)
  console.log(average)
 
  let resDiv = document.getElementById("div").innerHTML= sum
  let resDivTwo = document.getElementById("divTwo").innerHTML= average
 
 numString.value = " "

}