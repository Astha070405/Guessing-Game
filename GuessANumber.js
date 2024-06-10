let input = document.getElementById('guess');
let btn = document.getElementById('guessButton');
let wrng = document.querySelector('.wrng');
let guesses = document.getElementById('guesses');

let answer = Math.floor(Math.random()*100)+1;
console.log(answer);
let numGuesses = 0;
btn.addEventListener("click",()=>{
    guessesNumber();

})
function guessesNumber(){
    if(input.value<1 || input.value>100 || isNaN(input.value) ){
        wrng.innerHTML = "Enter a number between 1 to 100. ";
    }
    else {
       numGuesses++;
       guesses.innerHTML = "No. of guesses :" +  numGuesses;
    
    if(input.value>answer){
        wrng.innerHTML="You guessed a larger number."  
        input.value="";          
    }
    else if(input.value<answer){
        wrng.innerHTML="You guessed a smaller number.";
        input.value=""

    }
    else {
        wrng.innerHTML ="You guessed right!";
   
        setTimeout(()=>{
            resetGame();
        },1000
              )
    
}
}
}

function resetGame(){
    numGuesses = 0;
    answer = Math.floor(Math.random()*100)+1;
   
    input.value = "";
    guesses.innerHTML = "No. of guesses:0";
    wrng.innerHTML = "";


}