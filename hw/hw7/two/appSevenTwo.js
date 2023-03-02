 var playerScore = 0;
 var computerScore = 0;
 var moves = 0;

 function playGame(){
    var rockBtn = document.querySelector('.rock');
    var paperBtn = document.querySelector('.paper');
    var scissorBtn = document.querySelector('.scissor');
    var guardBtn = document.querySelector('.guard');
    var playerOptions = [rockBtn,paperBtn,scissorBtn,guardBtn];
    var computerOptions = ['rock','paper','scissors']
    
  
    playerOptions.forEach(option => {
       option.addEventListener('click',function(){
          var movesLeft = document.getElementById('movesleft');
          moves++;
          movesLeft.innerText = "Moves Left: "+(10-moves);

          var choiceNumber = Math.floor(Math.random()*3);
          var computerChoice = computerOptions[choiceNumber];

         
          winner(this.innerText,computerChoice)
          
       
          if(moves == 10){
             gameOver(playerOptions,movesLeft);
          }
       })
    })
    
 }


 function winner(player,computer) {
    var result = document.querySelector('.result');
    var playerScoreBoard = document.querySelector('.p-count');
    var computerScoreBoard = document.querySelector('.c-count');
    player = player.toLowerCase();
    computer = computer.toLowerCase();
    if(player === computer){
       result.textContent = 'Tie'
    }
    else if(player == 'rock'){
       if(computer == 'paper'){
             result.textContent = 'Computer Won';
             computerScore++;
             computerScoreBoard.textContent = computerScore;

       }else{
             result.textContent = 'Player Won'
             playerScore++;
             playerScoreBoard.textContent = playerScore;
       }
    }
    else if(player == 'scissors'){
       if(computer == 'rock'){
             result.textContent = 'Computer Won';
             computerScore++;
             computerScoreBoard.textContent = computerScore;
       }else{
             result.textContent = 'Player Won';
             playerScore++;
             playerScoreBoard.textContent = playerScore;
       }
    }
    else if(player == 'paper'){
       if(computer == 'scissors'){
             result.textContent = 'Computer Won';
             computerScore++;
             computerScoreBoard.textContent = computerScore;
       }else{
             result.textContent = 'Player Won';
             playerScore++;
             playerScoreBoard.textContent = playerScore;
       }
    }
    else if(player == 'guard'){
       
       result.textContent = 'Player Used Guard';
       playerScore = playerScore-0.5;
       playerScoreBoard.textContent = playerScore;
    }
 }

 function gameOver(playerOptions,movesLeft){
    var chooseMove = document.querySelector('.move');
    var result = document.querySelector('.result');
    var reloadBtn = document.getElementById('reload');

   
    playerOptions.forEach(option => {
       option.style.display = 'none';
    })
    chooseMove.innerText = 'Game Over'
    movesLeft.style.display = 'none';

   
    if(playerScore > computerScore){
       result.innerText = 'You Won'
       result.style.color = '#308D46';
    }
    else if(playerScore < computerScore){
       result.innerText = 'You Lost';
       result.style.color = 'red';
    }
    else{
       result.innerText = 'Tie';
       result.style.color = 'grey'
    }

    
    reloadBtn.innerText = 'Restart';
    reloadBtn.style.display = 'grid'
    reloadBtn.addEventListener('click',() => {
       window.location.reload();
    })
 }

 playGame();