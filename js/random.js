// Collect input from a user
const lowstring = prompt("Pick your low number");
const highstring = prompt("Pick your high number");

// Convert the input to a number
lownumber = parseInt(lowstring);
highnumber = parseInt(highstring);

if (lownumber && highnumber) //test that both are numbers
  if (lownumber < highnumber) { //test that lownumber is lower

    // Use Math.random() and the user's number to generate a random number
    const multiplyer = highnumber - lownumber + 1;
    const randNum = Math.floor(Math.random()* multiplyer)+ lownumber;
    document.getElementById("output").innerHTML = `${randNum} is a random number between ${lownumber} and ${highnumber}!`;
  } else {
    document.getElementById("output").innerHTML = `The first number must be lower than the second number, try again`;
  }
else {
  document.getElementById("output").innerHTML = `You must provide two numbers`;
}
  

