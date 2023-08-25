// Iteration 1: Make the Play button functional.
var button =document.getElementById("play-button")

// Description: When the Play button is clicked the game page should be displayed.
function open(){
window.location.href="game.html"
}
button.onclick=open;