/*Q16 - More Guests: You just found a bigger dinner table, so now more space is available. Think of three more guests to invite to dinner:

Start with your program from Exercise 15. Add a print statement to the end of your program informing people that you found a bigger dinner table.

Add one new guest to the beginning of your array.

Add one new guest to the middle of your array. • Use append() to add one new guest to the end of your list.

Print a new set of invitation messages, one for each person in your list.*/
var guests = ["Zabrina", "Musfirah", "Subhan"];
for (var i = 0; i < guests.length; i++) {
    console.log("".concat(guests[i], ", would you like to join me for dinner?"));
}
console.log("\n"); // for new line
console.log("".concat(guests[2], " can't make it to the dinner."));
guests[2] = "Musab";
console.log("\n"); // for new line;
for (var i = 0; i < guests.length; i++) {
    console.log("".concat(guests[i], ", would you like to join me for dinner?"));
}
console.log("\nGreat News! I found a bigger dinner table>");
// Add one new guest to the beginning of your array.
guests.unshift("Sabeen");
// Add one new guest to the middle of your array.
//  splice : 1(indexOfArray), 2(kitne delete krne hen),3(delete ki jga kia add krna hen)
guests.splice(guests.length / 2, 0, "Khazina");
// add one new guest to the end of your list
guests.push("Hamis");
console.log("\n");
for (var i = 0; i < guests.length; i++) {
    console.log("".concat(guests[i], ", would you like to join me for dinner?"));
}
