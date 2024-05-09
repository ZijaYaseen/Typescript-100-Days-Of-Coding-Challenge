/*Q 30: */

let employees : string[] = ["userName1","userName2", "Admin", "userName3","userName4"];

employees.forEach(employee =>{
    if(employee === "Admin"){
        console.log(`Hello admin, would you like to see a status report?`);
    }

    else{
        console.log(`Hello ${employee}, thank you for logging in again.`);
    }
})