/*Q3 - Name Cases: Store a person’s name in a variable, and then print that person’s name in lowercase, uppercase,
and titlecase.*/
var fullName = "zIjA mUhaMMad yAseeN";
// LoweCase:
console.log(fullName.toLowerCase());
// UpperCase:
console.log(fullName.toUpperCase());
// TitleCase:
function titleCase(name) {
    var splitNames = name.split(" ");
    var finalString = "";
    for (var i = 0; i < splitNames.length; i++) {
        var splitName = splitNames[i];
        var toUpperCase = splitName.charAt(0).toUpperCase();
        var toLowerCase = splitName.slice(1).toLowerCase();
        finalString += "".concat(toUpperCase).concat(toLowerCase, " ");
    }
    return finalString;
}
var toTitleCase = titleCase(fullName);
console.log(toTitleCase);
