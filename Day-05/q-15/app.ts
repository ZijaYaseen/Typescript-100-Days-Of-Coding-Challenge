/*Q15 - Changing Guest List: You just heard that one of your guests can’t make the dinner, so you need to send out a new set of invitations. You’ll have to think of someone else to invite:

Start with your program from Exercise 14. Add a print statement at the end of your program stating the name of the guest who can’t make it.

Modify your list, replacing the name of the guest who can’t make it with the name of the new person you are inviting.

Print a second set of invitation messages, one for each person who is still in your list.*/

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




