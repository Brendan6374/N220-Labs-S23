var memoryArr = ['1','1','2','2','3','3','4','4','5','5','6','6','7','7','8','8'];

var memoryValues = [];

var memoryCardIds = [];

var tiles_flipped = 0;


Array.prototype.memory_shuffle = function(){

var i = this.length, j, temp;

while(--i > 0){

j = Math.floor(Math.random() * (i+1));

temp = this[j];

this[j] = this[i];

this[i] = temp;

}

}



function flipCard(cardTile, val){debugger;

if(cardTile.innerHTML == "" && memoryValues.length < 2){

cardTile.innerHTML = val;

if(memoryValues.length == 0){

memoryValues.push(val);

memoryCardIds.push(cardTile.id);

} else if(memoryValues.length == 1){

memoryValues.push(val);

memoryCardIds.push(cardTile.id);

if(memoryValues[0] == memoryValues[1]){

tiles_flipped += 2;



memoryValues = [];

memoryCardIds = [];



if(tiles_flipped == memoryArr.length){

alert("You Won! Congrats!!!");

}

} else {

function flip2Back(){



var tile_1 = document.getElementById(memoryCardIds[0]);

var tile_2 = document.getElementById(memoryCardIds[1]);

tile_1.innerHTML = "";

tile_2.innerHTML = "";



memoryValues = [];

memoryCardIds = [];

}

setTimeout(flip2Back, 700);

}

}

}

}


function LoadElements()

{

memoryArr.memory_shuffle();

var card = document.querySelectorAll(".card");


for(var i = 0; i < card.length; i++) {

card[i].setAttribute("id", "card_" + i + "_" + memoryArr[i]);

}

}



document.addEventListener('DOMContentLoaded', function() {

document.body.addEventListener('click', function ( event ) {

if(event.srcElement.className == 'card' ) {

var idElement = event.srcElement.id.split("_");

flipCard(event.srcElement, idElement[2]);

};

});

});