/*Q27 - Alien Colors #3: Turn your if-else chain from Exercise 5-4 into an if-else chain.

If the alien is green, print a message that the player earned 5 points.

If the alien is yellow, print a message that the player earned 10 points.

If the alien is red, print a message that the player earned 15 points.

Write three versions of this program, making sure each message is printed for the appropriate color alien. */

let greenAlien = "green";
if(greenAlien === "green"){
    console.log("The player just earned 5 points.");  
}
else if(greenAlien === "yellow"){
    console.log("The player just earned 10 points.");  
}
else{
    console.log("The player just earned 15 points.")
}

let redAlien = "red";
if(redAlien === "green"){
    console.log("The player just earned 5 points.");  
}
else if(redAlien === "red"){
    console.log("The player just earned 10 points.");  
}
else{
    console.log("The player just earned 15 points.")
}

let yellowAlien = "yellow";
if(yellowAlien === "green"){
    console.log("The player just earned 5 points.");  
}
else if(yellowAlien === "red"){
    console.log("The player just earned 10 points.");  
}
else{
    console.log("The player just earned 15 points.")
}

