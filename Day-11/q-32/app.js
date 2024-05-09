/*Q32 */
var currentUsers = ["Sameer", "Ali", "Ahmed", "Anus", "Hamza"];
var newUsers = ["alI", "Umair", "Hamis", "AHmEd", "hamza"];
newUsers.forEach(function (newUser) {
    if (currentUsers.some(function (currentUser) { return currentUser.toLowerCase() === newUser.toLowerCase(); })) {
        console.log("Username ".concat(newUser, " is already taken."));
    }
    else {
        console.log("Usename ".concat(newUser, " is available."));
    }
});
