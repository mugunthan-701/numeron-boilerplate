// Iteration 2: Generate 2 random number and display it on the screen
var num1=document.getElementById("number1")
var num2=document.getElementById("number2")
function random(){
  return  Math.floor(Math.random() * 10) + 1;
}

randomNumber()

function randomNumber(){
num4=random()
num3=random()
num1.innerText=num3 
num2.innerText=num4
}
// Iteration 3: Make the options button functional
var buttons= document.getElementById("buttons")
var score=0;
buttons.addEventListener("click",(e)=>{
    numberCompare(e.target.id)
})
function numberCompare(comp){
    if((comp=="greater-than" && num3>num4 )|| (comp =="equal-to"&&num3==num4) || (comp=="lesser-than" && num3<num4)){
        time=5
        score++
        randomNumber()
    }
    else{
        gameover()
    }
}
function gameover(){
    window.location.href="gameover.html"
    localStorage.setItem("score",score)
    
}
// Iteration 4: Build a timer for the game
var timer=document.getElementById("timer")
let time=5;

function startTimer(){
      timer.innerText =time;
      time--
      if(time<=0){
        gameover()
      }
  }
setInterval(startTimer, 1000); 


