// Iteration 5: Store the player score and display it on the game over screen
var playagain = document.getElementById("play-again-button")
function open(){
    window.location.href="game.html"
    }
playagain.onclick=open;
var score=document.getElementById("score-board")
score.innerText=localStorage.getItem("score");

