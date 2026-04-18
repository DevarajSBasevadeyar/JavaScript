//loops - use to iterate piece of code
for(let i=1;i<=5;i++){
    console.log(i)
}

let i=1
while(i<=5){
    console.log(i)
    i++;
}

//Guessing game

let favMovie = "Avatar"

let guess = prompt("guess my favourite movie")
while((guess != favMovie) && (guess != "quit")){
    guess = prompt("wrong guess. Please try again")
}

if(guess == favMovie){
    console.log("congrats!!")
}
else{
    console.log("you quit")
}