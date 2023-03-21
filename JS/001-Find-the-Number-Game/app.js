const form = document.querySelector("form");
const randomNumber =  randomNumberGeneretor();
const limit = document.getElementById("limit");
let  guessCount = 1;

let lowest = 1
let highest = 100
const display = function (){
    limit.innerText = `Enter a number and win! \n (between ${lowest} and ${highest})`;
}

display()
console.log("Random Number: ", randomNumber);
document.getElementById("guessNumber").focus();


document.getElementById("button").onclick = function() {      

    // number guessed by user     
    const guessNumber = +document.getElementById("guessNumber").value;
    console.log("guessNumber: ", guessNumber);

    if( randomNumber == guessNumber) {    

        limit.innerText =`CONGRATULATIONS!!! \n YOU GUESSED IT RIGHT IN ${guessCount} GUESSES`;
    }
    else if(randomNumber < guessNumber) {    
        guessCount++;
        if(guessNumber > randomNumber && guessNumber < highest){
            highest = +guessNumber;
            display()
        }
        alert(`ENTER A SMALLER NUMBER`);
    }
    else if (randomNumber > guessNumber) {
        guessCount++;
        if(guessNumber > lowest){
            lowest = +guessNumber;
            display()
        }
        alert(`ENTER A GREATER NUMBER`)
    }
    else if (isNaN(guessNumber) ) {
        alert("PLEASE ENTER A VALID NUMBER!")
    }

    form.reset();
    document.getElementById("guessNumber").focus();

 }

 function randomNumberGeneretor(){
    return Math.floor(Math.random() * 100 + 1);
 }

 