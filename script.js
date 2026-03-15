'use strict';
let correctNumber = Math.floor(Math.random()*20)+1
let score = 20
const displayMessage = function(message){
     document.querySelector('.message').textContent = message 
}

console.log(correctNumber)

document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value)
    
    if(guess===correctNumber){
     document.body.style.backgroundColor= "green"
     displayMessage( "Correct Answer... Play Again?")
     document.querySelector('.number').textContent = correctNumber
     if(score>Number(document.querySelector('.highscore').textContent)){
         document.querySelector('.highscore').textContent = score
     }
     document.querySelector('.highscore').textContent = score
     
    }
    else if(!guess && score>1){
        displayMessage("Invalid Input")
        score-- 
        document.querySelector('.score').textContent = score

    }
    else if(guess!=correctNumber){
    if(score>1){
        displayMessage(`${guess > correctNumber ? "Lower" : "Higher"}`)
        score--
        document.querySelector('.score').textContent = score
    }
    else{
        document.body.style.backgroundColor= "darkred"
        displayMessage( "Game Lost Click on Try Again to Restart...")
        document.querySelector('.score').textContent = 0
        
    }
    }
})