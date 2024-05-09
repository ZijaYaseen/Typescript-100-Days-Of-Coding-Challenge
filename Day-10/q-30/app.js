/*Q 30: */
var employees = ["userName1", "userName2", "Admin", "userName3", "userName4"];
employees.forEach(function (employee) {
    if (employee === "Admin") {
        console.log("Hello admin, would you like to see a status report?");
    }
    else {
        console.log("Hello ".concat(employee, ", thank you for logging in again."));
    }
});
