/*Q24 - More Conditional Tests: You don’t have to limit the number of tests you create to 10. If you want to try more comparisons, write more tests. Have at least one True and one False result for each of the following:

Tests for equality and inequality with strings

Tests using the lower case function

Numerical tests involving equality and inequality, greater than and less than, greater than or equal to, and less than or equal to

Tests using "and" and "or" operators

Test whether an item is in a array

Test whether an item is not in a array */

// Tests for equality and inequality with strings:
let fruit1 = "apple";
let fruit2 = "mango";
console.log(fruit1 !== fruit2); // true
console.log(fruit1 === fruit2); //false
console.log("--------------------");

// Tests using the lower case function:
let myName = "Zija Yaseen";
console.log(myName.toLowerCase() === "zija yaseen"); // true
console.log(myName.toLowerCase() === "Zija Yaseen"); // false
console.log("--------------------");

// Numerical tests:
let numb = 10;
console.log(numb == 10); // true
console.log(numb !== 10); // false
console.log(numb > 6); // true
console.log(numb > 10); // false
console.log(numb < 80); // true
console.log(numb < 6); // false
console.log(numb >= 9); // true
console.log(numb >= 20); // false
console.log(numb <= 10); // true
console.log(numb <= 9); // false
console.log("--------------------");

// Tests using "and" and "or" operators:
let num = 1; let num2 = 2;
console.log(num !== num2 && num == 1); // true
console.log(num == num2 && num2 == 2); // false
console.log(num == num2 || num2 == 2); // true;
console.log(num == num2 || num2 == 1) //false
console.log("--------------------");

// Test whether an item is in a array:
let numbers = [1,2,3,4,5]
console.log(numbers.includes(5)); //true
console.log(numbers.includes(0)); //false
console.log("--------------------");

// Test whether an item is not in a array:
console.log(numbers.includes(4));//true
console.log(numbers.includes(2)); //true



















