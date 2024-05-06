/*Q17 - Shrinking Guest List: You just found out that your new dinner table won’t arrive in time for the dinner, and you have space for only two guests.

Start with your program from Exercise 16. Add a new line that prints a message saying that you can invite only two people for dinner.

Remove guests from your list one at a time until only two names remain in your list. Each time you pop a name from your list, print a message to that person letting them know you’re sorry you can’t invite them to dinner.

Print a message to each of the two people still on your list, letting them know they’re still invited.

Remove the last two names from your list, so you have an empty list. Print your list to make sure you actually have an empty list at the end of your program.*/

let guests : string[] = ["Zabrina", "Musfirah", "Subhan"]

for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, would you like to join me for dinner?`);
}

console.log("\n"); // for new line

console.log(`${guests[2]} can't make it to the dinner.`);

guests[2] = "Musab";

console.log("\n"); // for new line;

for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, would you like to join me for dinner?`);
}

console.log("\nGreat News! I found a bigger dinner table.\n");

// Add one new guest to the beginning of your array.
guests.unshift("Sabeen");

// Add one new guest to the middle of your array.
//  splice : 1(start array numbers counting not index), 2(kitne delete krne hen),3(delete ki jga kia add krna hen)
guests.splice(guests.length / 2 , 0 , "Khazina");

// add one new guest to the end of your list
guests.push("Hamis");

for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, would you like to join me for dinner?`);
}

console.log("\nUnfortunately, I can only invite two people for dinner.\n");

// remove all names except 2 names
let popedNames = guests.splice(2,guests.length);
for (let i = 0; i < popedNames.length; i++) {
    console.log(`Sorry ${popedNames[i]}, I can't invite you to dinner.`);   
}

for (let i = 0; i < guests.length; i++) {
    console.log(`${guests[i]}, You'r still invited to dinner.`);
}

guests.splice(0,guests.length)
console.log(guests);









