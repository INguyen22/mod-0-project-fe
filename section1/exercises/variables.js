/*
In the exercises below, write your own code where indicated
to achieve the desired result.

A couple examples that are already completed. Your task is to complete
any remaining prompt.

When navigated to the root of this project directory, you should be able to run this
file from your terminal with the command `node section1/exercises/variables.js`
*/


// EXAMPLE: Write code below to assign Harry Potter's name to a variable and
// log that variable to the console:
var name = "Harry Potter";
console.log(name);

// EXAMPLE: Write code below to add 2 to the variable `students` and
// log the result:
var enrolledStudents = 22 + 2;
console.log(enrolledStudents);

// YOU DO:
// Write code below to save the string 'Harry Potter must not return to Hogwarts!'
// log that variable to the console.
var warning = 'Harry Potter must not return to Hogwarts!';
console.log(warning);

// YOU DO:
// Declare three variables, named `firstName`, `isHungry` and `numberOfPets`.
  // Store the appropriate data types in each.
// log all three variables to the console.
var firstName = "ivy";
var isHungry = true;
var numberOfPets = 3;
console.log(firstName);
console.log(isHungry);
console.log(numberOfPets);

// IN WORDS:
// How did you decide to use the data type you did for each of the three variables above?
  // Explain.

/*While I could've stored the three elements into one varible. it's not ideal
and not used in the real world. Therefore, i decided to use different data types
for each element. "isHungry" is a 'yes' or 'no' question therefore i declared a
variable of "isHungry" and assigned it to the Boolean of true. "numberOfPets"
is a quantity question so i declard the variable name of
"numberOfPets" and assigned it to the Number of 3. "firstName" was declared as
a variable and assigned to the String of "ivy", because it's niether yes or no
question or a number.*/

// YOU DO:
// Re-assign the values to the three variables from the previous challenge to different
  // values (but same data type).
// log all three variables to the console.
firstName = "yvi";
isHungry = false;
numberOfPets = 4;
console.log(firstName);
console.log(isHungry);
console.log(numberOfPets);

// YOU DO:
// Using the variables below, log the total number of snacks to the console:
var healthySnacks = 6;
var junkFoodSnacks = 8;
console.log(healthySnacks + junkFoodSnacks);

//-------------------
// FINAL CHECK
//-------------------

// Did you run this file in your terminal to make sure everything printed out to the console
// as you would expect?
