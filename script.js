'use strict';
let correctNumber = Math.floor(Math.random()*20)+1
let score = 20


console.log(correctNumber)

document.querySelector('.check').addEventListener('click', function(){
    let guess = Number(document.querySelector('.guess').value)
    
    if(guess===correctNumber){
     document.body.style.backgroundColor= "green"
     document.querySelector('.message').textContent = "Correct Answer... Play Again?"
     document.querySelector('.number').textContent = correctNumber
     if(score>Number(document.querySelector('.highscore').textContent)){
         document.querySelector('.highscore').textContent = score
     }
     document.querySelector('.highscore').textContent = score
     
    }
    else if(guess>correctNumber){
    if(score>1){
     score--
     document.querySelector('.message').textContent = "Lower"
     document.querySelector('.score').textContent = score
     
     

    }
    else{
        document.body.style.backgroundColor= "darkred"
        document.querySelector('.message').textContent = "Game Lost Click on Try Again to Restart..."
        document.querySelector('.score').textContent = 0
       

    }
    }
    else if(guess<correctNumber){
    if(score>1){
     score --
     document.querySelector('.message').textContent = "Higher" 
     document.querySelector('.score').textContent = score
    
    }
    else{
        document.body.style.backgroundColor= "darkred"
        document.querySelector('.message').textContent = "Game Lost Click on Try Again to Restart"
        document.querySelector('.score').textContent = 0
    }
    }
})