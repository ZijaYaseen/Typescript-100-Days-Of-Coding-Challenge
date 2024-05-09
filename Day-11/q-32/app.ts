/*Q32 */

let currentUsers = ["Sameer", "Ali", "Ahmed","Anus", "Hamza"];
let newUsers = ["alI", "Umair", "Hamis", "AHmEd", "hamza"]

newUsers.forEach(newUser=>{
    if(currentUsers.some(currentUser => currentUser.toLowerCase() === newUser.toLowerCase())){
        console.log(`Username ${newUser} is already taken.`);   
    }
    else{
        console.log(`Usename ${newUser} is available.`);
        
    }
})