#! /usr/bin/env node
import inquirer from "inquirer";
console.log(`GREET`);
const unplannednumber = Math.floor(Math.random()*8 + 2);
const answer = await inquirer.prompt([
{
  name : "guessednumber",
  type :"number",
  message:"LET GUESS A NUMBER FROM 1 TO 8!",

},
]);

if(answer.guessednumber === unplannednumber){
console.log("Bravo! correct Answer");
}
else{
    console.log("Sorry! wrong answer");
}

