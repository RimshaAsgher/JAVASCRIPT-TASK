// 27 . Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.
// • If the alien is green, print a message that the player earned 5 points.
// • If the alien is yellow, print a message that the player earned 10 points.
// • If the alien is red, print a message that the player earned 15 points.
// • Write three versions of this program, making sure each message is printed for the appropriate color alien.

console.log("color List: red,green,yellow");

let alienColors = "red";
if (alienColors == 'green'){
    console.log(" You earned just 5 points ");
}
else if  (alienColors == 'yellow'){
    console.log(" You earned just 10 points ");
}
else if  (alienColors== 'red'){
    console.log(" You earned just 15 points ");
}
else{
    console.log(" please choose the colour from the list.. ")
}