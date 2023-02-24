let divText= document.getElementById("count")

for(let i = 0; i < 26; i++){
    console.log(i)
     

    if(i%3 == 0 ){
        divText.innerHTML += "Beep"
    }

    if(i%5 == 0 ){
        divText.innerHTML += "Bop"

    }

    if(i%3 && i%5){
        divText.innerHTML += "BeepBop"
    }

   
}

